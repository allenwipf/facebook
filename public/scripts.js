window.addEventListener("load", function () {

	// This function adds an EvenListener to the Post Like button
	document.getElementsByClassName("action action--like")[0].addEventListener("click", changePostLikes)	

	// Post Comment Counter
	document.getElementsByClassName("action action--share")[0].addEventListener("click", postShare)	

	// Loops through the comment likes and adds a click event
	var list = document.getElementsByClassName("comment__info");
		for (var i = 0; i < list.length; i++){
			document.getElementsByClassName("comment__info")[i].childNodes[1].addEventListener("click", changeCommentLikes);
	    }

	// Loops through the message and adds a click even
	var list = document.getElementsByClassName("comment media");
		for (var i = 0; i < list.length; i++){ 
			document.getElementsByClassName("comment media")[i].childNodes[3].childNodes[3].childNodes[3].addEventListener("click", CommentsShow);
	    }

	document.getElementsByClassName("action action--comment")[0].addEventListener("click", clickComment)


	var list = document.getElementsByClassName("media__info");
	for (var i = 0; i < list.length; i++){ 
		var iteration = document.getElementsByClassName("media__info")[i].getElementsByTagName("a");
    	if (iteration.length > 0){
        	document.getElementsByClassName("media__info")[i].getElementsByTagName("a")[0].addEventListener("click", profileView);
    	}
    } 

	// Closes the popup profile box
	document.getElementsByClassName("modal__close")[0].addEventListener("click", closeProfileBox)	
	document.getElementsByClassName("modal")[0].addEventListener("click", closeProfileBox)	

	var list = document.getElementsByTagName("form")
		for (var i = 0; i < list.length; i++){
			document.getElementsByTagName("form")[i].addEventListener("submit", saveComments);
		}
})

// This function works on the Post and changes "Like" to "Unlike" and vice versa and increments total likes accordingly
function changePostLikes(){
	// This varialbe get the number of likes for the parent Post
	var postLikes = parseInt((document.getElementsByClassName("post__info")[0].childNodes[1].innerText).split(" ")[0])
	console.log(window.event)
	if (this.innerHTML == "Like") {
	    this.innerText = "Unlike";
	    document.getElementsByClassName("post__info")[0].childNodes[1].innerText = (postLikes + 1) + " likes"
	} else {
		this.innerText = "Like";
		document.getElementsByClassName("post__info")[0].childNodes[1].innerText = (postLikes - 1) + " likes"
	}
}
// This function works on all the Replies "Like" to "Unlike" and vice versa and increments total likes accordingly
function changeCommentLikes(){	
	var likeCount = parseInt((this.parentElement.childNodes[5].innerText).split(" ")[0])
	alert("hi")
	if (this.innerText == "Unlike") {
    	this.innerText = "Like";
    	document.getElementsByClassName("comment__info")[0].childNodes[5].innerText = (likeCount - 1) + " likes"
    	this.parentElement.childNodes[5].innerText = (likeCount - 1) + " likes"	
	} else {		
		this.innerText = "Unlike";
		this.parentElement.childNodes[5].innerText = (likeCount + 1) + " likes"
	}
}

// checks to see if there is a hidden comment box. If not will run a function to create it, if there is, 
// will set it to "block". If the box is showing it will be set to "none"
function CommentsShow(){
 	
	try {
		(this.parentElement.parentElement.childNodes[5].style.display == undefined)
	} catch(err) {
		debugger
		list = this.parentElement.parentElement
		cloneCommentBox(list, 4)	
		debugger
	}
	
		var currentStyle = this.parentElement.parentElement.childNodes[5].style.display
		
		if (currentStyle == "none") {
			this.parentElement.parentElement.childNodes[5].style.display = "block"	
		} else if (currentStyle == "block") {		
			this.parentElement.parentElement.childNodes[5].style.display = "none"
		}

	 reEventL();
}

// shows the hidden modal profile when a name is clicked. writes some innter text as well
function profileView(){

    document.getElementsByClassName("modal")[0].style.display = "block"
    document.getElementsByClassName("modal__title")[0].innerText = (this.innerText)
    document.getElementsByClassName("modal__title")[0].parentElement.childNodes[5].innerText = "friends: " + Math.floor((Math.random() * 500) + 200)
}

// closes the hidden modal profile box
function closeProfileBox(e){

	if (e.target == this){

		if (this.style.display = "block"){
			document.getElementsByClassName("modal")[0].style.display = "none"
			
		} else {
			document.getElementsByClassName("modal")[0].style.display = "none"
		}
	} 	
}

// when clicking on the post name, will focus the mouse cursor on the comment text field.
function clickComment(){

	this.parentElement.parentElement.parentElement.getElementsByTagName("textarea")[5].focus()
	
}

// WORKING ON
function postShare(e){
	//debugger
    document.getElementsByClassName("modal")[0].style.display = "block"
   
     document.getElementsByClassName("modal__title")[0].innerText = ("Share " + this.parentElement.parentElement.childNodes[1].childNodes[3].childNodes[1].innerText + "'s Post")
     document.getElementsByClassName("modal__title")[0].parentElement.childNodes[5].innerText = "friends: " + Math.floor((Math.random() * 500) + 200)
     document.getElementsByClassName("modal__body")[0].innerText = this.parentElement.parentElement.childNodes[3].childNodes[1].innerText
}

function incrementPostComments(){

	var postComment = parseInt((document.getElementsByClassName("post__info")[0].childNodes[3].innerText).split(" ")[0])
    document.getElementsByClassName("post__info")[0].childNodes[3].innerText = ((postComment + 1) + " comments")

}

function incrementChildComments(myThis){

	var postComments = parseInt((myThis.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[3].childNodes[3].innerText).split(" ")[0])
	myThis.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[3].childNodes[3].innerText = ((postComments + 1) + " comments")
	
}

function fillCommentInfo(commentAddress, formText){


	commentAddress.childNodes[1].innerText = "Allen Wipf"
    commentAddress.childNodes[2].textContent = " " + formText + " "
    commentAddress.childNodes[3].childNodes[5].textContent = "0 likes"
}

function reEventL(){

	showCommentsListener();
	commentLikeListener();
	commentBoxListener();
}

function cloneComment(list, commentPostion){

	var newItem = document.getElementsByClassName("cloneBox2")[0].childNodes[1];
	var newItem = newItem.cloneNode(true);
	var textItem = document.getElementsByClassName("cloneBox2")[0].childNodes[0];
    var textItem = textItem.cloneNode(true);

    list.insertBefore(newItem, list.childNodes[commentPostion]);
    list.insertBefore(textItem, list.childNodes[commentPostion + 1]);

}

function cloneCommentBox(list, commentPostion){

	var lastone = document.getElementsByClassName("replies").length;
debugger
	var textNode = document.getElementsByClassName("replies")[0].childNodes[0]
	var newItem = document.getElementsByClassName("replies")[lastone -1];

	var textNode = textNode.cloneNode(true);
	var newItem = newItem.cloneNode(true);
    list.insertBefore(newItem, list.childNodes[commentPostion]);
    list.insertBefore(textNode, list.childNodes[4]);
  

}

function saveComments(e){
	// Saves comment box to variable
	var formText = this.childNodes[1].value;

	if (formText == ""){
		alert("Please enter a comment!")
		return
	}

	//sets comment box to empty
	this.childNodes[1].value = ''
	commmentCount = this.parentElement.parentElement.parentElement.childNodes.length

	try{
		var list = this.parentElement.parentElement.parentElement.getElementsByClassName("comment media")[0].parentElement;
	}catch(err){
	}

    
	if (commmentCount <= 4) {

		cloneComment(this.parentElement.parentElement.parentElement , 1)
		this.parentElement.parentElement.parentElement.childNodes[1].childNodes[3].getElementsByTagName("a")[0].innerHTML = "Allen Wipf"
		this.parentElement.parentElement.parentElement.childNodes[1].childNodes[3].childNodes[2].textContent = "  Yo "

	  debugger
	} else if (list.childNodes[list.childNodes.length-2].className == "commentForm media"){
		var list = this.parentElement.parentElement.parentElement.getElementsByClassName("comment media")[0].parentElement;

		commentPostion = (list.childNodes.length - 2)

	    cloneComment(list, commentPostion)
	
	    var commentPostion = (list.childNodes.length - 4)
	    var commentAddress = this.parentElement.parentElement.parentElement.childNodes[commentPostion].childNodes[3]
	
		fillCommentInfo(commentAddress, formText)
	    incrementChildComments(this)

    } else {

    	var list = this.parentElement.parentElement.parentElement.getElementsByClassName("comment media")[0].parentElement;
		var item = document.getElementsByClassName("cloneBox2")[0].childNodes[1];
		var item = item.cloneNode(true);

		this.parentElement.parentElement.parentElement.getElementsByClassName("comment media")[0].parentElement.appendChild(item);
  
    	var commentPosition = (item.parentElement.childNodes.length - 1)
    	var commentAddress = item.parentElement.childNodes[commentPosition].childNodes[3]
    	
		fillCommentInfo(commentAddress, formText)
    	incrementPostComments()
    }

	e.preventDefault();
	reEventL();
}



function showCommentsListener(){
var list = document.getElementsByClassName("comment media");
	for (var i = 0; i < list.length; i++){ 
		document.getElementsByClassName("comment media")[i].childNodes[3].childNodes[3].childNodes[3].addEventListener("click", CommentsShow);
    }
}

function commentLikeListener(){
var list = document.getElementsByClassName("comment__info");
	for (var i = 0; i < list.length; i++){
		document.getElementsByClassName("comment__info")[i].childNodes[1].addEventListener("click", changeCommentLikes);
    }
}

function commentBoxListener(){
var list = document.getElementsByTagName("form")
	for (var i = 0; i < list.length; i++){
		document.getElementsByTagName("form")[i].addEventListener("submit", saveComments);
	}
}













