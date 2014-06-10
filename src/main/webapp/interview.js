angular.module('plunker', ['ui.bootstrap']);

var circles = [];

var TabsDemoCtrl = function ($scope, $modal, $log) {


    var Circle = function(x, y, radius) {
          this.left = x - radius;
          this.top = y - radius;
          this.right = x + radius;
          this.bottom = y + radius;
    };

    var draw = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext) {
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = fillcolor;
      context.fill();
      context.lineWidth = linewidth;
      context.strokeStyle = strokestyle;
      context.stroke();

      context.fillStyle = fontcolor;
      context.textAlign = textalign;
      context.font = fonttype;

      context.fillText(filltext, x, y);
    };

    var drawCircle = function (context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext, circles) {
        draw(context, x, y, fillcolor, radius, linewidth, strokestyle, fontcolor, textalign, fonttype, filltext);
        var circle = new Circle(x, y, radius);
        circles.push(circle);
    };

    var canvas = document.getElementById('mycanvas');
    canvas.width = screen.width;
    var context = canvas.getContext('2d');

    drawCircle(context, 300, canvas.height / 2, "green", 40, 5, "#003300", "white", "center", "bold 32px Arial", "1", circles);
    drawCircle(context, 600, canvas.height / 3, "blue", 50, 5, "#003300", "white", "center", "bold 32px Arial", "2", circles);


    //drawShape();
};

// function myMouse(event) {
////        var clickedX = event.pageX - this.offsetLeft;
//           //        var clickedY = event.pageY - this.offsetTop;
//           //
//           //        for (var i = 0; i < circles.length; i++) {
//           //            if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
//           //                alert ('clicked number ' + (i + 1));
//           //            }
//           //        }
//
//
//    }

function myMouse(event) {
    console.log("x:" event.x + event.y);
}


function drawShape(){

    var canvas = document.getElementById('mycanvas');
    canvas.width = screen.width;

    // Make sure we don't execute when canvas isn't supported
    if (canvas.getContext){

            //number of interview procedure steps
            var steps = 5;
            // use getContext to use the canvas for drawing
            var ctx = canvas.getContext('2d');

            // Filled triangle
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#333';
            ctx.moveTo(30,30);
            ctx.lineTo(screen.width - 30,30);
            console.log(screen.width);
            ctx.closePath();
            ctx.stroke();


            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#333';

            var oneStepWidth = (screen.width - 30)/steps;

            for(var i = 1; i < steps; i++){
                ctx.moveTo(30 + i*oneStepWidth,30);
                ctx.lineTo(30 + i*oneStepWidth,40);
                ctx.lineTo(30 + i*oneStepWidth,20);
            }

            ctx.closePath();
            ctx.stroke();

    } else {
    alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
}