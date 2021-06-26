import React, { useReducer, useEffect, useState} from 'react';
import '../../../scss/cashier.scss';
import HeaderSecundary from '../../../environments/headerSecundary';
import {getProducts} from '../../../services/products.js';
import Product from '../components/item' 
import CartList from '../components/cartList';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}


function CashierScreen() {
    // const LOCAL_STORAGE_KEY = "products";
   
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    function productsType (option){
        // eslint-disable-next-line default-case
        switch (option){
            case "BREAKFAST":
                const breakfast = products.filter(e => e.type === option);
                setFilterProducts(breakfast);
            break;
            case "LUNCHDINNER/HAMBURGERS":
                const hamburgers=products.filter(e => e.type === option);
                setFilterProducts(hamburgers);
            break;
            case "LUNCHDINNER/SNACKS":
                const snacks=products.filter(e => e.type === option);
                setFilterProducts(snacks);
            break;
            case "LUNCHDINNER/DRINKS":
                const drinks=products.filter(e => e.type === option);
                setFilterProducts(drinks);
            break;
        }
    }

    useEffect(() => {
        getProducts()
        .then ((resp) => {
                setProducts(resp)
                const breakfast = resp.filter(e => e.type === "BREAKFAST");
                setFilterProducts(breakfast);
                // setFilterProducts(resp) 
                // productsType("BREAKFAST")
        })
        // return () => {

        // }
    }, [])



    // useEffect(() => {
    //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products))
    // }, [products])

    // const filterByType= (name) => {
    //     setCategory(name)
    // }


    

   

  const [formData, setFormData] = useReducer(formReducer, {});

  const onkeyup = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }



  
  return console.log(products)  ||

 (
   <div className='waiterView'>
      <HeaderSecundary />
       <main >
        <section className='orderButton'>
            <section>
            <div className='buttonOrder'  >
                <div>
                    <label>CLIENT :</label>
                    <input maxLength='19' name="name" onChange={onkeyup}/>
                </div>
                <div className='boxButtonMenu'>
                    <button className='buttonMenu'  type="submit" onClick={() => productsType('BREAKFAST')} >BREAKFAST</button>
                    {/* <button className='buttonMenu' type="submit" id="buttonDinner" onClick={displayDinner}>LUNCH / DINNER</button> */}
                </div>
                <div id="buttoncategory" className="">
                    <button className='buttonSubMenu' type="submit" onClick={() => productsType('LUNCHDINNER/HAMBURGERS')}>HAMBURGERS</button>
                    <button className='buttonSubMenu' type="submit" onClick={() => productsType('LUNCHDINNER/SNACKS')}>SNACKS</button>                 
                    <button className='buttonSubMenu' type="submit" onClick={() => productsType('LUNCHDINNER/DRINKS')}>DRINKS</button>
                </div>           
            </div>
            </section>
            <section>
                <div className="" id="">
                    {filterProducts.map((product) => (     
                       <Product
                       key = {product._id} 
                       product={product}
                       cartItems={cartItems} 
                       setCartItems={setCartItems}
                       products={products}/>
                    ))}        
                </div>
            </section>

            </section>
        <section className='orderDetail'>
            <ul> 
            {Object.entries(formData).map(([name, value]) => (
                <p key={name}>{value.toString()}</p>
            ))}
            </ul>
           <CartList 
           cartItems={cartItems}
           setCartItems={setCartItems}
           
            // handleAddItemToCart={handleAddItemToCart}
            // handleRemoveItemFromCart={handleRemoveItemFromCart} 
            />
    
            <button>Done</button>
        </section>
    </main>
   </div>
   
  )
}

export default CashierScreen;