import RestaurantSource from '../../data/resource-resto';
import restoCard from '../templates/resto-card';

const Home = {
  async render() {
    return `
      <section class="container">
        <div tabindex="0" class="container-title">
          <h2>Jelajahi Destinasi Lombok</h2>
        </div>
        <div class="loading"></div>
        <div class="cards"></div>
      </section>
    `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('.cards');

    try {
      const response = await RestaurantSource.listRestaurant();
      if (response && response.data) {
        const wisatas = response.data;

        // Looping data wisata
        wisatas.forEach((wisata) => {
          restoContainer.innerHTML += restoCard(wisata);
        });
      } else {
        throw new Error('Data wisata tidak ditemukan atau format tidak valid.');
      }
    } catch (error) {
      console.error('Gagal mengambil daftar wisata:', error);
      restoContainer.innerHTML = `<h3 class="error">Error: ${error.message}</h3>`;
    }
  },
};

export default Home;
