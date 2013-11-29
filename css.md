# CSS Is Fun!
=============

This lesson is a bit short, because CSS is very simple and very deep.

As we said earlier, the format for CSS is:
```CSS
selector {
	attribute:value;
}
```

this sets the attribute to the value specified.

All CSS follows this format, it's that simple. Let's do a couple of examples:

create an HTML file like this:
```HTML
<head>
	<title>CSS is Fun!</title>
	<link href="fun.css" rel="stylesheet"/>
</head>
<body>
	<h1 id="header">CSS is Fun!</h1>
	<p class="text">CSS can make things do all sorts of stuff easily</p>
</body>
```
and a CSS file called 'fun.css' like this:
```CSS
h1{
	color:red;
	text-decoration:underline;
}
#header{
	color:blue;
	background-color:yellow;
}
.text{
	font-size:0.5em;
}
```
save everything and then open the html file in chrome. You'll see the header underlined and the text is tiny, as you'd expect.

The browser applies each rule in the CSS to every element in the HTML. If the rule matches, the attributes in the rule get applied to the element.

So, let's go through how selectors work:

| selector | effect |
| -------- | ------ |
| *nothing* | selects all elements of that type |
| # | selects all elements with that id |
| . | selects all elements with that class |

You can combine selectors, so `h1 #header{}` will only select elements of type h1 with an id of 'header'.

Rules also combine, so if you have a rule of `h1 {color:red}` and another rule of `#header {text-decoration:underline}` they will both apply; any h1 elements with an id of 'header' will be underlined and colored red.
In fact you can see this from the example... the header is underlined and colored blue, but the underline comes from the h1 selector, and the blue color comes from the #header selector.
This illustrates another point: more specific selectors overrule less specific selectors. You might think it's because the h1 selector comes first in the file, but you can move it to the end and the effect will be the same. The browser applies the most generic rule, and then works down to the most specific rule, overwriting any previously-set values on the way. So the red colour is overriden to blue, but the underlining remains.

So that's the basics... then there's a massive, huge, enormous list of attributes and exactly how they work and what effect they have and how they work with each other. We're not going to go into that here, but please feel free to play with them, they're fun.

There's three more things that we should really cover:

### co-ordinate systems

When specifying the size of things, there are a lot of ways of specifying them. Each system has different effects.
There are three systems that are commonly used:
- **px** - the easy one, a pixel on the screen. A box with `height:20px` will be 20 pixels tall on the screen. Kinda. It's actually a lot more complicated than that, but the complexity is there in order to make it this simple.
- **%** - the dimension is specified as a percentage of the parent. So a width of 50% means '50% of the width of the parent element'. Font sizes in % mean '% of the normal size', so a `font-size:50%;` rule on an element that would otherwise have a 20px font results in a 10px font size.
- **em** - a line of text with no adjustment will be 1em tall. If the parent font size is modified, then the em for any children will scale with that modification. Which is cool, because you can guarantee that a box 5em high will fit exactly 5 lines of text without overruning. Setting `font-size:1.5em` will mean that the font will display 1.5 times as large as normal. Useful.

Generally speaking you will use all threee of these systems intermingled in a site. Specifying % dimensions allows your page to be responsive. Specifying sizes in em allows it to adjust properly when the user zooms in and out, and you will always need to specify things in pure px sizes when playing with graphics, fancy borders, and so on.

### Box-sizing, borders, padding and margins

Everyone always gets caught out by the box model. Seriously, even after years I still do.
Chrome has a little diagram in the inspector especially devoted to showing the box model for each element.

In as small a nutshell as we can:
- When you specify the size of an object, you specify it as including margin, padding and border
- The margin appears outside the border
- The border takes up the number of pixels specified; increasing the border width will reduce the content area
- Padding then specifies the area inside the border that the content must fit into.

So a rule of:
```CSS
.box{
	height:100px;
	width:100px;
	margin:10px;
	border:5px solid black;
	padding:15px;
}
```
will have an available content area of 40px square.

This sounds simple, but actually gets really annoying because most people intuitively expect that something 100px square will occupy a square of 100px a side... but with margins coming off that it doesn't appear that way.

So CSS gives us an easy way out. Specify this at the top of each page:
```CSS
html{
	box-sizing:border-box;
}
```
because the sizing model is inherited from the parent object, this changes everything on your page to be sized to the border not the margin edge. 

Now the box style above will have a content area of 60px, but the border will visibly occupy the 100px square that we specified in height and width

### : modifiers (pseudo-classes)

There are modifiers that you can add to a style to make it do special things when certain conditions occur.

Change the fun.css style sheet to add the rule:
```CSS
p:hover {
	color:purple;
	text-decoration:underline;
}
```

now when you move your mouse over the text, it goes purple and underlined! magic!

This is by far the most common use for pseudo-classes, used all over the web to make stuff pop out of the page as you mouse over it. But there are more that sometimes come in handy, such as :fist-child which can be used to make the first paragraph in a text post stand out.

### Play!

CSS is ridiculously simple, and a lot of fun. So there are no exercises for this lesson except to go play!
Google for CSS3 tutorials or guides, and look at the list of available attributes to play with, and try adding them
You can add them right in the Chrome browser inspector to try out things in real time.


