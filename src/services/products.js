const axios = require('axios');
const getProducts = async () => {
    return await axios.get('http://localhost:4000/products')
.then( (response) => {
    console.log(response.data.products)
    return response.data.products})
  .catch( (error) => {
      return error
  });
};

// const filterProducts =() =>{
//     let result = []
//     if()
// }

export {getProducts} ;


// https://ibb.co/C9qXNH8
// https://i.ibb.co/n1TVZLm/image-1-2.png
// https://ibb.co/MDGB8s0
// https://i.ibb.co/bg2bHP9/image-8.png
// https://ibb.co/Rh5myf3
// https://i.ibb.co/n3WvC97/image-9.png
// https://ibb.co/dLCv3M4
// https://i.ibb.co/qWq84jY/image-10-1.png
// https://ibb.co/hR2DGpv
// https://i.ibb.co/qMmkHbw/image-11.png
// https://ibb.co/Lgrcmvf
// https://i.ibb.co/3Fvj2kH/image-12-4.png
// https://ibb.co/mFNQFyP
// https://i.ibb.co/4g1BgS0/image-13.png
// https://ibb.co/F4N1Dym
// https://i.ibb.co/KxRgrfb/image-14.png
// https://ibb.co/pvxgFMB
// https://i.ibb.co/3y7wZj9/image-15.png
// https://ibb.co/2SmqrFC
// https://i.ibb.co/zFjsgmB/image-16.png
// https://ibb.co/XJKpTLg
// https://i.ibb.co/h84Hv9j/image-17.png
// https://ibb.co/HTpJvNT
// https://i.ibb.co/YBTr9DB/image-18.png