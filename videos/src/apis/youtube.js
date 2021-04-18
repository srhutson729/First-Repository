import axios from 'axios';

const KEY = 'AIzaSyDVC3Q-V6D0h4DtnFpmZ15icyh4BAwZEVs';

export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
  }
  });

