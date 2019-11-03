import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/search/photos/',
  responseType: 'json',
  headers: {
    'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID***REMOVED***`
  ***REMOVED***
***REMOVED***)