# Javascript and the DOM
============================

Playing around with javascript is huge fun, but it takes a while for people to get this.

So... let's play!

First create a new directory (let's call it jsplay1) and a new HTML file, which looks like this:

```HTML
<head>
	<title>Let's have some fun with javascript</title>
</head>
<body>
	<div id="container">
		<h1>We love messing around with code</h1>
	</div>
</body>
```
save that as 'index.html'

now let's create our javascript file, called 'fun.js' in the same folder
```javascript

var newdiv = document.createElement("div");
newdiv.textContent = "this is the new div";
parent = document.getElementById("container")
parent.appendChild(newdiv)

```
line by line explanation:

	1. create a new div tag in the document and remember it as 'newdiv'
	2. set the inner content of the new div tag to be some text
	3. get the 'container' div tag from the document and remember it as 'parent'
	4. add the new div tag to the parent div

and that needs to be linked to from the HTML document, so change the bottom two lines to be:
```HTML
...
	</div>
	<script src="fun.js"></script>
</body>
```
Why do we put the script at the bottom? Interesting question, I'm glad you asked. In a nutshell: because if we tell the browser about the scripts after all the rest of the content, then we don't run into problems where the script refers to things in the document that the browser hasn't loaded yet and so doesn't know about. As you get more advanced you'll find out that there are other places to specify scripts too, but for now just put them at the bottom.

OK, so load the document and deal with any typos, and see your magic new content appear!

Wasn't that fun!? OK, so not so massively impressive. However, you should be aware of the power you wield. Those four little lines of code just altered the structure of the document, and the browser re-rendered it to the screen so fast you didn't even notice. This is the basis of everything cool and funky on the web.

------------------------
#### Tech Interlude: The DOM

The DOM is an acronym of the Document Object Model, and it represents everything on the HTML page that can be manipulated with javascript.
Every tag on the HTML page is an 'element' within the DOM. Each element has some special properties, some attributes, and can have child elements. Let's break it down:

this HTML:
```HTML
<div class="someClass" id="container" title="this is a container div" >
	<p class="someContent">This is some text</p>
</div>
```
is made up of two elements:
	* Div tag
	* P tag

These two elements each have some special properties:
	* the Div and P tags have a 'class' property
	* the Div tag has an 'id' property
and some attributes:
	* the Div tag has a 'title' attribute

These are all treated as 'nodes' of different types, so we could represent the html as:

```
node: type="element" name="div"
	node: type="attribute" name="class" value="someClass"
	node: type="attribute" name="id" value="container"
	node: type="attribute" name="title" value="this is a container div"
	node: type="element" name="p" value=""
		node: type="attribute" name="class" value="someContent"
		node: type="text" name="" value="This is some text"
```
The 'class' and 'id' properties are just special cases of attributes because they do special things.

------------------------

So, what happened in our bit of code above, now that we understand the DOM?

```javascript

var newdiv = document.createElement("div");
newdiv.textContent = "this is the new div";
parent = document.getElementbyId("container")
parent.appendChild(newdiv)

```
Re-interpreting it with our new understanding:
	1. we create a new element of type 'div'
	1. we set its text node
	1. we find the element that it should be contained by
	1. we add the new element to the parent element's list of children.

Let's make this a bit more interactive. Add the following to the HTML:
```HTML
	...
	<div id="container">
		<h1>we love messing with code</h1>
		<button id="clickIt">Click me!</button>
	</div>
```
and change the script file to look like:

```javascript

var butt = document.getElementById("clickIt")
butt.addEventListener("click",clickButton)

function clickButton() {
	var newdiv = document.createElement("div");
	newdiv.innerHTML = "this is the new div";
	var parent = document.getElementById("container");
	parent.appendChild(newdiv);
}

```
javascript has semicolons after each statement, and easily missed. Your browser will complain if you miss them off, so get used to putting them in.

line-by-line explanation:

	1. get the button tag and remember it as 'butt' (no jokes please)
	2. add an event listener to the butt button for the click event that runs the 'ItGotClicked' event
	3. declare a function to wrap our last bit of code so it can be called from the event handler

-----------------------------
###Tech Interlude: Functions
Functions are fun, it says it right there in the name.

A function is a piece of code that can be 'called' by another piece of code, including itself. A function looks like this:
```javascript
function name (parameters){
	code goes here;
	return value;
}
```
explanation:
* the name can be anything, except weird characters, but please for the sake of all things shiny, keep function names simple and memorable. The usual naming method is 'verbNoun' like 'doSomething', 'engageWarpDrive','haveANiceDay'
* parameters are things that are passed to the function so it can be used flexibly. This doesn't make much sense now, but will as we go through it. If the function has no parameters then the brackets () still need to be there
* value is returned from the function so the code that called it can do something with the result if it needs to.

a few example functions:

```javascript
var learning = "learning ";

function learningSomething(){
	return "learning is ";
}
function makeLearningMoreFun(l){
	mf = l + " fun"; 
	return mf;
}
function notHavingAnyOfIt(s){
	return "not " + s;
}

var moreFun = makeLearningMoreFun(learning);
console.log(moreFun);
var learningFun = makeLearningMoreFun(learningSomething());
console.log(learningFun);

var evenMoreFun = makeLearningMoreFun(moreFun);
console.log(evenMoreFun);

//now for complexity!
console.log(learningSomething() + notHavingAnyOfIt(makeLearningMoreFun()));

```
you can type these into the console in your browser to play with them if you want, or use the console.log command as you can see we've used here 

Things we know so far:
defining a function looks like:
```javascript
function whatever(){
	var result = "whatever";
	return result;
}
```
Calling a function from other code looks like:
``` javascript
var thing = whatever()
```
note the brackets! without them you assign the function itself to the variable thing, which gets really confusing really quickly (and we've all done it and spent way too long working out why thing isn't "whatever")

OK, that's enough, now back to the DOM

-----------------------------------

let's use the parameters thing in the functions. Change your script to look like this:
```javascript
function clickButton() {
	var parent = document.getElementById("container");
	var count = parent.childNodes.length;
	createNewDiv(count);
}
function createNewDiv(divNumber){
	var newdiv = document.createElement("div");
	newdiv.innerHTML = "this is div number " + divNumber;
	var parent = document.getElementById("container");
	parent.appendChild(newdiv);
}
```

so now we have a page that adds a new piece of HTML every time we click a button, and does counting. Cool or what?
You'll notice that the count starts with 5... why?

Remember we said 'HTML contains the structure, Javascript contains the behaviour'? It's really easy to create HTML content using javascript and the DOM, and creating some HTML in response to user input is fine, but resist the temptation to have your site build itself from script. It'll cause problems, trust me.

We should also talk about Event Listeners shouldn't we?

An Event Listener can be added to any element in the DOM, for any event that the element supports (e.g. the Button element supports the 'click' event, as does most elements). If that event happens; if the user clicks on the button, then the associated function is executed. 
So to create an event listener, we use the 'addEventListener' method, and pass in what event we want to listen for and what function to run when it happens.
In our example, we add a listener to the button for the 'click' event, and pass in the name of the `clickButton` function, which will then be run every time the button is clicked.

Let's play with this a bit, and make something a little more intelligent. But first... conditions!

---------------------------------
#### Tech Interlude: Conditions

Conditions are easy: 
```javascript
if (something == somethingElse) {
	doThatThingThatYouDo();
} else {
	dontDoTheThing();
}
```
the test condition has to be in brackets (), and the code sections for each condition has to be in {} brackets too
the condition tests are a little weird:
  * == - equal
  * != - not equal
  * >  - greater than
  * <  - less than
  * >= - equal or greater
  * <= - equal or less than
  * !  - not

There's also this one:
 * === - really, really equal to, not just pretending to be equal to

I only add this because it can be confusing looking at other people's code and seeing it sitting there like a typo.

Each condition must evaluate to 'true' or 'false' (so 1 == 1 is 'true', 1 > 2 is 'false').
If the condition is true then the code immediately after the if statement is executed.
If the condition is false then the code immediately after the else statement is executed (if present)

The ! (not) condition can be combined with other conditions if you want to execute something only if the test is false
```javascript
if  !(error === "undefined"){
	//oops bad thing happened!
}
```
------------------------------------

OK, so now we understand how to write a condition, let's use one. Change the entire script file to look like this:
```javascript
var butt = document.getElementById("clickIt")
butt.addEventListener("click",clickButton)

var count = 0
function clickButton() {
	var parent = document.getElementById("container");
	if (count++ ==0){
		createNewDiv(1);
		return;
	}
	var div = document.getElementById("newDiv");
	if (count%2 ==0){
		hideDiv(div);
	} else {
		showDiv(div);
	}
}
function createNewDiv(clickCount){
	var newdiv = document.createElement("div");
	newdiv.id = "newDiv"
	newdiv.textContent = "this is click number " + clickCount;
	var parent = document.getElementById("container");
	parent.appendChild(newdiv);
}
function showDiv(div){
	div.setAttribute("style", "display:block;");
	div.textContent = "this is click number " + count;
}
function hideDiv(div){
	div.setAttribute("style", "display:none;");
}
```
there's a few interesting things here:

variable scope: notice that we defined 'count' outside any function? that means it has global scope and can be used inside any function (like our showDiv function). *Variables defined inside any curly brackets {} can only be used within those curly brackets.*

++ operator: the statement `if (count++ == 0)` looks odd. This is sexy coding stuff; there's a few things going on here:
  * the ++ operator adds 1 to the value of the variable *after* anything else in the statement
  * the condition in an if statement is always evaluated, which means anything that changes stuff gets changed. 
So this statement reads "check if the value of count is zero, then add one to it regardless"

% operator: the 'mod' operator % takes the modulus of a division (the remainder). so 3/2 == 1, 3%2 ==1, 4/2 == 2, 4/2 ==0 and so on. 


### Exercises

If you want something to try your hand at with javascript and the DOM:

1. Make a page that accepts user input (in an `<input type="text">` field) and adds it to a <ul> list on the same page by clicking on a button
2. Change that exercise to add the word to a second list if it contains the word 'foo'
3. Change that exercise to let the user specify the 'foo' word in another text input box
4. Add a 'total words' count at the bottom of each list to show how many entries are in each list, updated with each new entry
