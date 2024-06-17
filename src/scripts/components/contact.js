class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="contact">
        <div tabindex="0" class="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504977.33427389263!2d115.94331337363651!3d-8.582975575816585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb7d23e8cc745%3A0x446689c4ab50d8c9!2sPulau%20Lombok!5e0!3m2!1sid!2sid!4v1717773059603!5m2!1sid!2sid" width="100%" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div tabindex="0" class="contact-form">
          <h2 tabindex="0">Contact Us</h2>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="247636ca-c499-4538-a414-4fa1e479910e">
            <input tabindex="0" type="text" placeholder="name" class="contact-form-text"/>
            <input tabindex="0" type="text" placeholder="email" class="contact-form-text"/>
            <textarea tabindex="0" placeholder="message" class="contact-form-textarea"></textarea>
            <button tabindex="0" type="submit" name="submit" class="contact-form-btn">submit</button>
          </form>
        </div>
      </section>
    `;
  }
}

customElements.define('section-contact', HeroContent);
