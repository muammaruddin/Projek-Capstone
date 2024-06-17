/* eslint-disable no-underscore-dangle */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resource-wisata';
import restoDetail from '../templates/wisata-detail';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import Loading from '../templates/loading';

const Detail = {
  async render() {
    return `
      <section class="container">
        <div tabindex="0" class="container-title">
          <h2>Detail Destinasi</h2>
        </div>
        <div class="loading"></div> <!-- Tambahkan elemen loading -->
        <div class="like" id="likeButtonContainer"></div>
        <div class="details"></div>
      </section>
    `;
  },

  async afterRender() {
    this._displayLoading();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const response = await RestaurantSource.detailRestaurant(url.id);

      if (response.data && response.data.id) {
        this._restaurant = response.data;
        this._hideLoading();
        this._showMainContainer();
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
      this._hideLoading();
      this._showMainContainer();
      const detailsContainer = document.querySelector('.details');
      detailsContainer.innerHTML = `<h3 class="error">Error: ${error.message}</h3>`;
    }
  },

  _displayLoading() {
    const loading = document.querySelector('.loading');
    loading.innerHTML = Loading();
    loading.style.display = 'block';
  },

  _hideLoading() {
    const loading = document.querySelector('.loading');
    loading.style.display = 'none';
  },

  _showMainContainer() {
    const mainContainer = document.querySelector('.container');
    mainContainer.style.display = 'block';
  },

  _displayRestoDetail() {
    const detailsContainer = document.querySelector('.details');
    detailsContainer.innerHTML = restoDetail(this._restaurant);
  },
};

export default Detail;
