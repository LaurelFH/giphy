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

public API key-->  The public beta key is "dc6zaTOxFJmzC”
https://giphy.api-docs.io/1.0/welcome
http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC

*/


//variable names with comments 
var animalsArray = ["cat", "dog", "mouse", "frog"];

//data types here?
//the text the user types in for the animal 
var animalInput = "";
//the button value (submit) for the submit button 
var addAnimalButton = "";


//function names with comments
//this function will make a button element for the value that the user entered 
function displayButtons(){
	//sets a variable called button and button element
	var button = $("<button type='button' class='btn btn-secondary'>");
	//loops through every animal in the array and adds the button element to the page 
	for(var i=0 ; i< animalsArray.length; i++){
	//adds the button element to the div that contains all of the animal buttons
	$("#animalButtons").append(button);
	}
}


//this function will add the new animal from the user
function addNewAnimal(){
	//adding a new animal name to the animalsArray and remove extra spacing  
 	var newAnimal = $("#animalInput").val().trim();
 	//add the animal name from the textbox to the animal array 
 	animalsArray.push(newAnimal);

}

//need to check the rating?
//this function will add the gifs from the API to the display area on the page
function displayAnimalgifs(){
	//or use prepend, or html?
	animalDisplay.append();

}


//JSON response/data key 
//data embed_url 

//events and flow 
$(document).ready(displayButtons());

$("#addAnimal").on("click", function(event){

	//keeps the submit button from trying to fully submit the form here
	event.preventDefault();
	//makes the buttons appear for animals in the array
	addNewAnimal();
}

	)



//limit API search to 10
 // Example queryURL for Giphy API
//capturing the animal button value?
var animal = $(this).attr("animalInput");

 //test the link in the browser? limit this to 10
    var queryURL = "https://api.giphy.com/v1/gifs/search?" + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });