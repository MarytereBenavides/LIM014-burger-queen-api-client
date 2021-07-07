import React, { useState } from "react";
import { postProducts } from "../../../../../services/productsService";
import Swal from 'sweetalert2';

const emptyForm = {
  name: "",
  price: 0,
  type: "",
  image: "",
};

const AdminProductsForm = ({bringProducts}) => {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    console.log(`hola mundo `);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title:'please wait ...',
      text:'We are updating our server',
      icon:'info',
      showCancelButton:false,
      allowOutsideClick:false
    })

    const objProduct = {
      ...form,
    }
    postProducts(objProduct).then( res=> {
      if(res.statusText === "OK")
      console.log(res);
      bringProducts()
      setForm(emptyForm)
      Swal.fire({
        title: 'Done!',
        icon: 'success',
        text:'The product was successfully created',
        timer:2000,
        showCancelButton:false
      })
    })
    
  };

  return (
    <div>
      <section>
        <h2>Add a new product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="">CATEGORY</label>
              <select name="type" value={form.type} onChange={handleChange}>
                <option value="">--SELECT CATEGORY--</option>
                <option value="LUNCHDINNER/HAMBURGERS">
                  LUNCHDINNER/HAMBURGERS
                </option>
                <option value="LUNCHDINNER/SNACKS">LUNCHDINNER/SNACKS</option>
                <option value="LUNCHDINNER/DRINKS">LUNCHDINNER/DRINKS</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">PRODUCT</label>
              <input
                type="text"
                placeholder="Item"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">IMG</label>
              <input
                type="text"
                placeholder="ItemProductImg"
                name="image"
                value={form.image}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">PRICE</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">ADD</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AdminProductsForm;
