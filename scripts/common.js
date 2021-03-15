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

      

    </div>`;
    }
}
