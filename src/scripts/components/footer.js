class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
      <p>Projekt Capstone &#169; 2024 - Destination Lombok Wonders</p>
      </footer>
      `;
  }
}

customElements.define('custom-footer', HeroContent);
