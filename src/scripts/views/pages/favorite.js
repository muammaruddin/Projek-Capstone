import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import restoCard from '../templates/resto-card';

const Favorite = {
  async render() {
    return `
    <section class="container">
      <div tabindex="0" class="container-title">
        <h2>Favorite Restaurant</h2>
      </div>
      <div class="fav-cards"></div>
      <p tabindex="0" class="pesan-favorite">Tidak ada Restoran Favorit yang tersimpan. Tambahkan satu dengan mengklik tombol hati di halaman detail</p>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const data = await FavoriteRestoIdb.getAllResto();

    const favoriteContainer = document.querySelector('.fav-cards');

    if (data.length > 0) {
      // Jika ada data, tampilkan semua kartu restoran favorit
      data.forEach((resto) => {
        favoriteContainer.innerHTML += restoCard(resto);
      });
      // Sembunyikan pesan favorite jika ada data
      document.querySelector('.pesan-favorite').style.display = 'none';
    } else {
      // Tampilkan pesan favorite jika tidak ada data
      document.querySelector('.pesan-favorite').style.display = 'block';
    }
  },
};

export default Favorite;
