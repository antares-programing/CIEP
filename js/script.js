

const INICIOBTN = document.getElementById("Inicio_BTN")
const CURSOSBTN = document.getElementById("Cursos_BTN")
const SERVICIOSBTN = document.getElementById("Servicios_BTN")
const INSTITUCIONBTN = document.getElementById("Institucion_BTN")
const COLABORADORESBTN = document.getElementById("Colaboradores_BTN")
const CONTACTOBTN = document.getElementById("Contacto_BTN")

const MENUBTNS = document.getElementsByClassName("menu_BTN")

const DINAMICCONTENT = document.getElementById("dinamic_content")

function activebtn(btn){
    for (x of MENUBTNS){
        if(x.classList.contains("ciep_BTN_active")){
            x.classList.remove("ciep_BTN_active")
            x.classList.add("ciep_BTN_unactive")
        }
    }
    btn.classList.remove("ciep_BTN_unactive")
    btn.classList.add("ciep_BTN_active")
}

INICIOBTN.addEventListener("click", ()=>{
    activebtn(INICIOBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2>Bienvenidos al Centro Académico</h2>
    <p>Somos una institución comprometida con la excelencia educativa y el desarrollo integral de nuestros estudiantes.</p>
    <p>Nuestra misión es proporcionar una educación de calidad que promueva el aprendizaje significativo y la formación de ciudadanos responsables.</p>
    <p>Visión: Ser líderes en la innovación educativa y contribuir al progreso de nuestra sociedad.</p>
    `;

})

CURSOSBTN.addEventListener("click", ()=>{
    activebtn(CURSOSBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2>Categorias</h2>
    <div class="card-group">
        <div class="card">
            <img src="images/auxiliaradministrativo.jpg" class="card-img-top" alt="Curso 1">
            <div class="card-body">
                <h5 class="card-title">Administracion</h5>
                <p class="card-text">realiza tareas administrativas básicas como archivar documentos, contestar llamadas telefónicas, manejar correos electrónicos, mantener registros de información y realizar actividades de entrada de datos.</p>
            </div>
        </div>
        <div class="card">
            <img src="imagen_2" class="card-img-top" alt="Curso 2">
            <div class="card-body">
                <h5 class="card-title">Marketing</h5>
                <p class="card-text">implica analizar datos, elaborar informes, desarrollar y mejorar procedimientos administrativos, realizar estudios de viabilidad y eficiencia, identificar áreas de mejora en los procesos administrativos, y a menudo involucra toma de decisiones más estratégicas.</p>
            </div>
        </div>
        <div class="card">
            <img src="imagen_3" class="card-img-top" alt="Curso 3">
            <div class="card-body">
                <h5 class="card-title">Recursos Humanos</h5>
                <p class="card-text">Es a quien le reza los administradores</p>
            </div>
        </div>
    </div>
`;
})

SERVICIOSBTN.addEventListener("click", ()=>{
    activebtn(SERVICIOSBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2>Bienvenidos al Centro Académico</h2>
    <p>Somos una institución comprometida con la excelencia educativa y el desarrollo integral de nuestros estudiantes.</p>
    <p>Nuestra misión es proporcionar una educación de calidad que promueva el aprendizaje significativo y la formación de ciudadanos responsables.</p>
    <p>Visión: Ser líderes en la innovación educativa y contribuir al progreso de nuestra sociedad.</p>
    `;
})

INSTITUCIONBTN.addEventListener("click", ()=>{
    activebtn(INSTITUCIONBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2 class="titulo">Nuestra Institución</h2>
        <p>Somos un centro académico con más de 20 años de experiencia en el campo de la educación.</p>
        <p>Nuestra institución cuenta con un equipo de profesionales altamente calificados y un ambiente de aprendizaje propicio para el desarrollo académico y personal de nuestros estudiantes.</p>
    `;
})

COLABORADORESBTN.addEventListener("click", ()=>{
    activebtn(COLABORADORESBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2>Nuestros Asociados</h2>
    <p>Trabajamos en colaboración con diversas instituciones y organizaciones para enriquecer la experiencia educativa de nuestros estudiantes.</p>
    <ul>
        <li>Asociación de Padres de Familia</li>
        <li>Universidad Nacional</li>
        <li>Organización de Profesionales</li>
    </ul>
`;
})

CONTACTOBTN.addEventListener("click", ()=>{
    activebtn(CONTACTOBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2>Contáctanos</h2>
    <p>Estamos ubicados en: el centro de tu corazon</p>
    <p>Dirección: calle falsa 123, Ciudad, Uruguay</p>
    <p>Teléfono: uno negrito asi de pequeño</p>
    <p>Correo electrónico: info@centroacademico.com</p>
    `;
})