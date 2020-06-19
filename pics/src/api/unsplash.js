import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
         'Client-ID bF1sJ9lW1QJX1FTk916g0NB6Thy2_ZF9_p0_hpDC45w '         
      }  
});