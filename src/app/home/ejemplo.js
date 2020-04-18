const fila = document.querySelector('.contenedor-carrusel');
const posterts = document.querySelector('.poster');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');



flechaDerecha.addEventListener('click',() => {
    fila.scrollLeft += fila.offsetWidth;
})
