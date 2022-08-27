var spoonContent = document.querySelector('#recipeContainer');
var redditContent = document.querySelector("#redditImage")
var nextButton = document.querySelector("#nextButton");
var searchButon = document.querySelector("#recipeButton");



//----Call Reddit and Spoonacular API functionality--------------------------------------
function getApi() {
  getReddit();
  getSpoon();
}
function getReddit() {
  //----Reddit API query---------
  var requestUrl = 'https://www.reddit.com/r/food/random/.json?updated=1234567890&ups=%3E3000';
  //----Parse selected Reddit JSON object and display selected values-------
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //--test
      console.log('--reddit object----');
      console.log(data);

      //--select and display content----------------
      var redditImage = document.createElement("img");
      var redditTitle = document.createElement("h6");

      redditImage.src = data[0].data.children[0].data.thumbnail;
      redditTitle.textContent = data[0].data.children[0].data.title;
      redditContent.appendChild(redditImage);

      //---Remove unwanted tags from reddit posts titles-------
      if (redditTitle.textContent.includes('Homemade')) {
        //test
        console.log(true);

        //---Remove unwanted string & display clean title
        var oldTitle = redditTitle.textContent;
        var newString = oldTitle.replace('[Homemade]', '');
        var cleanTitle = document.createElement("h3");
        cleanTitle.textContent = newString;

        console.log('--reddit Title test----');
        console.log(cleanTitle);
        redditContent.appendChild(cleanTitle);
      } if (redditTitle.textContent.includes('[homemade]')) {
        //test
        console.log(true);
        //remove unwanted string & display clean title
        var oldTitle = redditTitle.textContent;
        var newString = oldTitle.replace('[homemade]', '');
        var cleanTitle = document.createElement("h3");
        cleanTitle.textContent = newString;
        //test
        console.log('--reddit Title test----');
        console.log(cleanTitle.textContent);
        redditContent.appendChild(cleanTitle);
      } if (redditTitle.textContent.includes('[i ate]')) {
        //test
        console.log(true);
        //remove unwanted string & display clean title
        var oldTitle = redditTitle.textContent;
        var newString = oldTitle.replace('[i ate]', '');
        var cleanTitle = document.createElement("h3");
        cleanTitle.textContent = newString;
        //test
        console.log('--reddit Title test----');
        console.log(cleanTitle.textContent);
        redditContent.appendChild(cleanTitle);
      } if (redditTitle.textContent.includes('[I ate]')) {
        //test
        console.log(true);
        //remove unwanted string & display clean title
        var oldTitle = redditTitle.textContent;
        var newString = oldTitle.replace('[I ate]', '');
        var cleanTitle = document.createElement("h3");
        cleanTitle.textContent = newString;
        //test
        console.log('--reddit Title test----');
        console.log(cleanTitle.textContent);
        redditContent.appendChild(cleanTitle);
      } if (redditTitle.textContent.includes('[I Ate]')) {
        //test
        console.log(true);
        //remove unwanted string & display clean title
        var oldTitle = redditTitle.textContent;
        var newString = oldTitle.replace('[I Ate]', '');
        var cleanTitle = document.createElement("h3");
        cleanTitle.textContent = newString;
        //test
        console.log('--reddit Title test----');
        console.log(cleanTitle.textContent);
        redditContent.appendChild(cleanTitle);
      } //else { it would be good to figure out what to do if it looks different, but it's hard
      //redditContent.appendChild (redditTitle);
      //}
    });
}

function getSpoon() {
  //----Spoonacular API query
   var spoonUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=ac6e3218814742b6a762c200d1c17b18&query=lamb&number=2&addRecipeInformation=true';

  var searchInputVal = document.querySelector('#searchBar').value;
  console.log(searchInputVal);
  if (searchInputVal.includes(' ')) {
    //test
    console.log(true);
    //remove unwanted string & display clean title
    var oldInput = searchInputVal;
    var newInput = oldInput.replace(' ', '-');
    var cleanInput;
    cleanInput = newInput;
    //var cleanTitle = document.createElement("h3");
    // cleanTitle.textContent = newString;
    // //test
    // console.log('--reddit Title test----');
    // console.log (cleanTitle.textContent);
    // redditContent.appendChild(cleanTitle); 

  }

  //var spoonUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=1ba08610419e4c7a9791d166c28d523e&query=' + cleanInput + '&number=10&instructionsRequired=true&addRecipeInformation=true';

  console.log(spoonUrl);
  //----Parse selected Spoonacular JSON object and display selected values-------         
  fetch(spoonUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log('--spoon object-----');
      console.log(data);

      //get and display title
      var recipeTitle = document.createElement("h6");
      recipeTitle.textContent = data.results[0].title;

      spoonContent.appendChild(recipeTitle);

      //get and display recipe summary
      var recipeSummary = document.createElement("p");
      recipeSummary.innerHTML = data.results[0].summary;

      spoonContent.appendChild(recipeSummary);

      //get and display recipe link
      var recipeLink = document.createElement("a");
      recipeLink.textContent = data.results[0].sourceUrl;
      recipeLink.href = data.results[0].sourceUrl;

      spoonContent.appendChild(recipeLink);
    });
}


nextButton.addEventListener("click", getReddit());
searchButon.addEventListener("click", getSpoon());


