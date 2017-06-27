//javascript for the giphy webpage 
//GENERAL LOGIC PLAN 
//USER-SIDE  
/*
1.  user arrives to the page that has a set of buttons already visible with animal names
 (to start as a cue? or maybe appended?)
2.  user clicks a button with one of the animal names on it 
3.  when clicked, the button calls up 10 gifs which contain the named animal (from the button)
4.  These 10 gifs from gif's database are visible after the button is clicked
5. the user can add more buttons by using the "submit" button and a new animal button is created next to the others 

//COMPUTER-SIDE (ajax call other notes from readme!)
1.contain some present cue buttons? when the page is loaded
2.when the user clicks a pre-set button, then the animal on the button value should be pulled from API
3. 10 gifs of this animal button's value need to be displayed
4. the button remains on the page (not refreshed?)
5. if the user uses the submit/input box to add another animal name, then a new button should be created, with the value from that input box
6.the button, the gifs from that value and the animal gifs should be made visible 

 The public beta key is "dc6zaTOxFJmzC” change the http to https for ghithub pages! 
https://giphy.api-docs.io/1.0/welcome
http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC

*/
//variable names with comments 
var topicsArray = ["cat", "dog", "mouse", "frog"];

//data types here?
//the text the user types in for the animal 
var animalInput = "";
//the button value (submit) for the submit button 
var addAnimalButton = "";


//FUNCTION NAMES 

//this function will make a button element for the value that the user entered 
function displayButtons() {
    //empty the div before adding new buttons 
    $("#animalButtons").empty();

    //loops through every animal in the array and adds the button element to the page 
    for (var i = 0; i < topicsArray.length; i++) {
        //sets a variable called button and button element
        var button = $("<button>");
        button.addClass("btn");
        button.attr("id", topicsArray[i]);
        //provides the button's text info for the animal 
        button.text(topicsArray[i]);
        //add the event to the button 
        button.on("click", function(event) {
            //https://stackoverflow.com/questions/48239/getting-the-id-of-the-element-that-fired-an-event
            //getGifs(event.target.id);
            //alert(event.target.id);
        });
        //adds the button element to the div that contains all of the animal buttons
        $("#animalButtons").append(button);

    }
}

//this function will add the new animal from the user from the inputbox
function addNewAnimal() {
    //adding a new animal name to the animalsArray and remove extra spacing  
    var newAnimal = $("#animalInput").val().trim();
    //alert(newAnimal);
    //change the spaces to a + sign 
    //animalInput = animalInput.replace(/ /g, "+");
    //add the animal name from the textbox to the animal array 
    topicsArray.push(newAnimal);
}


//this function will add the gifs from the API to the display area on the page
function displayAnimalgifs() {
    //or use prepend, or html?
    animalDisplay.prepend();

}

/* STILL HAVE TROUBLE GETTING THE AJAX CALL TO WORK-- CAN GET THE JSON FILE, BUT THE INFO ISN'T QUITE MATCHING (CAN'T CONSOLE.LOG ETC)
//this function will grab 10 static gif from the giphy api 
function getGifs(searchQuery) {
    //need to use this in this case?  
    //var animal = $(this).attr("");

    //test the link in the browser? limit this to 10! url+q+searchterm+api public key+ limits on responses
    var queryURL = "https://api.giphy.com/v1/gifs/search?" + "&q=" + searchQuery + "&api_key=dc6zaTOxFJmzC" +
        +"&limit=10";

    //make an ajax request via the url above 
    $.ajax({
            url: queryURL,
            method: 'GET'
            //dataType: "json",
        })
        //once that data gets back console.log it for viewing 
        .done(function(response) {
            //see what matches up 
            console.log(response.data);

            var gifResults = response.data;
            alert(gifResults);

            //loop through the returned results
            for (var i = 0; i < gifResults.length; i++) {

                //check to see if the image's rating is SFW 
                if (gifResults[i].rating !== "r" && gifResults[i].rating !== "pg-13") {

                    //Creating and storing a new div tag for the ratings etc.
                    var animalDiv = $("<div class='item'>");
                    var rating = gifResults[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating and storing an image tag for the gif image
                    var animalImage = $("<img>");

                    // Setting the src attribute of the image to a property pulled off the result item
                    //https://developers.giphy.com/docs/
                    animalImage.attr("src", gifResults[i].images.fixed_height_still.url);

                    // Appending the paragraph with the rating and image tag to the animalDiv
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    $("#animalDisplay").prepend(animalDiv);
                }
            };

        });

*/
    //CALLING FUNCTIONS AND EVENTS HERE!!!!
    //ready the page
    $(document).ready(displayButtons());
    //when the addAnimal button is clicked then do the following:

    $("#addAnimalButton").on("click", function(event) {
        //keep the submit button from trying to fully submit the form here
        event.preventDefault();
        //save the new animal info from the animalInput box
        //add that new animal to the current animal array
        //alert("addNewAnimal"); 
        addNewAnimal();

        //getGifs();  
        //make the buttons appear for animals in the array
        displayButtons();
    });


    //limit API search to 10 gifs per search 
    // Example queryURL for Giphy API
    //capturing the animal button value?
    /*var animal = $(this).attr("animalInput");
     
        //info to pause or animate a gif (from class notes) check values for giphy objects in console/documentation
        /* $(".gif").on("click", function() {
          // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
          var state = $(this).attr("data-state");
          // If the clicked image's state is still, update its src attribute to what its data-animate value is.
          // Then, set the image's data-state to animate
          // Else set src to the data-still value
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });
        */