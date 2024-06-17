import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}contents?populate=images`,
  DETAIL: (id) => `${CONFIG.BASE_URL}contents/${id}?populate=images`,
};

export default API_ENDPOINT;
