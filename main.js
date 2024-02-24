const ficha = document.getElementById("ficha");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");

let letra = /^[a-zA-Z]{3}_[0-9]{5}$/;

const bordeVerde = function (campo) {
  if (campo.classList.contains("borde-rojo")) {
    campo.classList.remove("borde-rojo");
  }
  campo.classList.add("borde-verde");
}

const bordeRojo = function (campo) {
  if (campo.classList.contains("borde-verde")) {
    campo.classList.remove("borde-verde");
  }
  campo.classList.add("borde-rojo");
}

const validarCampo = function (campo) {
  (letra.test(campo.value)) ? bordeVerde(campo) : bordeRojo(campo)
  // if (letra.test(campo.value)) {
  //   if (campo.classList.contains("borde-rojo")) {
  //     campo.classList.remove("borde-rojo");
  //   }
  //   campo.classList.add("borde-verde");
  // } else {
  //   if (campo.classList.contains("borde-verde")) {
  //     campo.classList.remove("borde-verde");
  //   }
  //   campo.classList.add("borde-rojo");
  // }
}

ficha.addEventListener('blur', () => {
  validarCampo(ficha);
})

// function validarSoloNumeros(campo) {
//   if (campo.value.length < 4 || isNaN(campo.value)) {
//     if (campo.classList.contains("borde-verde")) {
//       campo.classList.remove("borde-verde");
//     }
//     campo.classList.add("borde-rojo");
//   } else {
//     if (campo.classList.contains("borde-rojo")) {
//       campo.classList.remove("borde-rojo");
//     }
//     campo.classList.add("borde-verde");
//   }
// }

// function validarSoloLetras(campo) {
//   if (campo.value.length < 4 || !/^[a-zA-Z]+$/.test(campo.value)) {
//     if (campo.classList.contains("borde-verde")) {
//       campo.classList.remove("borde-verde");
//     }
//     campo.classList.add("borde-rojo");
//   } else {
//     if (campo.classList.contains("borde-rojo")) {
//       campo.classList.remove("borde-rojo");
//     }
//     campo.classList.add("borde-verde");
//   }
// }

// function validarCorreo(campo) {
//   if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(campo.value)) {
//     if (campo.classList.contains("borde-verde")) {
//       campo.classList.remove("borde-verde");
//     }
//     campo.classList.add("borde-rojo");
//   } else {
//     if (campo.classList.contains("borde-rojo")) {
//       campo.classList.remove("borde-rojo");
//     }
//     campo.classList.add("borde-verde");
//   }
// }


// ficha.addEventListener('blur', () => {
//   validarSoloNumeros(ficha);
// })
// nombre.addEventListener('blur', () => {
//   validarSoloLetras(nombre);
// })
// apellidos.addEventListener('blur', () => {
//   validarSoloLetras(apellidos);
// })
// correo.addEventListener('blur', () => {
//   validarCorreo(correo);
// })
// telefono.addEventListener('blur', () => {
//   validarSoloNumeros(telefono);
// })


