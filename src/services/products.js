const axios = require('axios');
const headersHttp = {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGQ5ZTQzZjIxMzY2ODYzZWNkOWMwNzQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdC5jb20iLCJyb2xlcyI6eyJhZG1pbiI6dHJ1ZX0sImlhdCI6MTYyNTA5NTQxMiwiZXhwIjoxNjI1MDk5MDEyfQ.xPyWdWYJshQm2lvEZavn-XHdjDWaFm8WDrY4rSXqrdY'
    }
}


const getProducts = async () => {
    // return await axios.get('http://localhost:4000/products')
    const getAllProducts = await axios({ 
        method: 'GET',
        url:'https://nodejs-bq-api.herokuapp.com/products',
            ...headersHttp
    })
    return getAllProducts;

 };


const createOrder = (order) => {
 
       axios({ 
        method: 'POST',
        url:'https://nodejs-bq-api.herokuapp.com/orders',

            ...headersHttp,

        data: {
            body:{order},
            userId:1
        }
    }).then(res=>console.log(res.data))


};

// const filterProducts =() =>{
//     let result = []
//     if()
// }

export {getProducts,createOrder} ;


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