var comment = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){ 
    
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;
            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("categoryDescription");
            let productCostHTML = document.getElementById("productCost");
            let productCriteriaHTML = document.getElementById("productCriteria");
            let productSoldCountHTML = document.getElementById("productSoldCount");
            
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.currency + " " + product.cost;
            productCriteriaHTML.innerHTML = product.category;
            productSoldCountHTML.innerHTML = product.soldCount;

            
            showImagesGallery(product.images);
        }
    });
    // cargo los comentarios o lo que necesito
    cargarComentarios();
});

function showCommentList(array){

    var htmlContentToAppend = "";
    for(var i = 0; i < array.length; i++){
        var comment = array[i];

        console.log(comment);
        htmlContentToAppend += ` 
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="d-flex w-100 justify-content-between">
                    <div class="mb-1 col-2">
                        <h6 class="font-weight-bold margin-score">  ` + comment.user + ` </h6>
                        <small class="text-muted">` + scoreStars(comment.score) + ` </small>
                    </div>
                    <div class="col-8">
                        <p class="mb-1"> ` + comment.description + `</p>
                    </div>
                    <div class="col-2">
                        <h6 class="text-muted"> ` + comment.dateTime + `  </h6>
                    </div>
                </div>
            </div>
       </div>
        `;
    }
    
    
    document.getElementById("comment-list-container").innerHTML = htmlContentToAppend;
} 

  
  

function cargarComentarios(){
    getJSONData(PRODUCT_INFO_COMMENTS_URL ).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            commentsArray = resultObj.data;
                
            console.log(commentsArray);

            showCommentList(commentsArray);
        }
    });  
    
}


function scoreStars(stars){
    let score = "";

    for (let i = 1; i <= 5; i++) {
        if (i<=stars){score += `<span class="fas fa-star"></span>`}
        else {score += `<span class="far fa-star"></span>`}

    }

    return score;
}