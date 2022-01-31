function botonCopiar(){
    const copyText = document.getElementById("salidaTexto");
    copyText.select();
    document.execCommand("Copy");
    document.getElementById("salidaTexto").value=" ";
}

function botonPegar(){
    document.getElementById("entradaTexto").value = document.getElementById("salidaTexto").value;
    document.getElementById("salidaTexto").value=" ";
}

function botonEncriptar(){
        const encriptar = document.getElementById('entradaTexto').value;
        const encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        document.getElementById("salidaTexto").value = encriptado
        document.getElementById("entradaTexto").value=" ";
}


function botonDesencriptar(){
        const desencriptar= document.getElementById ("entradaTexto").value;
        const desencriptado= desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
        document.getElementById("salidaTexto").value = desencriptado
        document.getElementById("entradaTexto").value=" ";
}