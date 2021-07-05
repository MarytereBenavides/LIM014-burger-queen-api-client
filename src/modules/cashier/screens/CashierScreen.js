import React, { useReducer, useEffect, useState} from 'react';
import '../../../scss/cashier.scss';
import HeaderSecundary from '../../../environments/headerSecundary';
import {getProducts, createOrder} from '../../../services/products.js';
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
    const [orders, setOrders] = useState([]);
    const [showResults, setShowResults] = React.useState(false)
    const [formData, setFormData] = useReducer(formReducer, {});
    const showButtons = () => setShowResults(true)
    const hideButtons = () => setShowResults(false)
    

    useEffect(() => {
        getProducts()
        .then ((resp) => {
        console.log('hola',resp.data)
                setProducts(resp.data)
                // const breakfast = resp.filter(e => e.type === "BREAKFAST");
                // setFilterProducts(breakfast);
                // setFilterProducts(resp) 
                // productsType("BREAKFAST")
        })
        // return () => {

        // }
    }, [])

    function productsType (option){
        // eslint-disable-next-line default-case
        switch (option){
            case "BREAKFAST":
                const breakfast = products.filter(e => e.type === option) ;
                setFilterProducts(breakfast);
                hideButtons();
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

    // useEffect(() => {
    //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products))
    // }, [products])

    // const filterByType= (name) => {
    //     setCategory(name)
    // }




    const sendOrder = () =>{
        console.log(cartItems)
        if(cartItems.filter((e) => e._id).length>0){
            const products = cartItems.map((e)=> {
                return { productId: e._id, qty: e.qty };
                
            })
            const order={
                status: "pending",
                userId:"60d9e43f21366863ecd9c084",
                client: "c888",
                products:products,
            }
            setOrders(order);
            // console.log(setOrders())
            // console.log(order)
            alert('orden enviada')
            setCartItems([]);
            
            // console.log(':c',cartItems)
            // console.log(':c',setOrders(orders))
            // createOrder(orders).then(res=>{
            //     console.log('linea97')
            //     console.log(res)
            //     // setOrders(res)
            //     return res
        
            // })
            console.log(orders)
            return orders
        }else{
           
        }
    }

    useEffect(() => {
        createOrder(orders).then(res=>{
            console.log('linea97')
            console.log(res)
            // setOrders(res)
            return res
        })
    }, [orders])
    

   

  

  const onkeyup = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
    console.log(formData)
  }
  
  const Results = () => (
    <div id="results">
                    <button className='buttonSubMenu' type="submit" onClick={() => productsType('LUNCHDINNER/HAMBURGERS')}>HAMBURGERS</button>
                    <button className='buttonSubMenu' type="submit" onClick={() => productsType('LUNCHDINNER/SNACKS')}>SNACKS</button>                 
                    <button className='buttonSubMenu' type="submit" onClick={() => productsType('LUNCHDINNER/DRINKS')}>DRINKS</button>
                      
    </div>
  )
  
  return console.log(products) || console.log(cartItems) ||

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
                    <button className='buttonMenu'  type="submit" onClick={() => {productsType('BREAKFAST')}} >BREAKFAST</button>
                    <button className='buttonMenu' type="submit" id="buttonDinner" onClick={showButtons} >LUNCH / DINNER</button>
                </div>
                { showResults ? <Results /> : null }
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
                <p id="clientName" key={name}>{value.toString()}</p>
            ))}
            </ul>
           <CartList 
           cartItems={cartItems}
           setCartItems={setCartItems}
            />
    
            <button onClick={sendOrder} >Done</button>
        </section>
    </main>
   </div>
 
  )

  
}

export default CashierScreen;