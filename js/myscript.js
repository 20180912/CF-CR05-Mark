var movies_obj = JSON.parse(movies);

$(document).ready(function () {

    for (let i = 0; i < movies_obj.length; i++) {
        $("#movies").append(`
        <div class="col-lg-3 col-md-4 col-6 p-3">
            <div class="p-1 clearfix">
                <img src=${movies_obj[i].image} class="rounded float-left m-1">
                <div class="details">
                    <p class="h3">${movies_obj[i].movieName}</p>
                    <p>${movies_obj[i].description}</p>
                    <br><br>
                    <p class="rating">Like &#128077 <span class="score">${movies_obj[i].likes}</span></p>
                </div>
            </div>
        </div>`);
        console.log(movies_obj[i].movieName);
           
        
    }

});