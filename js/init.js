const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const CART_INFO_2 = "https://japdevdep.github.io/ecommerce-api/cart/654.json"

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}


function FunctionLogin() {
   
    var val1 = document.getElementById("input1").value;
    var val2 = document.getElementById("input2").value;

    if ((val1 === "") || (val2 === "")) {
      alert("Rellene los campos");
    }
    else{
      location.href="home.html";
    }

   var usuario = document.getElementById("input1").value;
   localStorage.setItem("input1", usuario); 

   var contraseña = document.getElementById("input2").value;
   localStorage.setItem("input2", contraseña);
    
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  
  if (document.getElementById("user") !== null){
   document.getElementById("user").innerHTML = "Bienvenido" + " " + localStorage.getItem("input1") + "!";
  }
});

function cerrarSesion(){
  localStorage.removeItem("input1");
  location.href="home.html";
}
