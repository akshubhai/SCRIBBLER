//show postlist
function showAllPosts(){
    window.location.href = "./html/postslist.html";
}

//Create post modal screen
function showCreatePost(){
    var createPostModal = document.getElementById("create-post-popup-modal");
    createPostModal.style.display = "flex";
    
}

// Closes Create Post modal window
function hideCreatePostModal() {
    var createPostModal = document.getElementById("create-post-popup-modal");
    createPostModal.style.display = "none";
  }
  