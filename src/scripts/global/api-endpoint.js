import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}contents?populate=image`,
  DETAIL: (id) => `${CONFIG.BASE_URL}contents/${id}?populate=image`,
  POST_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
