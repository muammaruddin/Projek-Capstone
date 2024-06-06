/* eslint-disable no-underscore-dangle */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resource-resto';
import restoDetail from '../templates/resto-detail';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <section class="container">
        <div tabindex="0" class="container-title">
          <h2>Detail Destinasi</h2>
        </div>
        <div class="like" id="likeButtonContainer"></div>
        <div class="details"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const response = await RestaurantSource.detailRestaurant(url.id);

      if (response.data && response.data.id) {
        this._restaurant = response.data;
        this._displayRestoDetail();
        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          data: this._restaurant,
        });
      } else {
        throw new Error('Data response tidak memiliki properti id');
      }
    } catch (error) {
      console.error('Failed to fetch restaurant detail:', error);
      const detailsContainer = document.querySelector('.details');
      detailsContainer.innerHTML = `<h3 class="error">Error: ${error.message}</h3>`;
    }
  },

  _displayRestoDetail() {
    const detailsContainer = document.querySelector('.details');
    detailsContainer.innerHTML = restoDetail(this._restaurant);
  },
};

export default Detail;
