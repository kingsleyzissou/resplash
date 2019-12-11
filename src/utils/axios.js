import axios from 'axios'

const $axios = {
  server: axios.create({
    baseURL: process.env.REACT_APP_URL,
  }),
  unsplash: axios.create({
    baseURL: 'https://api.unsplash.com/search/photos/',
    responseType: 'json',
    headers: {
      'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
    }
  })
}

$axios.server.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response;
    const { message } = error.response.data;
    return Promise.reject({ status, message });
  },
);

export default $axios;
