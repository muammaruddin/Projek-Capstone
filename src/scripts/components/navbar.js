class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="wrapper">
      <nav>
          <div class="container-flex">
              <div class="brand">
                  <a href="/">Destination</a>
              </div>
              <button class="burger" aria-label="menu dropdown">
                  <div class="bar1"></div>
                  <div class="bar2"></div>
                  <div class="bar3"></div>
              </button>
              <div class="bg-sidebar"></div>
              <ul class="sidebar">
                  <li><a href="/">Home</a></li>
                  <li><a href="#/favorite">Favorite</a></li>
                  <li><a href="rel="noopener noreferrer">Tim</a></li>
              </ul>
          </div>
      </nav>
  </div>
      `;
  }
}

customElements.define('nav-bar', Navbar);
