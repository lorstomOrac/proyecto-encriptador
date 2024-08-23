const ingresaTexto = document.querySelector('#texto__ingresado');
const encriptaTexto = document.querySelector('#lugar_de_la_frase');

const mensajirijillo= document.querySelector('.mensaje');
const mensajeDesencriptado = document.querySelector('.mensaje_desencripta');
const resultadoDesencriptado = document.querySelector('.desencripta_frase');

const botonEncripta = document.querySelector('#boton__encriptar');
const botonDesencripta = document.querySelector('#boton__desencriptar');
const botonCopear = document.querySelector('#boton__encriptar_copiar');

const mezclar = /^[a-z0-9 ]*$/;

let mensajito = true;
let resultadito = false;

function muestraMensajito() {
  if(mensajes) {
    mensajeDesencriptado.style.display = "flex";
  } else {
    mensajeDesencriptado.style.display = "none";
  }
}


function muestraResultadito() {
  if(resultados) {
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
    resultado = false;
    muestraResultadito();
  } else {
    mensajirijillo.style.display = "none";

    let encriptaFrase1 = textInput.value.
                                          replaceAll("e", "enter").
                                          replaceAll("i", "imes").
                                          replaceAll("a", "ai").
                                          replaceAll("o", "ober").
                                          replaceAll("u", "ufat");

    encriptaTexto.value = encriptaFrase1

    mensajes = false;
    muestraMensajito()
    resultados = true;
    muestraResultadito();

    ingresaTexto.value = '';
  }
}
botonEncripta.addEventListener('click', encriptar);

function desencriptar() {
  let desencriptaFrase1 = ingresaTexto.value.
                                        replaceAll("ufat", "u").
                                        replaceAll("ober", "o").
                                        replaceAll("ai", "a").
                                        replaceAll("imes", "i").
                                        replaceAll("enter", "e");
  encriptaTexto.value = desencriptaFrase1;

  mensajes = false;
  muestraMensajito();
  resultados = true;
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