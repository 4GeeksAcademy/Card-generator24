**Propósito Del Proyecto**

Este repositorio es una pequeña aplicación frontend (HTML/CSS/JS) que genera una carta de póker aleatoria en el navegador. Está estructurado como un proyecto Vite con la carpeta `src/` como raíz del cliente.

**Arquitectura / Punto de entrada**

- Root de desarrollo: `src/` (configurado en `vite.config.js`).
- Archivo HTML principal: `src/index.html`.
- Entrada JS: `src/app.js` (importa `style.css` y activos desde `src/assets/`).
- Estilos: `src/style.css`.

**Comandos clave (desarrollo y build)**

- Instalar dependencias: `npm install`.
- Levantar servidor de desarrollo (Vite): `npm run start` — escucha en `http://localhost:3000` según `vite.config.js`.
- Construir para producción: `npm run build` — salida en `dist/` (ver `vite.config.js: outDir`).
- Previsualizar build: `npm run preview`.

Nota: El `package.json` requiere `node >= 20.0.0` y usa `vite` como dependencia de desarrollo.

**Convenciones y patrones del proyecto**

- Todos los archivos fuente están en `src/`. Cuando añades HTML/JS/CSS nuevos, colócalos en `src/` y asegúrate de importarlos desde `src/app.js` o referenciarlos desde `src/index.html`.
- Los activos (imágenes/íconos) residen en `src/assets/img/` y se importan directamente en JS con rutas relativas (ej.: `import "./assets/img/rigo-baby.jpg";`).
- `index.html` usa ` <script type="module" src="/app.js"></script>` — con Vite esa ruta resuelve a `src/app.js` (raíz configurada como `./src`).

**Patrones importantes detectados (útiles para un agente)**

- El código cliente inicializa lógica DOM dentro de `window.onload` y `DOMContentLoaded` — revisa `src/app.js` para entender el flujo de inicialización.
- `src/app.js` importa `bootstrap` y `style.css` al inicio: las dependencias CSS/JS globales deben importarse desde la entrada.
- Estructura DOM esperada: `src/index.html` contiene la tarjeta (`#pokerCard`, `#topValue`, `#topSuit`, `#centerSuit`, `#bottomValue`, `#bottomSuit`). Si agregas funcionalidades que necesitan elementos adicionales (por ejemplo `#generateBtn` o `#cardInfo`), actualiza `index.html` o maneja su inexistencia con comprobaciones defensivas.

**Problemas y observaciones específicas (evitan trabajo inútil)**

- `src/app.js` referencia `valueNames` en `updateCard(...)` pero no se define en el archivo — busca o añade la estructura `valueNames` antes de usarla.
- Se referencian elementos DOM (`cardInfo`, `generateBtn`) en `src/app.js` que no existen en `src/index.html` actual; un agente debe validar la presencia de nodos antes de manipularlos.
- La inicialización usa tanto `window.onload` como `DOMContentLoaded` anidados; simplificar a uno solo reduce condiciones de carrera.

**Cómo abordar cambios rutinarios**

- Añadir una nueva imagen: colocar en `src/assets/img/` y `import`arla en `src/app.js` o referenciarla desde `index.html`.
- Añadir una nueva función JS: crear el archivo en `src/` y exportarlo/importarlo desde `src/app.js`.
- Actualizar HTML: editar `src/index.html`. Durante dev con `npm run start` Vite hará HMR/reload automáticamente.

**Debugging rápido**

- Si no ves cambios: limpiar cache del navegador y recargar (ver README).
- Para errores de imports o módulos, revisar consola del navegador y la salida de `vite` en la terminal.

**Qué evitar**

- No cambiar la configuración de `root` en `vite.config.js` sin reflejar las rutas en `index.html` (por ejemplo la referencia `/app.js`).
- No asumir que elementos DOM existen: validar con `document.getElementById(...)` antes de usarlos.

**Qué hacer primero (lista rápida para un agente nuevo)**

1. Ejecutar `npm install` y `npm run start` localmente.
2. Abrir `src/index.html` y `src/app.js` para entender la relación DOM ↔ JS.
3. Corregir/añadir `valueNames` o proteger su uso si vas a cambiar la presentación del nombre de la carta.
4. Si añades UI, actualiza `index.html` y los imports en `src/app.js`.

Si necesitas ejemplos concretos o quieres que adapte este archivo para incluir convenciones de commits, PRs o CI, dime qué formato prefieres y lo actualizo.
