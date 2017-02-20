
var getRequest = new XMLHttpRequest();
getRequest.open('GET', '/replies');

getRequest.onload = function() {

    var rawData = JSON.parse(getRequest.responseText);
    start(rawData)
};

getRequest.send();


function start(rawData){

    rawData = rawData["post"]["postComments"]

    buildCommentList(rawData)

}

function buildCommentList1(jsonPostComment, parentID){

    htmlLocation = document.getElementsByClassName("post__comments")[0]

    for (x in jsonPostComment){

        var postReply = createAccount(jsonPostComment, x)

        debugger
        
        if (parseInt(jsonPostComment[x].replies) > 0) {
            var childReplies = jsonPostComment[x]["comment_replies"]

            if (parentID) {
                htmlLocation.getElementsByClassName("comment_" + childReplies[z].id)[0].insertAdjacentHTML("beforeend", postReply)

            } else {
            
                htmlLocation[0]("beforeend", postReply)
            }

            if (childReplies.length > 0){

                buildCommentList(childReplies, jsonPostComment[x].id)
            }
            
        } else {

            document.insertAdjacentHTML("beforeend", postReply + "</div></div>")

        }
    }     
}
// Takes the JSON from getInfo() and parses the text as HTML and inserts the node into DOM at specified location
function buildCommentList(jsonPostComment){

    var htmlLocation = document.getElementsByClassName("post__comments")[0]

    for (x in jsonPostComment){

        htmlLocation.insertAdjacentHTML("beforeend", createAccount(jsonPostComment, x))
        var childReplies = jsonPostComment[x]["comment_replies"]          
               
        for (z in childReplies){

            document.getElementsByClassName("comment_"+ jsonPostComment[x].id)[0].insertAdjacentHTML("beforeend", createAccount(childReplies, z))
            var nestedChildReplies = childReplies[z]["comment_replies"]

            if (z == childReplies.length -1){
                document.getElementsByClassName("comment_"+ jsonPostComment[x].id)[0].insertAdjacentHTML("beforeend", createCommentBox())
            }

            for (zz in nestedChildReplies){

                document.getElementsByClassName("comment_" + childReplies[z].id)[0].insertAdjacentHTML("beforeend", createAccount(nestedChildReplies, zz))

                if (zz == nestedChildReplies.length -1){
                    document.getElementsByClassName("comment_"+ childReplies[z].id)[0].insertAdjacentHTML("beforeend", createCommentBox())
                }
            }
        }
    }

    // htmlLocation.insertAdjacentHTML("afterend", createCommentBox())
}


function createAccount(jsonPostComment, x){

    var commentMedia = "<div class='comment media'>"

    var profileImage =  "<img src='images/user.png' class='profilePhoto'>"
    // var mediaInfo = "<div class='media__info media__info__" + jsonPostComment[x].id + "'>"
    var mediaInfo = "<div class='media__info>"

    var postReplyName = "<a href='#'>" + jsonPostComment[x].name + "</a>"
    var postReplyBody = jsonPostComment[x].body
   

    var commentInfo = "<div class='comment__info'>"
    var postReplyLikes = "<span>" + jsonPostComment[x].likes + " likes</span>"
    var postReplyReplies = hasReplies(jsonPostComment[x].replies)
    var postReplyTime = jsonPostComment[x].time + "</div>"
    
    // var hiddenDiv = "<div class='replies' style='display: block'>"
    var hiddenDiv = "<div class='replies comment_" + jsonPostComment[x].id + "'" + " style='display: block'>"
    
    
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


