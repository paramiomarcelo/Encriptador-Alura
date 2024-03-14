const textarea = document.getElementById("texto");
const btnEncriptar = document.getElementById("boton-encriptar");
const btnDescriptar = document.getElementById("boton-desencriptar");
const cajaResultado = document.getElementById("resultado");
const primerDiv = document.getElementById("info");
const btnCopiar = document.querySelector(".boton-copiar");

function encriptar(texto) {
    let textoEncriptado = texto
        .replace("e", "enter")
        .replace("i", "imes")
        .replace("a", "ai")
        .replace("o", "ober")
        .replace("u", "ufat");
    return textoEncriptado;
}

function desencriptar(textoEncriptado) {
    let textoDesencriptado = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

btnEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    const texto = textarea.value;
    if (!texto.match(/^[a-z]+$/)) {
        alert("Solo se permiten letras minúsculas y sin tildes");
        return;
    }
    if (texto.length === 0) {
        alert("No se puede encriptar un texto vacío");
        return;
    }
    const textoEncriptado = encriptar(texto);

    primerDiv.classList.add("ocultar");
    cajaResultado.innerHTML = textoEncriptado;
    btnCopiar.classList.remove("ocultar");
    cajaResultado.classList.remove("ocultar");
});

btnDescriptar.addEventListener("click", (e) => {
    e.preventDefault();
    const texto = textarea.value;
    if (!texto.match(/^[a-z]+$/)) {
        alert("Solo se permiten letras minúsculas y sin tildes");
        return;
    }
    if (texto.length === 0) {
        alert("No se puede desencriptar un texto vacío");
        return;
    }
    const textoDesencriptado = desencriptar(texto);

    primerDiv.classList.add("ocultar");
    cajaResultado.innerHTML = textoDesencriptado;
    btnCopiar.classList.remove("ocultar");
    cajaResultado.classList.remove("ocultar");
});

btnCopiar.addEventListener("click", () => {
    const texto = cajaResultado.textContent;
    navigator.clipboard
        .writeText(texto)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch((error) => {
            console.error("Error al intentar copiar el texto: ", error);
        });
});
