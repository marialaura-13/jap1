var verificoCompra = 0;

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_2).then(function(resultObj){
        if (resultObj.status === "ok"){
           
            cartArray = resultObj.data;
            showCart(cartArray.articles);
            
            
        }
    });

});


/*function convertirPrecio(moneda){
    getJSONData(CART_INFO_2).then(function(resultObj){
        if (resultObj.status === "ok"){
            
            cartProducts = resultObj.data;
            
            let productosUSD = cartProducts.currency;
            let productosPesosU = cartProducts.currency;
            
        }
    });
} */

function showCart(array){
    
    var htmlContentToAppend = `<button type="button" onclick="cambio()" class="btn btn-primary btn-sm">Envio y Pago</button>`;
    
    for(var i = 0; i < array.length; i++){
        var product = array[i];
        console.log(product);
        
        if(product.currency ==="USD"){
            product.unitCost = product.unitCost*40;
            product.currency = "UYU";}
        
        
            htmlContentToAppend += ` 
   
        <div class="col-lg-12">
            <div class="items">
              <div class="product">
                <div class="row">
                  <div class="col-md-3">
                   <img class="img-fluid img-thumbnail" src="` + product.src + `">
                  </div>
                  <div class="col-md-8">
                    <div class="info">
                      <div class="row">
                        <div class="col-md-4 product-name">
                          <div class="product-name">
                            <a href="product-info.html" id="productName">`+ product.name +`</a>
                          </div>
                        </div>
                        <div class="col-md-4 quantity">
                          <label for="quantity">Cantidad:</label>
                          <input type="number" onchange="sumar()" value ="`+ product.count +`" class="form-control quantity-input count">
                          
                          </div>
                        <div class="col-lg-3.5 price">
                          <span class="currency">` + product.currency + " " + `</span> <span class="price1"> ` + product.unitCost + `</span>
                          <button class="btn" onclick="borrarA(this)"><i class="fa fa-trash"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
        </div> `;
          
    }
    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    sumar();
}           


function sumar(){
     
            //let currency = document.getElementsByClassName('currency');
            let precios = document.getElementsByClassName('price1');
            let cantidades = document.getElementsByTagName('input');
            let total=0;
            let subtotal=0;
            let envio=0;
            

            for (let i=0; i< precios.length; i++){
                    
                
                    
              
                    subtotal+= parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);   
                
            
            }
             envio = subtotal * metodoEnvio();
             total = subtotal + envio;
             console.log(envio);
            document.getElementById('envio').innerHTML="$"+(envio);
            document.getElementById('subtotal').innerHTML="$"+(subtotal);
            document.getElementById('total').innerHTML="$"+(total);  

} 



function borrarA(obj){
  var root = obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
  root.remove();
  sumar();

}


function cambio(){
  if (document.getElementById('cat-list-container')) {

    if (document.getElementById('cat-list-container').style.display == 'none') {
        document.getElementById('cat-list-container').style.display = 'block';
        document.getElementById('pagoYEnvio').style.display = 'none';
    }
    else {
        document.getElementById('cat-list-container').style.display = 'none';
        document.getElementById('pagoYEnvio').style.display = 'block';
    }
  }
}


function metodoEnvio() { 
  var metodo = document.getElementsByName("drone");
  var costo = 0.05;

  if (metodo[2].checked === true){
    costo = 0.15;
  }

  if (metodo[1].checked === true){
    costo = 0.07;
  }

  if (metodo[0].checked === true){
    costo = 0.05;
  }
  
  return costo;
}

function datosCompletosT(){
    var val1 = document.getElementById("nombreT").value;
    var val2 = document.getElementById("numeroT").value;
    var val3 = document.getElementById("vencimientoT").value;
    var val4 = document.getElementById("cvvT").value;
   

    if ((val1 === "") || (val2 === "") || (val3 === "") || (val4 === "")) {
      alert("Rellene los campos");
    }
    else{
      alert("Metodo de pago aceptado!");
      verificoCompra = 1;
      
    }
}


function datosCompletosB(){
 
  var val5 = document.getElementById("banco").value;
  var val6 = document.getElementById("cuenta").value;

  if ((val5 === "") || (val6 === "")) {
    alert("Rellene los campos");
  }
  else{
    alert("Metodo de pago aceptado!");
    verificoCompra = 1;
    
  }
}





function datosCompletosF(){
  
  if (verificoCompra == 0) {
    alert("Ingrese un metodo de pago valido");
  }
  else{
    alert("Compra finalizada!");
    
  }
}