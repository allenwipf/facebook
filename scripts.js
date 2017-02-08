window.addEventListener("load", function () {


	// This function adds an EvenListener to the Post Like button
	function postLikeListener(){
		document.getElementsByClassName("action action--like")[0].addEventListener("click", changePostLikes)	
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

	function textButtonListener(){
	var list = document.getElementsByClassName("commentForm media");
		for (var i = 0; i < list.length; i++){ 
	   		document.getElementsByClassName("comment media")[i].getElementsByTagName("input")[0].addEventListener("click", textBox);
		}

	}


		function test(){
	var list = document.getElementsByClassName("comment media");
		for (var i = 0; i < list.length; i++){ 
	   		document.getElementsByClassName("comment media")[i].addEventListener("click", allen);
		}

	}




	// These are the functions that are called after page load
	postLikeListener()
	commentLikeListener()
	showCommentsListener()
	profileViewListener()
	profileBoxListener()
	textButtonListener()
	test()
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

function textBox(e){


	// //var everything = this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("comment media")[0]
	alert("hi")
	// var userBox = this[0];
	// var cloneBox = userBox.cloneNode(true);
	// this[0].parentElement.appendChild(cloneBox);
	
	// //document.getElementsByClassName("comment media")[i].childNodes[1]
	 
 //    e.preventDefault()

	// //wordsInBox = this.parentElement.getElementsByTagName("textarea")[0].value 
}

function allen(e){

	var userBox = this;
	var cloneBox = userBox.cloneNode(true);
	this.parentElement.appendChild(cloneBox);

	// wordsInBox = this.getElementsByTagName("textarea")[0].value 
	// alert(wordsInBox)

	e.preventDefault()



}








