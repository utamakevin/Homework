const names = ["Akram Mansour", "Amal Prasad", "Aung Thiha", "Bilal Foggi", "Caleb Love", "Deepa Saini", "Deepali Patro", "Dimitri Nossar", "Elmira Alimohammadi", "Falko Kammel", "Frances Lozada", "Henry Rennel", "Iffath", "Jack Hamblin", "Kevin Utama", "Leon Yu", "Maria Valentina Gottardello", "Mike Tharratt", "Mindy Nam", "Mohammed T Ali", "Nikki Pham", "Stefanus", "Tales Pinto", "Tom Nicholas", "Whoopi Hutman"] 

button = document.querySelector("button")
p = document.querySelector("p")


function clickHandler() {
    let answer = names[Math.floor(Math.random() * (names.length))]
    p.textContent = answer
}

button.addEventListener("click", clickHandler)






