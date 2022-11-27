

function seatBackgroundYellow() {
    let element = document.getElementById("box")
    element.style.backgroundColor = "yellow"
}

function seatBackgroundAzul() {
    document.getElementById("box").style.backgroundColor = "blue"
}

function seatBackgroundVermelho() {
    let element = document.getElementById("box")
    element.style.backgroundColor = "red"
}

function seatBackgroundPreto() {
    let element = document.getElementById("box")
    element.style.backgroundColor = "black"
}



//--------- Letras -------------

function seatVermelho() {
    let element = document.getElementById("h1")
    element.classList.add("red-color")
}

function seatPreto() {
    let element = document.getElementById("h1")
    element.classList.add("black-color")
}

function seatAzul() {
    let element = document.getElementById("h1")
    element.classList.add("blue-color")
}

function seatAmarelo() {
    let element = document.getElementById("h1")
    element.classList.add("yellow-color")
}


//--------- Remoção -------------

function seatTransparent() {
    let element = document.getElementById("box")
    element.style.backgroundColor = "transparent"
}


function seatRemove() {
    let element = document.getElementById("h1")
    element.classList.remove("red-color", "yellow-color", "black-color", "blue-color" )
}
