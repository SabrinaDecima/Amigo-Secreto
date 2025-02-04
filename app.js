document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];
    let input = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");
    let btnAgregar = document.querySelector("button-add");
    let btnSortear = document.querySelector("button-draw");


    function agregarAmigo() {
        let nombre = input.value.trim();
        
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        if (amigos.includes(nombre)) {
            alert("Ese nombre ya ha sido agregado.");
            input.value = "";
            return;
        }

        amigos.push(nombre);
        input.value = "";
        actualizarLista();
    };


    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nombre => {
            let li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    };

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("No hay nombres en la lista para sortear.");
            return;
        }
    
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[indiceAleatorio];
        
        resultado.innerHTML = "";
        let li = document.createElement("li");
        li.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
        resultado.appendChild(li);
    };
});
