const Tim = {
  async render() {
    // Data untuk tiga anggota tim
    const teamMembers = [
      {
        name: 'Muammar Uddin',
        photo: './images/tim/muammar.jpg', // ganti dengan path ke foto
        origin: 'Lombok',
        school: 'Universitas Hamzanwadi',
      },
      {
        name: 'Ahmad Khalis Rahman',
        photo: './images/tim/holis.jpg', // ganti dengan path ke foto
        origin: 'Lombok',
        school: 'Universitas Hamzanwadi',
      },
      {
        name: 'Gavin Adjie Wicjaksono',
        photo: './images/tim/gavin.jpg', // ganti dengan path ke foto
        origin: 'Sumbawa',
        school: 'Universitas Bumigora',
      },

    ];

    // Membuat elemen kartu untuk setiap anggota tim
    const cards = teamMembers.map((member) => `
      <div class="card">
        <img src="${member.photo}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>Asal: ${member.origin}</p>
        <p>Asal Sekolah: ${member.school}</p>
      </div>
    `).join('');

    return `
      <section class="tim">
      <h2>Team</h2>
        <div tabindex="0" class="tim-title">
        </div>
        <div class="cards">
          ${cards}
        </div>
        <div class="loading">Loading...</div>
      </section>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('.loading');
    loading.style.display = 'none';
  },
};

export default Tim;
