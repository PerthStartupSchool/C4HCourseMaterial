# Fun with Javascript part 1
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

newdiv = document.createElement("div");
newdiv.innerHTML = "this is the new div";
parent = document.getElementbyId("container")
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
Why do we put the script at the bottom? Interesting question, I'm glad you asked. In a nutshell; because if we tell the browser about the scripts after all the rest of the content, then we don't run into problems where the script refers to things in the document that the browser hasn't loaded yet and so doesn't know about. As you get more advanced you'll find out that there are other places to specify scripts too, but for now just put them at the bottom.

OK, so load the document and deal with any typos, and see your magic new content appear!

Wasn't that fun!? OK, so not so massively impressive. However, you should be aware of the power you wield. Those four little lines of code just altered the structure of the document, and the browser re-rendered it to the screen so fast you didn't even notice. This is the basis of everything cool and funky on the web.

Right, so let's make this a bit more interactive. Add the following to the HTML:
```HTML
	...
	<div id="container">
		<h1>we love messing with code</h1>
		<button id="clickIt">Click me!</button>
	</div>
```
and change the script file to look like:

```javascript

butt = document.getElementbyId("clickIt")
butt.addEventHandler("click",clickButton)

function clickButton() {
	newdiv = document.createElement("div");
	newdiv.innerHTML = "this is the new div";
	parent = document.getElementbyId("container")
	parent.appendChild(newdiv)
}

```
line-by-line explanation:

	1. get the button tag and remember it as 'butt' (no jokes please)
	2. add an event handler to the butt button for the click event that runs the 'ItGotClicked' event
	3. declare a function to wrap our last bit of code so it can be called from the event handler

###Tech Interlude: Functions
Functions are fun, it says it right there in the name.
A function is a piece of code that can be 'called' by another piece of code, including itself. A function looks like this:
```javascript
function name (parameters){
	code goes here
	return value;
}
```
explanation:
* the name can be anything, except weird characters, but please for the sake of all things shiny, keep function names simple and memorable. The usual naming method is 'verbNoun' like 'doSomething', 'engageWarpDrive','haveANiceDay'
* parameters are things that are passed to the function so it can be used flexibly. This doesn't make much sense now, but will as we go through it
* value is returned from the function so the code that called it can do something with the result if it needs to.

a few example functions:

```javascript
learning = "fun";

function makeLearningMoreFun(l){
	mf = l + " fun"; 
	return mf;
}

moreFun = makeLearningMoreFun(learning);

evenMoreFun = makeLearningMoreFun(moreFun);

```
you can type these into the console in your browser to play with them if you want

