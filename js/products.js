var productsArray = [];


function sortProductsByRelevancy(array){
    let result = [];
    
    result = array.sort(function(a, b) {
        let aCount = parseInt(a.soldCount);
        let bCount = parseInt(b.soldCount);

        if ( aCount > bCount ){ return -1; }
        if ( aCount < bCount ){ return 1; }
        return 0;
    
    });

return result;
}


function sortProductsByPriceA(array){
    let result = [];
    
    result = array.sort(function(a, b) {
        if ( a.cost < b.cost ){ return -1; }
        if ( a.cost > b.cost ){ return 1; }
        return 0;
    });

return result;
}

function sortProductsByPriceD(array) {
    let result = [];
    
    result = array.sort(function(a, b) {
        if ( a.cost > b.cost ){ return -1; }
        if ( a.cost < b.cost ){ return 1; }
        return 0;
    });

return result;
}


function sortAndShowProducts1(){
    
    productsArray = sortProductsByPriceA(productsArray);
    console.log(productsArray);

    showProductList(productsArray);
}


function sortAndShowProducts2(){
    
        productsArray = sortProductsByPriceD(productsArray);
        console.log(productsArray);
    
        showProductList(productsArray);
}


function redirectProduct(){
    location.href="product-info.html";
}


function filtroDePrecio(){
 var min = document.getElementById("rangeFilterCountMin").value;
 var max = document.getElementById("rangeFilterCountMax").value;
  
   if (min == ""){
      min = 0;
  }
  if (max == ""){
      max = Number.MAX_VALUE;
  }

 if (min > max) {alert("Ingrese valores válidos")}
 //recorrer todo el array.productlist y eliminar aquellos que el precio no corresponda con el comando splice

  var listaFiltrada = [];
  for (let product of productsArray){
     console.log(product);
      if (product.cost >= min && product.cost <= max) {
        listaFiltrada.push(product);
      }
   }
 
    showProductList(listaFiltrada);
 
 
}


function showProductList(array){

    var htmlContentToAppend = "";
    for(var i = 0; i < array.length; i++){
        var category = array[i];

        
       htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" title="`  + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ category.name +`</h4>
                        <small class="text-muted">` + category.soldCount + ` artículos</small>
                    </div>
                    <p class="mb-1">`+ category.description +`</p>
                    <h4 class="text-muted">` + category.currency + " " + category.cost + ` </h4>
                </div>
            </div>
        </div>
        `;
        

       
    }
    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }


document.addEventListener("DOMContentLoaded", function(e){
    cargarOriginalProduct();
});

function sortAndShowProducts(){
    console.log("comienzo a ordenar");
    

    productsArray = sortProductsByRelevancy(productsArray);
    console.log(productsArray);

    showProductList(productsArray);
    
}

function cargarOriginalProduct(){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            

                console.log(productsArray);


            showProductList(productsArray);
        }
    });  
}

function Limpiar(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";
    
    cargarOriginalProduct();
}

function search(){

}


/*function sortProductsByPrice(array,criteria){
    let result = [];
    
    if (criteria === ascendente) {
    result = array.sort(function(a, b) {
        if ( a.cost < b.cost ){ return -1; }
        if ( a.cost > b.cost ){ return 1; }
        return 0;
        });
    }
    else (criteria === descendente) {
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }
    return result;           
}*/