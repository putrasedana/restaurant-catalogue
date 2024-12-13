class ExploreRestaurants extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="explore-restaurants">
        <h2>Explore Restaurants</h2>
        <div class="restaurant-grid" id="restaurant-grid"></div>
      </section>
    `;
  }
}

customElements.define('explore-restaurants', ExploreRestaurants);
