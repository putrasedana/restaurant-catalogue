import { addRestaurantReview } from '../../data/network-data';

class AddReview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        .modal {
          display: none;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
          background-color: #fff;
          margin: 15% auto;
          padding: 20px;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 35px;
          font-weight: bold;
          color: #333;
          cursor: pointer;
        }

        .close:hover {
          color: red;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
        }

        input, textarea {
          padding: 10px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        textarea {
          resize: none;
        }

        .btn {
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          background-color: #333;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn:hover {
          background-color: #222;
        }
      </style>
      <div class="modal" id="modal">
        <div class="modal-content">
          <span class="close" id="close">&times;</span>
          <h2>Add Your Review</h2>
          <form id="review-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="review">Review:</label>
            <textarea id="review" name="review" rows="5" required></textarea>

            <button type="submit" class="btn">Submit Review</button>
          </form>
        </div>
      </div>
    `;

    this.modal = this.shadowRoot.getElementById('modal');
    this.closeButton = this.shadowRoot.getElementById('close');
    this.reviewForm = this.shadowRoot.getElementById('review-form');
  }

  connectedCallback() {
    document.getElementById('open-modal').addEventListener('click', () => {
      this.openModal();
    });

    this.closeButton.addEventListener('click', () => {
      this.closeModal();
    });

    window.addEventListener('click', (event) => {
      if (event.target === this.modal) {
        this.closeModal();
      }
    });

    this.reviewForm.addEventListener('submit', (event) => {
      this.handleFormSubmit(event);
    });
  }

  disconnectedCallback() {
    const submitButton = this.shadowRoot?.getElementById('submit');
    if (submitButton) {
      submitButton.removeEventListener('click', this.handleSubmit);
    } else {
      console.warn('Submit button not found during disconnectedCallback');
    }
  }

  openModal() {
    this.modal.style.display = 'block';
  }

  closeModal() {
    this.modal.style.display = 'none';
  }

  async handleFormSubmit(event) {
    event.preventDefault();

    const name = this.shadowRoot.getElementById('name').value;
    const review = this.shadowRoot.getElementById('review').value;

    try {
      const restaurantId = this.getRestaurantIdFromUrl();
      const customerReviews = await addRestaurantReview(
        restaurantId,
        name,
        review
      );

      if (customerReviews) {
        this.dispatchEvent(
          new CustomEvent('review-added', {
            bubbles: true,
            composed: true,
            detail: { reviews: customerReviews },
          })
        );
      }
    } catch (error) {
      alert('Gagal menambahkan review. Silakan coba lagi.');
      console.error(error);
    }

    this.reviewForm.reset();
    this.closeModal();
  }

  getRestaurantIdFromUrl() {
    const hash = window.location.hash;
    return hash.split('/')[2];
  }
}

customElements.define('add-review', AddReview);
