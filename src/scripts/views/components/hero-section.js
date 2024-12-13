class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="hero">
        <h1>Nice Restaurants</h1>
        <h2>Delicious flavors, cozy atmosphere</h2>
        <p>
          Discover the best dining spots with Nice Restaurants. Explore top
          eateries, enjoy delicious flavors, and find your next favorite place
          to eat!
        </p>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="./images/hero-image_3-small.jpg"
          />
          <img src="./images/hero-image_3-large.jpg" alt="hero image" />
        </picture>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
