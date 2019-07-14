import axios from 'axios';

export default () => {
    return axios.create({
      baseURL: 'https://cb5ce7da.ngrok.io',
      headers: {
        authorization: sessionStorage['token'],
      }
    });
  }

  /*baseURL: 'https://cb5ce7da.ngrok.io',*/