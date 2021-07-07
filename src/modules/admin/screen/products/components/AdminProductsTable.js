import React from "react";


const AdminProductsTable = ({product}) => {
  
  // const { token } = useContext(AuthContext);


  return (
    <div>
      <section>
        <h2>PRODUCTOS LIST</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
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
                <td>{prod.type}</td>
                <td>$ {prod.price}</td>
                <td>
                  <img src={prod.image} width="80" height="80" alt="" />
                </td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
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
