const ingresaTexto = document.querySelector('.ingresar__texto');
const encriptaTexto = document.querySelector('.lugar_de_la_frase');

const mensajirijillo= document.querySelector('.mensaje');
const mensajeDesencriptado = document.querySelector('.mensaje_desencripta');
const resultadoDesencriptado = document.querySelector('.desencripta_frase');

const botonEncripta = document.querySelector('.boton__encriptar');
const botonDesencripta = document.querySelector('.boton__desencriptar');
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
    document.querySelector('.mensaje_desencripta').style.display = "flex";
    mensajirijillo.style.display = "flex";
  } else {
    document.querySelector('.mensaje_desencripta').style.display = "flex";
    mensajirijillo.style.display = "none";
    let encriptaFrase = ingresaTexto.value
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");

    encriptaTexto.value = encriptaFrase;

    mensajito = false;
    muestraMensajito();
    resultadito = true;
    muestraResultadito();

    ingresaTexto.value = "";
  }
}
botonEncripta.addEventListener("click",encriptar,true);

function desencriptar() {
  let desencriptaFrase = ingresaTexto.value
    .replaceAll("ufat", "u")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("imes", "i")
    .replaceAll("enter", "e");

  encriptaTexto.value = desencriptaFrase;

  mensajito = false;
  muestraMensajito();
  resultadito = true;
  muestraResultadito();

  ingresaTexto.value = "";
}
botonDesencripta.addEventListener("click",desencriptar,true);

function copea() {
  encriptaTexto.select();
  document.execCommand('copy'); //copea el texto en el portapapeles

  encriptaTexto.setAttribute('disabled', true);
  encriptaTexto.value = "";
  alert("se copio el mensaje")
  setTimeout(() => {
    document.body.removeChild(tempInput);
     }, 200);

}
botonCopear.addEventListener("click",copea,true);

