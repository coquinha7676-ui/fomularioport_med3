let isLight = true

function trocarTema() {
    if (isLight === true) {
        document.getElementById("stylesheet").href = "css/estiloDark.css"
        isLight = false
        console.log("aaaaaa")
    }
    else if (isLight === false) {
        document.getElementById("stylesheet").href = "css/estilo.css"
        isLight = true
        console.log("aaaaaa")
    }
}