let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let yellow = document.querySelector("#yellow");

let first = document.querySelector("#first")
let second = document.querySelector("#second")
let result = document.querySelector("#result-color")

let colors = document.querySelectorAll(".color")


for (var color of colors ) {
    color.addEventListener("dragstart", function(event) {
        color = event.target;
    }, false);
}


let colorDivs = document.querySelectorAll(".color-holder");

for (let div of colorDivs) {
    div.addEventListener("dragover", function(event) {
        event.preventDefault();
    }, false);

    div.addEventListener('drop', function(event) {
        if (div.id != "result"){
            if (div.children.length == 1) {
                console.log(div)
                console.log(event.originalTarget)
                div.appendChild(color)
                div.previousElementSibling.appendChild(event.originalTarget)
            }else{
                event.target.appendChild(color)
                if (first.children.length == 1 && second.children.length == 1){
                    let firstColor = first.children[0].id
                    let secondColor = second.children[0].id
                    if (firstColor == "red" || secondColor == "red") {
                        if (firstColor == "blue" || secondColor == "blue") {
                            result.style = "background-color: purple;"
                        }else if (firstColor == "yellow" || secondColor == "yellow") {
                            result.style = "background-color: orange;"
                        }
                    }
                    if (firstColor == "blue" || secondColor == "blue") {
                        if (firstColor == "yellow" || secondColor == "yellow") {
                            result.style = "background-color: green;"
                        }
                    }
                }
            }
        }
    })
}



