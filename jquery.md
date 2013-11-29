# What is jQuery?
============================

An open source JavaScript library that simplifies the interaction between HTML and JavaScript. <br />
Created by John Resig in 2005, released in January of 2006. <br />
Built in an attempt to simplify the existing DOM APIs and abstract away cross-browser issues.

# Why use jQuery?
============================

jQuery makes the interaction between HTML and javascript easier. jQuery also handles cross-browser quirks. 
Each function in jQuery will work across a range of browsers.
jQuery is also easier to learn and master than Javascript because it has a quick, terse, syntax.

# How to use jQuery
============================

Let's rewrite the previous example using jQuery. First we need to include jQuery in our HTML:

```HTML
<head>
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<title>Let's have some fun with javascript</title>
</head>
<body>
	<div id="container">
		<h1>We love messing around with code</h1>
		<button id="clickIt">Click me!</button>
	</div>
	 <script src="fun.js"></script>
</body>
```
OK, so now our website should utilize jQuery. That was easy, wasn't it? Let's rewrite fun.js in jQuery.

```javascript
var butt = $("#clickIt");

butt.click(clickButton);

var count = 0

function clickButton() {
    var parent = $("#container");

    if (count++ == 0){
        createNewDiv(1);
        return;
    }

    var div = $("#newDiv");
    if (count%2 ==0){
        hideDiv(div);
    } else {
        showDiv(div);
    }
}
function createNewDiv(clickCount){
    var newdiv = $("<div></div>");
    newdiv.attr("id", "newDiv");
    newdiv.text("this is click number " + clickCount);
    var parent = $("#container");
    parent.append(newdiv);
}

function showDiv(div){
    div.attr("style", "display:block;");
    div.text("this is click number " + count);
}

function hideDiv(div){
    div.attr("style", "display:none;");
}

```

# jQuery: Usage
============================

Let's look at a piece of jQuery code:

```javascript
	$("div").addClass("special");
```

jQuery allows us to find elements and then immediately do something with them. In the above example, this code would find all "div" elements and add the class "special" to them.

Let's break this down a little more:

A **$** sign to define/access jQuery <br />
A **(selector)** to "query (or find)" HTML elements <br />
A jQuery **action()** to be performed on the element(s)

# jQuery: Selectors
============================

jQuery selectors allow you to select and manipulate HTML element(s).
All selectors in jQuery start with the dollar sign and parentheses: $().

**Element Selector**
The jQuery element selector selects elements based on the element name.

```javascript
	$("div")
```

**ID selector**
The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.
To find an element with a specific id, write a hash character, followed by the id of the element:

```javascript
	$("#container");
```

**Class Selector**
The jQuery class selector finds elements with a specific class.
To find elements with a specific class, write a period character, followed by the name of the class:

```javascript
	$(".container");
```

# jQuery: Events
============================

An event occurs when a user does something like move the mouse button or clicks an element. jQuery has it's own syntax for dealing with events.

In our code above, we have jQuery calling the "click" event on our button like so:

```javascript
	butt.click(clickButton);
```

This tells our code to execute the "clickButton" function when a user clicks on a button (remember that jQuery knows what button to execute the function on based on our **selector**). 

Some other examples of events are:

**dblclick()**

The function is executed when the user double-clicks on the HTML element.

**mouseenter()**

The function is executed when the mouse pointer enters the HTML element (hovers over it)

**mousedown()**

The function is executed, when the left mouse button is pressed down on an element.

# jQuery: Get/Set Attributes
============================

To get or set attributes with jQuery we use the **attr()** function. We can see this being used in our code when we set the ID of our new div to "newDiv":

```javascript
	newdiv.attr("id", "newDiv");
```

We can also get attributes using a similar syntax:

```javascript
	var divID = $("#newDiv.").attr("id");
```
This will set the value of divID to "newDiv".

The attr() function can be used to get all attributes on an element.

### Exercises

Visit http://api.jquery.com to get a full overview of what jQuery can do. If you completed the following exercises in JavaScript, try re-writing them in jQuery.

1. Make a page that accepts user input (in an `<input type="text">` field) and adds it to a <ul> list on the same page by clicking on a button
2. Change that exercise to add the word to a second list if it contains the word 'foo'
3. Change that exercise to let the user specify the 'foo' word in another text input box
4. Add a 'total words' count at the bottom of each list to show how many entries are in each list, updated with each new entry
