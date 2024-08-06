const INICIOBTN = document.getElementById("Inicio_BTN");

const CURSOSBTN = document.getElementById("Cursos_BTN");
const SERVICIOSBTN = document.getElementById("Servicios_BTN");

const CONTACTOBTN = document.getElementsByClassName("Contacto_BTN");
const INICIOBTNS = document.getElementsByClassName("Inicio_BTN");
const CURSOSBTNS = document.getElementsByClassName("Cursos_BTN");
const SERVICIOSBTNS = document.getElementsByClassName("Servicios_BTN");

const CONTACTOBTNS = document.getElementsByClassName("Contacto_BTN");

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

async function showapplicationform(cursoname, categoria){
    const APPLICATIONBTN = document.getElementById("application_BTN")
    APPLICATIONBTN.addEventListener("click", async ()=>{
        await fadeout ();
        DINAMICCONTENT.innerHTML = ` 
        <div class="curso_content_container">
            <img src="./images/Back_BTN.png" id="goback_BTN" alt="gobackBTN">
            <h2 class="curso_content_title">${cursoname}</h2>
        </div>
        <div class="left_img_container_postulaciones">  
            <div class="postulaciones_container">
                <img class="postulaciones_IMG" src="images/Postulacion1IMG.png" alt="">
                <p class="left_content_p_postulaciones">¡Muchas gracias por interesarte en nuestros cursos!<br>Has dado tu primer paso en un nuevo camino de aprendizaje</p> 
            </div>
            <div class="postulaciones_container">
                <img class="postulaciones_IMG" src="images/Postulacion2IMG.png" alt="">
                <p class="left_content_p_postulaciones">Por favor completa el formulario a continuación para aplicar para el curso de ${cursoname}.</p>
            </div>
            <div class="postulaciones_container">
                <img class="postulaciones_IMG" src="images/Postulacion3IMG.png" alt="">
                <p class="left_content_p_postulaciones">¡Una vez completado el formulario un representante de CIEP se pondrá en contacto contigo!</p>  
            </div>  
        </div>
        <div class="curso_content_container">
            <h2 class="curso_content_title">Formulario de Postulación<br>${cursoname}</h2>
        </div>
        <div class="curso_content_container">
            <div class="contact_form_container">
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
                    <label for="availability">Disponibilidad Horaria:</label>
                    <select id="availability" name="availability" required>
                        <option value="Matutino">Matutino</option>
                        <option value="Vespertino">Vespertino</option>
                        <option value="Nocturno">Nocturno</option>
                    </select>
                    <br>
                    <label for="course">Curso al que quiere aplicar:</label>
                    <input type="text" id="course" name="course" value="${cursoname}" disabled required>
                    <br>
                    <div>
                        <input type="checkbox" id="terms" name="terms" required>
                        <label for="terms">He leído y acepto los <a href="#" id="termsLink">términos y condiciones</a></label>
                    </div>
                    <br>
                    <div class="g-recaptcha" data-sitekey="6Ldg6PEpAAAAAEUIsSi59w0Zb1HNtz619siwvFHy"></div>
                    <br>
                    <button type="submit" id="send_email_BTN">Aplicar</button>
                </form>
            </div>
        </div>
        <div class="curso_content_container">
            <h2 class="curso_content_title"> </h2>
        </div>
        <div class="custom-card-group-cursos" id="cursos-container"></div>
            <div id="termsOverlay"></div>

    <!-- Modal for the terms and conditions -->
    <div id="termsModal">
        <h2>Términos y Condiciones</h2>
        <p>
            Estos términos y condiciones explican cómo el Centro Integral de Educación Profesional (CIEP) recopila, usa y protege la información personal que nos proporcionas a través de nuestros formularios de contacto.
            <br><br>
            <strong>1. Información que Recopilamos</strong>
            <br>
            Recopilamos los siguientes datos personales:
            <ul>
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono</li>
            </ul>
            <br>
            <strong>2. Finalidad de la Recopilación de Datos</strong>
            <br>
            Usamos la información recopilada para los siguientes fines:
            <ul>
                <li>Ponernos en contacto contigo para proporcionarte información sobre becas estudiantiles.</li>
                <li>Enviarte información relevante sobre nuestros cursos y programas educativos.</li>
                <li>Mejorar nuestros servicios y personalizar tu experiencia con nosotros.</li>
            </ul>
            <br>
            <strong>3. Retención de Datos</strong>
            <br>
            Conservaremos tus datos personales durante el tiempo que sea necesario para cumplir con los fines descritos en estos términos y condiciones, a menos que la ley exija o permita un período de retención más largo.
            <br><br>
            <strong>4. Compartición de Datos</strong>
            <br>
            No compartimos tus datos personales con terceros, excepto cuando sea necesario para cumplir con las obligaciones legales o con tu consentimiento explícito.
            <br><br>
            <strong>5. Seguridad de los Datos</strong>
            <br>
            Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tus datos personales contra el acceso no autorizado, la divulgación, alteración o destrucción.
            <br><br>
            <strong>6. Derechos de los Usuarios</strong>
            <br>
            Tienes derecho a acceder, rectificar, eliminar u oponerte al uso de tus datos personales. Para ejercer estos derechos, puedes ponerte en contacto con nosotros a través del correo electrónico <a href="mailto:contacto@portalciep.com.uy">contacto@portalciep.com.uy</a>.
            <br><br>
            <strong>7. Contacto</strong>
            <br>
            Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad o el manejo de tus datos personales, por favor contáctanos a:
            <br>
            Centro Integral de Educación Profesional (CIEP)
            <br>
            Correo electrónico: <a href="mailto:contacto@portalciep.com.uy">contacto@portalciep.com.uy</a>
            <br>
            Teléfono: 096565289
        </p>
        <button class="CIEP_GenericBTN" id="closeModal">Cerrar</button>
    </div>
        `;
            // ======================================= [mostrar terminos y condiciones] ======================================
            const termsLink = document.getElementById('termsLink');
            const termsModal = document.getElementById('termsModal');
            const termsOverlay = document.getElementById('termsOverlay');
            const closeModal = document.getElementById('closeModal');

            // Mostrar modal
            termsLink.addEventListener('click', function(event) {
                event.preventDefault();
                termsModal.style.display = 'block';
                termsOverlay.style.display = 'block';
            });

            // Cerrar modal
            closeModal.addEventListener('click', function() {
                termsModal.style.display = 'none';
                termsOverlay.style.display = 'none';
            });

            // Cerrar modal al hacer clic en el overlay
            termsOverlay.addEventListener('click', function() {
                termsModal.style.display = 'none';
                termsOverlay.style.display = 'none';
            });
        fadein()
        gobacktocategory(categoria)

        // Inserta el script de reCaptcha
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        document.body.appendChild(script);

        const contactForm = document.getElementById('contact-form');
        const SUBMITBTN =  document.getElementById('send_email_BTN');
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            SUBMITBTN.disabled = true;
            const recaptchaResponse = grecaptcha.getResponse();

            if (recaptchaResponse.length === 0) {
                alert('Por favor complete el reCAPTCHA.');
                SUBMITBTN.disabled = false;
                return;
            }

            const serviceID = 'service_zpo793f'; // Reemplaza con tu Service ID de EmailJS
            const templateID = 'template_yvmend4'; // Reemplaza con tu Template ID de EmailJS
            var templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                department: "null",
                work_status:"null",
                family: "null",
                ed_level: "null",
                availability: document.getElementById('availability').value,
                goals: "null",
                course: document.getElementById('course').value,
                course_interest: "null",
                birthdate: "null",
                'g-recaptcha-response': recaptchaResponse // Agrega el token de reCaptcha
            };

            emailjs.init('YwXhxnIo10hShizFM');
            emailjs.send(serviceID, templateID, templateParams)
                .then((response) => {
                    console.log('Correo enviado con éxito!', response.status, response.text);
                    alert('Se ha postulado con éxito!\n\nGracias por su interés en nuestros cursos.\nA la brevedad, un representante de CIEP se pondrá en contacto con usted para los siguientes pasos.');
                    document.getElementById('contact-form').reset();
                    SUBMITBTN.disabled = false;
                }, (error) => {
                    console.log('Error al enviar el correo:', error);
                    alert('Error al enviar el correo. Por favor, contactenos via email a: CIEP@capacitaciones.com si el error persiste.');
                    SUBMITBTN.disabled = false;
                });
        });
    })
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
    DINAMICCONTENT.scrollTo (0, 0);
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

    function checkMenuWidth() {
        const menu = document.getElementById('menu');
        const buttons = document.querySelectorAll('#menu .menu_BTN');
        const BMbuttons = document.querySelectorAll('#burguer_menu .menu_BTN');
        const BMIMGCONTAINER = document.getElementById('img_bm_container');


        if (menu.offsetWidth < 600) {
            buttons.forEach(button => button.style.display = 'none');
        } else {
            buttons.forEach(button => button.style.display = 'inline-block');
        }

        if (menu.offsetWidth >= 600) {
            BMIMGCONTAINER.style.display = 'none';
            BMbuttons.forEach(button => button.style.display = 'none');
        } else {
            BMIMGCONTAINER.style.display = 'inline-block';
            BMbuttons.forEach(button => button.style.display = 'inline-block');
        }
    }
    function addMenuBTNListener(){
        const BMbuttons = document.querySelectorAll('#burguer_menu .menu_BTN');
        const BMBTN = document.getElementById("img_bm_container");
        const BMCONTENT = document.getElementById("burguer_menu");
        BMbuttons.forEach(button => {
            button.addEventListener("click", () => {
                BMCONTENT.style.maxHeight = '0';
            });
        });

        BMBTN.addEventListener("click", () => {
            if (BMCONTENT.style.maxHeight === '0px' || BMCONTENT.style.maxHeight === '') {
                BMCONTENT.style.maxHeight = BMCONTENT.scrollHeight * 1.3 + 'px';
            } else {
                BMCONTENT.style.maxHeight = '0';
            }
        });
    }

    window.addEventListener('resize', checkMenuWidth, addMenuBTNListener);
    checkMenuWidth();
    addMenuBTNListener()
});


document.addEventListener("DOMContentLoaded", (event) => {
    Array.from(INICIOBTNS).forEach(button => {
        button.addEventListener("click", async()=>{
            activebtn(button);
            await fadeout();
            DINAMICCONTENT.innerHTML = ``;
            DINAMICCONTENT.innerHTML = `    
            <div id="inicio_content">

            <div class="curso_content_container">
                <h2>Bienvenidos al Centro Académico CIEP.</h2>
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
                            <p class="MVV_content" id="vision_content">Somos un centro educativo referente en lo que respecta a desarrollo profesional y humano buscamos ser referentes gracias a nuestra metodología y contribuir en el desarrollo social y el paso a paso de nuestra comunidad, simultáneamente establecernos como un Instituto bien considerado en el mercado laboral, con el propósito de convertirnos en un referente positivo para la empleabilidad de nuestros egresados.</p>
                        </div>
                    </div>

                    <div class="MVV_card" id="valores_card">
                        <img src="./images/Valores_icon.png" class="MVV_img" alt="Curso 3">
                        <div class="MVV-body">
                            <p class="MVV_title">Valores</p>
                            <ul class="MVV_content" id="valores_content">
                                <li>Pasión: Como la fuerza motivadora que impulsa el logro de metas y aspiraciones.</li>
                                <li>Lealtad: Como el compromiso y la coherencia en nuestras decisiones basadas en principios fundamentales.</li>
                                <li>Transparencia: Como la confianza generada por el aprendizaje continuo, la estabilidad y el crecimiento personal y profesional.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div class="left_img_container">
                
                <div class="content_obj_valag">
                <p class="MVV_title">Objetivos</p>
                <ul>
                    <li>Brindar  una educación actualizada que fomente el máximo desarrollo de las competencias laborales específicas del estudiante para facilitar su ingreso efectivo al mercado laboral formal.</li>
                    <li>Estimular el interés del estudiante en la formación continua y la actualización conforme a las demandas del mercado laboral.</li>
                    <li>Fortalecer las habilidades interpersonales del estudiante para mejorar su competitividad en el mercado laboral, aumentando así su empleabilidad de manera significativa.</li>
                </ul>
                </div>

                <div class="img_obj_valag">
                </div>

                <div class="content_obj_valag">
                <p class="MVV_title">Nuestro Valor Agregado</p>
                <p class="infos obj_valag_content_p">
                Nuestra principal diferencia es que nuestros cursos incluyen un módulo de Competencias Transversales, diseñado para desarrollar habilidades blandas como manejo de emociones, iniciativa, trabajo en equipo y comunicación efectiva. Este enfoque promueve el crecimiento integral de cada individuo, integrando capacidades humanas y profesionales.
                <br>Además, contamos con un sistema de Gestión de Situaciones Emergentes en todos los procesos educativos. Un equipo especializado colabora con los estudiantes para identificar y resolver conflictos en su vida, personalidad o entorno, asegurando la continuidad y efectividad del proceso educativo.
                </p>
                </div>
                    
            
            </div>

            <div class="little_div">

            </div>

            </div>
            `;
            addMVVEventListeners();
            fadein();
        });
    });
    Array.from(INICIOBTNS).forEach(elemento => {
        elemento.click();
    });
});

async function cargarDatosCursos(categoria) {
    try {
        const response = await fetch(`../Json/cursos_${categoria}.json`);
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
            <p class="duration-card-text">[Duracion: ${curso.duracion}]</p>
            <div class="custom-card-body-cursos">
                <p class="custom-card-text-cursos">${curso.descripcion}</p>
                
            </div>
            <p class="price-card-text">${curso.precio} </p>
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
                        <input type="button" class="CIEP_GenericBTN" id="application_BTN" value="Aplicar al curso">
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
                        <div class="pdf_container_title">
                                <p class="disclaimer">
                                 Nota: La documentación y el programa están sujetos a posibles cambios efectuados a discreción por el docente. <br>Por favor, revise regularmente para estar al tanto de cualquier actualización.
                                </p>
                        </div>
                    </div>
                    
                    <div class="little_div"></div>
                </div>
            `;
            fadein();
            gobacktocategory(categoria);
            showapplicationform(curso.titulo, categoria)
           
        });

        cursosContainer.appendChild(cursoElement);
    });

    fadein();
    goback(CURSOSBTN);
}


document.addEventListener("DOMContentLoaded", (event) => {
    Array.from(CURSOSBTNS).forEach(button => {
        button.addEventListener("click", async () => {
        activebtn(button);
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
                    <h1>Becas de apoyo</h1>
                    <img src="./images/Becas_titleBG.png" id="becas_title_img" alt="becasTitleBG">
                    <h1 id="becas_title_whitebg">Becas de apoyo</h1>
                </div>
            </div>
            <div class="little_div">
            </div>
        `;
        const BECASBTN = document.getElementById("becas_BTN");
BECASBTN.addEventListener("click", async () => {
    await fadeout();
    DINAMICCONTENT.innerHTML = ``;
    DINAMICCONTENT.innerHTML = `
    <div class="curso_content_container">
        <img src="./images/Back_BTN.png" id="goback_BTN" alt="gobackBTN">
        <h2 class="curso_content_title">Becas</h2>
    </div>
    <div class="left_img_container_becas">
        <div class="left_content_img_becas">
        </div>
        <p class="infos left_content_p_becas">CIEP ofrece becas a estudiantes que necesitan apoyo financiero para continuar su educación. Estas están diseñadas para ayudar a aquellos que demuestran un compromiso académico y tienen una situación económica que justifica la asistencia. Los descuentos disponibles van de un 20% a un 60%, dependiendo de la necesidad del alumno y su desempeño académico. Para aplicar, los estudiantes deben completar un formulario detallando su situación financiera y los objetivos educativos. Las solicitudes son revisadas por un comité que evalúa cada caso individualmente. Estas becas permiten a los alumnos concentrarse en sus estudios sin la preocupación constante de los costos. El Centro CIEP se compromete a brindar oportunidades educativas a todos, independientemente de su situación económica.</p>    
    </div>
    <div class="curso_content_container">
        <h2 class="curso_content_title">Formulario de Postulación para Becas</h2>
    </div>
    <div class="curso_content_container">
        <div class="curso_content_p">
            <div class="contact_form_container">
                <form id="contact-form">
                    <label for="course">Curso al que quiere aplicar:</label>
                    <select id="course" name="course" required>
                        <option value="" disabled selected>--Seleccione uno--</option>
                        <option value="Agente de ventas">Agente de ventas</option>
                        <option value="Marketing Digital">Marketing Digital</option>
                        <option value="Asesor comercial">Asesor comercial</option>
                        <option value="Asistente Administrativo">Asistente Administrativo</option>
                        <option value="Aux administrativo esp contable">Aux administrativo esp contable</option>
                        <option value="Aux administrativo esp RRHH">Aux administrativo esp RRHH</option>
                        <option value="Aux administrativo">Aux administrativo</option>
                        <option value="Diseño grafico">Diseño grafico</option>
                        <option value="Diseño web">Diseño web</option>
                        <option value="Ejecutivo de ventas">Ejecutivo de ventas</option>
                        <option value="Secretariado comercial">Secretariado comercial</option>
                    </select>
                    <br>
                    <label for="name">Nombre Completo:</label>
                    <input type="text" id="name" name="name" required>
                    <br>
                    <label for="birthdate">Fecha de Nacimiento:</label>
                    <input type="date" id="birthdate" name="birthdate" required>
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
                    <label for="availability">Disponibilidad Horaria:</label>
                    <select id="availability" name="availability" required>
                        <option value="" disabled selected>--Seleccione uno--</option>
                        <option value="Matutino">Matutino</option>
                        <option value="Vespertino">Vespertino</option>
                        <option value="Nocturno">Nocturno</option>
                    </select>
                    <br>
                    <span>
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
                    </span>
                    <br>
                    <span>
                        <label for="ed_level">Nivel Educativo:</label>
                        <br>
                        <input type="radio" id="primary_incomplete" name="ed_level" value="Primaria incompleta" required>
                        <label for="primary_incomplete">Primaria incompleta</label>
                        <br>
                        <input type="radio" id="primary_complete" name="ed_level" value="Primaria completa" required>
                        <label for="primary_complete">Primaria completa</label>
                        <br>
                        <input type="radio" id="basic_cycle" name="ed_level" value="Ciclo básico culminado" required>
                        <label for="basic_cycle">Ciclo básico culminado</label>
                        <br>
                        <input type="radio" id="high_school" name="ed_level" value="Bachillerato culminado" required>
                        <label for="high_school">Bachillerato culminado</label>
                        <br>
                        <input type="radio" id="tertiary_incomplete" name="ed_level" value="Terciario incompleto" required>
                        <label for="tertiary_incomplete">Terciario incompleto</label>
                        <br>
                        <input type="radio" id="tertiary_complete" name="ed_level" value="Terciario culminado" required>
                        <label for="tertiary_complete">Terciario culminado</label>
                    </span>
                    <br>
                    <label for="goals">¿Cuáles son sus principales metas y objetivos? ¿Cómo se ve de aquí a 5 años? ¿Cómo se ve de aquí a 10 años? ¿Qué cosas le gustaría hacer o tener?:</label>
                    <textarea id="goals" name="goals" required></textarea>
                    <br>
                    <span>
                        <label for="course_interest">¿Cuál es tu principal interés sobre el curso?</label>
                        <br>
                        <input type="radio" id="get_job" name="course_interest" value="conseguir trabajo" required>
                        <label for="get_job">Conseguir trabajo</label>
                        <br>
                        <input type="radio" id="change_job" name="course_interest" value="cambiar el trabajo actual" required>
                        <label for="change_job">Cambiar el trabajo actual</label>
                        <br>
                        <input type="radio" id="start_project" name="course_interest" value="emprender mi propio proyecto" required>
                        <label for="start_project">Emprender mi propio proyecto</label>
                        <br>
                        <input type="radio" id="course_content" name="course_interest" value="el contenido del curso" required>
                        <label for="course_content">El contenido del curso</label>
                    </span>
                    <br>
                    <div>
                        <input type="checkbox" id="terms" name="terms" required>
                        <label for="terms">He leído y acepto los <a href="#" id="termsLink">términos y condiciones</a></label>
                    </div>
                    <br>
                    <div class="g-recaptcha" data-sitekey="6Ldg6PEpAAAAAEUIsSi59w0Zb1HNtz619siwvFHy"></div>
                    <br>
                    <button type="submit" id="send_email_BTN">Enviar</button>
                </form>
            </div>
        </div>
    </div>
    <div class="curso_content_container">
        <h2 class="curso_content_title"></h2>
    </div>
    <div class="custom-card-group-cursos" id="cursos-container"></div>
    <div id="termsOverlay"></div>

    <!-- Modal for the terms and conditions -->
    <div id="termsModal">
        <h2>Términos y Condiciones</h2>
        <p>
            Estos términos y condiciones explican cómo el Centro Integral de Educación Profesional (CIEP) recopila, usa y protege la información personal que nos proporcionas a través de nuestros formularios de contacto.
            <br><br>
            <strong>1. Información que Recopilamos</strong>
            <br>
            Recopilamos los siguientes datos personales:
            <ul>
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Fecha de nacimiento</li>
                <li>Nivel Educativo</li>
                <li>Departamento</li>
            </ul>
            <br>
            <strong>2. Finalidad de la Recopilación de Datos</strong>
            <br>
            Usamos la información recopilada para los siguientes fines:
            <ul>
                <li>Ponernos en contacto contigo para proporcionarte información sobre becas estudiantiles.</li>
                <li>Enviarte información relevante sobre nuestros cursos y programas educativos.</li>
                <li>Mejorar nuestros servicios y personalizar tu experiencia con nosotros.</li>
            </ul>
            <br>
            <strong>3. Retención de Datos</strong>
            <br>
            Conservaremos tus datos personales durante el tiempo que sea necesario para cumplir con los fines descritos en estos términos y condiciones, a menos que la ley exija o permita un período de retención más largo.
            <br><br>
            <strong>4. Compartición de Datos</strong>
            <br>
            No compartimos tus datos personales con terceros, excepto cuando sea necesario para cumplir con las obligaciones legales o con tu consentimiento explícito.
            <br><br>
            <strong>5. Seguridad de los Datos</strong>
            <br>
            Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tus datos personales contra el acceso no autorizado, la divulgación, alteración o destrucción.
            <br><br>
            <strong>6. Derechos de los Usuarios</strong>
            <br>
            Tienes derecho a acceder, rectificar, eliminar u oponerte al uso de tus datos personales. Para ejercer estos derechos, puedes ponerte en contacto con nosotros a través del correo electrónico <a href="mailto:contacto@ciep.edu.uy">contacto@ciep.edu.uy</a>.
            <br><br>
            <strong>7. Contacto</strong>
            <br>
            Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad o el manejo de tus datos personales, por favor contáctanos a:
            <br>
            Centro Integral de Educación Profesional (CIEP)
            <br>
            Correo electrónico: <a href="mailto:contacto@portalciep.com.uy">contacto@portalciep.com.uy</a>
            <br>
            Teléfono: 096565289
        </p>
        <button class="CIEP_GenericBTN" id="closeModal">Cerrar</button>
    </div>
`; 
            // ======================================= [mostrar terminos y condiciones] ======================================
            const termsLink = document.getElementById('termsLink');
            const termsModal = document.getElementById('termsModal');
            const termsOverlay = document.getElementById('termsOverlay');
            const closeModal = document.getElementById('closeModal');

            // Mostrar modal
            termsLink.addEventListener('click', function(event) {
                event.preventDefault();
                termsModal.style.display = 'block';
                termsOverlay.style.display = 'block';
            });

            // Cerrar modal
            closeModal.addEventListener('click', function() {
                termsModal.style.display = 'none';
                termsOverlay.style.display = 'none';
            });

            // Cerrar modal al hacer clic en el overlay
            termsOverlay.addEventListener('click', function() {
                termsModal.style.display = 'none';
                termsOverlay.style.display = 'none';
            });

            fadein();
            goback(CURSOSBTN);
            // ======================================= [Enviar correo formulario] ======================================
            // Inserta el script de reCaptcha
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js';
            document.body.appendChild(script);

            // ======================================= [Enviar correo formulario] ======================================
            const contactForm = document.getElementById('contact-form');
            const SUBMITBTN =  document.getElementById('send_email_BTN');
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                SUBMITBTN.disabled = true;

                // Verificar el reCaptcha
                const recaptchaResponse = grecaptcha.getResponse();

                if (recaptchaResponse.length === 0) {
                    alert('Por favor complete el reCAPTCHA.');
                    SUBMITBTN.disabled = false;
                    return;
                }

                // Envío del formulario
                const serviceID = 'service_zpo793f'; // ID de EmailJS
                const templateID = 'template_yvmend4'; // ID de EmailJS
                var templateParams = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    department: document.getElementById('department').value,
                    work_status: document.querySelector('input[name="work_status"]:checked').value,
                    ed_level: document.querySelector('input[name="ed_level"]:checked').value,
                    availability: document.getElementById('availability').value,
                    goals: document.getElementById('goals').value,
                    course: document.getElementById('course').value,
                    course_interest: document.querySelector('input[name="course_interest"]:checked').value,
                    birthdate: document.getElementById('birthdate').value,
                    'g-recaptcha-response': recaptchaResponse // Agrega el token de reCaptcha
                };

                emailjs.init('YwXhxnIo10hShizFM');
                emailjs.send(serviceID, templateID, templateParams)
                    .then((response) => {
                        console.log('Correo enviado con éxito!', response.status, response.text);
                        alert('Correo enviado con éxito!\n\nGracias por ponerse en contacto con nosotros.\nMuy pronto un agente de CIEP se pondra en contacto con usted \npara los siguientes pasos.');
                        document.getElementById('contact-form').reset();
                        SUBMITBTN.disabled = false;
                    }, (error) => {
                        console.log('Error al enviar el correo:', error);
                        alert('Error al enviar el correo.');
                        SUBMITBTN.disabled = false;
                    });
            });
            // ======================================= [Enviar correo formulario] ======================================
        })
        fetch('./Json/categorias.json')
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
    });
});

//boton de Servicios, lo que muestra en el contenido dinamico al presionar el boton de servicios
document.addEventListener("DOMContentLoaded", (event) => {
    Array.from(SERVICIOSBTNS).forEach(button => {
        button.addEventListener("click", async() => {
            activebtn(button);
            await fadeout();  
            DINAMICCONTENT.innerHTML = ``;
            DINAMICCONTENT.innerHTML = `
            <div class="custom-card-group">
            <div class="custom-card" id="empresa-card">
                <img src="images/empresarial.png" class="custom-card-img-top" alt="Empresarial">
                <div class="custom-card-body">
                    <h5 class="custom-card-title">Empresa</h5>
                    <p class="custom-card-text">Capacita a tus empleados en las habilidades blandas y técnicas necesarias para lograr un mejor desarrollo de su labor.</p>
                </div>
            </div>
            <div class="custom-card" id="emprendedor-card">
                <img src="images/emprendimiento.jpg" class="custom-card-img-top" alt="Emprendedores">
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
            document.getElementById("empresa-card").addEventListener("click", async() => {
                await fadeout();
                DINAMICCONTENT.innerHTML = ``;
                DINAMICCONTENT.innerHTML = `
                <div class="capacitacion">
                <div class="curso_content_container">
                <img src="./images/Back_BTN.png" id="goback_BTN" alt="gobackBTN">
                <h2 class="curso_content_title">Capacitación Empresarial</h2>
            </div>
                    <p class="capacitacion_info">Los programas de capacitación estan diseñados para mejorar tanto las habilidades blandas como las habilidades técnicas de los empleados. Nuestros cursos se diseñan espeficicamente para abordar las necesidades únicas de cada empresa, asegurando que sus empleados estén equipados con las herramientas necesarias para mejorar su rendimiento y productividad. </p>
                    <div class="container">
                        <div class="habilidadesB">
                            <h2 class="titulos_habilidad">Habilidades Blandas</h2>
                            <p class="info_habilidades">Son esenciales para la colaboración efectiva y el liderazgo dentro de cualquier organización. Nuestros programas de capacitación en habilidades blandas incluyen cursos como:</p>
                            <ul>
                                <li>Comunicación Efectiva</li>
                                <li>Liderazgo y Gestión de Equipos</li>
                                <li>Inteligencia Emocional</li>
                            </ul>
                        </div>
                        <div class="habilidadesD">
                            <h2 class="titulos_habilidad">Habilidades Tecnicas</h2>
                            <p class="info_habilidades">Son fundamentales para el desempeño específico de tareas laborales y para la adaptación a nuevas tecnologías y metodologías. Nuestros programas incluyen:</p>
                            <ul>
                                <li>Operador de maquinaria</li>
                                <li>Herramientas informáticas</li>
                                <li>Control de Calidad</li>
                            </ul>
                        </div>
                    </div>
                </div>
                    `;
                    fadein()
                    goback(SERVICIOSBTN)
            });
            document.getElementById("emprendedor-card").addEventListener("click", async () => {
                await fadeout();
                DINAMICCONTENT.innerHTML = ``;
                DINAMICCONTENT.innerHTML = `
                <div class="emprendedor">
                <div class="curso_content_container">
                <img src="./images/Back_BTN.png" id="goback_BTN" alt="gobackBTN">
                <h2 class="curso_content_title">Soporte a Emprendedores</h2>
            </div>
        
                    <p class="emprendedor_info">Aquí en nuestra academia ofrecemos asistencia integral para emprendedores que buscan llevar sus proyectos al siguiente nivel.
                    Entendemos que el camino del emprendimiento puede ser desafiante, 
                    por lo que nos comprometemos a proporcionar el soporte necesario para que los emprendedores puedan desarrollar y consolidar sus ideas con éxito.</p>
                    <div class="emprendedor_lista">
                    <p class="emprendedor_info2">  Nuestra academia se dedica a proporcionar un soporte integral y asistencia personalizada para proyectos emergentes, ayudando a los emprendedores a transformar sus ideas en planes exitosos. Ofrecemos un entorno de aprendizaje dinámico y recursos esenciales que facilitan el crecimiento y desarrollo de nuevos negocios.</p>
                        <ul>
                        <li>Asesoramiento y acompañamiento en la gestion de tu proyecto</li>
                        <li>Talleres sobre desarrollo de estrategias</li>
                        <li>Acceso a redes de contactos</li>               
                    </ul>
                </div>
                </div>
                    `;
                    fadein()
                    goback(SERVICIOSBTN)
            });

            document.getElementById("institucion-card").addEventListener("click", async() => {
                await fadeout();
                DINAMICCONTENT.innerHTML = ``;
                DINAMICCONTENT.innerHTML = `
                    <div class="institucion">
                    <div class="curso_content_container">
                    <img src="./images/Back_BTN.png" id="goback_BTN" alt="gobackBTN">
                    <h2 class="curso_content_title">Colaboración con Instituciones</h2>
                </div>

                    <p class="institucion_info">Esta sección está dedicada a las instituciones educativas y profesionales que desean incluir sus cursos o 
                    carreras dentro de nuestros programas de becas.
                    Proveemos información sobre algunas de las ventajas de ser parte de nuestra comunidad </p>
                    <div class="container">
                        <div class="institucion_lista1">
                            <p class="info_habilidades">Establecer una colaboración con un ente becario 
                            representa una oportunidad significativa para las instituciones educativas. 
                            Estas asociaciones no solo facilitan el acceso a recursos financieros cruciales para los estudiantes, 
                            sino que también mejoran el prestigio institucional </p>
                            <ul>
                                <li>Incremento en el acceso y flujo de estudiantes</li>
                                <li>Mejora en la reputación y competitividad del instituto</li>
                                <li>Fomento de la inclusión y la equidad</li>
                            </ul>
                        </div>
                        <div class="institucion_lista2">
                            <p class="info_habilidades">Involucrarse como mentor en un ente becario ofrece a los profesores numerosas oportunidades
                            para enriquecer su carrera profesional y académica. Esta colaboración no solo permite a los docentes acceder a valiosos recursos
                            y ampliar su red de contactos,
                            sino que también les brinda la oportunidad de hacer un impacto significate</p>
                            <ul>
                                <li>Enriquecimiento del currículo académico</li>
                                <li>Acceso a recursos y financiamiento para proyectos</li>
                                <li>Impacto positivo en la comunidad educativa</li>
                            </ul>
                        </div>
                    </div>
                </div>        
                    `;
                    fadein()
                    goback(SERVICIOSBTN)
            });
            fadein()
        });
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

//boton de colaboradores, lo que muestra en el contenido dinamico al presionar el boton de colaboradores

document.addEventListener("DOMContentLoaded", async (event) => {
    Array.from(CONTACTOBTNS).forEach(button => {
        button.addEventListener("click", async () => {
            activebtn(button);
            await fadeout();
            DINAMICCONTENT.innerHTML = ``;
            DINAMICCONTENT.innerHTML = `
            <div class="curso_container">
                <div class="curso_content_container">
                    <h2 class="curso_content_title">Contacto</h2>
                </div>
                <div class="curso_content_details">
                    <div class="contact_container">
                        <div class="contact_info_container">
                            <ul>
                                <li><h4 class="curso_content_title">Contacto Empresa</h4>
                                    <p>Si quieres capacitar a tu personal, contactanos via email a Contacto@portalciep.com.uy</p>
                                </li>
                                <li><h4 class="curso_content_title">Contacto Estudiante</h4>
                                    <p>Si tienes algun problema para postularte a las becas o estas teniendo problemas durante tu curso, contactanos via email a Bedelia@portalciep.com.uy</p>
                                </li>
                                <li><h4 class="curso_content_title">Contacto Profesorado</h4>
                                    <p>Si quieres formar parte de nuestro equipo de profesores e impartir tus cursos en nuestra academia, contactanos via email a Contacto@portalciep.com.uy</p>
                                </li>
                                <div id="media_IMG_Container">
                                    <img id="cellphone_BTN" class="media_BTN" src="images/Cellphone_icon.png" alt="">
                                    <div id="cellphone_number_Container">
                                        <p>096565289</p>
                                    </div>
                                    <img id="instagram_BTN" class="media_BTN" src="images/Instagram_icon.png" alt="">
                                    <img id="facebook_BTN" class="media_BTN" src="images/Facebook_icon.png" alt="">
                                    <img id="linkedin_BTN" class="media_BTN" src="images/Linkedin_icon.png" alt="">
                                </div>
                            </ul>
                        </div>
                        <div class="contact_form_container_contacto">
                            <form id="contact-form-contacto">
                                <label for="name">Nombre Completo:</label>
                                <input type="text" id="name" name="name" required>
                                <br>
                                <label for="email">Correo Electrónico:</label>
                                <input type="email" id="email" name="email" required>
                                <br>
                                <label for="message">Mensaje:</label>
                                <textarea id="message" name="message" required></textarea>
                                <br>
                                <div>
                                    <input type="checkbox" id="terms" name="terms" required>
                                    <label for="terms">He leído y acepto los <a href="#" id="termsLink">términos y condiciones</a></label>
                                </div>
                                <br>
                                <div class="g-recaptcha" data-sitekey="6Ldg6PEpAAAAAEUIsSi59w0Zb1HNtz619siwvFHy"></div>
                                <br>
                                <button type="submit" id="send_email_BTN">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="little_div"></div>
            </div>
                <div id="termsOverlay"></div>

    <!-- Modal for the terms and conditions -->
    <div id="termsModal">
        <h2>Términos y Condiciones</h2>
        <p>
            Estos términos y condiciones explican cómo el Centro Integral de Educación Profesional (CIEP) recopila, usa y protege la información personal que nos proporcionas a través de nuestros formularios de contacto.
            <br><br>
            <strong>1. Información que Recopilamos</strong>
            <br>
            Recopilamos los siguientes datos personales:
            <ul>
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
            </ul>
            <br>
            <strong>2. Finalidad de la Recopilación de Datos</strong>
            <br>
            Usamos la información recopilada para los siguientes fines:
            <ul>
                <li>Ponernos en contacto contigo para proporcionarte información sobre becas estudiantiles.</li>
                <li>Enviarte información relevante sobre nuestros cursos y programas educativos.</li>
                <li>Mejorar nuestros servicios y personalizar tu experiencia con nosotros.</li>
            </ul>
            <br>
            <strong>3. Retención de Datos</strong>
            <br>
            Conservaremos tus datos personales durante el tiempo que sea necesario para cumplir con los fines descritos en estos términos y condiciones, a menos que la ley exija o permita un período de retención más largo.
            <br><br>
            <strong>4. Compartición de Datos</strong>
            <br>
            No compartimos tus datos personales con terceros, excepto cuando sea necesario para cumplir con las obligaciones legales o con tu consentimiento explícito.
            <br><br>
            <strong>5. Seguridad de los Datos</strong>
            <br>
            Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tus datos personales contra el acceso no autorizado, la divulgación, alteración o destrucción.
            <br><br>
            <strong>6. Derechos de los Usuarios</strong>
            <br>
            Tienes derecho a acceder, rectificar, eliminar u oponerte al uso de tus datos personales. Para ejercer estos derechos, puedes ponerte en contacto con nosotros a través del correo electrónico <a href="mailto:contacto@portalciep.com.uy">contacto@portalciep.com.uy</a>.
            <br><br>
            <strong>7. Contacto</strong>
            <br>
            Si tienes alguna pregunta o inquietud sobre nuestra política de privacidad o el manejo de tus datos personales, por favor contáctanos a:
            <br>
            Centro Integral de Educación Profesional (CIEP)
            <br>
            Correo electrónico: <a href="mailto:contacto@portalciep.com.uy">contacto@portalciep.com.uy</a>
            <br>
            Teléfono: 096565289
        </p>
        <button class="CIEP_GenericBTN" id="closeModal">Cerrar</button>
    </div>
            `;
            // ======================================= [mostrar terminos y condiciones] ======================================
            const termsLink = document.getElementById('termsLink');
            const termsModal = document.getElementById('termsModal');
            const termsOverlay = document.getElementById('termsOverlay');
            const closeModal = document.getElementById('closeModal');

            // Mostrar modal
            termsLink.addEventListener('click', function(event) {
                event.preventDefault();
                termsModal.style.display = 'block';
                termsOverlay.style.display = 'block';
            });

            // Cerrar modal
            closeModal.addEventListener('click', function() {
                termsModal.style.display = 'none';
                termsOverlay.style.display = 'none';
            });

            // Cerrar modal al hacer clic en el overlay
            termsOverlay.addEventListener('click', function() {
                termsModal.style.display = 'none';
                termsOverlay.style.display = 'none';
            });

            // Inserta nuevamente el script del reCaptcha
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js';
            document.body.appendChild(script);

            const CELPHONEBTN = document.getElementById("cellphone_BTN");
            const INSTAGRAMBTN = document.getElementById("instagram_BTN");
            const FACEBOOKBTN = document.getElementById("facebook_BTN");
            const LINKEDINBTN = document.getElementById("linkedin_BTN");

            CELPHONEBTN.addEventListener("click", () => {
                const cellphoneNumberContainer = document.getElementById("cellphone_number_Container");
                cellphoneNumberContainer.classList.toggle("expanded");
            });
            INSTAGRAMBTN.addEventListener("click", () => {
                window.open("https://www.instagram.com/institutociep/", "_blank"); 
            }); 
            FACEBOOKBTN.addEventListener("click", () => {
                window.open("https://www.facebook.com/profile.php?id=61560180855472", "_blank"); 
            });
            LINKEDINBTN.addEventListener("click", () => {
                window.open("https://www.linkedin.com/company/instituto-ciep/", "_blank"); 
            });

            fadein();

            const contactForm = document.getElementById('contact-form-contacto');
            const SUBMITBTN = document.getElementById('send_email_BTN');

            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                SUBMITBTN.disabled = true;

                if (typeof grecaptcha !== 'undefined') {
                    const recaptchaResponse = grecaptcha.getResponse();

                    if (recaptchaResponse.length === 0) {
                        alert('Por favor, completa el reCAPTCHA.');
                        SUBMITBTN.disabled = false;
                        return;
                    }

                    const serviceID = 'service_zpo793f'; // Reemplaza con tu Service ID de EmailJS
                    const templateID = 'template_d4la3jq'; // Reemplaza con tu Template ID de EmailJS
                    var templateParams = {
                        name: document.getElementById('name').value,
                        email: document.getElementById('email').value,
                        message: document.getElementById('message').value,
                        'g-recaptcha-response': recaptchaResponse
                    };

                    emailjs.init('YwXhxnIo10hShizFM');
                    emailjs.send(serviceID, templateID, templateParams)
                        .then((response) => {
                            console.log('Correo enviado con éxito!', response.status, response.text);
                            alert('Correo enviado con éxito!\n\nGracias por ponerse en contacto con nosotros.\nMuy pronto un agente de CIEP se pondrá en contacto con usted para los siguientes pasos.');
                            document.getElementById('contact-form-contacto').reset();
                            grecaptcha.reset();
                            SUBMITBTN.disabled = false;
                        }, (error) => {
                            console.log('Error al enviar el correo:', error);
                            alert('Error al enviar el correo.');
                            SUBMITBTN.disabled = false;
                        });
                } else {
                    alert('reCAPTCHA no está disponible. Por favor, intenta nuevamente más tarde.');
                    SUBMITBTN.disabled = false;
                }
            });
        });
    });
});