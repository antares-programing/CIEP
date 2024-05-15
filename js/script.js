

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
    <h2 class="titulos">Bienvenidos al Centro Académico</h2>
    <p class="infos">Somos una institución comprometida con la excelencia educativa y el desarrollo integral de nuestros estudiantes.</p>
    <p class="infos">Nuestra misión es proporcionar una educación de calidad que promueva el aprendizaje significativo y la formación de ciudadanos responsables.</p>
    <p class="infos">Visión: Ser líderes en la innovación educativa y contribuir al progreso de nuestra sociedad.</p>
    `;

})

CURSOSBTN.addEventListener("click", ()=>{
    activebtn(CURSOSBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2 class="titulos">Categorias</h2>
    <div class="card-group">
        <div class="card">
            <img src="images/auxiliaradministrativo.jpg" class="card-img-top" alt="Curso 1">
            <div class="card-body">
                <h5 class="card-title">Administracion</h5>
                <p class="card-text">realiza tareas administrativas básicas como archivar documentos, contestar llamadas telefónicas, manejar correos electrónicos, mantener registros de información y realizar actividades de entrada de datos.</p>
            </div>
        </div>
        <div class="card">
            <img src="./images/marketing-1.jpg" class="card-img-top" alt="Curso 2">
            <div class="card-body">
                <h5 class="card-title">Marketing</h5>
                <p class="card-text">El marketing busca entender, comunicar y 
                satisfacer las necesidades del cliente para construir relaciones y 
                lograr objetivos comerciales.</p>
            </div>
        </div>
        <div class="card">
            <img src="./images/Recursoshumanos.jpg" class="card-img-top" alt="Curso 3">
            <div class="card-body">
                <h5 class="card-title">Recursos Humanos</h5>
                <p class="card-text">Encargados de reclutar, seleccionar, capacitar y 
                gestionar empleados para promover el bienestar y el rendimiento organizacional.</p>
            </div>
        </div>
    </div>
`;
})

SERVICIOSBTN.addEventListener("click", ()=>{
    activebtn(SERVICIOSBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2 class="titulos">Bienvenidos al Centro Académico</h2>
    <p class="infos"> "Nos comprometemos a proporcionar un programa
    integral de capacitación que abarque tanto habilidades blandas como conocimientos técnicos, 
    adaptado a cada puesto y perspectivas de crecimiento."</p>
    `;
})

INSTITUCIONBTN.addEventListener("click", ()=>{
    activebtn(INSTITUCIONBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2 class="titulos">Nuestra Institución</h2>
    <p class="infos">Somos un centro académico con más de 20 años de experiencia en el campo de la educación.</p>
    <p class="infos">Nuestra institución cuenta con un equipo de profesionales altamente calificados y un ambiente de aprendizaje propicio para el desarrollo académico y personal de nuestros estudiantes.</p>
    `;
})

COLABORADORESBTN.addEventListener("click", ()=>{
    activebtn(COLABORADORESBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2 class="titulos">Nuestros Asociados</h2>
    <p class="infos">Trabajamos en colaboración con diversas instituciones y organizaciones para enriquecer la experiencia educativa de nuestros estudiantes.</p>
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
    <h2 class="titulos">Contáctanos</h2>
    <p class="infos">Estamos ubicados en: el centro de tu corazon</p>
    <p class="infos">Dirección: calle falsa 123, Ciudad, Uruguay</p>
    <p class="infos">Teléfono: uno negrito asi de pequeño</p>
    <p class="infos">Correo electrónico: info@centroacademico.com</p>
    `;
})