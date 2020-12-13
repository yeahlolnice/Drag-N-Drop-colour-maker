let draggable = document.querySelectorAll(".color");

draggable.addEventListener("dragstart", function(event) {
    draggable = event.target;
    console.log("Dragging")
}, false);


// for (let div of orangeDivs) {
//     div.addEventListener("dragover", function(event) {
//         event.preventDefault();
//     }, false);

//     div.addEventListener('drop', function(event) {
//         div.appendChild(draggable)
//         if (div.id == "to") {
//             console.log("changing color")
//             draggable.style = "background-color:green;"
//         }else {
//             draggable.style = "background-color:red;"
//         }
//     })
// }