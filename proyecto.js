const ingresaTexto = document.querySelector('.ingresar__texto');
const encriptaTexto = document.querySelector('.lugar_de_la_frase');

const mensajirijillo= document.querySelector('.mensaje');
const mensajeDesencriptado = document.querySelector('.mensaje_desencripta');
const resultadoDesencriptado = document.querySelector('.desencripta_frase');

const botonEncripta = document.querySelector('.boton__encriptar');
const botonDesencripta = document.querySelector('boton__desencriptar');
const botonCopear = document.querySelector('.boton__encriptar_copiar');

const mezclar = /^[a-z0-9 ]*$/;

let mensajito = true;
let resultadito = false;

function muestraMensajito() {
  if(mensajito) {
    mensajeDesencriptado.style.display = "flex";
  } else {
    mensajeDesencriptado.style.display = "none";
  }
}


function muestraResultadito() {
  if(resultadito) {
    resultadoDesencriptado.style.display = "flex";
  } else {
    resultadoDesencriptado.style.display = "none";
  }
}

function encriptar() {
  if (!mezclar.test(ingresaTexto.value) || ingresaTexto.value.length === 0) {
    mensajirijillo.style.display = "flex";

    mensajito = true;
    muestraMensajito()
    resultadito = false;
    muestraResultadito();
  } else {
    mensajirijillo.style.display = "none";

    let encriptaFrase1 = textInput.value.replaceAll("e", "enter");                                      
    let encriptaFrase2 = textInput.value.replaceAll("i", "imes");
    let encriptaFrase3 = textInput.value.replaceAll("a", "ai");
    let encriptaFrase4 = textInput.value.replaceAll("o", "ober");
    let encriptaFrase5 = textInput.value.replaceAll("u", "ufat");

    encriptaTexto.value = encriptaFrase1
    encriptaTexto.value = encriptaFrase2
    encriptaTexto.value = encriptaFrase3
    encriptaTexto.value = encriptaFrase4
    encriptaTexto.value = encriptaFrase5

    mensajito = false;
    muestraMensajito()
    resultadito = true;
    muestraResultadito();

    ingresaTexto.value = '';
  }
}
botonEncripta.addEventListener('click', encriptar);

function desencriptar() {
  let desencriptaFrase1 = ingresaTexto.value.replaceAll("ufat", "u");                                       
  let desencriptaFrase2 = ingresaTexto.value.replaceAll("ober", "o");
  let desencriptaFrase3 = ingresaTexto.value.replaceAll("ai", "a");
  let desencriptaFrase4 = ingresaTexto.value.replaceAll("imes", "i");
  let desencriptaFrase5 = ingresaTexto.value.replaceAll("enter", "e");
  encriptaTexto.value = desencriptaFrase1;
  encriptaTexto.value = desencriptaFrase2;
  encriptaTexto.value = desencriptaFrase3;
  encriptaTexto.value = desencriptaFrase4;
  encriptaTexto.value = desencriptaFrase5;
 
  mensajito = false;
  muestraMensajito();
  resultadito = true;
  muestraResultadito();

  ingresaTexto.value = '';
}
botonDesencripta.addEventListener('click', desencriptar);

function copea() {
  encriptaTexto.select();
  document.execCommand("copy");
  encriptaTexto.setAttribute('disabled', true);
  encriptaTexto.value = '';
  alert("se copio el mensaje")
}
botonCopear.addEventListener('click', copea);