
function encriptar() {
    var encriptar  = document.getElementById('input-texto').value;
    var encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("imagen-derecha").style.display = 'none';
    document.getElementById("texto-derecha").style.display = 'none';
    document.getElementById("texto2").innerHTML = encriptado;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display= "inherit";

}

function desencriptar() {  
    var desencriptar  = document.getElementById('input-texto').value;
    var desencriptado = desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("texto2").value = desencriptado
}

function copiar(){
    var copyText = document.querySelector("#texto2");
    copyText.select();
    document.execCommand("cut");
    document.execCommand("copy");
    document.execCommand("paste");

}
