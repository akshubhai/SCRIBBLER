// Redirect to post html
function showPostPage() {
    window.location.href = "../html/post.html";
  }
  
  var deleteModal = document.getElementById("delete-modal");
  var postToBeDeleted;
  
  // Trash delete icon on post
  function deleteSinglePost(postId) {
    postToBeDeleted = document.getElementById(postId);
    deleteModal.style.display = "flex";
  }
  
  // confirm post delete yes
  function PostDeleteConfirmation() {
    postToBeDeleted.remove();
    deleteModal.style.display = "none";
  }
  
  // Closes delete modal
  function deleteModalClose() {
    deleteModal.style.display = "none";
  }