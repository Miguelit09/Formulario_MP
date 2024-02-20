const ficha = document.getElementById("ficha");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");


function validarSoloNumeros(campo) {
  if (campo.value.length < 4 || isNaN(campo.value)) {
    if (campo.classList.contains("borde-verde")) {
      campo.classList.remove("borde-verde");
    }
    campo.classList.add("borde-rojo");
  } else {
    if (campo.classList.contains("borde-rojo")) {
      campo.classList.remove("borde-rojo");
    }
    campo.classList.add("borde-verde");
  }
}

function validarSoloLetras(campo) {
  if (campo.value.length < 4 || !/^[a-zA-Z]+$/.test(campo.value)) {
    if (campo.classList.contains("borde-verde")) {
      campo.classList.remove("borde-verde");
    }
    campo.classList.add("borde-rojo");
  } else {
    if (campo.classList.contains("borde-rojo")) {
      campo.classList.remove("borde-rojo");
    }
    campo.classList.add("borde-verde");
  }
}

function validarCorreo(campo) {
  if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(campo.value)) {
    if (campo.classList.contains("borde-verde")) {
      campo.classList.remove("borde-verde");
    }
    campo.classList.add("borde-rojo");
  } else {
    if (campo.classList.contains("borde-rojo")) {
      campo.classList.remove("borde-rojo");
    }
    campo.classList.add("borde-verde");
  }
}


ficha.addEventListener('blur', () => {
  validarSoloNumeros(ficha);
})
nombre.addEventListener('blur', () => {
  validarSoloLetras(nombre);
})
apellidos.addEventListener('blur', () => {
  validarSoloLetras(apellidos);
})
correo.addEventListener('blur', () => {
  validarCorreo(correo);
})
telefono.addEventListener('blur', () => {
  validarSoloNumeros(telefono);
})



// for (let i = 0; i < campos.length; i++) {
//   let validar = ""
//   let campo = campos[i];
//   if (i === 0 || i === 4) {
//     validar = "numero";
//   } else if (i === 3) {
//     validar = "correo";
//   } else {
//     validar = "letra";
//   }
//   campo.addEventListener('blur', () => {
//     if (validar === "numero") {
//       validarSoloNumeros(campo);
//     } else if (validar === "correo") {
//       validarCorreo(campo);
//     } else {
//       validarSoloLetras(campo)
//     }
//     // if (ficha.value.length < 4 || isNaN(ficha.value)) {
//     //   if (ficha.classList.contains("borde-verde")) {
//     //     ficha.classList.remove("borde-verde");
//     //   }
//     //   ficha.classList.add("borde-rojo");
//     // } else {
//     //   if (ficha.classList.contains("borde-rojo")) {
//     //     ficha.classList.remove("borde-rojo");
//     //   }
//     //   ficha.classList.add("borde-verde");
//     // }
//   })
// }

