Chrome Inspector
================

Before we break for lunch, let's just go through the Chrome Inspector, every web developer's favourite tool.

Note that Firefox also has web development tools, in particular the awesome 3D view, but a lot of that functionality depends on various plugins, and can get advanced. Chrome will happily see you through your first few projects, and when you're ready to explore what Firefox has to offer then you'll be in a better place to make a decision.

To use the Inspector, open a web page (any web page; pick your favourite blog or news site).

Then right-click (or whatever you mac weirdos do to bring up a context menu) and choose 'inspect element' from the menu. (or you can choose 'settings, tools, developer tools' from the main chrome menu) A new tab will open in the bottom half of the page with a bunch of gibberish in it. Welcome to our world.

There's a menu of headers along the bar in the middle of the page:
- Elements: contains the HTML elements in the document, allow you to see the details for each one
- Resources: contains all the files that this page has loaded or referenced. All the images, CSS files, script files, everything.
- Network: details on latency and interesting stuff when you're trying to optimise a page
- Sources: source code for the page. Most commercial pages are minimised, which makes the code hard to read, but for your own pages you can step through script here.
- Timeline: no idea, never needed to use it
- Profiles: likewise
- Audits: yeah... not sure what this does either
- Console: a javascript playground that is really useful for checking and debugging code.

Opening a commercial page in inspector can be interesting... especially if you see cool stuff happening on the page and want to learn how to do that. Digging into the page details and messing around with the CSS to see what happens can be really instructive.

For my developments, I tend to write the HTML then open that in Chrome inspector and do the CSS interactively for each element so I can make sure it all works as I think it should. 

