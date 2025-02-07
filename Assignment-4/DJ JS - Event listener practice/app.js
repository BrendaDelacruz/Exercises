var box = document.getElementById("black");
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "blue";
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "black";
});

box.addEventListener("mousedown", () => {
    box.style.backgroundColor = "red";
})

box.addEventListener("mouseup", () => {
    box.style.backgroundColor = "yellow";
})

box.addEventListener("dblclick", () => {
    box.style.backgroundColor = "green";
})

document.addEventListener("wheel", () => {
    box.style.backgroundColor = "orange";
})

box.addEventListener("keydown", (r) => {
    e.target.style.backgroundColor = red;  
});



