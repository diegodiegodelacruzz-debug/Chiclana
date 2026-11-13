import './style.css'

const images = [
  'IMG-20261112-WA0051.jpg',
  'IMG-20261112-WA0052.jpg',
  'IMG-20261112-WA0057.jpg',
  'IMG-20261112-WA0058.jpg',
  'IMG-20261112-WA0059.jpg',
  'IMG-20261112-WA0061.jpg',
  'IMG-20261112-WA0062.jpg',
  'IMG-20261112-WA0063.jpg',
  'IMG-20261112-WA0064.jpg',
  'IMG-20261112-WA0065.jpg',
  'IMG-20261112-WA0066.jpg',
  'IMG-20261112-WA0067.jpg',
  'IMG-20261112-WA0068.jpg',
  'IMG-20261112-WA0069.jpg',
  'IMG-20261112-WA0070.jpg',
  'IMG-20261112-WA0071.jpg',
  'IMG-20261112-WA0072.jpg',
  'IMG-20261112-WA0073.jpg',
  'IMG-20261112-WA0074.jpg',
  'IMG-20261112-WA0075.jpg',
  'IMG-20261112-WA0076.jpg',
  'IMG-20261112-WA0077.jpg',
  'IMG-20261112-WA0078.jpg',
  'IMG-20261112-WA0079.jpg',
  'IMG-20261112-WA0080.jpg',
  'IMG-20261112-WA0081.jpg',
  'IMG-20261112-WA0084.jpg'
]

const videos = [
  'VID-20261112-WA0053.mp4',
  'VID-20261112-WA0054.mp4',
  'VID-20261112-WA0055.mp4',
  'VID-20261112-WA0082.mp4'
]

const services = [
  {
    n: '01', name: 'Inyección electrónica', tag: 'GESTIÓN ELECTRÓNICA DEL MOTOR',
    desc: 'El sistema de inyección es fundamental para el rendimiento, el consumo y el funcionamiento del motor. Trabajamos sobre el diagnóstico de sus componentes para identificar fallas y encontrar su origen, evitando reemplazos innecesarios.',
    detail: 'Revisamos sensores, actuadores, alimentación de combustible, señales electrónicas y parámetros de funcionamiento. Mediante un diagnóstico adecuado buscamos recuperar la respuesta del motor, lograr una marcha estable y optimizar su funcionamiento.',
    points: ['Diagnóstico de fallas electrónicas', 'Control de sensores y actuadores', 'Revisión del sistema de alimentación', 'Análisis de funcionamiento del motor']
  },
  {
    n: '02', name: 'Distribución', tag: 'SINCRONIZACIÓN Y PROTECCIÓN DEL MOTOR',
    desc: 'El sistema de distribución sincroniza el movimiento interno del motor. Su correcto estado es indispensable para evitar daños graves y conservar el funcionamiento preciso de cada componente.',
    detail: 'Realizamos tareas de revisión y mantenimiento del sistema, contemplando correas, tensores y elementos relacionados según las especificaciones del vehículo. Una intervención a tiempo ayuda a prevenir roturas y problemas de mayor complejidad.',
    points: ['Revisión del sistema de distribución', 'Reemplazo de correas y tensores', 'Control de componentes asociados', 'Verificación de sincronización']
  },
  {
    n: '03', name: 'Embragues', tag: 'TRANSMISIÓN DE POTENCIA',
    desc: 'El embrague permite transmitir la potencia del motor hacia la caja de cambios. Cuando presenta desgaste o fallas, puede generar vibraciones, dificultades para cambiar de marcha o pérdida de rendimiento.',
    detail: 'Evaluamos el funcionamiento del conjunto y sus componentes para determinar el origen del problema. Trabajamos para recuperar un acople progresivo, preciso y confiable, adaptado a las características de cada vehículo.',
    points: ['Evaluación del conjunto de embrague', 'Detección de patinamiento y desgaste', 'Revisión de componentes asociados', 'Reparación y reemplazo cuando corresponde']
  },
  {
    n: '04', name: 'Tren delantero', tag: 'ESTABILIDAD, DIRECCIÓN Y SEGURIDAD',
    desc: 'El tren delantero influye directamente en la estabilidad, la dirección y el comportamiento del vehículo. Los desgastes pueden provocar ruidos, vibraciones, desvíos y desgaste irregular de neumáticos.',
    detail: 'Inspeccionamos los componentes de dirección y suspensión para localizar holguras, deterioros y anomalías. El objetivo es recuperar un comportamiento firme, seguro y predecible en diferentes condiciones de circulación.',
    points: ['Control de rótulas y bujes', 'Revisión de suspensión y amortiguación', 'Inspección de dirección', 'Detección de ruidos y holguras']
  },
  {
    n: '05', name: 'Aire acondicionado', tag: 'CONFORT Y CLIMATIZACIÓN',
    desc: 'Un sistema de climatización eficiente proporciona confort y ayuda a mantener una buena visibilidad durante la conducción. Cuando enfría poco, pierde gas o presenta ruidos, necesita una revisión profesional.',
    detail: 'Realizamos diagnóstico, detección de posibles pérdidas, mantenimiento, reparación y carga de refrigerante de acuerdo con las características del sistema. Buscamos identificar la causa del problema antes de intervenir.',
    points: ['Diagnóstico de climatización', 'Detección de pérdidas', 'Mantenimiento y reparación', 'Carga de refrigerante según especificación']
  },
  {
    n: '06', name: 'Diagnóstico computarizado', tag: 'TECNOLOGÍA Y PRECISIÓN',
    desc: 'Los vehículos actuales integran múltiples módulos electrónicos que supervisan el funcionamiento de sus sistemas. El diagnóstico computarizado permite obtener información precisa para orientar una reparación.',
    detail: 'Analizamos códigos de falla y parámetros electrónicos para interpretar el comportamiento del vehículo. La lectura de una falla es el punto de partida: también es necesario verificar sus causas y realizar las comprobaciones correspondientes.',
    points: ['Lectura de códigos de avería', 'Análisis de parámetros en vivo', 'Identificación de fallas electrónicas', 'Verificación posterior a la reparación']
  },
  {
    n: '07', name: 'Arranques', tag: 'SISTEMA DE ENCENDIDO Y PARTIDA',
    desc: 'El motor de arranque es el encargado de poner en funcionamiento el motor del vehículo. Un arranque lento, intermitente o inexistente puede tener diferentes causas eléctricas o mecánicas.',
    detail: 'Revisamos el circuito y el conjunto de arranque para identificar el origen de la falla. Evaluamos sus conexiones y componentes para determinar la solución adecuada y recuperar un encendido confiable.',
    points: ['Diagnóstico del motor de arranque', 'Control de conexiones eléctricas', 'Detección de fallas de funcionamiento', 'Revisión de componentes asociados']
  },
  {
    n: '08', name: 'Alternadores', tag: 'GENERACIÓN Y CARGA ELÉCTRICA',
    desc: 'El alternador genera la energía eléctrica necesaria para alimentar los sistemas del vehículo y mantener cargada la batería. Una falla puede provocar dificultades de arranque y problemas eléctricos.',
    detail: 'Comprobamos el sistema de carga, las conexiones y el funcionamiento del alternador para detectar anomalías. Una evaluación correcta permite diferenciar una falla del alternador de otros problemas del circuito eléctrico.',
    points: ['Control del sistema de carga', 'Medición de tensión', 'Revisión de conexiones', 'Diagnóstico de fallas eléctricas']
  },
  {
    n: '09', name: 'Mecánica integral', tag: 'MANTENIMIENTO Y REPARACIÓN',
    desc: 'Cada vehículo necesita mantenimiento y atención adecuada para conservar su rendimiento y confiabilidad. Una revisión oportuna permite detectar problemas antes de que se conviertan en reparaciones mayores.',
    detail: 'Abordamos trabajos de mecánica general y mantenimiento, evaluando cada caso según el estado del vehículo y las recomendaciones del fabricante. Nuestro enfoque es encontrar la causa del inconveniente y explicar el trabajo necesario.',
    points: ['Mantenimiento preventivo', 'Revisión general del vehículo', 'Detección de anomalías mecánicas', 'Reparaciones según diagnóstico']
  }
]

const serviceCards = services.map(s => `
  <article class="service-card reveal">
    <div class="service-top"><span class="service-number">${s.n}</span><span class="service-tag">${s.tag}</span></div>
    <h3>${s.name}</h3>
    <p class="service-intro">${s.desc}</p>
    <p class="service-detail">${s.detail}</p>
    <ul>${s.points.map(p => `<li>${p}</li>`).join('')}</ul>
    <a class="service-link" href="#contacto">CONSULTAR ESTE SERVICIO <span>↗</span></a>
  </article>
`).join('')

const gallery = images.map((file, i) => `
  <button class="gallery-item reveal" data-image="/images/${file}" aria-label="Ampliar fotografía ${i + 1}">
    <img src="/images/${file}" alt="Trabajo realizado en Taller Chiclana ${i + 1}" loading="lazy">
    <span class="gallery-overlay"><b>VER TRABAJO</b><i>＋</i></span>
  </button>
`).join('')

const videoCards = videos.map((file, i) => `
  <article class="video-card reveal">
    <div class="video-frame">
      <video controls preload="none" playsinline poster="/images/portada-chiclana.jpg">
        <source src="/videos/${file}" type="video/mp4">
        Tu navegador no puede reproducir este video.
      </video>
      <span class="video-index">REGISTRO 0${i + 1}</span>
    </div>
    <div class="video-caption"><span>CHICLANA / WORKSHOP</span><b>TRABAJOS EN NUESTRO TALLER</b></div>
  </article>
`).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="site-shell">
    <div class="top-strip"><span>CHICLANA AUTOMOTRIZ</span><a class="top-contact" href="https://wa.me/5491157225578" target="_blank" rel="noopener noreferrer">WHATSAPP: +54 9 11 5722-5578 ↗</a><a class="top-address" href="https://www.google.com/maps/search/?api=1&query=Av.+Chiclana+3632%2C+CABA%2C+Argentina" target="_blank" rel="noopener noreferrer">AV. CHICLANA 3632, CABA ↗</a></div>

    <header class="header">
      <a href="#inicio" class="brand-mini">CHICLANA<span> / AUTOMOTRIZ</span></a>
      <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
      <nav class="nav">
        <a href="#inicio">INICIO</a><a href="#servicios">SERVICIOS</a><a href="#trabajos">TRABAJOS</a><a href="#videos">VIDEOS</a><a href="#contacto" class="nav-cta">CONTACTO ↗</a>
      </nav>
    </header>

    <main>
      <section class="logo-band" id="inicio">
        <img src="/images/logo-taller-chiclana.jpg" alt="Logo de Taller Chiclana">
      </section>

      <section class="hero">
        <div class="hero-content">
          <div class="eyebrow"><span></span> TALLER AUTOMOTRIZ · ESPECIALISTAS EN MECÁNICA</div>
          <h1>LA PRECISIÓN<br>HACE LA <em>DIFERENCIA.</em></h1>
          <p>Diagnóstico, tecnología y mecánica especializada. Cada detalle cuenta. Cada trabajo importa.</p>
          <div class="hero-actions"><a href="#servicios" class="btn-primary">DESCUBRÍ NUESTROS SERVICIOS <b>↗</b></a><a href="#trabajos" class="btn-ghost">VER NUESTROS TRABAJOS</a></div>
        </div>
        <div class="hero-bottom"><span>01 / MECÁNICA INTEGRAL</span><span>CALIDAD EN CADA INTERVENCIÓN</span><span class="hero-line"></span></div>
        <div class="hero-vertical">CHICLANA · AUTOMOTIVE WORKSHOP</div>
      </section>
      <section class="hero-image-section" aria-label="Frente del Taller Chiclana">
        <img src="/images/portada-chiclana.jpg" alt="Frente del Taller Chiclana">
      </section>

      <section class="intro section-pad">
        <div class="section-kicker">01 — NUESTRA FILOSOFÍA</div>
        <div class="intro-grid">
          <h2>NO SE TRATA<br>SOLO DE REPARAR.<br><span>SE TRATA DE HACERLO BIEN.</span></h2>
          <div class="intro-copy"><p class="lead">La mecánica exige conocimiento, precisión y atención en cada detalle.</p><p>En Chiclana trabajamos sobre los distintos sistemas del automóvil, combinando diagnóstico, experiencia técnica y procedimientos adecuados para cada necesidad. Desde una falla electrónica hasta una reparación mecánica, cada intervención comienza por entender qué le sucede al vehículo.</p><p>Nuestro objetivo es ofrecer soluciones claras, trabajos responsables y la atención que tu auto necesita para volver a funcionar correctamente.</p><a href="#contacto" class="text-link">HABLEMOS SOBRE TU VEHÍCULO <span>↗</span></a></div>
        </div>
      </section>

      <section class="services-section section-pad" id="servicios">
        <div class="section-heading">
          <div><div class="section-kicker">02 — CAPACIDAD TÉCNICA</div><h2>ESPECIALIDADES<span>.</span></h2></div>
          <p>Soluciones mecánicas y electrónicas para atender cada necesidad de tu vehículo con criterio técnico y precisión.</p>
        </div>
        <div class="services-grid">${serviceCards}</div>
      </section>

      <section class="statement">
        <div class="statement-mark">CH.</div>
        <div class="statement-content"><span>ENGINEERING THE DETAILS</span><h2>DETRÁS DE CADA<br>BUEN RESULTADO,<br><em>HAY UN BUEN TRABAJO.</em></h2></div>
        <div class="statement-side">MECÁNICA<br>DIAGNÓSTICO<br>PRECISIÓN</div>
      </section>

      <section class="gallery-section section-pad" id="trabajos">
        <div class="section-heading">
          <div><div class="section-kicker">03 — ADENTRO DEL TALLER</div><h2>CONOCÉ NUESTROS<br>TRABAJOS<span>.</span></h2></div>
          <p>Imágenes reales de nuestro espacio y de las tareas que realizamos. El trabajo habla por nosotros.</p>
        </div>
        <div class="gallery-grid">${gallery}</div>
        <div class="gallery-foot"><span>CHICLANA / WORKSHOP GALLERY</span><span>${images.length} FOTOGRAFÍAS <b>◆</b></span></div>
      </section>

      <section class="video-section section-pad" id="videos">
        <div class="section-heading">
          <div><div class="section-kicker">04 — EN ACCIÓN</div><h2>ASÍ TRABAJAMOS<span>.</span></h2></div>
          <p>Conocé más de cerca nuestro taller y mirá algunos de los trabajos realizados.</p>
        </div>
        <div class="video-grid">${videoCards}</div>
      </section>

      <section class="reasons section-pad">
        <div class="section-kicker">05 — EL COMPROMISO CHICLANA</div>
        <h2>UN BUEN DIAGNÓSTICO<br>ES EL PRIMER PASO.</h2>
        <div class="reasons-grid">
          <article><span>01</span><h3>DIAGNÓSTICO</h3><p>Buscamos identificar el origen de cada problema antes de definir una reparación.</p></article>
          <article><span>02</span><h3>CRITERIO TÉCNICO</h3><p>Cada vehículo requiere una evaluación acorde a sus características y necesidades.</p></article>
          <article><span>03</span><h3>ATENCIÓN</h3><p>Nos importa que conozcas qué necesita tu vehículo y qué trabajo se debe realizar.</p></article>
          <article><span>04</span><h3>COMPROMISO</h3><p>Trabajamos con responsabilidad, dedicación y atención en cada intervención.</p></article>
        </div>
      </section>

      <section class="contact-section" id="contacto">
        <div class="contact-bg">CHICLANA</div>
        <div class="contact-inner">
          <div class="section-kicker">06 — TU PRÓXIMO PASO</div>
          <h2>¿QUÉ NECESITA<br><em>TU VEHÍCULO?</em></h2>
          <p>Contanos qué problema presenta tu auto o qué servicio estás buscando. Estamos para ayudarte a encontrar el camino correcto.</p>
          <a href="https://wa.me/5491157225578?text=Hola%2C%20Chiclana.%20Quisiera%20consultar%20por%20mi%20veh%C3%ADculo." target="_blank" rel="noopener noreferrer" class="btn-primary contact-button" id="contact-button">CONSULTÁ POR WHATSAPP <b>↗</b></a>
          
          <div class="contact-details"><a class="contact-note" href="https://www.google.com/maps/search/?api=1&query=Av.+Chiclana+3632%2C+CABA%2C+Argentina" target="_blank" rel="noopener noreferrer">DIRECCIÓN: AV. CHICLANA 3632 · CABA · CÓMO LLEGAR ↗</a><a class="contact-note" href="https://wa.me/5491157225578" target="_blank" rel="noopener noreferrer">WHATSAPP: +54 9 11 5722-5578 ↗</a></div>
          <div class="contact-schedule">
            <strong>HORARIOS DE ATENCIÓN</strong>
            <p>LUNES A SÁBADO <b>09:00 A 18:00 HS.</b></p>
            <p>DOMINGOS Y FERIADOS <b>CERRADO</b></p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer"><a href="#inicio" class="footer-brand">CHICLANA<span>.</span></a><span>TALLER AUTOMOTRIZ · MECÁNICA Y DIAGNÓSTICO</span><a class="footer-data" href="https://www.google.com/maps/search/?api=1&query=Av.+Chiclana+3632%2C+CABA%2C+Argentina" target="_blank" rel="noopener noreferrer">AV. CHICLANA 3632 · CABA ↗</a><a class="footer-data" href="https://wa.me/5491157225578" target="_blank" rel="noopener noreferrer">WHATSAPP +54 9 11 5722-5578 ↗</a><a href="#inicio" class="back-top">VOLVER ARRIBA ↑</a><small>© ${new Date().getFullYear()} CHICLANA. TODOS LOS DERECHOS RESERVADOS.</small></footer>

    <a href="https://wa.me/5491157225578?text=Hola%2C%20Chiclana.%20Quisiera%20hacer%20una%20consulta." target="_blank" rel="noopener noreferrer" class="floating-contact" aria-label="Contactar por WhatsApp"><span>WHATSAPP</span><b>↗</b></a>
    <div class="lightbox" id="lightbox" aria-hidden="true"><button class="lightbox-close" aria-label="Cerrar">×</button><button class="lightbox-prev" aria-label="Anterior">‹</button><img src="" alt="Fotografía ampliada"><button class="lightbox-next" aria-label="Siguiente">›</button><span class="lightbox-count"></span></div>
  </div>
`

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle')!
const nav = document.querySelector<HTMLElement>('.nav')!
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('nav-open')
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.textContent = open ? '×' : '☰'
})
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('nav-open')
  menuButton.setAttribute('aria-expanded', 'false')
  menuButton.textContent = '☰'
}))

const lightbox = document.querySelector<HTMLElement>('#lightbox')!
const lightboxImg = lightbox.querySelector('img')!
const count = lightbox.querySelector<HTMLElement>('.lightbox-count')!
let current = 0
function showImage(index: number) {
  current = (index + images.length) % images.length
  lightboxImg.src = `/images/${images[current]}`
  count.textContent = `${String(current + 1).padStart(2, '0')} / ${images.length}`
}
function closeLightbox() {
  lightbox.classList.remove('active')
  lightbox.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('no-scroll')
}
document.querySelectorAll<HTMLButtonElement>('.gallery-item').forEach((item, index) => {
  item.addEventListener('click', () => {
    showImage(index)
    lightbox.classList.add('active')
    lightbox.setAttribute('aria-hidden', 'false')
    document.body.classList.add('no-scroll')
  })
})
lightbox.querySelector('.lightbox-close')!.addEventListener('click', closeLightbox)
lightbox.querySelector('.lightbox-prev')!.addEventListener('click', () => showImage(current - 1))
lightbox.querySelector('.lightbox-next')!.addEventListener('click', () => showImage(current + 1))
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox() })
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight' && lightbox.classList.contains('active')) showImage(current + 1)
  if (e.key === 'ArrowLeft' && lightbox.classList.contains('active')) showImage(current - 1)
})

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

