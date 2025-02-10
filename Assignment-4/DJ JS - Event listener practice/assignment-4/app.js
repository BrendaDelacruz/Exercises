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

document.addEventListener('keydown', (event) => {
    var box = document.getElementById('black');

    if (event.key === 'b') {
        box.style.backgroundColor = 'blue';
    } else if (event.key === 'r') {
        box.style.backgroundColor = 'red';
    } else if (event.key === 'y') {
        box.style.backgroundColor = 'yellow';
    } else if (event.key === 'g') {
        box.style.backgroundColor = 'green';
    } else if (event.key === 'o') {
        box.style.backgroundColor = 'orange';
    }
});

