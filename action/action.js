function imprimir(){
    
    
    let nombre = document.getElementById("miNombre").value;

    let mensajeImprimir = "¡¡Bienvenido " + nombre + " !!";
    document.getElementById("mensajeFinal").innerText = mensajeImprimir;

}