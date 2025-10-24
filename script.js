let carritoItems = [];


const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }}

function leerDatosElemento(elemento){
const infoElemento = {
    imagen: elemento.querySelector('img').src,
    titulo: elemento.querySelector('h3').textContent,
    precio: elemento.querySelector('.precio').textContent,
    id: elemento.querySelector('a').getAtribute('data-id')
}
carritoItems.push(infoElemento);
insertarCarrito();
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>        <img src = "${elemento.imagen}" width = 100">    </td>
    <td>         ${elemento.titulo}    </td>
    <td>        ${elemento.precio}    </td>
    <td>        <a hrerf="#" class= "borrar" data-id= "${elemento.id}">X </a>    </td>
    `;
    lista.innerHTML ="";
    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
    const id = e.target.getAttribute('data-id');
    carritoItems = carritoItems.filter(item => item.id !== id);
    insertarCarrito();
  }
}

function vaciarCarrito() {
  carritoItems = [];
  insertarCarrito();
}

// Modal
const modal = document.getElementById("miModal");
const abrirModal = document.getElementById("abrirModal");
const cerrarModal = document.querySelector(".cerrar");

abrirModal.addEventListener("click", () => {
  modal.style.display = "block";
});

cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
// Mostrar alerta al cargar la página
alert("¡Bienvenido a Yelina Suplementos!");

// Preguntar nombre del usuario
const nombreUsuario = prompt("¿Cuál es tu nombre?");
if (nombreUsuario) {
  alert(`Hola, ${nombreUsuario}. ¡Gracias por visitarnos!`);
}

// Confirmar si desea ver una oferta
const deseaOferta = confirm("¿Deseas ver una oferta especial?");
if (deseaOferta) {
  document.getElementById("abrirModal").click(); // Abre el modal si el usuario acepta
} else {
  alert("¡No hay problema! Puedes explorar nuestros productos.");
}
function saludoInteractivo() {
  alert("¡Bienvenido a Yelina Suplementos!");
  const nombreUsuario = prompt("¿Cuál es tu nombre?");
  if (nombreUsuario) {
    alert(`Hola, ${nombreUsuario}. ¡Gracias por visitarnos!`);
  }
  const deseaOferta = confirm("¿Deseas ver una oferta especial?");
  if (deseaOferta) {
    document.getElementById("abrirModal").click();
  } else {
    alert("¡No hay problema! Puedes explorar nuestros productos.");
  }
}
alert("¡Formulario enviado correctamente!");
window.location.href = "gracias.html";
