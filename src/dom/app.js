/**
 * ARCHIVO PRINCIPAL DE APLICACION (APP.JS)
 * En este archivo manejamos la generacion de elementos (DOM), manipulacion eventos y estado.
 */

// 1. DATA ESTATICA Y ESTADOS
const opiniones = [
    {
        id: 'op-1',
        nombre: 'Maria',
        rating: 5,
        comentario: 'Llego rapido y la calidad es excelente. Me asombro el diseño minimalista.',
        fecha: '2025-01-10',
    },
    {
        id: 'op-2',
        nombre: 'Carlos',
        rating: 4,
        comentario: 'Buen producto. El empaque podria estar un poco mas cuidado.',
        fecha: '2025-01-22',
    },
    {
        id: 'op-3',
        nombre: 'Luisa',
        rating: 5,
        comentario: 'Muy comodo. Compraria de nuevo sin pensar.',
        fecha: '2025-02-03',
    },
    {
        id: 'op-4',
        nombre: 'Javier',
        rating: 5,
        comentario: 'Los materiales se sienten sumamente premium al tacto.',
        fecha: '2025-03-14',
    }
];

const state = {
    likes: 0,
    isHovering: false
};


// 2. RENDERIZADO DINAMICO DE COMPONENTES
function createOpinionCard(opinion) {
    const article = document.createElement('article');
    article.classList.add('opinicon');
    article.dataset.id = opinion.id;

    const header = document.createElement('header');
    
    const metaBox = document.createElement('div');
    metaBox.classList.add('meta');

    const nombre = document.createElement('strong');
    nombre.textContent = opinion.nombre;

    const rating = document.createElement('span');
    // Generar estrellas visuales con caracteres normales
    rating.textContent = '*'.repeat(opinion.rating);

    metaBox.appendChild(nombre);
    metaBox.appendChild(rating);

    const fecha = document.createElement('small');
    fecha.classList.add('muted');
    fecha.textContent = opinion.fecha;

    header.appendChild(metaBox);
    header.appendChild(fecha);

    const comentario = document.createElement('p');
    comentario.textContent = opinion.comentario;

    article.appendChild(header);
    article.appendChild(comentario);

    return article;
}

function renderOpiniones(list) {
    const container = document.querySelector('.opiniones-list');
    if (!container) return;
    
    // Limpiamos los hijos antes de volver a listar
    container.replaceChildren();

    list.forEach(opinion => {
        const el = createOpinionCard(opinion);
        container.appendChild(el);
    });
}


// 3. ACTUALIZACIONES DE UI Y ESTADO
function getStatusMessage() {
    if (state.likes === 0) return 'El contador esta en cero. Apoya el proyecto secreto!';
    if (state.likes > 10) return `Tienes ${state.likes} interacciones increible!`;
    return `Alcanzaste ${state.likes} interacciones continuas!`;
}

// Logica visual cuando el estado cambia
function render() {
    const status = document.querySelector('#status');
    const btnLike = document.querySelector('#btn-like');
    const btnReset = document.querySelector('#btn-reset');

    const hoverZone = document.querySelector('#hover-zone');
    const hoverPill = document.querySelector('#hover-pill');
    const hoverTitle = document.querySelector('#hover-title');
    const hoverText = document.querySelector('#hover-text');

    if (status) status.textContent = getStatusMessage();
    if (btnReset) btnReset.disabled = state.likes === 0;

    // Actualizamos las propiedades visuales del panel interactivo
    if (hoverZone && hoverPill && hoverTitle && hoverText) {
        hoverZone.classList.toggle('is-hover', state.isHovering);
        hoverPill.textContent = state.isHovering ? 'Modo Activo' : 'Modo Descanso';
        hoverTitle.textContent = state.isHovering ? 'Flujo de Interaccion Constante' : 'Mueve tu raton aqui';
        
        // Logica descriptiva
        if (state.isHovering) {
            hoverText.textContent = 'Este panel se volvio premium gracias al calculo por el Javascript puro ejecutado en el documento.';
        } else {
            hoverText.textContent = 'Observa como reacciona el script del DOM. Ademas de aqui, presiona ENTER o ESPACIO para interactuar usando solo el teclado de tu cuarto.';
        }
    }
}


// 4. CONFIGURACION DE EVENTOS DE USUARIO
function setupEvents() {
    const btnLike = document.querySelector('#btn-like');
    const btnReset = document.querySelector('#btn-reset');
    const hoverZone = document.querySelector('#hover-zone');

    if (btnLike) {
        // Escucha de clic sobre el boton principal
        btnLike.addEventListener('click', () => {
            state.likes += 1;
            render();

            // Truco visual simple simulando red (Micro-Interaccion JS)
            const oldText = btnLike.textContent;
            btnLike.textContent = 'Registrado';
            setTimeout(() => btnLike.textContent = oldText, 400);
        });
    }

    if (btnReset) {
        btnReset.addEventListener('click', () => {
            state.likes = 0;
            render();
        });
    }

    if (hoverZone) {
        // Eventos nativos de entrada y salida
        hoverZone.addEventListener('mouseenter', () => {
            state.isHovering = true;
            render();
        });

        hoverZone.addEventListener('mouseleave', () => {
            state.isHovering = false;
            render();
        });
    }
}


// 5. EVENTO DEL TECLADO PARA LIKES
function setupKeyboardLike() {
    // Vinculamos el evento keydown a la ventana global
    document.addEventListener('keydown', (event) => {
        // Ignoramos la cuenta si el visitante esta escribiendo en algun input
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;

        if (event.code === 'Space' || event.code === 'Enter' || event.key === 'l' || event.key === 'L') {
            event.preventDefault(); // Previene brincos por el scroll del espacio
            state.likes += 1;
            render();
        }
    });
}


// 6. VALIDACION DEL FORMULARIO Y PREVENCION AUTOMATICA
function setupFormValidation() {
    const form = document.querySelector('#form-contacto');
    const nombreInput = document.querySelector('#nombre');
    const mensajeInput = document.querySelector('#mensaje');
    
    // Contenedores de errores
    const nombreError = document.querySelector('#nombre-error');
    const mensajeError = document.querySelector('#mensaje-error');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevenimos el salto feo a otra pagina nativo en el Web original
            
            let isValido = true;

            // Validacion 1: Comprobar el nombre
            if (nombreInput.value.trim() === '') {
                nombreError.style.display = 'block';
                nombreInput.style.borderColor = '#ef4444';
                isValido = false;
            } else {
                nombreError.style.display = 'none';
                nombreInput.style.borderColor = 'var(--border-color)';
            }

            // Validacion 2: Mensaje extenso min 10
            if (mensajeInput.value.trim().length < 10) {
                mensajeError.style.display = 'block';
                mensajeInput.style.borderColor = '#ef4444';
                isValido = false;
            } else {
                mensajeError.style.display = 'none';
                mensajeInput.style.borderColor = 'var(--border-color)';
            }

            // Cumple la regla, finje envio asincrono de datos a algun backend
            if (isValido) {
                const btnSubmit = form.querySelector('button[type="submit"]');
                const btnText = btnSubmit.textContent;
                
                btnSubmit.textContent = 'Transmitiendo Peticion...';
                
                // Usamos Timeout simulando un atraso de red
                setTimeout(() => {
                    alert('Validado estimado ' + nombreInput.value + ', tu registro al servidor se proceso genial.');
                    form.reset(); // Limpia los inputs instantaneamente
                    btnSubmit.textContent = btnText;
                }, 900);
            }
        });
    }
}


// 7. EFECTOS ESPECIALES Y DE SCROLL PORMENORIZADO (Intersection Observer)
// Ejemplo estupendo para cargar y desvanecer al momento que te acercas 
function setupScrollEffects() {
    const elementos = document.querySelectorAll('.fade-in');
    
    // Objeto JS fundamental actual en paginas avanzadas
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejamos de observar consumiendo menos recursos
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1, // Solo activa cuando lo ves al diez por ciento
        rootMargin: '0px 0px -40px 0px' 
    });

    elementos.forEach(el => observer.observe(el));
}


// --- ARRANQUE MAESTRO ---
// Disparamos la cascada de preparaciones una vez asegurado la bajada fisica en el navegador 
document.addEventListener('DOMContentLoaded', () => {
    renderOpiniones(opiniones);        // Llena los reviews basados en variables JS puras
    setupEvents();                     // Engancha clicks y mouse tracker
    setupKeyboardLike();               // Engancha teclado para un atajo directo a las interacciones
    setupFormValidation();             // Preparacion de form dinamico visual
    setupScrollEffects();              // Lanzamiento estetico premium y moderno
    render();                          // Renderizado maestro de interfaz
});
