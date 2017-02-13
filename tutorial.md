# The DOM


The DOM, which stands for Document Object Model, is an interface and standard that allows developers and programming languages (like JavaScript) to view and edit HTML elements dynamically. The elements, also called "nodes," are represented in a tree hierarchy. In it's simplest form, the DOM can be compared to Russian nesting dolls where a number of dolls of decreasing size are place inside one another.


### DOM Nodes

Everything in the DOM is a node of some type:

•	At the root is the document node. The webpage as a whole resides inside the document node. 

•	Within the document node are many HTML elements which are element nodes. The head and body are element nodes. Divs, headings, and paraphrase, are also element nodes. 

•	Element nodes can have attributes which are attribute nodes. For example, the attributes of an image could be its id, source and width.  

•	Text (such as the text value of heading tags and paragraphs) and white space are called text nodes. 

•	Even comments you add to your code are nodes of the comment node type. 



### DOM Hierarchy


Every element inside a webpage has a hierarchical relationship to each other. The html node, for example, can have two "child" nodes such as the head and body of the website. In this case, the html node is the “parent” of the head and body. The head and body, since they share the same parent, are “sibling” nodes. Each node can have many siblings and/or children but only one parent. 


### DOM Methods

The DOM defines each node as an “object” and assigns powerful methods or actions to them. Some of the most popular methods are getElementsById, getElementsByClassName(name), and appendChild(name). GetElementsById(name) allows you to search within the hierarchy of the document for the element with a particular Id name. getElementsByClassName allows you to search within the hierarchy of a particular node for all instances of a specific class name. AppendChild(name) allows you to dynamically append a child node to a parent node. 


### DOM Properties

With the DOM you can retrieve, change, remove and add properties to nodes. Some of the most popular methods to retrieve and/or manipulate the properties of nodes are innerHTML, setAttribute and style.display. With innerHTML you can change the inner HTML of a node, for example by adding items to a list or changing the text of paragraph title. With setAttribute you can add an attribute to a node and set the value for that attribute. For example you could add a font-color attribute to a paragraph node and set the value to “red.” You can also change a preexisting property with .attribute (with attribute being the name of the property). With style.display you can set a node, and all children within that node, to visible or invisible.


### DOM Events

I remember when most websites had little interactivity but relatively recently there seems to be a surge in interactive elements on websites. Events allows developers to run different functions depending on how the end user interacts with their page, making interactive elements possible. There are many possible events but some popular ones are when a user clicks a button, mouse over an element or typing. 

The addEventListener is a DOM method that adds an event handler to an element. When the page is loaded, the event listener is added to the element and only fires the code it calls when the event is actually triggered by the user. An example of this is when a user clicks “more comments” on Facebook. This action triggers code for more comments to load, keeping the page clean until the user specifically requests that information. An example of mouse over could be to show a dropdown box or more features associated with the element moused over. Again this prevents clutter on a website and only shows users what they want to see without the inconvenience of redirecting to a different page. 

# Front End vs Back End Developer 


Front end is the part of the website that users can see and interact with. This includes the web design and events. HTML, JavaScript and CSS are examples of front end languages.

Back end is the application, database and server. Ruby, PHP, Python and SQL are examples of backend languages. 

Front end code is executed by the user’s browser while backend code is executed on the server and the results are returned to the browser. On the CSV report we did, the Ruby code that grabbed the information from the CSV file was backend. The HTML and CSS code that displayed it in a readable format was frontend. The Facebook project was all frontend although if we wanted to save the comments and likes we make we’d have to use a backend language to save it to the server. 

# window.event


The window object refers to an open window in a browser. This object has multiple properties one of which is the “document” which is the entire HTML code. The window object also has an “event” property that is full of information that is constantly changing as time passes, keys are pressed, the mouse moves, etc.. The window object has multiple methods, one being addEventListener(). After an EventListener is added to an element within the document property, and that EventListener fires due to a click, key press, mouse over, or any other action, a snap shot of what the window’s “event” property contained at that exact moment is passed to the handler as an object and is accessible wherever the handler passes it. This event object has multiple methods available to it. 

For example, when a button is clicked with an EventListener attached to it, an event object is created containing the contents of the window’s event property. One of the methods available to this new object is preventDefault(). If this method as ran within the function called, JavaScript will prevent the default action the browser would have otherwise performed for the button click action. 

