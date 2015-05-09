'use strict';

/**
 * @ngdoc directive
 * @name cartApp.directive:quagga
 * @description
 * # quagga
 */
angular.module('cartApp')
  .directive('quagga', function () {
    var config = {
      inputStream: {
        type : "LiveStream",
        constraints: {
          width: 640,
          height: 480,
          facing: "environment" // or user
        }
      },
      locator: {
        patchSize: "medium",
        halfSample: true
      },
      numOfWorkers: 4,
      decoder: {
        // drawBoundingBox: true,
        // showFrequency: true,
        // drawScanline: true,
        // showPattern: true,
        readers : ["ean_reader"]
      },
      locate: true
    };

    Quagga.onProcessed(function(result) {
      var drawingCtx = Quagga.canvas.ctx.overlay,
          drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
          if (result.boxes) {
              drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
              result.boxes.filter(function (box) {
                  return box !== result.box;
              }).forEach(function (box) {
                  Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: "green", lineWidth: 2});
              });
          }

          if (result.box) {
              Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: "#00F", lineWidth: 2});
          }

          if (result.codeResult && result.codeResult.code) {
              Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
          }
      }
    });

    Quagga.onDetected(console.log);

    return {
      template: '<div id="interactive" class="viewport"></div>',
      restrict: 'E',
      scope: {
          code: '='
      },
      link: function postLink(scope, element, attrs) {
        Quagga.init(config, function() {
          Quagga.start();
        });
      }
    };
  });
