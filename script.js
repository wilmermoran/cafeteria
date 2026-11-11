x
/* =====================================
   LISTAS DE NOMBRES
   COMPLETA ESTOS ARREGLOS
===================================== */

// Nombres de docentes de bachillerato
const docentes = [
    // "Nombre del docente 1",
    // "Nombre del docente 2",
    // "Nombre del docente 3"
];

// Nombres de los directivos
const directivos = [
    // "Nombre del directivo 1",
    // "Nombre del directivo 2"
];

// Nombres de los administrativos
const administrativos = [
    // "Nombre del administrativo 1",
    // "Nombre del administrativo 2"
];

// Nombres de los padres de familia
const padres = [
    // "Nombre del padre de familia 1",
    // "Nombre del padre de familia 2"
];


/* =====================================
   VARIABLES
===================================== */

let rolActual = "";

const pantallaInicio = document.getElementById("pantallaInicio");
const pantallaSeleccion = document.getElementById("pantallaSeleccion");
const pantallaFinal = document.getElementById("pantallaFinal");


/* =====================================
   CAMBIAR DE PANTALLA
===================================== */

function mostrarPantalla(pantalla) {

    pantallaInicio.classList.remove("activa");
    pantallaSeleccion.classList.remove("activa");
    pantallaFinal.classList.remove("activa");

    pantalla.classList.add("activa");

}


/* =====================================
   SELECCIONAR ROL
===================================== */

function seleccionarRol(rol) {

    rolActual = rol;

    mostrarPantalla(pantallaSeleccion);

    const titulo = document.getElementById("tituloRol");
    const texto = document.getElementById("textoRol");

    const opcionesEstudiantes =
        document.getElementById("opcionesEstudiantes");

    const opcionesNombres =
        document.getElementById("opcionesNombres");

    // Ocultar ambas opciones
    opcionesEstudiantes.classList.add("oculto");
    opcionesNombres.classList.add("oculto");

    // Limpiar datos anteriores
    document.getElementById("curso").value = "";
    document.getElementById("nombreEstudiante").value = "";

    // Si es estudiante
    if (rol === "estudiantes") {

        titulo.textContent = "Estudiantes de bachillerato";

        texto.textContent =
            "Selecciona tu curso y escribe tu nombre completo.";

        opcionesEstudiantes.classList.remove("oculto");

    }

    // Si pertenece a otro rol
    else {

        const listas = {
            docentes: docentes,
            directivos: directivos,
            administrativos: administrativos,
            padres: padres
        };

        const titulos = {
            docentes: "Docentes de bachillerato",
            directivos: "Directivos",
            administrativos: "Administrativos",
            padres: "Padres de familia"
        };

        titulo.textContent = titulos[rol];

        texto.textContent =
            "Selecciona tu nombre de la siguiente lista.";

        opcionesNombres.classList.remove("oculto");

        cargarNombres(listas[rol]);

    }

}


/* =====================================
   CARGAR NOMBRES EN LA LISTA
===================================== */

function cargarNombres(lista) {

    const selector = document.getElementById("listaNombres");

    selector.innerHTML =
        '<option value="">Selecciona tu nombre</option>';

    lista.forEach(nombre => {

        const opcion = document.createElement("option");

        opcion.value = nombre;
        opcion.textContent = nombre;

        selector.appendChild(opcion);

    });

}


/* =====================================
   CONTINUAR
===================================== */

function continuar() {

    let nombre = "";

    // Validación de estudiantes
    if (rolActual === "estudiantes") {

        const curso = document.getElementById("curso").value;

        nombre = document.getElementById("nombreEstudiante").value.trim();

        if (curso === "" || nombre === "") {

            alert("Por favor, completa tu curso y nombre.");

            return;

        }

        nombre += " - " + curso;

    }

    // Validación de los demás roles
    else {

        nombre = document.getElementById("listaNombres").value;

        if (nombre === "") {

            alert("Por favor, selecciona tu nombre.");

            return;

        }

    }

    // Mostrar bienvenida
    const mensaje = document.getElementById("mensajeFinal");

    mensaje.textContent =
        "Hola, " + nombre +
        ". Tu rol es " + rolActual +
        ". ¡Gracias por visitarnos!";

    mostrarPantalla(pantallaFinal);

}


/* =====================================
   VOLVER AL INICIO
===================================== */

function volverInicio() {

    rolActual = "";

    mostrarPantalla(pantallaInicio);

}
