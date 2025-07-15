const ramos = [
  { nombre: "Introducción al Derecho", requisitos: [] },
  { nombre: "Historia del Derecho", requisitos: [] },
  { nombre: "Fundamentos de Economía", requisitos: [] },
  { nombre: "Expresión Oral y Escrita", requisitos: [] },
  { nombre: "Taller de Estrategias de Aprendizaje", requisitos: [] },
  { nombre: "Inglés I", requisitos: [] },

  { nombre: "Derecho Romano", requisitos: ["Introducción al Derecho"] },
  { nombre: "Derecho Constitucional I", requisitos: ["Introducción al Derecho"] },
  { nombre: "Teoría del Estado", requisitos: ["Historia del Derecho"] },
  { nombre: "Microeconomía", requisitos: ["Fundamentos de Economía"] },
  { nombre: "Técnicas de la Comunicación Escrita", requisitos: ["Expresión Oral y Escrita"] },
  { nombre: "Inglés II", requisitos: ["Inglés I"] },

  { nombre: "Derecho Constitucional II", requisitos: ["Derecho Constitucional I"] },
  { nombre: "Derecho Civil I", requisitos: ["Derecho Romano"] },
  { nombre: "Derecho Procesal I", requisitos: ["Derecho Romano"] },
  { nombre: "Macroeconomía", requisitos: ["Microeconomía"] },
  { nombre: "Taller de Liderazgo y Trabajo en Equipo", requisitos: [] },
  { nombre: "Inglés III", requisitos: ["Inglés II"] },

  { nombre: "Derecho Civil II", requisitos: ["Derecho Civil I"] },
  { nombre: "Derecho Procesal II", requisitos: ["Derecho Procesal I"] },
  { nombre: "Derecho Penal I", requisitos: ["Derecho Civil I"] },
  { nombre: "Filosofía del Derecho", requisitos: ["Derecho Constitucional II"] },
  { nombre: "Inglés IV", requisitos: ["Inglés III"] },
  { nombre: "Electivo I", requisitos: [] },

  { nombre: "Derecho Civil III", requisitos: ["Derecho Civil II"] },
  { nombre: "Derecho Procesal III", requisitos: ["Derecho Procesal II"] },
  { nombre: "Derecho Penal II", requisitos: ["Derecho Penal I"] },
  { nombre: "Derecho Administrativo I", requisitos: ["Derecho Constitucional II"] },
  { nombre: "Derecho Internacional Público", requisitos: ["Derecho Constitucional II"] },
  { nombre: "Electivo II", requisitos: [] },

  { nombre: "Derecho Civil IV", requisitos: ["Derecho Civil III"] },
  { nombre: "Derecho Procesal IV", requisitos: ["Derecho Procesal III"] },
  { nombre: "Derecho Penal III", requisitos: ["Derecho Penal II"] },
  { nombre: "Derecho Administrativo II", requisitos: ["Derecho Administrativo I"] },
  { nombre: "Derecho del Trabajo I", requisitos: ["Derecho Civil III"] },
  { nombre: "Electivo III", requisitos: [] },

  { nombre: "Derecho Civil V", requisitos: ["Derecho Civil IV"] },
  { nombre: "Derecho Procesal V", requisitos: ["Derecho Procesal IV"] },
  { nombre: "Derecho Penal IV", requisitos: ["Derecho Penal III"] },
  { nombre: "Derecho del Trabajo II", requisitos: ["Derecho del Trabajo I"] },
  { nombre: "Clínica Jurídica I", requisitos: [] },
  { nombre: "Electivo IV", requisitos: [] },

  { nombre: "Derecho Civil VI", requisitos: ["Derecho Civil V"] },
  { nombre: "Derecho Procesal VI", requisitos: ["Derecho Procesal V"] },
  { nombre: "Derecho Comercial I", requisitos: ["Derecho Civil IV"] },
  { nombre: "Derecho Tributario", requisitos: ["Derecho Civil IV"] },
  { nombre: "Clínica Jurídica II", requisitos: ["Clínica Jurídica I"] },
  { nombre: "Electivo V", requisitos: [] },

  { nombre: "Derecho Civil VII", requisitos: ["Derecho Civil VI"] },
  { nombre: "Derecho Comercial II", requisitos: ["Derecho Comercial I"] },
  { nombre: "Derecho Internacional Privado", requisitos: ["Derecho Internacional Público"] },
  { nombre: "Clínica Jurídica III", requisitos: ["Clínica Jurídica II"] },
  { nombre: "Seminario de Investigación Jurídica", requisitos: [] },

  { nombre: "Seminario de Título", requisitos: [] },
  { nombre: "Práctica Profesional", requisitos: [] }
];

const estadoRamos = {};

function crearMalla() {
  const malla = document.getElementById("malla");
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.textContent = ramo.nombre;
    div.onclick = () => aprobarRamo(ramo.nombre);
    malla.appendChild(div);
    estadoRamos[ramo.nombre] = { aprobado: false, elemento: div };
  });
  actualizarRamos();
}

function actualizarRamos() {
  ramos.forEach(ramo => {
    const requisitos = ramo.requisitos;
    const puedeDesbloquear = requisitos.every(req => estadoRamos[req]?.aprobado);
    const div = estadoRamos[ramo.nombre].elemento;
    if (!estadoRamos[ramo.nombre].aprobado) {
      if (puedeDesbloquear) {
        div.classList.remove("bloqueado");
      } else {
        div.classList.add("bloqueado");
      }
    }
  });
}

function aprobarRamo(nombre) {
  const estado = estadoRamos[nombre];
  if (!estado.aprobado) {
    estado.aprobado = true;
    estado.elemento.classList.add("aprobado");
    estado.elemento.classList.remove("bloqueado");
    actualizarRamos();
  }
}

crearMalla();
