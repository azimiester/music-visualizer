const scss = require("../static/style.scss");
import Null from "./tracking";
window.onload = function() {
  var video = document.getElementById("video");
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var tracker = new tracking.ObjectTracker("face");
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);
  tracking.track("#video", tracker, { camera: true });
  var base_image = new Image();
  base_image.src = "../static/shit.png";
  base_image.onload = function() {
    tracker.on("track", function(event) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      event.data.forEach(function(rect) {
        context.drawImage(base_image, rect.x, rect.y, rect.width, rect.height);
      });
    });
  };

  var gui = new dat.GUI();
  gui.add(tracker, "edgesDensity", 0.1, 0.5).step(0.01);
  gui.add(tracker, "initialScale", 1.0, 10.0).step(0.1);
  gui.add(tracker, "stepSize", 1, 5).step(0.1);
};
