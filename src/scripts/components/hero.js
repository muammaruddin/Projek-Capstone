class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="jumbotron">
      <div tabindex="0" class="container-jumbotron">
          <h1>lombok Wonders</h1>
          <h2>Explore The Untouched Beauty</h2>
          <div class="garis"></div>
          <p>Menikmati Keindahan Wisata Alam Di Pulau Lombok.</p>
      </div>
      </div>`;
  }
}

customElements.define('hero-section', HeroContent);
