const axios = require('axios');
const headersHttp = {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGRmMmM2ZjVhNTUyZTAwMTUyODNhMDEiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdC5jb20iLCJyb2xlcyI6eyJhZG1pbiI6dHJ1ZX0sImlhdCI6MTYyNTQ4OTk0NiwiZXhwIjoxNjI1NDkzNTQ2fQ.BxEYNmURxCg71vJtEfI4f8_Lpmglj7Fgf35o-3HExiI'
    }
}


const getProducts = async () => {
    // return await axios.get('http://localhost:4000/products')
    const getAllProducts = await axios({ 
        method: 'GET',
        url:'https://burgerqueen01.herokuapp.com/products?limit=50000&page=1',
            ...headersHttp
    })
    return getAllProducts;
 };


const createOrder = async (order) => {
    console.log(order);
      const result = await axios({ 
        method: 'POST',
        url:'https://burgerqueen01.herokuapp.com/orders',
            ...headersHttp,
        data:order
    })

    return result

};

const getOrder = async () => {
      const getAllOrders = await axios({ 
        method: 'GET',
        url:'https://burgerqueen01.herokuapp.com/orders?limit=50000&page=1',
            ...headersHttp,
    })

    return getAllOrders

};

// const filterProducts =() =>{
//     let result = []
//     if()
// }

export {getProducts,createOrder,getOrder} ;


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