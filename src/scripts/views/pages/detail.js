import { restaurantDetail } from '../../data/network-data';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

import '../components/detail-restaurants';
import '../components/loading-indicator';
import '../components/add-review';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <loading-indicator></loading-indicator>
    <button id="open-modal" class="review-btn">
     <i class="fa fa-pencil" aria-hidden="true"></i>
    </button>
    <detail-restaurants></detail-restaurants>
    <add-review></add-review>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loadingIndicator = document.querySelector('loading-indicator');
    const restaurantContainer = document.querySelector('#restaurant');
    const addReviewComponent = document.querySelector('add-review');

    const renderRestaurantDetail = async () => {
      try {
        loadingIndicator.show();

        const restaurant = await restaurantDetail(url.id);
        restaurantContainer.innerHTML =
          createRestaurantDetailTemplate(restaurant);

        FavoriteButtonPresenter.init({
          favoriteButtonContainer: document.querySelector(
            '#favoriteButtonContainer'
          ),
          favoriteRestaurants: FavoriteRestaurantIdb,
          restaurant: {
            id: restaurant.id,
            name: restaurant.name,
            description: restaurant.description,
            pictureId: restaurant.pictureId,
            city: restaurant.city,
            rating: restaurant.rating,
          },
        });
      } catch (error) {
        console.error('Error loading detail restaurants:', error);
        restaurantContainer.innerHTML = `<p>Failed to load favorite restaurants. Please try again later.</p>`;
      } finally {
        loadingIndicator.hide();
      }
    };

    await renderRestaurantDetail();

    addReviewComponent.addEventListener('review-added', async () => {
      await renderRestaurantDetail();
    });
  },
};

export default Detail;
