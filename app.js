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
