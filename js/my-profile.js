//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

  
       document.getElementById("nombre1").innerHTML =  localStorage.getItem("nombre") + " " + localStorage.getItem("apellido");
       document.getElementById("pais1").innerHTML = localStorage.getItem("region") + "," + " " + localStorage.getItem("pais");    
       document.getElementById("nombreUsuario1").innerHTML = localStorage.getItem("input1");
       document.getElementById("nombreUsuario").value = localStorage.getItem("input1");
       document.getElementById("contraseña").value = localStorage.getItem("input2"); 
       document.getElementById("telefono1").innerHTML = localStorage.getItem("telefono");
       document.getElementById("correo1").innerHTML = localStorage.getItem("correo");
       document.getElementById("direccion1").innerHTML = localStorage.getItem("direccion");
      
       document.getElementById("nombre").value = localStorage.getItem("nombre");
       document.getElementById("apellido").value = localStorage.getItem("apellido"); 
       document.getElementById("telefono").value = localStorage.getItem("telefono");
       document.getElementById("correo").value = localStorage.getItem("correo");
       document.getElementById("pais").value = localStorage.getItem("pais");
       document.getElementById("region").value = localStorage.getItem("region");
       document.getElementById("direccion").value = localStorage.getItem("direccion");




});


function guardarUser(){
    
    var nombre = document.getElementById("nombre").value;
    localStorage.setItem("nombre", nombre); 
    
    var apellido = document.getElementById("apellido").value;
    localStorage.setItem("apellido", apellido); 

    var nombreUsuario = document.getElementById("nombreUsuario").value;
    localStorage.setItem("input1", nombreUsuario); 

    var contraseña = document.getElementById("contraseña").value;
    localStorage.setItem("input2", contraseña); 

    var telefono = document.getElementById("telefono").value;
    localStorage.setItem("telefono", telefono); 
    
    var correo = document.getElementById("correo").value;
    localStorage.setItem("correo", correo); 

    var pais = document.getElementById("pais").value;
    localStorage.setItem("pais", pais); 

    var region = document.getElementById("region").value;
    localStorage.setItem("region", region); 

    var direccion = document.getElementById("direccion").value;
    localStorage.setItem("direccion", direccion);


    
    console.log("hola");

    location.reload();

}

