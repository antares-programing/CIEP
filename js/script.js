document.addEventListener('DOMContentLoaded', function () {
    // Agregar eventos de clic a los botones del menú //
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
            // esto es lo que borra//
            menuBtns.forEach(function (btn) {
                btn.classList.remove('selected');
            });

            // esto es lo que muestra //
            this.classList.add('selected');

            const seccion = this.getAttribute('data-seccion');

            
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
            case 'cursos':
                contenido = '<h2>Nuestros Cursos</h2>';
                contenido += '<div class="card-group">';
                contenido += '<div class="card">';
                contenido += '<img src="imagen_curso_1.jpg" class="card-img-top" alt="Curso 1">';
                contenido += '<div class="card-body">';
                contenido += '<h5 class="card-title">Auxiliar en administracion</h5>';
                contenido += '<p class="card-text">realiza tareas administrativas básicas como archivar documentos, contestar llamadas telefónicas, manejar correos electrónicos, mantener registros de información y realizar actividades de entrada de datos.</p>';
                contenido += '</div>';
                contenido += '</div>';
                contenido += '<div class="card">';
                contenido += '<img src="imagen_curso_2.jpg" class="card-img-top" alt="Curso 2">';
                contenido += '<div class="card-body">';
                contenido += '<h5 class="card-title">Analista administrativo</h5>';
                contenido += '<p class="card-text">implica analizar datos, elaborar informes, desarrollar y mejorar procedimientos administrativos, realizar estudios de viabilidad y eficiencia, identificar áreas de mejora en los procesos administrativos, y a menudo involucra toma de decisiones más estratégicas.</p>';
                contenido += '</div>';
                contenido += '</div>';
                contenido += '<div class="card">';
                contenido += '<img src="imagen_curso_3.jpg" class="card-img-top" alt="Curso 3">';
                contenido += '<div class="card-body">';
                contenido += '<h5 class="card-title">Administragod</h5>';
                contenido += '<p class="card-text">Es a quien le reza los administradores</p>';
                contenido += '</div>';
                contenido += '</div>';
                contenido += '</div>';
                break;
            
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

