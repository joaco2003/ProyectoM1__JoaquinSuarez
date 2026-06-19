

/* const paletaBase = ["rojo", "azul", "negro", "marron", "violeta", "verde", "amarillo"]

function gerarPaleta(paleta) {
    const elegido = paleta [0]
    return elegido
}

console.log(gerarPaleta(paletaBase))

const indiceAleatorio = Math.floor(Math.random() * paletaBase.length)

console.log(paletaBase[indiceAleatorio]); */






/* for (let i = 0; i < 5; i++) {
    const color = generarColorhsl();
    paleta.push(color);
} */

/* console.log(paleta) */



 function hslToHex(h, s, l) {
l = l / 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
const f = function (n) {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
    .toString(16)
    .padStart(2, "0");
};
return "#" + f(0) + f(8) + f(4);
} 

function crearSwatch(colorHSL, colorHex, nombre) {
    const swatch = document.createElement("article");
    swatch.className = "swatch";

    // Bloque superior: el rectangulo pintado con el color
    const color = document.createElement("div");
    color.className = "swatch__color";
    color.style.backgroundColor = colorHSL;


    // Bloque inferior: el nombre y el codigo del color
    const info = document.createElement("div");
    info.className = "swatch__info";

    const nombreP = document.createElement("p");
    nombreP.className = "swatch__nombre";
    nombreP.textContent = nombre;

    const elcodigo = document.createElement("p");
    elcodigo.className = "swatch__codigo";
    elcodigo.textContent = colorHex + " · " + colorHSL;

    info.append(nombreP, elcodigo);

    swatch.append(color,info);

    return swatch;
}

function generarColor() {
    const h = Math.floor(Math.random() * 360);
    const hslS = Math.floor(Math.random() * 100);
    const hslL = Math.round(Math.random() * 100);

    const hsl = "hsl("+ h +","+hslS+"%,"+hslL+"%)";
    const hex = hslToHex(h, hslS, hslL);

    return {hsl, hex};
}



const galeria = document.getElementById("galeria");

function renderPaleta(cantidad) {
    galeria.innerHTML = "";

    for (i = 0; i < cantidad; i++) {
        const color = generarColor();
        const swatch = crearSwatch(color.hsl, color.hex, "Color " + (i + 1));
        galeria.appendChild(swatch);
    }
}

const boton = document.getElementById("generar");
const selector = document.getElementById("cantidad");
/* const generador = document.querySelector("#generador"); */

if(boton) {
    boton.addEventListener("click", function()  {
        

        renderPaleta(parseInt(selector.value));

});

} else {    console.log("no se encontro el boton");
}

renderPaleta(10);











/* <article class="swatch">
                
                <div class="swatch__color swatch__color__claro"></div>
                <div class ="swatch__info">
                    <p class="swatch__nombre">Primario claro</p>
                <p class="swatch__codigo">#f37bb1 · hsl(330, 85%, 72%)</p> 
                <button class="generate-btn">Generar paleta</button>
                </div>
                
            </article> */



