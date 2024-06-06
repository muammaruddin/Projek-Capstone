import CONFIG from '../../global/config';

const restoDetail = (wisata) => {
  const {
    name, description, address, image,
  } = wisata.attributes;

  const imageUrl = image?.data?.attributes?.formats?.small?.url
    ? `${CONFIG.BASE}${image.data.attributes.formats.small.url}`
    : '/path/to/default/image.jpg';
  return `
    <div class="detail">
      <div tabindex="0" class="img-container">
        <img class="detail-img" alt="${name}" src="${imageUrl}"/>
      </div>
      <div class="info">
        <h3 tabindex="0" class="nama-wisata">🏦${name}</h3>
        <i tabindex="0">${address}</i>
        <p tabindex="0" class="rating-detail">★ 4.5</p>
        <p tabindex="0" class="detail-description">${description}</p>
      </div>
    </div>
`;
};

export default restoDetail;
