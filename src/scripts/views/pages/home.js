import RestaurantSource from '../../data/resource-wisata';
import restoCard from '../templates/wisata-card';
import Loading from '../templates/loading';
import { alertError } from '../../utils/sweetalert';

const Home = {
  async render() {
    return `
      <section class="container">
        <div tabindex="0" class="container-title">
          <h2>Jelajahi Destinasi Lombok Wonders</h2>
        </div>
        <div class="loading"></div>
        <div class="cards"></div>
      </section>
    `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('.cards');
    const loading = document.querySelector('.loading');
    const mainContainer = document.querySelector('.container');

    loading.innerHTML = Loading();

    try {
      const response = await RestaurantSource.listRestaurant();
      console.log(response);
      if (response && response.data) {
        const wisatas = response.data;
        loading.style.display = 'none';
        mainContainer.style.display = 'block';
        // Looping data wisata
        wisatas.forEach((wisata) => {
          restoContainer.innerHTML += restoCard(wisata);
        });
      } else {
        throw new Error('Data wisata tidak ditemukan atau format tidak valid.');
      }
    } catch (error) {
      console.error('Gagal mengambil daftar wisata:', error);
      loading.style.display = 'none';
      mainContainer.style.display = 'block';
      restoContainer.innerHTML = `<h3 class="error">Error: ${error.message}</h3>`;
      alertError(error.message);
    }
  },
};

export default Home;
