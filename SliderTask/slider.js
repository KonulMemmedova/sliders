
let divs = document.querySelectorAll(".slide");
let left = document.querySelector(".icon.left");
let right = document.querySelector(".icon.right");

let parent = document.querySelector(".slids");

left.addEventListener("click", function () {
    Slide("left");
})

right.addEventListener("click", function () {
    Slide("right");
})

let index=0;
function Slide(direction) {
    console.log(parent.style.left)
    if (direction == "right") {
        index++;
    }
    else {
        index--;
    }

    parent.style.left=index*190+"px";
}