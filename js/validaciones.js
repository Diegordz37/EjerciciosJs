'use strict'
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

window.addEventListener('load',() => {

	document.getElementById('fechaInicioTramite').disabled ="disabled";
	document.getElementById('fechaFinalTramite').disabled ="disabled";
	document.getElementById('boton').disabled ="disabled";

	document.getElementById('fechaNacimiento').addEventListener('change', () => {
		var fechaNacimiento = document.getElementById('fechaNacimiento').value;
		var f = new Date();
		var fechaConvertAct = (f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate());
		var yearFechaNac = fechaNacimiento.split("-");
		var yearActual = fechaConvertAct.split("-");
		var mayorEdad = Number(yearActual[0]) - 18;
		if (Number(yearFechaNac[0]) > mayorEdad) {
			alert("No eres mayor de edad para tramitar.");
			document.getElementById('fechaInicioTramite').disabled ="disabled";
			document.getElementById('fechaFinalTramite').disabled ="disabled";
			document.getElementById('boton').disabled ="disabled";
		} 
		else {
			alert("Eres mayor de edad, puedes tramitar.");
			document.getElementById('fechaInicioTramite').removeAttribute('disabled');
			document.getElementById('fechaFinalTramite').removeAttribute('disabled');
			document.getElementById('boton').removeAttribute('disabled');
		}
	});

	document.getElementById('boton').addEventListener('click', () => {
		
	});
});

/*
Primer Nombre
Segundo Nombre
Primer Apellido
Segundo Apellido
Dirección
email
Fecha de nacimiento
fecha de inicio de tramite
fecha de culminación de tramite

el formulario tiene que validar que los campos estén llenos, la dirección de correo electrónico sea valido (milogin@dominio.com), te que la fecha de nacimiento sea válida para una persona mayor de edad y que la fecha de inicio de tramite sea menor a la fecha de culminación.

Para mostrar el mensaje que sea a través de un mensaje del navegador y que se pueda visualizar con un estilo diferente.
*/