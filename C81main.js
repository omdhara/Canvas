var canvas = document.getElementById("MyCanvas");
var pen_color = "red";
var a = canvas.getContext('2d')

/*
canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokesStyle = pen_color;
canvas.getContext("2d").lineWidth = 2.3;
canvas.getContext("2d").arc(500, 300, 40, 0, 2*Math.PI);
//mathematical value of PI = 180 degrees
canvas.getContext('2d').stroke();
*/

a.beginPath();
a.strokeStyle = 'blue';
a.lineWidth = 4.1;
a.arc(250, 210, 40, 0, 2*Math.PI);
a.stroke();

a.beginPath();
a.strokeStyle = 'black';
a.lineWidth = 4.1;
a.arc(350, 210, 40, 0, 2*Math.PI);
a.stroke();

a.beginPath();
a.strokeStyle = 'red';
a.lineWidth = 4.1;
a.arc(450, 210, 40, 0, 2*Math.PI);
a.stroke();

a.beginPath();
a.strokeStyle = 'yellow';
a.lineWidth = 4.1;
a.arc(300, 260, 40, 0, 2*Math.PI);
a.stroke();

a.beginPath();
a.strokeStyle = 'green';
a.lineWidth = 4.1;
a.arc(400, 260, 40, 0, 2*Math.PI);
a.stroke();