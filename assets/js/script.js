var titleList = document.getElementById('list');
var fetchButton = document.getElementById('fetch-button');
var carousel = document.querySelector("#carousel-image");
var nextButton = document.getElementById("next");
var previousButton = document.querySelector("#previous");
var index = 0;
var currentImage;

var isNextButtonPressed = false;

// const arrayCarousel = [
//   "https://foodish-api.herokuapp.com/images/biryani/biryani32.jpg",
// "https://foodish-api.herokuapp.com/images/biryani/biryani32.jpg"];

function getRedditApi() {
  // Insert the API url to get a list of your repos
//   var requestUrl = 'https://www.reddit.com/r/food/hot.json?limit=3&t=year&header_img=string';
 // var requestUrl = 'https://www.reddit.com/r/food/random/.json?width=516&height=516&updated=1234567890&ups=%3E3000';
  var requestUrl = 'https://pixabay.com/api/?key=11051961-4f0d89000ed013fdedab1b24f&q=food+dishes&min_width=600&min_height=300&safesearch=true&image_type=photo';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);

       
        //looping over the fetch response and inserting the URL of your repos into a list
        // for (var i = 0; i < data.data.children.length; i++) {
        //Create a list element
        var redditImage = document.createElement("img");
        
        console.log(requestUrl);
        
        //Set the text of the list element to the JSON response's .html_url property
        redditImage.src = data[0].data.children[0].data.photo;
        //redditTitle.textContent = data[0].data.children[0].data.title;

        //Append the li element to the id associated with the ul element.
        carousel.appendChild(redditImage);

      
         
     
      
          
    // }
    });
}

function GetSpoonacularApi()
{
  var spoonUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=ac6e3218814742b6a762c200d1c17b18&query=lamb&number=2&instructionsRequired=true&addRecipeInformation=true';


  fetch (spoonUrl)
    .then (function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)

        

        //get and display title
        var recipeTitle = document.createElement("h6");
        recipeTitle.textContent = data.results[0].title;

        titleList.appendChild(recipeTitle); 

        //get and display summary
        var recipeSummary = document.createElement("p");
        recipeSummary.innerHTML = data.results[0].summary;

        titleList.appendChild(recipeSummary); 

        //get and display recipe link
        var recipeLink = document.createElement("a");
        recipeLink.textContent = data.results[0].sourceUrl;
        recipeLink.href = data.results[0].sourceUrl;
        

        titleList.appendChild(recipeLink);

        
    })
}

// Testing May Delete later
function randomImg(width, height) {
  
  document.getElementById('carousel-image').innerHTML = '<img src="https://source.unsplash.com/random/900x700/?food,dishes">';
}

var counter = 0
const setImage = () => {

 document.getElementById("carousel-image").src = arrayCarousel[counter];
}

nextButton.addEventListener("click", function(event)
{
  
  event.stopPropagation();
  isNextButtonPressed = true;
    randomImg();
   // getRedditApi();
    counter += 1;
    console.log("This is the index number" + counter);

});

previousButton.addEventListener("click", function(event)
{
  event.stopPropagation();
  setImage();
  counter -= 1;
  console.log("This is the index number" + counter);

});

//fetchButton.addEventListener('click', getApi);


