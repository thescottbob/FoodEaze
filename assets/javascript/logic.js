/*********************************************
 * Edamam API call
 *******************************************/

// Edamam App ID: ed77f616
// Edamam API Key: 976bea25ef3c24d77968f5c1879d9012
// Valid Diet filters:           [balanced, high-protein, low-fat, low-carb]
// Valid Health/Allergy filters: [vegan, vegetarian, sugar-conscious, peanut-free, tree-nut-free, alcohol-free]

let edamAppID = "ed77f616"
let edamApiKey = "976bea25ef3c24d77968f5c1879d9012"
let food = "pizza";
let dietRestrictions = "";
let healthRestrictions = "";

let url = `https://api.edamam.com/search?app_id=${edamAppID}&app_key=${edamApiKey}&q=${food}`

// TODO: Replace #test reference with real ref
$("#test").on("click", function () {
    $.ajax(url, {
        method: "GET"
    }).then(function(stuff) {
        recipes = stuff.hits
        console.log(recipes)

        for (let i=0; i<recipes.length; i++) {
            let r = recipes[i].recipe
            console.log("-----------------------------")

            console.log(r.label)
            console.log(r.url)
            console.log(r.ingredients)
            console.log(r.healthLabels)
            // $("body").append( $("<img>").attr("src",r.image) )

            console.log("-----------------------------")
        }
    })
})

/************************************
 * Vanilla javascipt for login modal
 * ***********************************/
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Vanilla javascipt for tabs
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
