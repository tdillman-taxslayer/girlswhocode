# HTML and HTTP

## JavaScript, the Document, and the DOM

When working with HTML and JavaScript, one of the things to keep in mind is that whenever the browser reads or **interprets** your HTML and JavaScript code, it does so line by line from the top down.  

Whenever the browser interprets an HTML it also converts the file into a **Document Object Model** or DOM for short.  The **DOM** can then be manipulated in code just like any regular JavaScript Object.  The **document** object also comes with several useful functions. 

One of those functions is `getElementById()`.  This **queries** the DOM for an element with the HTML **tag** attribute `id`.  If an element with a particular ID exists, it will be able to retrieve it.  In other words, you ask the DOM "hey do you have any HTML items that have an attribute id equal too whatever I'm asking for?".  

If its still unclear what we are talking about, don't worry, you will eventually get the hang of it!  If you would like to learn more and to look at the documentation surrounding the DOM, click [here](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

An example of how this might look in code can be found under Session 4 - Connecting DOM Elements Page. [Found Here](https://tdillman-taxslayer.github.io/girlswhocode/connecting_dom_elements.html)

In the Session 4 - Connecting DOM Elements tutorial, we demonstrate how to load an HTML into a JavaScript object. We then create two HTML Elements, a `<p>` and `<button>` Element. 

Below is a brief summary of what this might look like

```
...code above left out...

<body>
  <p>Hello world!</p>
  <button>Click me!</button>
</body>
```

At this point, our JavaScript code **could** find our button and our paragraph tag however it would not be easy.  We would also not be able to use our handy `getElementById` function since none of our HTML tags have the `id` attribute. Lets add the id attribute now!

```
...code above left out...

<body>
  <p id="myParagraph">Hello world!</p>
  <button id="myButton">Click me!</button>
</body>
```

Now our HTML elements have the proper tag to be referred too in code by our handy getElementById function!  Let's see what that might look like in Javascript

```
var myButton = document.getElementById('myButton');
var myParagraph = document.getElementById('myParagraph');
```

We have created two variables, `myButton` and `myParagraph`.  At this point, we could do whatever we wanted to in code with our two elements because we now have a reference too them in our code.  But there is still one problem.  The goal of this excersize is to change the paragraph's content to something besides "Hello World!".  At this point, we can click our button however it **wont do anything**.  Why is that? 

The reason why your button currently doesn't do anything is that you have not told JavaScript to listen for that particular **click event**.  

**Event**: Any action the user takes be that clicking, typing, or moving the mouse.  All of these actions are considered events in the browser. 

So lets add a **click event** to our code so that when we click our button it actually does something!

```
var myButton = document.getElementById('myButton');
var myParagraph = document.getElementById('myParagraph');

function callThisAwesomeFunctionWhenIClickMyButton() {
  myParagraph.textContent = "Hello Another World!";
}

myButton.addEventListener('click', callThisAwesomeFunctionWhenIClickMyButton);

```

Now whenever I click my button, it will change my paragraph's content to "Hello Another World!".  Pretty cool right? 

If you want to see the source code for this, simply navigate to the [Girls Who Code Github page!](https://github.com/tdillman-taxslayer/girlswhocode)

## HTML Forms

Forms are one of many ways we as developers gather data from our users.  You've probably ran into a form at some point or another on websites such as Instagram or Facebook.  Whenever you login to a website, that is a form.  You type in some text and usually hit the "login" button.  

A form has the opening tag of `<form>` and a closing tag of `</form>`. 

```
<form>
  First name: <br>
  <input type="text"> name="firstname"><br>
  Last name:<br>
  <input type="text" name="lastname">
</form>
```

## HTTP Verbs

Like many things with computers, there is a standard for how the web works and how data is transferred between browser and server.  This is called the **Hypertext Transfer Protocol**.  Whenever your browser wants to load a webpage this is called a **request**.  If the page exists and the server is up and running it **responds** with the content.  This is called the request-response cycle.  Your browser makes a request, the server responds.  

There are also different kinds of requests your browser can make.  

The four core request types are:

1. GET
2. POST
3. PUT
4. DELETE

One use of **POST** is the form.  An HTML form supports both a **GET** request and a **POST** request however the most common method is the **POST** request.

Note that the default method when using a form is the **GET** method.  

The difference between using POST and GET will be discussed at a later session. 

```
<form method="POST">
  First name: <br>
  <input type="text"> name="firstname"><br>
  Last name:<br>
  <input type="text" name="lastname">
</form>
```

