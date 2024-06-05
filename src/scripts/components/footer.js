class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
      <p>Projekt plant &#169; 2024 - Wisata</p>
      </footer>
      `;
  }
}

customElements.define('custom-footer', HeroContent);
