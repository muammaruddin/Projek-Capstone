/* eslint-disable no-underscore-dangle */
import FavoriteRestoIdb from '../data/favorite-wisata-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/button-favorite';
import { alertError, alertSuccess } from './sweetalert';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = data;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;
      const restaurant = await FavoriteRestoIdb.getResto(id);

      if (restaurant) {
        this._renderLikedButtonTemplate();
      } else {
        this._renderLikeButtonTemplate();
      }
    } catch (error) {
      console.error(error);
      alertError(error.message);
      throw new Error(error);
    }
  },

  _addButtonEventListener(button, action) {
    button.addEventListener('click', async () => {
      await action();
      // eslint-disable-next-line max-len
      await this._renderButton(); // Menunggu sampai tombol dirender kembali setelah tindakan dilakukan
    });
  },

  _renderLikeButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    this._addButtonEventListener(likeButton, async () => {
      await FavoriteRestoIdb.putResto(this._restaurant);
      alertSuccess('Wisata favorited!');
    });
  },

  _renderLikedButtonTemplate() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    this._addButtonEventListener(likeButton, async () => {
      await FavoriteRestoIdb.deleteResto(this._restaurant.id);
      alertSuccess('Wisata unfavorited!');
    });
  },
};

export default LikeButtonInitiator;
