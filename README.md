# 🐱✨ Maneki Neko – El Gato de la Suerte Japonés
---
[![visita la web](https://img.shields.io/badge/Jugar-Ahora!-red?style=for-the-badge&logo=matrix)]([https://jhormancastella.github.io/Red-or-Blue/](https://jhormancastella.github.io/Lucky-Cats/))

---
Este proyecto es una aplicación web interactiva construida con **HTML5, CSS3 y JavaScript**, que representa al tradicional **Maneki Neko (招き猫)**, conocido como el **"Gato de la Suerte"** en la cultura japonesa.  

La página permite seleccionar diferentes gatos por **color**, mostrar su **significado cultural** y recibir un **mensaje de buena fortuna aleatorio**, acompañado de **animaciones de partículas y decoraciones japonesas**.

---

## 📂 Estructura del Proyecto

📁 maneki-neko │── index.html   # Contiene HTML, CSS y JS integrados │── README.md    # Documentación del proyecto

---

## ⚙️ Tecnologías Utilizadas

- **HTML5** → Estructura semántica del sitio.  
- **CSS3** → Estilos avanzados, sombras, gradientes, animaciones y diseño responsivo.  
- **JavaScript (Vanilla)** → Lógica de interactividad, selección de gatos y frases aleatorias.  
- **Font Awesome 6** → Iconos vectoriales modernos para los selectores.  

---

## 🖼️ Funcionalidades Principales

✅ **Selección de colores de Maneki Neko**  
Cada color tiene un **significado cultural** en Japón:

| Color 🎨 | Significado ✨ |
|----------|----------------|
| ⚪ Blanco | Atrae la felicidad y cosas buenas. |
| ⚫ Negro  | Ahuyenta la mala suerte y atrae felicidad. |
| 🔵 Azul  | Ayuda a cumplir los sueños. |
| 🟡 Dorado | Atrae dinero y riqueza. |
| 🔴 Rojo  | Éxito en el amor. |
| 🟢 Verde | Buena salud y suerte en los estudios. |

---

✅ **Mensajes aleatorios de fortuna**  
Cada color tiene un conjunto de **10 frases positivas** que aparecen al interactuar.  
Ejemplos:
- *"Tu generosidad será recompensada de maneras maravillosas."*  
- *"El dinero fluye hacia ti como un río generoso."*  
- *"El amor verdadero está más cerca de lo que imaginas."*  

---

✅ **Interacciones disponibles**
- **Clic en el gato** → Muestra mensaje aleatorio + animación de partículas.  
- **Botón “¡Toca para buena suerte!”** → Genera mensaje + animación y cambio temporal de texto.  
- **Selección de color** → Cambia el gato mostrado y el significado resaltado.  

---

✅ **Animaciones visuales**
- **Decoraciones flotantes** (💰, 🎋, 🏮, ⭐) → Ambientación japonesa.  
- **Partículas interactivas** (🍀, 💰, ⭐, ✨, 🎋) → Surgen desde el gato al hacer clic.  
- **Transiciones y escalado suave** en botones y elementos interactivos.  

---

✅ **Diseño responsivo**  
Optimizado para **PC, tablets y móviles**:
- `@media (max-width: 768px)` → Ajusta tipografías y contenedores.  
- `@media (max-width: 480px)` → Adaptación compacta para pantallas pequeñas.  

---

## 📖 Explicación Técnica

### 🔹 HTML
- **Estructura principal**:
  - `.decorations` → Elementos visuales fijos (emojis flotantes).  
  - `.container` → Caja principal con título, subtítulo, gato, selector, botón y mensajes.  
  - `.cat-container` → Contenedor del gato (con imágenes para cada color).  
  - `.color-selector` → Botones circulares para elegir el color del gato.  
  - `.fortune-message` → Área dinámica para mostrar frases.  
  - `<footer>` → Créditos del autor.  

---

### 🔹 CSS
- **Reset inicial**: `* { margin:0; padding:0; box-sizing:border-box; }`  
- **Colores y tipografía**: Paleta cálida (`#e67e22`, `#d35400`) y tipografía moderna.  
- **Sombra y profundidad**: `box-shadow` para dar efecto de carta flotante.  
- **Animaciones**:
  - `@keyframes float` → Movimiento suave de decoraciones.  
  - Hover con **transform: scale** para botones y selectores.  
- **Responsividad**: Ajustes con *media queries* para diferentes resoluciones.  

---

### 🔹 JavaScript
- **Diccionario de frases (`fortunePhrases`)**: Cada color contiene 10 mensajes únicos.  
- **Configuración visual (`colorConfig`)**: Define fondo y texto de cada color en la sección de significado.  
- **Eventos principales**:
  - `click` en color → Cambia el gato y el significado mostrado.  
  - `click` en el gato → Muestra frase aleatoria + partículas.  
  - `click` en el botón → Mensaje aleatorio + animación + bloqueo temporal del botón.  
- **Funciones clave**:
  - `getRandomFortune(color)` → Retorna una frase aleatoria según color.  
  - `createParticles(count)` → Genera partículas animadas alrededor del gato.  

---

## 🚀 Cómo Ejecutar el Proyecto

1. Clona o descarga este repositorio:  
   ```bash
   git clone

2. Abre el archivo index.html en tu navegador.


3. ¡Selecciona un gato, toca para recibir tu mensaje y deja que la suerte te acompañe! 🐾




---

🎨 Capturas (Opcional)

> Aquí puedes añadir screenshots o GIFs mostrando la interacción con los gatos.




---

🔮 Posibles Mejoras Futuras



---

👨‍💻 Autor

Jhorman Jesús Castellanos Morales
📅 © 2025 – Todos los derechos reservados.


---
