import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 9XcHRdZ0414nsMKOlF-tX5LQOcl5cCYb7tYiOIGkItKoDFLj_8Z5oewd3dfFPu2TQst1_N7Sl8LndXEPiHxQu2DOcrsKVWNz9FBDRrAGWI5fRTbGPZKHMoIOcgVtYnYx'
  }
});