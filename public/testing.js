// buildCommentList(rawData["post"]["postComments"])
function buildCommentList(jsonPostComment, parentID){

    for (x in jsonPostComment){
        var postReply = createAccount(jsonPostComment, x)
        
        if (parseInt(jsonPostComment[x].replies) > 0) {
            var childReplies = jsonPostComment[x]["comment_replies"]

            if (parentID) {
                document.getElementsByClassName("comment_" + childReplies[z].id)[0].insertAdjacentHTML("beforeend", postReply)

            } else {
                document.insertAdjacentHTML("beforeend", postReply)
            }

            if (childReplies.length > 0){

                buildCommentList(childReplies, jsonPostComment[x].id)
            }
            
        } else {

            document.insertAdjacentHTML("beforeend", postReply + "</div></div>")

        }
    }     
}