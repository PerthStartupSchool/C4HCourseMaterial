//First, we create a new variable to keep track of the click count
var click_count = 0;

//Then we create a function which will be executed when we click the button
function changeCount()
{
    //We incrementnu the click_count variable
	click_count++;

    //We create a variable with the new sentence
    var new_sentence = "The button has been clicked " + click_count + " time(s) so far!";
	
    //Here we replace the text inside 'count_sentence' to something with the updated number
	document.getElementById("count_sentence").innerHTML = new_sentence;
	
}