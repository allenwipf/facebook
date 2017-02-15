window.addEventListener("load", function(){

	function addMoreListener(){

		document.getElementById("more_text_link").addEventListener("click", secondP)
	}

	function hideAllListener(){

		document.getElementById("button").addEventListener("click", showAll)
	}

	function toggleManyListener(){

		document.getElementById("button").addEventListener("click", toggleMany)
	}

	function toggleElementsListener(){

		document.getElementById("toggle_button").addEventListener("click", toggleElements)
	}

	function detectTypeListener(){

		document.getElementById("full_name").addEventListener("input", detectType)
	}

	function autoTabListener(){

		document.getElementById("first").addEventListener("input", autoTab)
		document.getElementById("second").addEventListener("input", autoTab)
	}

	// ENABLE THE LISTENER FOR THE PAGE BEING TESTED

	// addMoreListener()
	// hideAllListener()
	// toggleManyListener()
	// toggleElementsListener()
	// detectTypeListener()
	autoTabListener()
  
});

// excercise 1. show or hides the second paragraph after clicking "More..."
function secondP(){
	secondP = document.getElementById("more_text_content").style.display

	if (secondP == "block") {
		document.getElementById("more_text_content").style.display = "none"

	} else {
		document.getElementById("more_text_content").style.display = "block"
	}
}

// exercise 2 & 3. shows and hides lines of text on the 02-hide-many-elements.html page. 
function showAll(e){
	list = document.getElementsByClassName("hide_me")

	for (var i = 0; i <= list.length -1; i ++){

		if (list[i].style.display == "block") {
			list[i].style.display = 'none'

		} else {
			list[i].style.display = 'block'
		}
	}
}

// exercise 4. show and hide lines of text on 04-toggle-many-elements.html
function toggleMany(){
	list = document.getElementsByClassName("toggle_me")

	for (var i = 0; i <= list.length - 1; i++){

		if (list[i].style.display == "block") {
			list[i].style.display = "none"
		
		} else {
			list[i].style.display = "block"
		}
	}
}

// exercise 5. show and hide a specific list
function toggleElements(){
	list = document.getElementsByClassName("second_five")[0].getElementsByTagName("li")

	for (var i = 0; i <= list.length - 1; i++){

		if (list[i].style.display == "block") {
			list[i].style.display = "none"
		
		} else {
			list[i].style.display = "block"
		}
	}
}
// exercise 6. outputs typed text on page.
function detectType(){

	typed = document.getElementById("full_name").value
	document.getElementById("greeting").innerText = typed
}

// exercise 7. tabs from one input box to the next
function autoTab(){
debugger
	if ((event.target.id == "first") && ((event.target.value).length == 3)){
		document.getElementById("second").focus()

	} else if ((event.target.id == "second") && ((event.target.value).length == 3)){
		document.getElementById("third").focus()
	}
}







