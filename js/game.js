class Diferencias {
    constructor(x, y) {
        this.cordX = x,
            this.cordY = y;
    }
}

//target's coordinates. img: 1000X500
let calculadora = new Diferencias(645, 381);
let paraguas = new Diferencias(786, 219);
let botella = new Diferencias(370, 386);
let sandwich = new Diferencias(823, 129);
let foto = new Diferencias(619, 425);
let bufanda = new Diferencias(802, 448);
let libros = new Diferencias(527, 321);
let zapatos = new Diferencias(637, 352);

//target's array
let arrayObjetivos = [calculadora, paraguas, botella, sandwich, foto, bufanda, libros, zapatos];

// If find some target a prompt up will coming
let getDistance = (evento, arrayObjetivos) => {

    for (let i = 0; i < arrayObjetivos.length; i++) {
        let diffY = evento.offsetY - arrayObjetivos[i].cordY;
        let diffX = evento.offsetX - arrayObjetivos[i].cordX;
        if (Math.sqrt((diffY * diffY) + (diffX * diffX)) <= 25) {
            prompt("Atrapado!!!");
        }
    }
}

// x and y coordinetes of mousse
function clickHotspotImage(event) {

    getDistance(event, arrayObjetivos);

    let x = (event.offsetX - calculadora.cordX);
    let y = (event.offsetY - calculadora.cordY);


    let distance = Math.sqrt(x * x + y * y);

    console.log("Cursor x en: " + ' ' + event.offsetX);
    console.log("Cursor y en: " + ' ' + event.offsetY);
    console.log("distancia" + ' ' + distance);
}