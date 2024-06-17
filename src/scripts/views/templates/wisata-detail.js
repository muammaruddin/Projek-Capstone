import CONFIG from '../../global/config';

const restoDetail = (wisata) => {
  if (!wisata || !wisata.attributes) {
    throw new Error(
      'Invalid data provided: wisata or wisata.attributes is undefined',
    );
  }

  const {
    name, description, address, images, urlVideo, rating,
  } = wisata.attributes;

  const imageUrl = images?.data?.attributes?.formats?.small?.url
    ? new URL(images.data.attributes.formats.small.url, CONFIG.BASE).toString()
    : '../../../public/images/error/error_image.jpg';
  return `
    <div class="detail">
      <div tabindex="0" class="img-container">
        <img class="detail-img" alt="${name}" src="${imageUrl}"/>
      </div>
      <div class="info">
        <h3 tabindex="0" class="nama-wisata">${name}</h3>
        <i tabindex="0">${address}</i>
        <p tabindex="0" class="rating-detail">★ ${rating}</p>
        <p tabindex="0" class="detail-description">${description}</p>
        <h3>Video</h3>
        <iframe width="100%" height="550" src="${urlVideo}" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  `;
};

export default restoDetail;
