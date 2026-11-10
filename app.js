// TRAER ELEMENTOS DEL HTML//

// elementos del contador //
const textoTotal = document.getElementById("total");
const textoCompletadas = document.getElementById("completadas");
const textoPendientes = document.getElementById("pendientes");
const barraProgreso = document.getElementById("barra-progreso");
const textoPorcentaje = document.getElementById("porcentaje");

//ELEMENTOS DE FORMULARIO //

const formulario = document.getElementById("formulario");
const campoTarea = document.getElementById("campo-tarea");
const mensajeError = document.getElementById("mensaje-error");
const listaTareas = document.getElementById("lista-tareas");


//ACTUALIZAR EL CONTADOR //

//Esta función muestra el resumen de las tareas que hay en la página
// la llamamos cada vez que creamos, finalizamos o eliminamos una tarea
function actualizarContador(){
    const total = document.querySelectorAll(".tarea").length
    const completadas = document.querySelectorAll(".tarea.completada").length
    const pendientes = total - completadas;



    //MOSTRAR LA INFORMACIÓN//
    textoTotal.textContent=total;
    textoCompletadas.textContent = completadas;
    textoPendientes.textContent = pendientes;

    //CALCULAR EL PORCENTAJE (si no hay tareas es 0)//
    let porcentaje = 0;
    if (total>0){
        porcentaje = Math.round((completadas/total)*100)
    }

    textoPorcentaje.textContent = porcentaje;
    barraProgreso.style.width = porcentaje +"%"; //toma el numero del porcentaje y cmabia el ancho de la barra

}

// AGREGAR LAS TAREAS

//evento que ocurre al precionar el boton de agregar
formulario.addEventListener("submit",function(evento){
    //por defecto se recarga la página al momento de mandar los datos
    evento.preventDefault(); // evitamos que esto pase deshabilidando el evento por defecto


    const texto = campoTarea.value.trim();//con trim quitamos los espacios al inicio y al final de la tarea

    //VALIDACIÓN DE TAREA VACIA
    
    if (texto ===""){
        mensajeError.textContent ="Debes escribir una tarea";
        return; // salimos de la funcion y no se agrega nada a la lista
    }

    mensajeError.textContent =""; //para que no aparezcan varios mensajes limpiamos el error
    const nuevaTarea = crearTarea(texto)//llamamos la funcion crear tarea y el parametro es el texto que ingresamos
    listaTareas.appendChild(nuevaTarea) //la mostramos en la lista

    campoTarea.value=""; //vaciamos el campo
    campoTarea.focus(); //dejamos el foco para una nueva tarea

    actualizarContador();

});

actualizarContador();


