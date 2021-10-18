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
    
    var htmlContentToAppend = "";
    
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
                          <button class="btn"><i class="fa fa-trash"></i></button>
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
            

            for (let i=0; i< precios.length; i++){
                    
                
                    total+= parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);
              
                    subtotal+= parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);   
                
            
            }
            document.getElementById('subtotal').innerHTML="$"+(subtotal);
            document.getElementById('total').innerHTML="$"+(total);  

} 

function sumar1(){
     
    //let currency = document.getElementsByClassName('currency');
    let precios = document.getElementsByClassName('price1');
    let cantidades = document.getElementsByTagName('input');
    let total=0;
    let subtotal=0;
    

    
            
        
            total+= parseFloat(precios.innerHTML) * parseFloat(cantidades.value);
      
            subtotal+= parseFloat(precios.innerHTML) * parseFloat(cantidades.value);   
        
    
    
    document.getElementById('subtotal').innerHTML="$"+(subtotal);
    document.getElementById('total').innerHTML="$"+(total);  

} 

