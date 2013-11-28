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

var newdiv = document.createElement("div");
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
Why do we put the script at the bottom? Interesting question, I'm glad you asked. In a nutshell: because if we tell the browser about the scripts after all the rest of the content, then we don't run into problems where the script refers to things in the document that the browser hasn't loaded yet and so doesn't know about. As you get more advanced you'll find out that there are other places to specify scripts too, but for now just put them at the bottom.

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

var butt = document.getElementbyId("clickIt")
butt.addEventHandler("click",clickButton)

function clickButton() {
	var newdiv = document.createElement("div");
	newdiv.innerHTML = "this is the new div";
	var parent = document.getElementbyId("container")
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
* parameters are things that are passed to the function so it can be used flexibly. This doesn't make much sense now, but will as we go through it. If the function has no parameters then the brackets () still need to be there
* value is returned from the function so the code that called it can do something with the result if it needs to.

a few example functions:

```javascript
var learning = "learning ";

function learningSomething(){
	return "learning is "
}
function makeLearningMoreFun(l){
	mf = l + " fun"; 
	return mf;
}
function notHavingAnyOfIt(s){
	return "not " + s
}

var moreFun = makeLearningMoreFun(learning);
console.log(moreFun)
var learningFun = makeLearningMoreFun(learningSomething())
console.log(learningFun)

var evenMoreFun = makeLearningMoreFun(moreFun);
console.log(evenMoreFun)

//now for complexity!
console.log(learningSomething() + notHavingAnyOfIt(makeLearningMoreFun()))

```
you can type these into the console in your browser to play with them if you want, or use the console.log command as you can see

Things we know so far:
defining a function looks like:
```javascript
function whatever(){
	var result = "whatever"
	return result
}
```
Calling a function from other code looks like:
``` javascript
var thing = whatever()
```
note the brackets! without them you assign the function itself to the variable thing, which gets really confusing really quickly (and we've all done it and spent way too long working out why thing isn't "whatever")

On to the two other key things in javascript: conditions and loops

####Conditions

Conditions are easy: 
```javascript
if (something == somethingElse) {
	doThatThingThatYouDo()
} else {
	dontDoTheThing()
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

####Loops 

Loops are pretty easy, but can be confusing at first
```javascript
for(var i = 0; i < 10; i++){
	doSomethingTenTimes()
}
```
the for statement is made up of three parts, separated by semicolons:
	1: done once before the loop starts
	2: a test that is checked on each loop iteration, the loop will continue if the check is 'true' and stop if 'false'
	3: done once between each iteration

The standard format (as above) is almost always what you want to do:
```javascript
var timesToDoIt = 100
for (var i = 0; i < timesToDoIt; i++){
	console.log("doing it " + i + " times")
	doIt()
}
```
if you just remember to write loops like this, you'll be fine for a few years of coding. 
