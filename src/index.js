import cipher from './cipher.js';

// CIFRAR. Ingresado el texto, la usuaria debe hacer click en el botón Cifrar y se ejecutará esta acción
document.getElementById('btnCipher').addEventListener('click', () => {
  //variable para almacenar el mensaje a cifrar y se devuelva en mayúsculas
  const encryptText = (document.getElementById('mensajeVA').value).toUpperCase();
  //variable para almacenar el offset elegido por la usuaria (en HTML marcado como código de usuaria de VA)
  let offset = document.getElementById('key').value;
  offset = parseInt(offset);
  //se ingresa en el siguiente cuadro de texto el resultado de la función encode 
  document.getElementById('result1').innerHTML = (cipher.encode(offset, encryptText));

});
 
//DESCIFRAR. Ingresado el texto, la usuaria debe hacer click en el botón descifrar y se ejecutará esta acción
document.getElementById('btnDecipher').addEventListener('click',() => {
  const encryptText = (document.getElementById('mensajeVA').value).toUpperCase();
  let offset = document.getElementById('key').value;
  offset = parseInt(offset);
  document.getElementById('result1').innerHTML = cipher.decode(offset, encryptText);

});