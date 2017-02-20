
var getRequest = new XMLHttpRequest();
getRequest.open('GET', '/replies');

getRequest.onload = function() {

    var rawData = JSON.parse(getRequest.responseText);
    renderHTML(rawData)
};

getRequest.send();


function renderHTML(rawData) {
    var jsonComment = rawData["post"]["postComments"]
    var postRepliesLocation = document.getElementsByClassName("post__comments")[0]

    for (x in jsonComment){

        var postReply = createAccount(jsonComment, x)

        if (parseInt(jsonComment[x].replies) > 0) {

            postRepliesLocation.insertAdjacentHTML("beforeend", postReply)
            var childReplies = jsonComment[x]["comment_replies"]

            // Since the nested comments have a slightly different structure, start traversing after the first element is created
            buildCommentList(childReplies, jsonComment[x].id)
        } else {
            postRepliesLocation.insertAdjacentHTML("beforeend", postReply + "</div></div>")
        }
    }
    postRepliesLocation.insertAdjacentHTML("afterend", createCommentBox())
}

// This function will take 2 arguments
// 1. comments - the child comments
// 2. parentId - the id of the parent of the child comments
function buildCommentList(comments, parentId) {
   
    // Loop over the child comments
    for (z in comments) {
        // Generate the child html
        var childReply = createAccount(comments, z)
debugger
        // Insert the child html into the 'replies' element
        document.getElementsByClassName("comment_" + parentId)[0].insertAdjacentHTML("beforeend", childReply)

        // See if this child reply has its own child comments
        var childReplies = comments[z]["comment_replies"]

        // If it does...
        if (childReplies.length > 0) {
            // The current comment becomes the new parent
            var newParent = comments[z]

            // And we recursively build the comment list with the new child comments and new parent id
            buildCommentList(childReplies, newParent.id)
        }

        if (z == comments.length -1){
            document.getElementsByClassName("comment_" + parentId)[0].insertAdjacentHTML("beforeend", createCommentBox() + "</div></div>")
        }
    }
}

// creates the account string
function createAccount(jsonPostComment, x){

    var commentMedia = "<div class='comment media'>"
    var profileImage =  "<img src='images/user.png' class='profilePhoto'>"
    var mediaInfo = "<div class='media__info'>"
    var postReplyName = "<a href='#'>" + jsonPostComment[x].name + "</a> "
    var postReplyBody = jsonPostComment[x].body
    var commentInfo = "<div class='comment__info'>"
    var postReplyLikes = "<span>" + jsonPostComment[x].likes + " likes</span>"
    var postReplyReplies = hasReplies(jsonPostComment[x].replies)
    var postReplyTime = jsonPostComment[x].time + "</div>"
    var hiddenDiv = "<div class='replies comment_" + jsonPostComment[x].id + "'" + " style='display: block'>"

    return htmlString = commentMedia + profileImage + mediaInfo + postReplyName + postReplyBody 
        + commentInfo + postReplyReplies + postReplyLikes + postReplyTime + hiddenDiv
}

// sees if post has replies and returns accordingly
function hasReplies(replies){

    if (parseInt(replies) == 0){
        return "<a href='#'> Like</a> <a href='#'> Reply</a> "

    } else 
        return "<a href='#'> Like</a> <a href='#'>" + replies + " " + " replies </a> "
}

// creates a commment box
function createCommentBox() {

    var commentBox = document.getElementsByClassName("commentForm media")[0].outerHTML
    return commentBox
}


