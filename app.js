// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//ids: input(amigo), ul(listaAmigo), ul(resultado)
let listaDeNombres = [];


//Agregar texto a un elemento HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Función para botón "añadir"
function agregarAmigo(){
    let entrada = document.querySelector('#amigo');
    
    entrada.value == ""? alert("Por favor, inserte un nombre"): listaDeNombres.push(entrada.value);
    console.log(`Lista de Nombres: ${listaDeNombres}`);
    entrada.value = "";
    actualizaListaAmigos();
    return;

}
//Función para botón "sortear amigo"
function sortearAmigo(){
    let elementoResultado = document.getElementById('resultado');

    if(listaDeNombres != ""){
        let indiceRandom = Math.floor(Math.random()*listaDeNombres.length);

        console.log(`indice aletorio: ${indiceRandom}`);
        elementoResultado.innerHTML = listaDeNombres[indiceRandom];

    }

    return;
}

function actualizaListaAmigos(){
    let lista = document.querySelector('#listaAmigos');
    let losAmigos = "";
    
    lista.innerHTML = "";
    
    for(let index = 0; index < listaDeNombres.length; index++){
        losAmigos += `<li>${listaDeNombres[index]}<li/>`
        // console.log(`amigos: ${losAmigos}`);
    }

    lista.innerHTML = losAmigos;
    return;
}