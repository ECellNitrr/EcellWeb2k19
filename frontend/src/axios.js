import axios from 'axios';

export default () => {
    return axios.create({
      baseURL: 'https://ecell.nitrr.ac.in',
      headers: {
        authorization: sessionStorage['token'],
      }
    });
  }

  /*baseURL: 'https://cb5ce7da.ngrok.io',*/