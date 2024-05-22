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



//funcion que agrega los event listeners a los botones de Mision Vision y valores en el inicio.
function addMVVEventListeners() {
    const MISIONCARD = document.getElementById("mision_card");
    const MISIONCONTENT = document.getElementById("mision_content");
    const VISIONCARD = document.getElementById("vision_card");
    const VISIONCONTENT = document.getElementById("vision_content");
    const VALORESCARD = document.getElementById("valores_card");
    const VALORESCONTENT = document.getElementById("valores_content");

    MISIONCARD.addEventListener("click", () => {
        MISIONCONTENT.classList.add("active");
        VISIONCONTENT.classList.remove("active");
        VALORESCONTENT.classList.remove("active");
        
        MISIONCARD.classList.add("active");
        VISIONCARD.classList.remove("active");
        VALORESCARD.classList.remove("active");
    });

    VISIONCARD.addEventListener("click", () => {
        VISIONCONTENT.classList.add("active");
        MISIONCONTENT.classList.remove("active");
        VALORESCONTENT.classList.remove("active");
        
        VISIONCARD.classList.add("active");
        MISIONCARD.classList.remove("active");
        VALORESCARD.classList.remove("active");
    });

    VALORESCARD.addEventListener("click", () => {
        VALORESCONTENT.classList.add("active");
        MISIONCONTENT.classList.remove("active");
        VISIONCONTENT.classList.remove("active");
        
        VALORESCARD.classList.add("active");
        MISIONCARD.classList.remove("active");
        VISIONCARD.classList.remove("active");
    });
    VISIONCARD.click();
}

//aqui agregamos un event listener al doc para que haga click en el boton de inicio al iniciar la pagina.
document.addEventListener("DOMContentLoaded", (event) => {
    INICIOBTN.click();
});

//boton de inicio, lo que muestra en el contenido dinamico al presionar el boton de inicio
INICIOBTN.addEventListener("click", ()=>{
    activebtn(INICIOBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <div id="inicio_content">

                    <div class="content_title_container">
                        <h2 class="titulos">Bienvenidos al Centro Académico CIEP.</h2>
                    </div>

                    <div class="left_img_container">
                        <img class="left_content_img" src="./images/Welcome_img.jpeg" alt="">
                        <p class="infos left_content_p">Somos una institución comprometida con la excelencia educativa y el desarrollo integral de nuestros estudiantes. Creemos firmemente en la importancia de proporcionar una educación de calidad que no solo transmita conocimientos académicos, sino que también fomente habilidades críticas, creatividad y valores éticos. Nuestro enfoque se centra en el estudiante, promoviendo un ambiente de aprendizaje inclusivo y estimulante que permite a cada individuo alcanzar su máximo potencial. Además, nos esforzamos por desarrollar en nuestros alumnos una conciencia global y un compromiso social, preparándolos para enfrentar los desafíos del mundo moderno con responsabilidad y proactividad.</p>    
                    </div>
                    
                    <div id="MVV_container">
                        <div class="card_group_container">

                            <div class="MVV_card" id="mision_card">
                                <img src="images/Mision_icon.png" class="MVV_img" alt="Curso 1">
                                <div class="MVV-body">
                                    <p class="MVV_title">Misión</p>
                                    <p class="MVV_content" id="mision_content">Proporcionar una educación de calidad que promueva el aprendizaje significativo y la formación de ciudadanos responsables. Nos dedicamos a crear un entorno educativo donde cada estudiante pueda explorar su potencial y desarrollar habilidades críticas, analíticas y creativas. Valoramos la importancia de un currículo integral que no solo aborde las áreas académicas tradicionales, sino que también incluya la educación en competencias transversales. Creemos que un aprendizaje significativo va más allá de la adquisición de conocimientos; implica la capacidad de aplicar lo aprendido en contextos reales, fomentando la resolución de problemas, la innovación y el pensamiento independiente.</p>
                                </div>
                            </div>
    
                            <div class="MVV_card" id="vision_card">
                                <img src="./images/Vision_icon.png" class="MVV_img" alt="Curso 2">
                                <div class="MVV-body">
                                    <p class="MVV_title">vision</p>
                                    <p class="MVV_content" id="vision_content">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam felis, viverra quisque nascetur malesuada at ad lectus tortorfermentum torquent per non aliquet nullam eu, fusce justo etiam purus hac at rutrum scelerisque iaculis imperdiet pharetra. Lacus justo bibendum senectus porta commodo lobortis nulla mattis habitasse sodales, dui habitant pharetra non primis fringilla netus ultrices mus, parturient aliquam curae magnis torquent dignissim potenti dis augue.</p>
                                </div>
                            </div>
    
                            <div class="MVV_card" id="valores_card">
                                <img src="./images/Valores_icon.png" class="MVV_img" alt="Curso 3">
                                <div class="MVV-body">
                                    <p class="MVV_title">Valores<p>
                                    <p class="MVV_content" id="valores_content">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam felis, viverra quisque nascetur malesuada at ad lectus tortor ligula suscipit, ridiculus ac faucibus vel risus vehicula metus fusce justo etiam purus hac at rutrum scelerisque iaculis imperdiet pharetra. Lacus justo bibendum senectus porta commodo lobortis nulla mattis habitasse sodales, dui habitant pharetra non primis fringilla netus ultrices mus, parturient aliquam curae magnis torquent dignissim potenti dis augue.</p>
                                </div>
                            </div>
    
                        </div>
                    </div>

                    <div class="left_img_container">
                        <p class="infos left_content_p">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam felis, viverra quisque nascetur malesuada at ad lectus tortor ligula suscipit, ridiculus ac faucibus vel risus vehicula metus dictumst. Massa tincidunt enim proin eleifend malesuada fermentum torquent per non aliquet nullam eu, fusce justo etiam purus hac at rutrum scelerisque iaculis imperdiet pharetra. Lacus justo bibendum senectus porta commodo lobortis nulla mattis habitasse sodales, dui habitant pharetra non primis fringilla netus ultrices mus, parturient aliquam curae magnis torquent dignissim potenti dis augue.</p>    
                    
                        <img class="left_content_img" src="./images/right_img.png" alt="">
                    </div>

                    <div class="little_div">

                    </div>

                </div>
    `;
    addMVVEventListeners()
})

//boton de cursos, lo que muestra en el contenido dinamico al presionar el boton de cursos
CURSOSBTN.addEventListener("click", ()=>{
    activebtn(CURSOSBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
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

//boton de Servicios, lo que muestra en el contenido dinamico al presionar el boton de servicios
SERVICIOSBTN.addEventListener("click", () => {
    activebtn(SERVICIOSBTN);
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <div class="custom-card-group">
    <div class="custom-card" id="empresa-card">
        <img src="images/empresa-2.webp" class="custom-card-img-top" alt="Empresa">
        <div class="custom-card-body">
            <h5 class="custom-card-title">Empresa</h5>
            <p class="custom-card-text">Capacita a tus empleados en las habilidades blandas y técnicas necesarias para lograr un mejor desarrollo de su labor.</p>
        </div>
    </div>
    <div class="custom-card" id="emprendedor-card">
        <img src="images/emprendimiento.jpg" class="custom-card-img-top" alt="Emprendedor">
        <div class="custom-card-body">
            <h5 class="custom-card-title">Emprendedor</h5>
            <p class="custom-card-text">Encuentra lo que te hace falta para que tu proyecto compita en el mercado.</p>
        </div>
    </div>
    <div class="custom-card" id="institucion-card">
        <img src="images/institucion.jpg" class="custom-card-img-top" alt="Institución">
        <div class="custom-card-body">
            <h5 class="custom-card-title">Institución</h5>
            <p class="custom-card-text">Incluye tus cursos o carreras dentro de nuestros cupos becarios.</p>
        </div>
    </div>
</div>

    `;

    // Añadir event listeners a las tarjetas
    document.getElementById("empresa-card").addEventListener("click", () => {
        DINAMICCONTENT.innerHTML = `
            <h2 class="titulos">Capacitación Empresarial</h2>
            <p class="infos">En esta sección, proporcionamos información detallada sobre los programas de capacitación diseñados para mejorar las habilidades blandas y técnicas de los empleados. Nuestros cursos están diseñados para abordar las necesidades específicas de cada empresa, asegurando que sus empleados estén equipados con las herramientas necesarias para mejorar su rendimiento y productividad.</p>
        `;
    });

    document.getElementById("emprendedor-card").addEventListener("click", () => {
        DINAMICCONTENT.innerHTML = `
            <h2 class="titulos">Soporte a Emprendedores</h2>
            <p class="infos">Aquí ofrecemos recursos y asesoramiento para emprendedores que buscan llevar sus proyectos al siguiente nivel. Nuestros programas incluyen talleres sobre desarrollo de negocios, acceso a redes de contactos y oportunidades de financiamiento, todo diseñado para ayudar a los emprendedores a competir eficazmente en el mercado.</p>
        `;
    });

    document.getElementById("institucion-card").addEventListener("click", () => {
        DINAMICCONTENT.innerHTML = `
            <h2 class="titulos">Colaboración con Instituciones</h2>
            <p class="infos">Esta sección está dedicada a las instituciones educativas que desean incluir sus cursos o carreras dentro de nuestros programas de becas. Proveemos información sobre cómo las instituciones pueden colaborar con nosotros para ofrecer oportunidades educativas a un mayor número de estudiantes.</p>
        `;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.custom-card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.add('darken');
                } else {
                    otherCard.classList.add('hovered');
                }
            });
        });

        card.addEventListener('mouseout', () => {
            cards.forEach(otherCard => {
                otherCard.classList.remove('darken');
                otherCard.classList.remove('hovered');
            });
        });
    });
});


//boton de instituciones, lo que muestra en el contenido dinamico al presionar el boton de instituciones
INSTITUCIONBTN.addEventListener("click", ()=>{
    activebtn(INSTITUCIONBTN)
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2 class="titulos">Nuestra Institución</h2>
    <p class="infos">Somos un centro académico con más de 20 años de experiencia en el campo de la educación.</p>
    <p class="infos">Nuestra institución cuenta con un equipo de profesionales altamente calificados y un ambiente de aprendizaje propicio para el desarrollo académico y personal de nuestros estudiantes.</p>
    `;
})

//boton de colaboradores, lo que muestra en el contenido dinamico al presionar el boton de colaboradores
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


//boton de contacto, lo que muestra en el contenido dinamico al presionar el boton de contacto
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
