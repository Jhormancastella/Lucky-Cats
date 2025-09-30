const fortunePhrases = {
    white: [
        "La felicidad te encuentra hoy en los pequeños detalles.",
        "Alguien especial traerá alegría a tu vida muy pronto.",
        "Tu actitud positiva atraerá bendiciones inesperadas.",
        "Hoy es un día perfecto para sonreír y agradecer.",
        "La paz interior que buscas ya está dentro de ti.",
        "Las buenas noticias están a punto de llegar a tu puerta.",
        "Tu generosidad será recompensada de maneras maravillosas.",
        "Confía en tu intuición, te guiará hacia la felicidad.",
        "El universo conspira a tu favor en este momento.",
        "La serenidad y la alegría serán tus compañeras hoy."
    ],
    black: [
        "La mala suerte se aleja de ti como el humo en el viento.",
        "Estás protegido contra energías negativas hoy.",
        "Los obstáculos desaparecerán ante tu determinación.",
        "La envidia y el mal de ojo no pueden tocarte.",
        "Tu aura brillante repele toda negatividad.",
        "La protección divina te rodea en este momento.",
        "Los malos pensamientos se disuelven en tu presencia.",
        "Estás blindado contra la mala fortuna y la envidia.",
        "La oscuridad no puede extinguir tu luz interior.",
        "La paz y la seguridad son tus compañeras hoy."
    ],
    gold: [
        "Hoy estás rodeado de fuerza y fortuna.",
        "La prosperidad llama a tu puerta en formas inesperadas.",
        "Una oportunidad financiera dorada se acerca a ti.",
        "Tu trabajo será recompensado con abundancia.",
        "El dinero fluye hacia ti como un río generoso.",
        "La riqueza material y espiritual te bendice hoy.",
        "Tus decisiones financieras serán muy acertadas.",
        "La abundancia es tu estado natural en este momento.",
        "Fortuna y éxito caminan juntos a tu lado hoy.",
        "El universo te recompensa por tu esfuerzo constante."
    ],
    red: [
        "El amor verdadero está más cerca de lo que imaginas.",
        "Tu corazón atraerá la pasión que merece hoy.",
        "Una conexión romántica significativa se avecina.",
        "Tu carisma ilumina a todos a tu alrededor.",
        "El romance florecerá en los lugares más inesperados.",
        "Tu relación actual se fortalecerá con más pasión.",
        "La atracción que sientes es mutua y poderosa.",
        "El amor llega a tu vida con fuerza y autenticidad.",
        "Tu energía amorosa es irresistible hoy.",
        "El destino romántico tiene planes maravillosos para ti."
    ],
    blue: [
        "Tus sueños más profundos están a punto de hacerse realidad.",
        "La claridad mental te guiará hacia tus metas.",
        "Confía en tu camino, el universo te apoya completamente.",
        "Los obstáculos se transforman en peldaños hacia tus sueños.",
        "Tu determinación es la llave que abre todas las puertas.",
        "Los sueños que persigues tienen un propósito divino.",
        "La perseverancia te llevará exactamente donde debes estar.",
        "Tus aspiraciones están alineadas con tu destino.",
        "El coraje para soñar grande te traerá grandes recompensas.",
        "El universo conspira para que cumplas tu propósito."
    ],
    green: [
        "Tu salud florece como un jardín bien cuidado.",
        "La energía vital fluye abundantemente en tu cuerpo.",
        "El conocimiento que buscas llegará en el momento perfecto.",
        "Tu mente está receptiva para aprender cosas maravillosas.",
        "El equilibrio entre cuerpo y mente te trae armonía.",
        "Los estudios te traerán satisfacción y logros importantes.",
        "Tu curiosidad intelectual abrirá puertas inesperadas.",
        "La sabiduría ancestral te guía en tu camino de aprendizaje.",
        "La salud y la inteligencia son tus aliadas hoy.",
        "El crecimiento personal y académico te bendice ahora."
    ]
};

const colorConfig = {
    white: {
        meaning: 'Blanco: Atrae la felicidad y cosas buenas',
        infoBg: 'rgba(255, 255, 255, 0.7)',
        textColor: '#5a3921'
    },
    black: {
        meaning: 'Negro: Ahuyenta la mala suerte y atrae la felicidad',
        infoBg: 'rgba(44, 44, 44, 0.8)',
        textColor: 'white'
    },
    blue: {
        meaning: 'Azul: Ayuda a cumplir los sueños',
        infoBg: 'rgba(52, 152, 219, 0.7)',
        textColor: 'white'
    },
    gold: {
        meaning: 'Dorado: Atrae el dinero y la riqueza',
        infoBg: 'rgba(255, 215, 0, 0.7)',
        textColor: '#5a3921'
    },
    red: {
        meaning: 'Rojo: Atrae el éxito en el amor',
        infoBg: 'rgba(231, 76, 60, 0.7)',
        textColor: 'white'
    },
    green: {
        meaning: 'Verde: Atrae la buena salud y la suerte en los estudios',
        infoBg: 'rgba(46, 204, 113, 0.7)',
        textColor: 'white'
    }
};

const colorOptions = document.querySelectorAll('.color-option');
const catImageWhite = document.getElementById('catImageWhite');
const catImageBlack = document.getElementById('catImageBlack');
const catImageBlue = document.getElementById('catImageBlue');
const catImageGold = document.getElementById('catImageGold');
const catImageRed = document.getElementById('catImageRed');
const catImageGreen = document.getElementById('catImageGreen');
const colorInfo = document.getElementById('colorInfo');
const luckButton = document.getElementById('luckButton');
const catContainer = document.getElementById('catContainer');
const fortuneMessage = document.getElementById('fortuneMessage');

let currentColor = 'white';

// Inicializar con el gato blanco
catImageWhite.style.display = 'block';
catImageBlack.style.display = 'none';
catImageBlue.style.display = 'none';
catImageGold.style.display = 'none';
catImageRed.style.display = 'none';
catImageGreen.style.display = 'none';

colorOptions.forEach(option => {
    option.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        const config = colorConfig[color];
        
        colorOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        
        catImageWhite.style.display = color === 'white' ? 'block' : 'none';
        catImageBlack.style.display = color === 'black' ? 'block' : 'none';
        catImageBlue.style.display = color === 'blue' ? 'block' : 'none';
        catImageGold.style.display = color === 'gold' ? 'block' : 'none';
        catImageRed.style.display = color === 'red' ? 'block' : 'none';
        catImageGreen.style.display = color === 'green' ? 'block' : 'none';
        
        colorInfo.textContent = config.meaning;
        colorInfo.style.background = config.infoBg;
        colorInfo.style.color = config.textColor || '#5a3921';
        
        currentColor = color;
        
        fortuneMessage.textContent = "¡Toca el gato o el botón para recibir tu mensaje de buena suerte!";
        fortuneMessage.style.opacity = '0.7';
    });
});

function getRandomFortune(color) {
    const phrases = fortunePhrases[color];
    return phrases[Math.floor(Math.random() * phrases.length)];
}

catContainer.addEventListener('click', function() {
    this.style.transform = 'scale(1.05)';
    setTimeout(() => this.style.transform = 'scale(1)', 200);
    createParticles(8);
    
    const phrase = getRandomFortune(currentColor);
    fortuneMessage.textContent = phrase;
    fortuneMessage.style.opacity = '1';
    fortuneMessage.style.transform = 'scale(1.05)';
    setTimeout(() => {
        fortuneMessage.style.transform = 'scale(1)';
    }, 300);
});

luckButton.addEventListener('click', function() {
    createParticles(15);
    const original = this.textContent;
    this.textContent = '¡Buena suerte! 🍀';
    this.disabled = true;
    setTimeout(() => {
        this.textContent = original;
        this.disabled = false;
    }, 2000);
    
    const phrase = getRandomFortune(currentColor);
    fortuneMessage.textContent = phrase;
    fortuneMessage.style.opacity = '1';
    fortuneMessage.style.transform = 'scale(1.05)';
    setTimeout(() => {
        fortuneMessage.style.transform = 'scale(1)';
    }, 300);
});

function createParticles(count) {
    const symbols = ['🍀', '💰', '⭐', '✨', '🎋'];
    const catRect = catContainer.getBoundingClientRect();
    const centerX = catRect.left + catRect.width / 2 + window.scrollX;
    const centerY = catRect.top + catRect.height / 2 + window.scrollY;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.cssText = `
            position: fixed;
            font-size: ${16 + Math.random() * 10}px;
            left: ${centerX}px;
            top: ${centerY}px;
            pointer-events: none;
            z-index: 1000;
            opacity: 1;
        `;
        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 3;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        let opacity = 1;
        let x = centerX, y = centerY;

        const animate = () => {
            x += vx;
            y += vy - 0.1;
            opacity -= 0.02;
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.opacity = opacity;
            
            if (opacity > 0) requestAnimationFrame(animate);
            else particle.remove();
        };
        animate();
    }
}
