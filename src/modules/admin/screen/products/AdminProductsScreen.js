import React, {useState, useEffect} from 'react'
import { getProducts } from '../../../../services/productsService';
import AdminProductsForm from './components/AdminProductsForm'
import AdminProductsTable from './components/AdminProductsTable'

const AdminProductsScreen = () => {
    const [product, setProduct] = useState([]);

    const bringProducts = () => {
        getProducts().then((res) => {
          console.log(res);
          if (res.statusText === "OK") {
            setProduct(res.data);
          }
        });
      };

      useEffect(() => {
        bringProducts();
      },[]);

    return (
        <>
            <AdminProductsForm bringProducts={bringProducts}/>
            <AdminProductsTable product={product}/>
        </>
    )
}

export default AdminProductsScreen
