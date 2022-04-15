canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var MouseEvent="empty";
var Last_position_of_x, Last_position_of_y;
var color="teal";
var Width_of_Line= 2;
canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e){
MouseEvent="mouseDown";
color=document.getElementById("color").value;
Width_of_Line=document.getElementById("Width_of_line").value;
}
canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e){
MouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
MouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if(MouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=Width_of_Line;
console.log("x="+ Last_position_of_x+"y="+ Last_position_of_y);
ctx.moveTo(Last_position_of_x,Last_position_of_y);
console.log("x="+ current_position_of_mouse_x+ "y="+ current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();

}
Last_position_of_x= current_position_of_mouse_x;
Last_position_of_y= current_position_of_mouse_y;





}





