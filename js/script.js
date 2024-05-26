const INICIOBTN = document.getElementById("Inicio_BTN");
const CURSOSBTN = document.getElementById("Cursos_BTN");
const SERVICIOSBTN = document.getElementById("Servicios_BTN");
const COLABORADORESBTN = document.getElementById("Colaboradores_BTN");
const CONTACTOBTN = document.getElementById("Contacto_BTN");

const MENUBTNS = document.getElementsByClassName("menu_BTN");

const DINAMICCONTENT = document.getElementById("dinamic_content");

function goback(instance1){
    const GOBACKBTN = document.getElementById("goback_BTN");
    GOBACKBTN.addEventListener("click", ()=>{
        instance1.click();
    });
}

async function gobacktocategory(categoryid){
    const GOBACKBTN = document.getElementById("goback_BTN");
    GOBACKBTN.addEventListener("click", async () => {
        await mostrarCursos(categoryid);
    });
}

function activebtn(btn){
    for (const x of MENUBTNS){
        if(x.classList.contains("ciep_BTN_active")){
            x.classList.remove("ciep_BTN_active");
            x.classList.add("ciep_BTN_unactive");
        }
    }
    btn.classList.remove("ciep_BTN_unactive");
    btn.classList.add("ciep_BTN_active");
}

function fadeout(){
    return new Promise(resolve => {
        DINAMICCONTENT.style.opacity = 0;
        setTimeout(resolve, 400);  // Espera 400ms para que la transición termine
    });
}

function fadein(){
    DINAMICCONTENT.style.opacity = 1;
}

function generarListaObjetivos(objetivos) {
    let listaHTML = '';
    objetivos.forEach(objetivo => {
        listaHTML += `<li>${objetivo}</li>`;
    });
    return listaHTML;
}

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

document.addEventListener("DOMContentLoaded", (event) => {
    INICIOBTN.click();
});

INICIOBTN.addEventListener("click", ()=>{
    activebtn(INICIOBTN);
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `    
    <div id="inicio_content">

    <div class="content_title_container">
        <h2 class="titulos">Bienvenidos al Centro Académico CIEP.</h2>
    </div>

    <div class="left_img_container">
        <div class="left_content_img">
        </div>
        <p class="infos left_content_p">Somos una institución comprometida con la excelencia educativa y el desarrollo integral de nuestros estudiantes. Creemos firmemente en la importancia de proporcionar una educación de calidad que no solo transmita conocimientos académicos, sino que también fomente habilidades críticas, creatividad y valores éticos. Nuestro enfoque se centra en el estudiante, promoviendo un ambiente de aprendizaje inclusivo y estimulante que permite a cada individuo alcanzar su máximo potencial. Además, nos esforzamos por desarrollar en nuestros alumnos una conciencia global y un compromiso social, preparándolos para enfrentar los desafíos del mundo moderno con responsabilidad y proactividad.</p>    
    </div>
    
    <div id="MVV_container">
        <div class="card_group_container">

            <div class="MVV_card" id="mision_card">
                <img src="images/Mision_icon.png" class="MVV_img" alt="Curso 1">
                <div class="MVV-body">
                    <p class="MVV_title">Misión</p>
                    <p class="MVV_content" id="mision_content">Nuestro compromiso es democratizar el conocimiento a través de programas de Responsabilidad Social Empresarial, permitiendo que toda la población activa acceda a nuestro Plan Permanente de Becas y a una amplia gama de recursos en línea, disponibles de forma gratuita o a bajo costo. Este enfoque busca cubrir las necesidades educativas no atendidas, proporcionando oportunidades de aprendizaje a quienes más lo necesitan.

                    Además, nos dedicamos a concientizar sobre la importancia de estar capacitado en el mundo actual. Promovemos la capacitación abierta a la comunidad para dotar a nuestros estudiantes de las herramientas necesarias para alcanzar sus metas y objetivos, así como para enfrentar los complejos desafíos de la vida moderna en todos sus ámbitos.</p>
                </div>
            </div>

            <div class="MVV_card" id="vision_card">
                <img src="./images/Vision_icon.png" class="MVV_img" alt="Curso 2">
                <div class="MVV-body">
                    <p class="MVV_title">vision</p>
                    <p class="MVV_content" id="vision_content">Nuestro objetivo es ser el primer instituto en abarcar tanto a adultos como a adolescentes en su crecimiento profesional y personal, poniendo un fuerte énfasis en el desarrollo de habilidades blandas y la capacitación empresarial. Fomentamos el emprendimiento y la búsqueda constante de la felicidad y la autorrealización.

                    Aspiramos a ser una referencia nacional en la formación y capacitación del talento humano, ofreciendo una educación integral y de alto nivel en todas las áreas clave de las organizaciones. Brindamos carreras cortas, cursos y talleres, tanto presenciales como a distancia, utilizando tecnología de punta para llegar a todos los rincones del país. Gracias a nuestras alianzas con las principales empresas públicas y privadas, garantizamos que nuestros egresados se incorporen con éxito al mercado laboral.</p>
                </div>
            </div>

            <div class="MVV_card" id="valores_card">
                <img src="./images/Valores_icon.png" class="MVV_img" alt="Curso 3">
                <div class="MVV-body">
                    <p class="MVV_title">Valores</p>
                    <ul class="MVV_content" id="valores_content">
                        <li>TRABAJO EN EQUIPO</li>
                        <li>CONFIANZA</li>
                        <li>COMPROMISO</li>
                        <li>SERIEDAD</li>
                        <li>HONESTIDAD</li>
                        <li>PERSEVERANCIA</li>
                        <li>RESPETO</li>
                        <li>IGUALDAD</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

    <div class="left_img_container">
        <p class="infos left_content_p">En CIEP, enseñamos a través de líderes y académicos que transmiten conocimientos de manera inspiradora. Entendemos que los docentes de hoy deben ser más que simples instructores; deben ser guías y mentores capaces de conectar con los estudiantes no solo en el ámbito académico, sino también en el emocional. Esto permite inspirar un aprendizaje enriquecido con experiencias y retroalimentación constante.

        Nuestro equipo está compuesto por profesionales con una amplia trayectoria, quienes reconocen la singularidad de cada individuo. Nuestro desafío es educar sin imponer moldes, abrazando la diversidad y facilitando un proceso de aprendizaje personalizado para cada alumno. De este modo, les brindamos la oportunidad de construir su propio camino hacia el perfil de egresado que el mercado laboral actual demanda.</p>    
    
        <img class="left_content_img" src="./images/right_img.png" alt="">
    </div>

    <div class="little_div">

    </div>

    </div>
    `;
    addMVVEventListeners();
});

async function cargarDatosCursos(categoria) {
    try {
        const response = await fetch(`Json/cursos_${categoria}.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar los datos de los cursos:', error);
        return [];
    }
}

async function mostrarCursos(categoria) {
    await fadeout();
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
        <div class="curso_content_container">
            <img src="./images/Back_BTN.png" id="goback_BTN" alt="gobackBTN">
            <h2 class="curso_content_title">Cursos</h2>
        </div>
        <div class="custom-card-group-cursos" id="cursos-container"></div>
    `;

    const cursosContainer = document.getElementById("cursos-container");
    const cursos = await cargarDatosCursos(categoria);

    cursos.forEach(curso => {
        const cursoHTML = `
            <div class="custom-card-title-container">
                <h5 class="custom-card-title-cursos">${curso.titulo}</h5>
            </div>
            <div class="custom-card-body-cursos">
                <p class="custom-card-text-cursos">${curso.descripcion}</p>
            </div>
        `;

        const cursoElement = document.createElement('div');
        cursoElement.classList.add('custom-card-cursos'); 
        cursoElement.innerHTML = cursoHTML;

        cursoElement.addEventListener('click', async () => {
            await fadeout();
            const listaObjetivosHTML = generarListaObjetivos(curso.objetivos);
            DINAMICCONTENT.innerHTML = `
                <div class="curso_container">
                    <div class="curso_content_container">
                        <img src="./images/Back_BTN.png" id="goback_BTN" alt="gobackBTN">
                        <h2 class="curso_content_title">${curso.titulo}</h2>
                    </div>
                    <div class="curso_content_container">
                        <div class="curso_content_p">
                            <p>${curso.descripcion2}</p>
                        </div>
                    </div>
                    <div class="curso_content_details">
                        <ul>
                            <li><h4 class="curso_content_title">${curso.duracion}</h4></li>
                            <li><h4 class="curso_content_title">Objetivos</h4>
                                <ul>${listaObjetivosHTML}</ul>
                            </li>
                            <li><h4 class="curso_content_title">Sistema de Enseñanza</h4>
                                <p>${curso.sistemaEnsenanza}</p>
                            </li>
                            <li><h4 class="curso_content_title">Perfil del egresado</h4>
                                <p>${curso.perfilEgresado}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="pdf_container">
                        <div class="pdf_container_title">
                            <h2>Documentacion del curso</h2>
                        </div>
                        <div class="download_button_container">
                            <img src="./images/PDF_file_icon.png" class="pdf_img" alt="">
                            <a href="${curso.pdfUrl}" download="${curso.pdfNombre}" class="download_button">${curso.pdfNombre}</a>
                        </div>
                    </div>
                    <div class="little_div"></div>
                </div>
            `;
            fadein();
            gobacktocategory(categoria);
        });

        cursosContainer.appendChild(cursoElement);
    });

    fadein();
    goback(CURSOSBTN);
}



CURSOSBTN.addEventListener("click", async () => {
    activebtn(CURSOSBTN);
    await fadeout();
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
        <div class="curso_content_container">
            <h2 class="curso_content_title">Categorias</h2>
        </div>
        <div class="custom-card-group-categoria" id="categorias-container">
            <!-- Aquí se agregarán las tarjetas de categoría -->
        </div>
        <div id="becas_container">
            <div id="becas_BTN">
                <h1>Becas</h1>
            </div>
        </div>
        <div class="little_div">
        </div>
    `;
    const BECASBTN = document.getElementById("becas_BTN");
    BECASBTN.addEventListener("click", async ()=>{
        await fadeout();
        DINAMICCONTENT.innerHTML = ``;
        DINAMICCONTENT.innerHTML = ` 
        <div class="curso_content_container">
            <img src="./images/Back_BTN.png" id="goback_BTN" alt="gobackBTN">
            <h2 class="curso_content_title">Becas</h2>
        </div>
        <div class="curso_content_container">
                        <div class="curso_content_p">
                        <form id="contact-form">
                            <label for="name">Nombre Completo:</label>
                            <input type="text" id="name" name="name" required>
                            <br>
                            <label for="email">Correo Electrónico:</label>
                            <input type="email" id="email" name="email" required>
                            <br>
                            <label for="phone">Número de Teléfono:</label>
                            <input type="tel" id="phone" name="phone" required>
                            <br>
                            <label for="department">Departamento:</label>
                            <input type="text" id="department" name="department" required>
                            <br>
                            <label for="location">Localidad:</label>
                            <input type="text" id="location" name="location" required>
                            <br>
                            <label for="work_status">Situación Laboral:</label>
                            <br>
                            <input type="radio" id="unemployed" name="work_status" value="Desempleado" required>
                            <label for="unemployed">Desempleado</label>
                            <br>
                            <input type="radio" id="employed" name="work_status" value="Trabajador dependiente" required>
                            <label for="employed">Trabajador dependiente</label>
                            <br>
                            <input type="radio" id="independent" name="work_status" value="Trabajador independiente" required>
                            <label for="independent">Trabajador independiente</label>
                            <br>
                            <input type="radio" id="entrepreneur" name="work_status" value="Empresario" required>
                            <label for="entrepreneur">Empresario</label>
                            <br>
                            <label for="family">¿Cómo se compone su núcleo familiar? Detalle si es pareja o su parentesco, nombre, edad y actividad:</label>
                            <textarea id="family" name="family" required></textarea>
                            <br>
                            <label for="education_level">Nivel Educativo:</label>
                            <br>
                            <input type="radio" id="primary_incomplete" name="education_level" value="Primaria incompleta" required>
                            <label for="primary_incomplete">Primaria incompleta</label>
                            <br>
                            <input type="radio" id="primary_complete" name="education_level" value="Primaria completa" required>
                            <label for="primary_complete">Primaria completa</label>
                            <br>
                            <input type="radio" id="basic_cycle" name="education_level" value="Ciclo básico culminado" required>
                            <label for="basic_cycle">Ciclo básico culminado</label>
                            <br>
                            <input type="radio" id="high_school" name="education_level" value="Bachillerato culminado" required>
                            <label for="high_school">Bachillerato culminado</label>
                            <br>
                            <input type="radio" id="tertiary_incomplete" name="education_level" value="Terciario incompleto" required>
                            <label for="tertiary_incomplete">Terciario incompleto</label>
                            <br>
                            <input type="radio" id="tertiary_complete" name="education_level" value="Terciario culminado" required>
                            <label for="tertiary_complete">Terciario culminado</label>
                            <br>
                            <label for="availability">Disponibilidad Horaria:</label>
                            <textarea id="availability" name="availability" required></textarea>
                            <br>
                            <label for="goals">¿Cuáles son sus principales metas y objetivos? ¿Cómo se ve de aquí a 5 años? ¿Cómo se ve de aquí a 10 años? ¿Qué cosas le gustaría hacer o tener?:</label>
                            <textarea id="goals" name="goals" required></textarea>
                            <br>
                            <label for="discount">Descuento para el que quiere aplicar:</label>
                            <br>
                            <input type="radio" id="discount_10" name="discount" value="10%" required>
                            <label for="discount_10">10%</label>
                            <br>
                            <input type="radio" id="discount_20" name="discount" value="20%" required>
                            <label for="discount_20">20%</label>
                            <br>
                            <input type="radio" id="discount_30" name="discount" value="30%" required>
                            <label for="discount_30">30%</label>
                            <br>
                            <label for="course">Curso al que quiere aplicar:</label>
                            <input type="text" id="course" name="course" required>
                            <br>
                            <button type="submit" id="send_email_BTN">Enviar</button>
                        </form>
                        </div>
                    </div>
        <div class="custom-card-group-cursos" id="cursos-container"></div>
        `;
        fadein();
        goback(CURSOSBTN);
        // ======================================= [Enviar correo formulario] ======================================
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const serviceID = 'service_zpo793f'; // Reemplaza con tu Service ID de EmailJS
            const templateID = 'template_yvmend4'; // Reemplaza con tu Template ID de EmailJS
            var templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                department: document.getElementById('department').value,
                location: document.getElementById('location').value,
                work_status: document.querySelector('input[name="work_status"]:checked').value,
                family: document.getElementById('family').value,
                education_level: document.querySelector('input[name="education_level"]:checked').value,
                availability: document.getElementById('availability').value,
                goals: document.getElementById('goals').value,
                discount: document.querySelector('input[name="discount"]:checked').value,
                course: document.getElementById('course').value
            };
            emailjs.init('YwXhxnIo10hShizFM');
            emailjs.send(serviceID, templateID, templateParams)
                .then((response) => {
                    console.log('Correo enviado con éxito!', response.status, response.text);
                    alert('Correo enviado con éxito!');
                }, (error) => {
                    console.log('Error al enviar el correo:', error);
                    alert('Error al enviar el correo.');
                });
        });
        // ======================================= [Enviar correo formulario] ======================================
    })
    fetch('Json/categorias.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo JSON de las categorías');
            }
            return response.json();
        })
        .then(categoriasJSON => {
            const categoriasContainer = document.getElementById("categorias-container");

            categoriasJSON.forEach(categoria => {
                const categoriaHTML = `
                    <div class="custom-card-categoria" id="${categoria.id}-card">
                        <img src="${categoria.imagen}" class="custom-card-img-top-categoria" alt="${categoria.nombre}">
                        <div class="custom-card-body-categoria">
                            <h5 class="custom-card-title-categoria">${categoria.nombre}</h5>
                            <p class="custom-card-text-categoria">${categoria.descripcion}</p>
                        </div>
                    </div>
                `;

                categoriasContainer.innerHTML += categoriaHTML;
            });

            categoriasJSON.forEach(categoria => {
                const categoriaElement = document.getElementById(`${categoria.id}-card`);
                categoriaElement.addEventListener("click", async () => {
                    const categoriaSeleccionada = categoria.id;
                    await mostrarCursos(categoriaSeleccionada);
                });
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON de las categorías:', error);
        });

    fadein();
});


//boton de Servicios, lo que muestra en el contenido dinamico al presionar el boton de servicios
SERVICIOSBTN.addEventListener("click", async() => {
    activebtn(SERVICIOSBTN);
    await fadeout();
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
    fadein()
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

//boton de colaboradores, lo que muestra en el contenido dinamico al presionar el boton de colaboradores
COLABORADORESBTN.addEventListener("click", async()=>{
    activebtn(COLABORADORESBTN)
    await fadeout();
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
    fadein()
})


//boton de contacto, lo que muestra en el contenido dinamico al presionar el boton de contacto
CONTACTOBTN.addEventListener("click", async ()=>{
    activebtn(CONTACTOBTN)
    await fadeout();
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <h2 class="titulos">Contáctanos</h2>
    <p class="infos">Estamos ubicados en: el centro de tu corazon</p>
    <p class="infos">Dirección: calle falsa 123, Ciudad, Uruguay</p>
    <p class="infos">Teléfono: uno negrito asi de pequeño</p>
    <p class="infos">Correo electrónico: info@centroacademico.com</p>
    `;
    fadein()
})
