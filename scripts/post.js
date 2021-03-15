var postTitle = document.getElementById("post-heading-id");
var postContent = document.getElementById("content");
var editButton = document.getElementById("edit-button");
var saveButton = document.getElementById("save-button");
var modifiedPostTitle;
var modifiedPostContent;
var clickCount = 0;

// Edit button action
function editPostContent() {
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
  function savePostContent() {
    postContent.contentEditable = "false";
    postTitle.contentEditable = "false";
    postTitle.style.border = "none";
    postContent.style.border = "none";
    editButton.style.display = "block";
    saveButton.style.display = "none";
    postTitle.innerHTML = "UPDATED: " + modifiedPostTitle.value;
    postContent.innerHTML = "UPDATED: " + modifiedPostContent.value;
  }


  // Method to add likes and update the count
function incrementLikes() {
    var likeButton = document.getElementById("add-likes");
    likeButton.innerHTML =
      '<i class="fa fa-thumbs-up ">' + "</i>" + "&nbsp;" + "Liked!";
    likeButton.style.border = "none";
    numberOfClick += 1;
    if (numberOfClick != 0) {
      if (numberOfClick == 1) {
        document.getElementById("like-count").innerHTML =
          numberOfClick + " person likes this!";
      } else {
        document.getElementById("like-count").innerHTML =
          numberOfClick + " people likes this!";
      }
    }
  }