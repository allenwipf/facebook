// Waits for hte window to load before running functions. 
window.addEventListener("load", function(){

    getInfo()
});


// AJAX request. returns as JSON data
function getInfo(){

    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', '/replies');
    getRequest.onload = function() {

        var ourData = JSON.parse(getRequest.responseText);

            renderHTML(ourData)

    };
    getRequest.send();
}


// Takes the JSON from getInfo() and parses the text as HTML and inserts the node into DOM at specified location
function renderHTML(rawData){

    var jsonLocation = rawData["post"]["postComments"]
    var htmlLocation = document.getElementsByClassName("post__comments")[0]

    // buildCommentList(jsonLocation)

    for (var x = 0; x < jsonLocation.length; x++){

        var postReply = createAccount(jsonLocation, x)

        
        if (parseInt(jsonLocation[x].replies) > 0) {

            htmlLocation.insertAdjacentHTML("beforeend", postReply)
            var childReplies = jsonLocation[x]["comment_replies"]
            // htmlLocation.getElementsByClassName("media__info__" + jsonLocation[x].id)[0].insertAdjacentHTML("beforeend", hiddenDiv)
          
                   
            for (z = 0; z < childReplies.length; z++){
              // debugger
                var childReply = createAccount(childReplies, z)
                htmlLocation.getElementsByClassName("media__info__" + jsonLocation[x].id)[0].getElementsByClassName("replies")[0].insertAdjacentHTML("beforeend", childReply)
                var nestedChildReplies = childReplies[z]["comment_replies"]

                for (zz = 0; zz < nestedChildReplies.length; zz++){
                  // debugger
                    var childReply = createAccount(nestedChildReplies, zz)
                    htmlLocation.getElementsByClassName("media__info__" + childReplies[z].id)[0].getElementsByClassName("replies")[0].insertAdjacentHTML("beforeend", childReply)
                }

            }

        } else {

            htmlLocation.insertAdjacentHTML("beforeend", postReply + "</div></div>")

        }
    }     
        htmlLocation.insertAdjacentHTML("afterend", createCommentBox())
}


function buildCommentList(jsonLocation, parentID){

    htmlLocation = document.getElementsByClassName("post__comments")[0]
    var hiddenDiv = "<div class='replies' style='display: block'>"

    for (var x = 0; x < jsonLocation.length; x++){

        var postReply = createAccount(jsonLocation, x)
        
        if (parseInt(jsonLocation[x].replies) > 0) {
            var childReplies = jsonLocation[x]["comment_replies"]

            if (parentID) {
                htmlLocation.getElementsByClassName("media__info__" + parentID)[0].getElementsByClassName("replies")[0].insertAdjacentHTML("beforeend", postReply)
            } else {
                htmlLocation.insertAdjacentHTML("beforeend", postReply)
                htmlLocation.getElementsByClassName("media__info__" + jsonLocation[x].id)[0].insertAdjacentHTML("beforeend", hiddenDiv)

            }

            if (childReplies.length > 0){

                buildCommentList(childReplies, jsonLocation[x].id)
            }


        } else {

            htmlLocation.insertAdjacentHTML("beforeend", postReply + "</div></div>")

        }
    }     
}







function createAccount(jsonLocation, x){
  // debugger
    var commentMedia = "<div class='comment media'>"

    var profileImage =  "<img src='images/user.png' class='profilePhoto'>"
    var mediaInfo = "<div class='media__info media__info__" + jsonLocation[x].id + "'>"

    var postReplyName = "<a href='#'>" + jsonLocation[x].name + "</a>"
    var postReplyBody = jsonLocation[x].body
   

    var commentInfo = "<div class='comment__info'>"
    var postReplyLikes = "<span>" + jsonLocation[x].likes + " likes</span>"
    var postReplyReplies = hasReplies(jsonLocation[x].replies)
    var postReplyTime = jsonLocation[x].time + "</div>"
    var hiddenDiv = "<div class='replies' style='display: block'>"
    
    
    // final HTML String
    return htmlString = commentMedia + profileImage + mediaInfo + postReplyName + " " + postReplyBody 
        + commentInfo + postReplyReplies + postReplyLikes + postReplyTime + hiddenDiv
}

// sees if post has replies and returns accordingly
function hasReplies(replies){

    if (parseInt(replies) == 0){
        return "<a href='#'> Like</a> <a href='#'> Reply</a> "

    } else 
        return "<a href='#'> Like</a> <a href='#'>" + replies + " " + " replies </a> "
}


function createCommentBox() {

    var commentBox = document.getElementsByClassName("commentForm media")[0].outerHTML
    return commentBox
}




