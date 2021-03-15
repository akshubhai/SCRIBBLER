var postTitle = document.getElementById("post-heading-id");
var postContent = document.getElementById("content");
var editButton = document.getElementById("edit-button");
var saveButton = document.getElementById("save-button");
var modifiedPostTitle;
var modifiedPostContent;
var clickCount = 0;

// Edit button action
function editPost() {
    postTitle.contentEditable = "true";
    postContent.contentEditable = "true";
    postTitle.style.border = "2px solid pink";
    postContent.style.border = "2px solid pink";
    editButton.style.display = "none";
    saveButton.style.display = "block";
    modifiedPostTitle.value = postTitle.innerHTML;
    modifiedPostContent.value = postContent.innerHTML;
  }
  
  // Save button action
  function savePost() {
    postContent.contentEditable = "false";
    postTitle.contentEditable = "false";
    postTitle.style.border = "none";
    postContent.style.border = "none";
    editButton.style.display = "block";
    saveButton.style.display = "none";
    postTitle.innerHTML = "UPDATED: " + modifiedPostTitle.value;
    postContent.innerHTML = "UPDATED: " + modifiedPostContent.value;
  }


  // Add and update likes
function incrementLikes() {
    var likeButton = document.getElementById("add-likes");
    likeButton.innerHTML =
      '<i class="fa fa-thumbs-up ">' + "</i>" + "&nbsp;" + "Liked!";
    likeButton.style.border = "none";
    clickCount += 1;
    if (clickCount != 0) {
      if (clickCount == 1) {
        document.getElementById("like-count").innerHTML =
          clickCount + " person likes this!";
      } else {
        document.getElementById("like-count").innerHTML =
          clickCount + " people likes this!";
      }
    }
  }

  // Add comments
function incrementComments(comment) {
    if (comment.value.length > 0) {
      var commentBox = document.getElementById("comment-list");
      commentBox.style.display = "flex";
      document.getElementById("comment-list").innerHTML +=
        '<p id="comment-posted">' + comment.value + "</p>";
      var userComment = document.getElementById("userComment");
      userComment.value = userComment.defaultValue;
    } else {
      alert("Please enter some comment");
    }
  }