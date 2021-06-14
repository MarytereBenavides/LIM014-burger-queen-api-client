const axios = require('axios');

const getProducts = () => {
    return axios.get('http://localhost:4000/burger/products')
.then( (response) => {
    return response.data})
  .catch( (error) => {
      return error
  });
};

export {getProducts} ;