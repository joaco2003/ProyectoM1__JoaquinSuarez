function hslToHex(h, s, l) {
    l = l / 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = function (n) {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, "0");
    };
    return "#" + f(0) + f(8) + f(4);
}

/* ---------------------------- Creador de swatch ---------------------------- */
function crearSwatch(colorHSL, colorHex, nombre, index) {
    const swatch = document.createElement("article");
    swatch.className = "swatch";

    const color = document.createElement("div");
    color.className = "swatch__color";
    color.style.backgroundColor = colorHSL;

    // Botón de bloqueo
    const btnLock = document.createElement("button");
    btnLock.className = "swatch__lock";
    btnLock.innerHTML = paleta[index].locked ? "🔒" : "🔓";
    btnLock.title = paleta[index].locked ? "Desbloquear" : "Bloquear";
    btnLock.addEventListener("click", function () {
        paleta[index].locked = !paleta[index].locked;
        renderPaleta(paleta.length);
    });

    color.appendChild(btnLock);

    const info = document.createElement("div");
    info.className = "swatch__info";

    const nombreP = document.createElement("p");
    nombreP.className = "swatch__nombre";
    nombreP.textContent = nombre;

    const elcodigo = document.createElement("p");
    elcodigo.className = "swatch__codigo";
    elcodigo.textContent = colorHex;
    elcodigo.addEventListener("click", function () {
    navigator.clipboard.writeText(elcodigo.textContent);
    elcodigo.textContent = "¡Copiado!";
    setTimeout(() => elcodigo.textContent = colorHex, 1000);
    });

    info.append(nombreP, elcodigo);
    swatch.append(color, info);
    return swatch;
}

/* --------------------- Generador de colores aleatorios -------------------- */
function generarColor() {
    const h = Math.floor(Math.random() * 360);
    const hslS = Math.floor(Math.random() * 100);
    const hslL = Math.round(Math.random() * 100);
    const hsl = "hsl(" + h + "," + hslS + "%," + hslL + "%)";
    const hex = hslToHex(h, hslS, hslL);
    return { hsl, hex };
}

/* --------------------------- Estado de la paleta --------------------------- */
let paleta = [];  // cada elemento: { hsl, hex, locked }

/* ----------------------------- Render paleta ------------------------------ */
const galeria = document.getElementById("galeria");

function renderPaleta(cantidad) {
    // Si la cantidad cambió, ajustamos el array
    if (paleta.length !== cantidad) {
        const nueva = Array.from({ length: cantidad }, (_, i) => {
            // Conservar los que ya existen
            return paleta[i] ?? { ...generarColor(), locked: false };
        });
        paleta = nueva;
    }
    
    
    galeria.innerHTML = "";
    paleta.forEach((item, i) => {
        const formato = document.getElementById('formato').value;
        const codigo = formato === 'hex' ? item.hex : item.hsl;
        const swatch = crearSwatch(item.hsl,  codigo, "Color " + (i + 1), i);
        galeria.appendChild(swatch);
    });
}

/* --------------------------------- Eventos -------------------------------- */
const boton = document.getElementById("generar");
const selector = document.getElementById("cantidad");

if (boton) {
    boton.addEventListener("click", function () {
        renderPaleta(parseInt(selector.value));
    });
} else {
    console.log("no se encontro el boton");
}
boton.addEventListener("click", function () {
    paleta = paleta.map(item =>
        item.locked ? item : { ...generarColor(), locked: false }
    );
    renderPaleta(parseInt(selector.value));
});
renderPaleta(10);
/* -------------------------------------------------------------------------- */









