import FavoriteRestoIdb from '../../data/favorite-wisata-idb';
import restoCard from '../templates/wisata-card';

const Favorite = {
  async render() {
    return `
    <section class="container">
      <div tabindex="0" class="container-title">
        <h2>Favorite Destination</h2>
      </div>
      <div class="fav-cards"></div>
      <p class="pesan-favorite" style="display: none;">No favorite Destination found.</p>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const data = await FavoriteRestoIdb.getAllResto();

    const favoriteContainer = document.querySelector('.fav-cards');

    if (data && data.length > 0) {
      // Jika ada data, tampilkan semua kartu restoran favorit
      data.forEach((resto) => {
        if (resto && resto.attributes) {
          favoriteContainer.innerHTML += restoCard(resto);
        }
      });
    } else {
      // Tampilkan pesan favorite jika tidak ada data
      const pesanFavorite = document.querySelector('.pesan-favorite');
      if (pesanFavorite) {
        pesanFavorite.style.display = 'block';
      }
    }
  },
};

export default Favorite;
