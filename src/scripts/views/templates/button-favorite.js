const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <p>🤍</p>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <p>❤️</p>
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
