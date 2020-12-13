let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let yellow = document.querySelector("#yellow");

let first = document.querySelector("#first")
let second = document.querySelector("#second")
let result = document.querySelector("#result")

let colors = document.querySelectorAll(".color")


for (var color of colors ) {
    color.addEventListener("dragstart", function(event) {
        color = event.target;
        console.log(color)
    }, false);
}


let colorDivs = document.querySelectorAll(".color-holder");

for (let div of colorDivs) {
    div.addEventListener("dragover", function(event) {
        event.preventDefault();
    }, false);

    div.addEventListener('drop', function(event) {
        if (div.id != "result"){
            event.target.appendChild(color)
        }
    })
}



