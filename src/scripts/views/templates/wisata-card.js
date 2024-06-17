import CONFIG from '../../global/config';

const restoCard = (wisata) => {
  if (!wisata || !wisata.attributes || !wisata.attributes.images) {
    throw new Error(
      'Invalid data provided: wisata or wisata.attributes or images is undefined',
    );
  }

  const {
    name, rating, address, images,
  } = wisata.attributes;

  const imageUrl = images?.data?.attributes?.formats?.small?.url
    ? new URL(images.data.attributes.formats.small.url, CONFIG.BASE).toString()
    : '../../../public/images/error/error_image.jpg';

  return `
    <div tabindex="0" class="card">
        <div class="icon" tabindex="0">
            <span class="rate" tabindex="0"><p>★ ${rating}</p></span> <!-- Tambahkan rating statis sementara -->
            <img src="${imageUrl}" alt="${name}"> <!-- URL gambar dari API atau gambar default -->
        </div>
        <div class="text" tabindex="0">
            <p class="title">${name}</p><br>
            <p class="title-city">${name} - ${address}</p>
        </div>
        <a href="#/resto/${wisata.id}" class="detail"><div tabindex="0">
            <p><strong>Detail</strong></p>
        </div></a>
    </div>
  `;
};

export default restoCard;
