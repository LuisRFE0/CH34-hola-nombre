function saludar() {
    const nombre = prompt('Cual es tu nombre?');
    const h1 = document.getElementById('nombre');
    h1.innerHTML = 'Hola '+ nombre;
}