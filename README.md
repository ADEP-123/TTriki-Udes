# Triki Game

Juego de **Triqui** para dos jugadores, construido con React + Vite. Incluye marcador persistente por sesión, preview de símbolo al pasar el mouse, diseño responsive y una estética dark retro.

---

## Tecnologías utilizadas

| Tecnología                  | Versión | Uso                                         |
| --------------------------- | ------- | ------------------------------------------- |
| [React](https://react.dev/) | 19.2.4  | Librería principal de UI y manejo de estado |
| [Vite](https://vitejs.dev/) | 8.0.4   | Bundler y servidor de desarrollo            |
| JavaScript (ES6+)           | —       | Lenguaje base del proyecto                  |
| CSS Vanilla                 | —       | Estilos, animaciones y responsive design    |
| HTML5                       | —       | Estructura base (`index.html`)              |

> No se utilizaron librerías de estilos externas (sin Tailwind, Bootstrap ni similares). Todo el diseño es CSS propio con variables personalizadas.

---

## Estructura del proyecto

```
triki-game/
├── public/
├── src/
│   ├── components/
│   │   ├── Board.jsx         # Grid 3x3 del tablero
│   │   ├── Square.jsx        # Celda individual con hover preview
│   │   ├── StatusBar.jsx     # Mensaje de turno / ganador / empate
│   │   └── ScoreBoard.jsx    # Marcador con botón de reset
│   ├── hooks/
│   │   └── useGameLogic.js   # Lógica del juego (estado, ganador, score)
│   ├── utils/
│   │   └── gameHelpers.js    # calculateWinner, isBoardFull, combinaciones
│   ├── App.jsx               # Componente raíz
│   └── index.css             # Estilos globales y sistema de diseño
├── index.html
├── vite.config.js
└── package.json
```

---

## Funcionalidades

- Modo **2 jugadores** en el mismo dispositivo
- **Marcador de victorias** por sesión para X y O
- **Botón de reset** del marcador disponible en todo momento
- **Preview fantasma** del símbolo al pasar el mouse sobre una casilla libre
- **Animación de victoria** en las casillas ganadoras
- Detección de **empate**
- **Diseño responsive** — funciona en móvil, tablet y escritorio
- **Favicon personalizado** en la pestaña del navegador

---

## Cómo lanzar el proyecto

### Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

Verifica con:

```bash
node -v
npm -v
```

---

### 1. Clonar el repositorio

```bash
git clone https://github.com/ADEP-123/TTriki-Udes.git
cd triki-game
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Levantar en modo desarrollo

```bash
npm run dev
```

Abre tu navegador en:

```
http://localhost:5173
```

---

### 4. Compilar para producción

```bash
npm run build
```

Los archivos optimizados quedarán en la carpeta `/dist`.

---

### 5. Previsualizar el build de producción

```bash
npm run preview
```

Disponible en:

```
http://localhost:4173
```

---

## Scripts disponibles

| Comando           | Descripción                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR   |
| `npm run build`   | Genera el build optimizado para producción |
| `npm run preview` | Sirve el build de producción localmente    |

---

## Sistema de diseño (CSS Variables)

```css
--bg: #0f0f1a /* Fondo principal */ --surface: #1a1a2e
  /* Fondo de componentes */ --primary: #e94560
  /* Color de acento (X y botones) */ --text: #eaeaea /* Texto principal */
  --cell-size: clamp(80px, 28vw, 120px) /* Tamaño responsivo de celdas */;
```

---

## Autor

Desarrollado por Andres David Elizalde Peralta como ejercicio de aprendizaje en React en el marco de la asignatura de Configuracion y mantenimiento de software 
