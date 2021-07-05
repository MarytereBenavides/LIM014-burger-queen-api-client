import React from "react";

const AdminProductsForm = () => {
  return (
    <div>
      <section>
        <h2>Add a new product</h2>
        <form action="">
          <div>
            <div>
              <label htmlFor="">CATEGORY</label>
              <select name="" id="">
                <option value="">Lunch</option>
                <option value="">Dinner</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">PRODUCT</label>
              <input type="text" placeholder="Item" />
            </div>
            <div>
              <label htmlFor="">IMG</label>
              <input type="text" placeholder="ItemProductImg" />
            </div>
          </div>
          <div>
            <div>
                <label htmlFor="">PRICE</label>
                <input type="number" />
            </div>
            <div>
                <button>ADD</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AdminProductsForm;
