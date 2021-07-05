import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../../../../../services/productsService";
import AuthContext from "../../../../auth/context/authContext";

const AdminProductsTable = () => {
  const [product, setProduct] = useState([]);
  const { token } = useContext(AuthContext);

  const bringProducts = (token) => {
    getProducts(token).then((res) => {
      console.log(res);
      if (res.statusText === "OK") {
        setProduct(res.data);
      }
    });
  };
  useEffect(() => {
    bringProducts(token);
  }, []);
  return (
    <div>
      <section>
        <h2>PRODUCTOS LIST</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Product</th>
              <th>Price</th>
              <th>Img</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.map((prod) => (
              <tr key={prod._id}>
                <td>{prod.name}</td>
                <td>--</td>
                <td>{prod.type}</td>
                <td>$ {prod.price}</td>
                <td>
                    <img src={prod.image} width="80" height="80" alt="" />
                    </td>
                <td>
                  <button>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminProductsTable;
