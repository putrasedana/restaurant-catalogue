class UserReviews extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="user-reviews">
        <h2>What Our Diners Say</h2>
        <div class="reviews">
          <div class="review">
            <p class="review-text">
              "The pasta at Bella Italia is the best I've ever had! Highly
              recommend!"
            </p>
            <p class="review-author">- Sarah J.</p>
          </div>
          <div class="review">
            <p class="review-text">
              "Cozy ambiance and fantastic service at The Spice House!"
            </p>
            <p class="review-author">- John D.</p>
          </div>
          <div class="review">
            <p class="review-text">
              "Sushi Paradise is a hidden gem! Fresh sushi and friendly staff."
            </p>
            <p class="review-author">- Emily R.</p>
          </div>
          <div class="review">
            <p class="review-text">
              "Loved the desserts at Sweet Treats! A perfect ending to a great
              meal!"
            </p>
            <p class="review-author">- Mark T.</p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('user-reviews', UserReviews);
