class FavoriteRestaurants extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="favorite-restaurant">
      <h2>Your Favorited Restaurant</h2>
      <div class="restaurant-grid" id="restaurant-grid"></div>
    </div>`;
  }
}

customElements.define('favorite-restaurants', FavoriteRestaurants);
