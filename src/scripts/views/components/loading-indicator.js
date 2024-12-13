class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="loading-indicator">
        <p>Loading...</p>
      </div>
    `;
    this.style.display = 'block';
  }

  hide() {
    this.style.display = 'none';
  }

  show() {
    this.style.display = 'block';
  }
}

customElements.define('loading-indicator', LoadingIndicator);
