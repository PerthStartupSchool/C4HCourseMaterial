# Hello World, Again

In this project, we will be introducing the concept of external CSS (page styling) and linking to other webpages.

<div class='break'></div>

## Core Concepts

  * External CSS
  * Linking to other pages

## Getting Started

By now you should have already downloaded Chrome and gotten set up with a text editor (If not, see the "Hello World" project). Create a new folder (call it whatever you want) for this project, and as before copy each of the files below into that folder.

<div class='break'></div>

## Source Files

*index.html*

This file describes our webpage.

```html
<!DOCTYPE html>
<html>
  <!-- This is an HTML comment. You do not need to copy these. -->
  <head>
	<!-- Anything in here is not visible in the page itself -->
	<meta charset="UTF-8" />
	<title>My First Webpage</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <!-- This block contains the primary content of the page. -->
  <body>
    <h1>Hello, world!</h1>
	<p>
		This is my first webpage <br />
		Visit my <a href="about.html">About</a> page.
	</p>
  </body>
</html>
```

*about.html*

The file describes our second webpage.

```html
<!DOCTYPE html>
<html>
  <!-- This is an HTML comment. You do not need to copy these. -->
  <head>
	<!-- Anything in here is not visible in the page itself -->
	<meta charset="UTF-8" />
	<title>About Me</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <!-- This block contains the primary content of the page. -->
  <body>
    <h1>About Me</h1>
	<p>My name is [your name] and this is my about page!</p>
  </body>
</html>
```

*styles.css*

This file describes the page styling.

```css

body{
	background: gray;
}

h1{
	color: black;
}

p{
	color: red;
}

```

## Styling your webpage

When you view your webpage, you will notice that the background colour is grey, the large text is black, and the text in the p tags are red. This is because you have told the page to style these elements like this in your styles.css file.

The link tag tells the page where to find the stylesheet to use. You can include multiple link tags on a webpage. For example, you may want to add specific styling for the about page.

## See what you can do!

  - Change the background colour of the page
  - Try changing the colour of the link (Hint: You may need to use Google to figure out how to do this) 
  - Add an about.css file and link to it from about.html. Use this CSS to change the p tags to yellow on the about page only.
