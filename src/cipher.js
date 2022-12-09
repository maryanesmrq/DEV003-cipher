//ESTRICTAMENTE para funciones del cifrado
const cipher = {
  //función para codificar (encode)
  encode: (key, mensajeVA) => {

    if (typeof key !== "number" || typeof mensajeVA !== "string") {
      throw (TypeError());
    }
    //crear variable para guardar el resultado 
    let texto = "";
    let posicionCesar;
    //for para codificar el texto ingresado
    for (let i = 0; i < mensajeVA.length; i++) {
      //charCodeAt para recoger los valores ingresados y transformarlo
      let tradText;
      const posicionA = mensajeVA.charCodeAt(i);
      //condicional if para detectar si los valores están entre 65 y 90 en ASCII (A-Z)
      if (posicionA >= 65 && posicionA <= 90) {
        posicionCesar = (((posicionA - 65 + key) % 26) + 65);
        tradText = String.fromCharCode(posicionCesar);
      }
      if (posicionA === 32) {
        tradText = " ";
      }
      texto = texto + tradText;
    }
    return texto;
  },

  //onkeypress="return ((event.charCode >= 65 && event.charCode <= 90))"



  //Variable con la fórmula para codificar dependiendo del parseInt ingresado por la usuaria de VA
  //const code = (tradText - 65 + key) % 26 + 65;
  //result que concatena los valores del mensaje, pasa de código ASCII a abecedario regular con fromCharCode
  //texto += String.fromCharCode(code);
  //} else {
  //texto += String.fromCharCode(tradText);
  //}}

  //retorna mi resultado para imprimirse en el HTML
  //return texto;
  //},

  //Mismo procedimiento, diferencia en la declaración de la variable (el offset no avanza hacia la derecha, sino a la izquierda)
  decode: (key, mensajeVA) => {
    let texto = "";
    if (typeof key !== "number" || typeof mensajeVA !== "string") {
      throw (TypeError());
    }

    for (let i = 0; i < mensajeVA.length; i++) {
      let tradText = mensajeVA[i];
      const posicionA = mensajeVA.charCodeAt(i);

      if (posicionA >= 65 && posicionA <= 90) {
        tradText = String.fromCharCode(
          ((posicionA - 90 - key) % 26) + 90);
      }

      if (posicionA === 32) {
        tradText = " ";
      }
      texto = texto + tradText;
    }
    return texto;
  },
};
//Offset se desplaza hacia la izquierda para obtener valores originales (en abecedario, no ASCII)
//       const code = (tradText - 65 - key) % 26 + 65;
//       texto += String.fromCharCode(code);
//     } else {
//       texto += String.fromCharCode(tradText);
//     }
//   }
//   return texto;
// }
//};

export default cipher;
