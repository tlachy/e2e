angular.module('plunker', ['ui.bootstrap']);

var TabsDemoCtrl = function ($scope, $modal, $log) {
    drawInterviewLine(5);
};



function drawInterviewLine(numberOfSteps){

    var canvas = document.getElementById('mycanvas');
    canvas.width = screen.width;

    // Make sure we don't execute when canvas isn't supported
    if (canvas.getContext){

            //number of interview procedure steps
            var steps = numberOfSteps;
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