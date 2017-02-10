window.addEventListener("load", function () {


	// This function adds an EvenListener to the Post Like button
	function postLikeListener(){
		document.getElementsByClassName("action action--like")[0].addEventListener("click", changePostLikes)	
	}

	// Post Comment Counter
	function postShareListener(){
		document.getElementsByClassName("action action--share")[0].addEventListener("click", postShare)	

	}


	// Loops through the comment likes and adds a click event
	function commentLikeListener(){
	var list = document.getElementsByClassName("comment__info");
		for (var i = 0; i < list.length; i++){
			document.getElementsByClassName("comment__info")[i].childNodes[1].addEventListener("click", changeCommentLikes);
	    }
	}
	// Loops through the message and adds a click even
	function showCommentsListener(){
	var list = document.getElementsByClassName("comment media");
		for (var i = 0; i < list.length; i++){ 
			document.getElementsByClassName("comment media")[i].childNodes[3].childNodes[3].childNodes[3].addEventListener("click", CommentsShow);
	    }
	}


	function clickCommentListener(){

		document.getElementsByClassName("action action--comment")[0].addEventListener("click", clickComment)
	}

	function profileViewListener(){
	var list = document.getElementsByClassName("media__info");
		for (var i = 0; i < list.length; i++){ 
			var iteration = document.getElementsByClassName("media__info")[i].getElementsByTagName("a");
	    	if (iteration.length > 0){
	        	document.getElementsByClassName("media__info")[i].getElementsByTagName("a")[0].addEventListener("click", profileView);
	    	}
	    } 
	}

	// Closes the popup profile box
	function profileBoxListener(){
		document.getElementsByClassName("modal__close")[0].addEventListener("click", closeProfileBox)	
		document.getElementsByClassName("modal")[0].addEventListener("click", closeProfileBox)	
	}   


	function commentBoxListener(){
	var list = document.getElementsByTagName("form")
		for (var i = 0; i < list.length; i++){
			document.getElementsByTagName("form")[i].addEventListener("submit", commentBox);
		}
	}





	// These are the functions that are called after page load
	postLikeListener()
	commentLikeListener()
	showCommentsListener()
	profileViewListener()
	profileBoxListener()
	clickCommentListener()
	commentBoxListener()

})



// This function works on the Post and changes "Like" to "Unlike" and vice versa and increments total likes accordingly
function changePostLikes(){
	// This varialbe get the number of likes for the parent Post
	var postLikes = parseInt((document.getElementsByClassName("post__info")[0].childNodes[1].innerText).split(" ")[0])

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
	
	if (this.innerText == "Unlike") {
    	this.innerText = "Like";
    	document.getElementsByClassName("comment__info")[0].childNodes[5].innerText = (likeCount - 1) + " likes"
    	this.parentElement.childNodes[5].innerText = (likeCount - 1) + " likes"	
	} else {		
		this.innerText = "Unlike";
		this.parentElement.childNodes[5].innerText = (likeCount + 1) + " likes"
	}
}

// This function expands the comments for each of the replies on the post
function CommentsShow(){
	 currentStyle = this.parentElement.parentElement.childNodes[5].style.display
	
	 this.parentElement.parentElement.childNodes[5].style.display
	
	if (currentStyle == "none") {
		this.parentElement.parentElement.childNodes[5].style.display = "block"	
	} else if (currentStyle == "block") {		
		this.parentElement.parentElement.childNodes[5].style.display = "none"
	}
}

function profileView(){

    document.getElementsByClassName("modal")[0].style.display = "block"
    document.getElementsByClassName("modal__title")[0].innerText = (this.innerText)
    document.getElementsByClassName("modal__title")[0].parentElement.childNodes[5].innerText = "friends: " + Math.floor((Math.random() * 500) + 200)
}

function closeProfileBox(e){

	if (e.target == this){

		if (this.style.display = "block"){
			document.getElementsByClassName("modal")[0].style.display = "none"
			
		} else {
			document.getElementsByClassName("modal")[0].style.display = "none"
		}
	} 	

}


function clickComment(){

	this.parentElement.parentElement.parentElement.getElementsByTagName("textarea")[5].focus()
	
}

// WORKING ON
function postShare(){
	 currentStyle = this.parentElement.parentElement.childNodes[5].style.display
	
	 this.parentElement.parentElement.childNodes[5].style.display
	
	if (currentStyle == "none") {
		this.parentElement.parentElement.childNodes[5].style.display = "block"	
	} else if (currentStyle == "block") {		
		this.parentElement.parentElement.childNodes[5].style.display = "none"
	}
}



function commentBox(e){
	// Saves comment box to variable
	var formText = this.childNodes[1].value;

	if (formText == ""){
		alert("Please enter a comment!")
		return
	}
	//sets comment box to empty
	this.childNodes[1].value = ''

	var list = this.parentElement.parentElement.parentElement.getElementsByClassName("comment media")[0].parentElement;

	if ((list.childNodes[list.childNodes.length-2].className == "commentForm media")){

		commentPostion = (list.childNodes.length - 2)
		 // debugger
		var newItem = this.parentElement.parentElement.parentElement.getElementsByClassName("comment media")[4];
		var clone = newItem.cloneNode(true)
		var newItem2 = this.parentElement.parentElement.parentElement.childNodes[0];
		var clone2 = newItem2.cloneNode(true)

	    list.insertBefore(clone, list.childNodes[commentPostion]);
	    
	    list.insertBefore(clone2, list.childNodes[commentPostion + 1]);
	
	    var commentPostion = (list.childNodes.length - 4)
	    var commentAddress = this.parentElement.parentElement.parentElement.childNodes[commentPostion].childNodes[3]

	
	    commentAddress.childNodes[1].innerText = "Allen Wipf"
	    commentAddress.childNodes[2].textContent = " " + formText + " "
	    commentAddress.childNodes[3].childNodes[5].textContent = "0 likes"
	 
	    // commentAddress.childNodes[3].childNodes[3].innerText = "Reply"


	    var postComments = parseInt((this.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[3].childNodes[3].innerText).split(" ")[0])
	    this.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[3].childNodes[3].innerText = ((postComments + 1) + " comments")

    } else {

		var item = this.parentElement.parentElement.parentElement.getElementsByClassName("comment media")[0];
		var clone = item.cloneNode(true);
		this.parentElement.parentElement.parentElement.getElementsByClassName("comment media")[0].parentElement.appendChild(clone);
    	
    	var commentPosition = (item.parentElement.childNodes.length - 1)
    	var commentAddress = item.parentElement.childNodes[commentPosition].childNodes[3]

		commentAddress.childNodes[1].innerText = "Allen Wipf"
		commentAddress.childNodes[2].textContent = " " + formText + " "
    	commentAddress.childNodes[3].childNodes[5].innerText = "0 likes"
    	commentAddress.childNodes[3].childNodes[3].innerText = "Reply"
    	
    	// Increase Comments
    	var postComment = parseInt((document.getElementsByClassName("post__info")[0].childNodes[3].innerText).split(" ")[0])
    	document.getElementsByClassName("post__info")[0].childNodes[3].innerText = ((postComment + 1) + " comments")

   
    	var commentPosition = (item.parentElement.childNodes.length - 1)
		var list = item.parentElement.childNodes[commentPosition].childNodes[3].childNodes[5];
		var list2 = (list.childNodes.length - 4)
		
		for (i =0; i <= list2; i++){
		// while (list.hasChildNodes()) {
		 list.removeChild(list.firstChild)

		// 	// }					
		}

    }

    // debugger
	e.preventDefault();
	showCommentsListener();
	commentLikeListener();
	commentBoxListener();


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
		document.getElementsByTagName("form")[i].addEventListener("submit", commentBox);
	}
}
