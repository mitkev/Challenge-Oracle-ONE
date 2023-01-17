function encriptar(){
    var texto = document.getElementById("text-area").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("derecha").style.background = "white"
    document.getElementById("alerta-txt").style.display = "none";
    document.getElementById("text-area").style.width = '680px'
    document.getElementById("text-area").style.height = '288px'
    document.getElementById("text-area-encriptado").innerHTML = txtCifrado;
    document.getElementById("text-area-encriptado").style.width = '336px';
    document.getElementById("text-area-encriptado").style.height = '781px';
    document.getElementById("text-area-encriptado").style.marginTop = '-571px';
    document.getElementById("text-area-encriptado").style.marginLeft = '-15px';
    document.getElementById("text-area-encriptado").style.fontFamily = 'Inter';
    document.getElementById("text-area-encriptado").style.fontSize = '24px';
    document.getElementById("text-area-encriptado").style.fontWeight = '400';
    document.getElementById("text-area-encriptado").style.lineHeight = '150%';
    document.getElementById("text-area-encriptado").style.color = '#495057';
    document.getElementById("text-area-encriptado").style.textAlign = "left";
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("text-area").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("alerta-txt").style.display = "none";
    document.getElementById("text-area").style = "none";
    document.getElementById("text-area-encriptado").innerHTML = txtCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#text-area-encriptado");
    contenido.select();
    document.execCommand("copy");
    alert("Copiado");
}