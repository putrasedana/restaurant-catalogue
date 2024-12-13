class DetailRestaurants extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="detail-restaurant">
        <div id="restaurant" class="restaurant"></div>
        <div id="favoriteButtonContainer"></div>
      </div>
    `;
  }
}

customElements.define('detail-restaurants', DetailRestaurants);
