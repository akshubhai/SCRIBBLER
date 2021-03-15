// Header DOM to be resused again and again
class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `<div class="header">
      <div class="title-container">
        <p class="title">ScriBBler</p>
        <p class="heading">Explore, Imagine, Create</p>
      </div>

      <div class="header-button-container">
        <button class="signup-button" onclick="showSignUpModal()">Sign Up</button>
        <button class="signin-button" onclick="showSignInModal()">Sign In</button>
      </div>

      <!-- SignUp Modal -->
    <div id="signup-popup-modal" class="modal">
      <div class="modal-content">
        <div class="modal-head">
          <h2 class="modal-title">Get Started</h2>
          <span class="modal-close" onclick="hideSignUpModal()">
            <i class="fa fa-times" aria-hidden="true"></i>
          </span>
        </div>
        <hr />
        <div class="modal-body">
          <form>
            <label for="name" class="label-text">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              required
            />
            <label for="username" class="label-text">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              id="username"
              required
            />
            <label for="password" class="label-text">Password</label>
            <input
              type="text"
              placeholder="Enter your password"
              id="password"
              required
            />
            <label for="confirmpassword" class="label-text"
              >Confirm Password</label
            >
            <input
              type="text"
              placeholder="Re-enter your password"
              id="confirmpassword"
              required
            />
            <button type="submit" class="modal-pop-up-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>

    <!-- SignIn Modal -->
    <div id="signin-popup-modal" class="modal">
      <div class="modal-content">
        <div class="modal-head">
          <h2 class="modal-title">Welcome Back!</h2>
          <span class="modal-close" onclick="hideSignInModal()">
            <i class="fa fa-times" aria-hidden="true"></i>
          </span>
        </div>
        <hr />
        <div class="modal-body">
          <form>
            <label for="username" class="label-text">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              id="name"
              required
            />
            <label for="password" class="label-text">Password</label>
            <input
              type="text"
              placeholder="Enter your password"
              id="password"
              required
            />
            <button type="submit" class="modal-popup-button">Sign In</button>
            <p class="bottom-banner">
              Not a member?
              <span
                class="bottom-banner-text"
                onclick="hideSignIn();showSignUp()"
                >Sign Up</span
              >
            </p>
          </form>
        </div>
      </div>
    </div>`;
    }
}

customElements.define("header-section", Header);

//Show SignUp modal
function showSignUpModal() {
    var signUpModal = document.getElementById("signup-popup-modal");
    signUpModal.style.display = "flex";
  }
  
  // Show SignUp modal
  function hideSignUpModal() {
    var signUpModal = document.getElementById("signup-popup-modal");
    signUpModal.style.display = "none";
  }