var categoriesArray = [];

function showCategoriesList(array){

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
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            

                console.log(categoriesArray);


            showCategoriesList(categoriesArray);
        }
    });
});