function redirect() {
    
   var username = localStorage.getItem("input1");
   if (username===null){
     alert("Por favor ingrese a su cuenta");
     location.href = "index.html"
   }
   console.log(username);
 }

 redirect();