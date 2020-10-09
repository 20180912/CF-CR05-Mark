//Parsing the JSON
var movies_obj = JSON.parse(movies);

$(document).ready(function () {

    //Adding a function to print the content for reusability. Using nested divs and padding to eliminate the need for offsets depending on position or margins
    function printContent() {
        for (let i = 0; i < movies_obj.length; i++) {
            $("#movies").append(`
            <div class="col-lg-3 col-md-4 col-6 p-3"> 
                <div id="${i}" class="p-1 clearfix">
                    <img src=${movies_obj[i].image} class="rounded float-left m-1">
                    <div class="details">
                        <p class="h3">${movies_obj[i].movieName}</p>
                        <p>${movies_obj[i].description}</p>
                        <br><br>
                        <p class="like"> Like &#128077 <span class="score">${movies_obj[i].likes}</span></p>
                    </div>
                </div>
            </div>`);
        }
    }
    //Printing the content for the first time
    printContent();

    //Adding an event listener for likes to #movies so sorting won't affect it
    $("#movies").on("click", "div div div .like", addLike);

    //Increasing the number of likes
    function addLike() {
        var index = $(this).parent().parent().attr("id");
        movies_obj[index].likes += 1;
        $(this).parent().find(".score").html(movies_obj[index].likes);
    }
    
    //Adding an event listener for sorting
    $("#sort").on("click", sortMovies);

    //Sorting the movies by their number of likes
    function sortMovies() {
        movies_obj.sort(function(a,b){
            return Number(b.likes) - Number(a.likes);
        })
        $("#movies").html("");
        printContent();
    }

});