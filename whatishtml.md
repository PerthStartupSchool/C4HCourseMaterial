# What is HTML and where does it fit?
-------------------------------------

HTML stands for HyperText Markup Language

Invented by a Brit (Tim Berners-Lee) at CERN in Switzerland to deal with the problem of documentation for the CERN projects

It's a document format that's understood by browser programs (exactly like the Word Document format is understood by MS Word, and the MP3 document format is understood by audio players). 

A browser can be defined as a program that does two things:
- renders HTML pages to the screen
- connects to servers to download files

Technically the Internet is everything that uses Internet Protocol (IP) to communicate, while the World Wide Web (WWW) is everything that uses HTML hyperlinks to connect distributed information.

HTML documents are built using **tags**, which start with a **<** and end with a **>**. Tags come in pairs, one to open it and one to close it. The closing tag begins with a **/** character. Like so:
```HTML
<tag> content </tag>
```

HTML documents **must** have the following tags:
```HTML
<head>
<title> -- the title of your page -- </title>
</head>
<body>
    -- some stuff --
</body>
```
If an HTML document doesn't have those bare-minimum tags, then browsers can refuse to display it (but most will do their best to work out wtf you meant)

# What is CSS and where does it fit?
------------------------------------

CSS stands for Cascading Style Sheet

The 'cascading bit' refers to the fact that styles can be inherited from other style sheets, which is cool and useful.

CSS contains the appearance information for HTML documents represented as a bunch of rules. We'll get to this in a second

CSS style sheets are stored as documents on web servers, and referred to by HTML documents. Any HTML document can link to any CSS document (anywhere, no need to have it stored on the same server, you can use other people's CSS all you like).

CSS documents are made up of rules, like so:
```CSS
selector{
	attribute:value;
}
```
This probably needs some explanation:
**selectors** specify which HTML tags the rule applies to
**attributes** specify what attribute of the tag will be modified by the rule
**values** specify the value that the attribute is modified to

for example:
```CSS
body{
	background-color:black;
}
```
will tell the browser to change the background color of your page to black. Easy huh?

Don't worry, it gets more complicated as we go further down the rabbit hole

#What is Javascript and where does it fit?
------------------------------------------

Javascript is a scripting language that has absolutely nothing to do with either Java (coffee) or Java (the coding language). It's called javascript because Java (the language) was taking over the world at the time it was invented and calling it 'javascript' woould make it more cool and (more importantly) acceptable to everyone.

Javascript is a fully-fledged powerful programming language which has the unique property of being the only programming language that is universally understood by web browsers.

Javascript scripts are stored as documents on web servers, and referred to by HTML documents. Any HTML document can refer to any javascript document anywhere. This may sound familiar.

Javascript scripts can do anything to your page. They can mess with HTML tags or CSS rules, or just create stuff of their own using some of the weird and wonderful APIs available (like WebGL which allows javascript scripts to draw full 3D pictures in the browser)

A javascript script looks like this:
```javascript
function DoSomething(some, thing){
	// this is a comment
	if thing.notDone{
		some.thing = "done"
	}
	return thing
}
```

javascript programming is a huge, fascinating subject, way larger than we'll be able to cover today. But hopefully we can give you a start on learning it by playing, and hopefully you'll enjoy playing with it so much you'll end up gurus.

# Content, Appearance and Behaviour
-----------------------------------

*HTML* contains the *CONTENT* for your page. The text, the structure, the links to everything else.

*CSS* contains the *APPEARANCE* for your page. What fonts, what colours, what sizes, where on the page.

*Javascript* contains the *BEHAVIOUR* for your page. What happens when a button is clicked, what data is fetched from the server, and so on.

There are some grey areas (e.g. both CSS and Javascript can do animation) but you should keep this simple set of rules in mind when building web apps.

Why? 
Because it gets hard to understand and maintain. If you know that the structure of the document is held in the HTML (and not created in some obscure function that's loaded by your script), and all the rules for the site's appearance are in the CSS file(s) then it's easy to find bugs and change things. If your code is all over the place then you never know where anything is and it becomes difficult to make changes. 
This becomes especially true when you re-use files for multiple pages; if the CSS file is used for all pages it's easy to change the rules and know the effects. If each page also implements some of its own rules then you don't know what the effects of any change are going to be without checking every single page.

# Other stuff you probably need to know at this point
-----------------------------------------------------

  * URL: every single document available on the internet has a URL. 'http://Google.com' is a URL that loads a HTML page that contains the search form for Google
  * JQuery: a common javascript library that makes writing javascript in browsers much easier
  * XML: eXtended Markup Language, a language derived from HTML that stores information in huge, barely-readable files. An early contender for taking over the world, now reeling drunkenly around the ring while JSON beats it to a bloody pulp
  * JSON: JavaScript Object Notation, a better way of sending human-readable web-friendly information around the WWW
  * API: Application Programming Interface, a documented set of methods for doing something with someone else's code. JQuery is a library of code that has an API to let you use it.


# What happens when a browser loads a page
------------------------------------------

Massive oversimplification:

1. The user (you) types a URL into a browser
2. The browser tries to connect to the server specified in the URL and download the page
3. The browser reads the page and connects to any other URLS mentioned in the page to download any other documents referenced (including CSS & JS files)
4. The browser renders the HTML to the screen, governed by any rules in any CSS documents linked
5. The browser runs any javascript in the global context
6. The browser runs any javascript specified in the Load event
7. The browser finishes downloading stuff from step 3
8. The browser runs any javascript specified in the Jquery Ready() function

OK, that's enough theory for now, let's go say Hello World...


