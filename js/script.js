// Modificamos las funciones para que se ajusten a los identificadores y eventos del HTML

document.addEventListener('DOMContentLoaded', function () {
    // Agregar eventos de clic a los botones del menú
    document.getElementById('menu_btn_inicio').addEventListener('click', function () {
        cargarContenido('inicio');
    });
    document.getElementById('menu_btn_cursos').addEventListener('click', function () {
        cargarContenido('cursos');
    });
    document.getElementById('menu_btn_servicios').addEventListener('click', function () {
        cargarContenido('servicios');
    });
    document.getElementById('menu_btn_institucion').addEventListener('click', function () {
        cargarContenido('institucion');
    });
    document.getElementById('menu_btn_asociaciones').addEventListener('click', function () {
        cargarContenido('asociados');
    });
    document.getElementById('menu_btn_contacto').addEventListener('click', function () {
        cargarContenido('contacto');
    });
});






document.addEventListener('DOMContentLoaded', function () {
    const menuBtns = document.querySelectorAll('.ciep_BTN');

    // Agregar eventos de clic a los botones del menú
    menuBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // Remover la clase de selección de todos los botones
            menuBtns.forEach(function (btn) {
                btn.classList.remove('selected');
            });

            // Agregar la clase de selección al botón clicado
            this.classList.add('selected');

            // Obtener el valor del botón clicado
            const seccion = this.getAttribute('data-seccion');

            // Llamar a la función correspondiente con la sección
            cargarContenido(seccion);
        });
    });
});

function cargarContenido(seccion) {
    let contenido = '';
    switch (seccion) {
        case 'inicio':
            contenido = '<h2>Bienvenidos al Centro Académico</h2><p>Somos una institución comprometida con la excelencia educativa y el desarrollo integral de nuestros estudiantes.</p><p>Nuestra misión es proporcionar una educación de calidad que promueva el aprendizaje significativo y la formación de ciudadanos responsables.</p><p>Visión: Ser líderes en la innovación educativa y contribuir al progreso de nuestra sociedad.</p>';
            break;
        case 'cursos':
            contenido = '<h2>Nuestros Cursos</h2>';
            break;
        case 'institucion':
            contenido = '<h2>Nuestra Institución</h2><p>Somos un centro académico con más de 20 años de experiencia en el campo de la educación.</p><p>Nuestra institución cuenta con un equipo de profesionales altamente calificados y un ambiente de aprendizaje propicio para el desarrollo académico y personal de nuestros estudiantes.</p>';
            break;
        case 'asociados':
            contenido = '<h2>Nuestros Asociados</h2><p>Trabajamos en colaboración con diversas instituciones y organizaciones para enriquecer la experiencia educativa de nuestros estudiantes.</p><ul><li>Asociación de Padres de Familia</li><li>Universidad Nacional</li><li>Organización de Profesionales</li></ul>';
            break;
        case 'contacto':
            contenido = '<h2>Contáctanos</h2><p>Estamos ubicados en:</p><p>Dirección: Av. Principal 123, Ciudad, Uruguay</p><p>Teléfono: +598 123 456</p><p>Correo electrónico: info@centroacademico.com</p>';
            break;
        default:
            contenido = '<h2>Bienvenidos al Centro Académico</h2><p>Somos una institución comprometida con la excelencia educativa y el desarrollo integral de nuestros estudiantes.</p><p>Nuestra misión es proporcionar una educación de calidad que promueva el aprendizaje significativo y la formación de ciudadanos responsables.</p><p>Visión: Ser líderes en la innovación educativa y contribuir al progreso de nuestra sociedad.</p>';
            break;
    }
    document.getElementById('dinamic_content').innerHTML = contenido;
}


function mostrarCurso(curso) {
    let contenido = '';
    switch (curso) {
        case 'matematicas':
            contenido = '<h2>Curso de Matemáticas Avanzadas</h2><p>Descripción del curso de Matemáticas Avanzadas.</p>';
            break;
        case 'ciencias':
            contenido = '<h2>Curso de Ciencias Naturales</h2><p>Descripción del curso de Ciencias Naturales.</p>';
            break;
        case 'idiomas':
            contenido = '<h2>Curso de Idiomas</h2><p>Descripción del curso de Idiomas.</p>';
            break;
        case 'informatica':
            contenido = '<h2>Curso de Informática</h2><p>Descripción del curso de Informática.</p>';
            break;
    }
    document.getElementById('dinamic_content').innerHTML = contenido;
}
