
var myButton = document.getElementById('myAwesomeButton');
var myAwesomeContent = document.getElementById('myAwesomeContent');

function changeAwesomeContentToSomethingElse() {
  myAwesomeContent.textContent = "See, you changed the content!";
}
// we wire up an Event Listener which waits until the user clicks on the button
// when the button is clicked the event or 'function' is invoked and the content
// will be changed. 
myButton.addEventListener('click', changeAwesomeContentToSomethingElse);