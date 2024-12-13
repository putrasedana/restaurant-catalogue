import { restaurantList } from '../../data/network-data';
import { createRestaurantItemTemplate } from '../templates/template-creator';

import '../../views/components/hero-section.js';
import '../components/explore-restaurants.js';
import '../../views/components/user-reviews.js';
import '../components/loading-indicator.js';

const Home = {
  async render() {
    return `
    <loading-indicator></loading-indicator>
    <hero-section></hero-section>
    <explore-restaurants></explore-restaurants>
    <user-reviews></user-reviews>
  `;
  },

  async afterRender() {
    const loadingIndicator = document.querySelector('loading-indicator');
    const restaurantGrid = document.querySelector('#restaurant-grid');

    try {
      loadingIndicator.show();
      restaurantGrid.style.display = 'none';

      const restaurants = await restaurantList();

      restaurantGrid.style.display = 'grid';
      restaurants.forEach((restaurant) => {
        restaurantGrid.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.error('Error loading restaurants:', error);
      restaurantGrid.innerHTML = `<p>Failed to load restaurants. Please try again later.</p>`;
    } finally {
      loadingIndicator.hide();
    }
  },
};

export default Home;
