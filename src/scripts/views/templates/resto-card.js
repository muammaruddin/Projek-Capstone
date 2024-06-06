import CONFIG from '../../global/config';// Base URL untuk gambar

const restoCard = (wisata) => {
  const {
    name, description, address, image,
  } = wisata.attributes;

  // Cek apakah imageUrl ada dan tambahkan BASE_IMAGE_URL jika URL relatif
  const imageUrl = image?.data?.attributes?.formats?.small?.url
    ? `${CONFIG.BASE}${image.data.attributes.formats.small.url}`
    : '/path/to/default/image.jpg';

  return `
    <div tabindex="0" class="card">
        <div class="icon" tabindex="0">
            <span class="rate" tabindex="0"><p>★ 4.5</p></span> <!-- Tambahkan rating statis sementara -->
            <img src="${imageUrl}" alt="${name}"> <!-- URL gambar dari API atau gambar default -->
        </div>
        <div class="text" tabindex="0">
            <p class="title-city">${name} - ${address}</p>
            <p class="description">${description}</p>
        </div>
        <a href="#/resto/${wisata.id}" class="detail"><div tabindex="0">
            <p><strong>Detail</strong></p>
        </div></a>
    </div>
  `;
};

export default restoCard;
