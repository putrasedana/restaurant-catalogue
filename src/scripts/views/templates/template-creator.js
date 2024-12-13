const imageUrl = 'https://restaurant-api.dicoding.dev/images/medium/';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="lazyload restaurant-item__header__poster" alt="${
        restaurant.name || '-'
      }"
           data-src="${imageUrl + restaurant.pictureId}">
      <span class="location">${restaurant.city}</span>
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${
          restaurant.rating || '-'
        }</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${
  restaurant.name || '-'
}</a></h3>
      <p>${restaurant.description || '-'}</p>
    </div>
  </div>
`;

function createRestaurantDetailTemplate(restaurant) {
  return `
    <div class="restaurant-detail">
        <img class="restaurant-image" src="${
          imageUrl + restaurant.pictureId
        }" alt="Image of ${restaurant.name}">
      <div class="restaurant-info">
        <h3 class="restaurant__title">${restaurant.name}</h3>
        <p class="restaurant-description">${restaurant.description}</p>
        <p><strong>City:</strong> ${restaurant.city}</p>
        <p><strong>Address:</strong> ${restaurant.address}</p>
        <p><strong>Rating:</strong> ${restaurant.rating}</p>
      </div>
      <div class="restaurant-categories">
        <h3>Categories:</h3>
        <ul>
          ${restaurant.categories
            .map((category) => `<li>${category.name}</li>`)
            .join('')}
        </ul>
      </div>
      <div class="restaurant-menus">
        <h3>Menus:</h3>
        <div class="menu-section">
          <h4>Foods</h4>
          <ul>
            ${restaurant.menus.foods
              .map((food) => `<li>${food.name}</li>`)
              .join('')}
          </ul>
        </div>
        <div class="menu-section">
          <h4>Drinks</h4>
          <ul>
            ${restaurant.menus.drinks
              .map((drink) => `<li>${drink.name}</li>`)
              .join('')}
          </ul>
        </div>
      </div>
      <div class="customer-reviews">
        <h3>Customer Reviews:</h3>
        <ul>
          ${restaurant.customerReviews
            .map(
              (review) => `
                <li>
                  <p><strong>${review.name}</strong> (${review.date})</p>
                  <p>${review.review}</p>
                </li>
              `
            )
            .join('')}
        </ul>
      </div>
    </div>
  `;
}

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-star-o" aria-hidden="true"></i>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
};
