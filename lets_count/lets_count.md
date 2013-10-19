# Let's Count

In this project, we will be introducing the concept of external JS (Javascript). We know that HTML creates the structure/contents of a page, CSS dictates how the page should look, and now we will learn how Javascript tells your browser what to *do*.

<div class='break'></div>

## Core Concepts

  * External JS
  * Variables

## Getting Started

As always, create a new folder for this project, and copy each of the files below into that folder.

<div class='break'></div>

## Source Files

*index.html*

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
	<title>My First Script</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script src="script.js" type="text/javascript"></script>
  </head>
  <body>
    <h1>Keeping Track</h1>
	<p id="count_sentence">The button has not yet been clicked!</p>
	<button type="button" onclick="changeCount()">Click Me!</button>
  </body>
</html>
```

*styles.css*

```css

#count_sentence{
    color: Navy;
	font-size: 14pt;
}

button{
	background-color: AliceBlue;
	font-size: 24pt;
}

button:hover{
	background-color: LightSkyBlue;
}

```

*script.js*

This is our Javascript file. In it we will create a variable, assign a value to it, and use it in a function. In JS, lines beginning with two forward slashes are ignored, and can be used to leave comments.

```js

//First, we create a new variable to keep track of the click count
var click_count = 0;

//Then we create a function which will be executed when we click the button
function changeCount()
{
    //We increase the click_count variable
	click_count++;

    //We create a variable with the new sentence
    var new_sentence = "The button has been clicked " + click_count + " time(s) so far!";
	
    //Here we replace the text inside 'count_sentence' to our new_sentence
	document.getElementById("count_sentence").innerHTML = new_sentence;
	
}

```

## HTML

There are three new aspects to this HTML page, the **script** tag, the **id** attribute and the **onclick** attribute.

  * `<script>`: This points to an external file which contains your Javascript Code.
  * `id="myID"`: Allows you to uniquely reference a page element
  * `onclick="myFunction()"`: Allows you to specify a function to executed when the user clicks on the element.

## CSS

The CSS for these project has a couple of new concepts.

  * **Targetting IDs**: When we place the hash (#) before a name, we tell our CSS to select a particular ID, rather than an element type.
  * **Hover Pseud-class**: Placing `:hover` after a selector tells CSS to only apply the styles when the user's mouse is over the element.

## JS

Some things you may have noticed in the Javascript code.

  * We use `var` to create a new variable
  * A string of text needs "quotation marks", but a number/integer does not.
  * We can combine different strings and variables using the plus (+) sign

## See what you can do!

  * Rephrase the sentence using the click count
  *  If `click_count++` increments the number, try decrementing it.
  *  Can you create a new button, with a new function? Try using `alert('Hello, world!');` inside the curly brackets.
