boxes = document.querySelectorAll("div")

let counter = 0


function handleClick(event) {
    // debugger
    if(event.target.style.backgroundColor === "") {
        event.target.classList.toggle("red")
    } 
    
    if(document.querySelectorAll(".red").length === 3)
        boxes.forEach(box => {
            box.classList.remove("red")
            box.classList.add("green")
        })
    }





boxes.forEach(box => {
    box.addEventListener("click", handleClick)
})
