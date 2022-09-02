var spoonContent = document.querySelector('#recipeContainer');
var redditContent = document.querySelector("#redditImage");
var saveContent = document.getElementById("saveContainer");
var nextButton = document.querySelector("#nextButton");
var searchButton = document.getElementById("recipeButton");
var saveButton = document.getElementById("addRecipeButton");
var localStorageButton = document.getElementById("localStorageButton");

var isRedditActive = false;
var isSpooncularActive = false;


//----Call Reddit and Spoonacular API functionality--------------------------------------
function getApi() {
  getReddit();
  //getSpoon();
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

        console.log(redditContent);
      } //else { it would be good to figure out what to do if it looks different, but it's hard
      //redditContent.appendChild (redditTitle);
      //}
    });
}

function getSpoon() {
  //----Spoonacular API query
  //var spoonUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=ac6e3218814742b6a762c200d1c17b18&query=lamb&number=2&addRecipeInformation=true';

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

  } else {
    var cleanInput = searchInputVal;
  }

  var spoonUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=edf37b37785d42059408772c69f6b049&query=' + cleanInput + '&number=10&instructionsRequired=true&addRecipeInformation=true';

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

      var linkList = document.createElement("tr");
      var hrSpace = document.createElement("hr");


      // Appends the recipe name and link to the save section of the document 
      saveButton.addEventListener("click", function () {
        document.getElementById("savedContainerText").style.display = "none";
      
      
        linkList.appendChild(recipeTitle);
        recipeTitle.appendChild(recipeLink);
        
        var lsTitle = recipeTitle;
        var lsLink = recipeLink;
      
       localStorage.setItem("Title", lsTitle);
       localStorage.setItem("Link", lsLink);

       console.log("this is LS Title" + lsTitle);
       console.log("this is LS Link" + lsLink);
        saveContent.appendChild(linkList);
      
        //Grabs all the "A" tags in the document a appends an attribute "_blank" to open a new tab
        var allATags = document.getElementsByTagName("a");
        for (let i = 0; i < allATags.length; i++) {
          allATags[i].setAttribute("target", "_blank");
          console.log("this is all the tags" + allATags);
          
        }
      });
    });
}
localStorageButton.addEventListener("click", function(){

  let gettingItem = localStorage.getItem("Link");

  let user = JSON.parse(gettingItem);
  document.getElementById("saveContainer").innerHTML = user;
  console.log(user);
 });

// When the next button is clicked it calls for getReddit(); function
// And when it's clicked a second time it removes the children and then recalls for getReddit();
nextButton.addEventListener("click", function () {
  if (isRedditActive === false) {
    getReddit();
    document.getElementById("redditStartText").style.display = "none";
    isRedditActive = true;
  } else if (isRedditActive === true) {
    const redditParent = document.getElementById('redditImage');
    console.log(redditImage.firstChild.nodeName);
    redditContent.removeChild(redditParent.lastChild);
    redditContent.removeChild(redditParent.lastElementChild);
    getReddit();
  }
});


// When the recipe search button is clicked it calls for getSpoon(); function
// And when it's clicked a second time it removes the children and then recalls for getSpoon();
searchButton.addEventListener("click", function (element) {

  if (isSpooncularActive === false) {
    document.getElementById("recipeStartText").style.display = "none";
    getSpoon();
    isSpooncularActive = true;
  } else if (isSpooncularActive === true) {

    const spoonParent = document.getElementById("recipeContainer");
    spoonContent.removeChild(spoonParent.lastElementChild);
    spoonContent.removeChild(spoonParent.lastElementChild);
    spoonContent.removeChild(spoonContent.lastElementChild);
    getSpoon();
    // isSpooncularActive = false;
  }
});

