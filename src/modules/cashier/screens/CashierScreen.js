import React, { useReducer, useEffect, useState} from 'react';
import '../../../scss/cashier.scss';
import imgMenu from '../../../assets/images/breakfast/amCoffee.png';
import HeaderSecundary from '../../../environments/headerSecundary';
import {getProducts} from '../../../services/products.js';


const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}


function CashierScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then ((resp) => {
            console.log(resp)
            setProducts(resp)
        })
    
        // return () => {
        //     // cleanup
        // }
    }, [])



  const [formData, setFormData] = useReducer(formReducer, {});

  const onkeyup = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return console.log(products) ||

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
                    <button className='buttonMenu' type="submit">BREAKFAST</button>
                    <button className='buttonMenu' type="submit">LUNCH / DINNER</button>
                </div>
                <div>
                    <button className='buttonSubMenu' type="submit">HAMBURGERS</button>
                    <button className='buttonSubMenu' type="submit">SNACKS</button>                 
                    <button className='buttonSubMenu' type="submit">DRINKS</button>
                </div>           
            </div>
            </section>
            <section>
                <div>
                    {products.map((product) => (
                        <div key={product._id}>
                        <img src={product.image} width='200px' height='200px' alt='logo' />
                            <div>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <button className='buttonAdd' type="submit">ADD</button>
                            </div>
                    </div>
                    ))}
                    <div>
                        <img src={imgMenu} width='200px' height='200px' alt='logo' />
                            <div>
                                <p>American Coffee</p>
                                <p>$ 5.00</p>
                                <button className='buttonAdd' type="submit">ADD</button>
                            </div>
                    </div>
                    <div>
                    <img src={imgMenu} width='200px' height='200px' alt='logo' />
                            <div>
                                <p>American Coffee</p>
                                <p>$ 5.00</p>
                                <button className='buttonAdd' type="submit">ADD</button>
                            </div>            
                    </div>
                    <div>        
                        <img src={imgMenu} width='200px' height='200px' alt='logo' />
                            <div>
                                <p>American Coffee</p>
                                <p>$ 5.00</p>
                                <button className='buttonAdd' type="submit">ADD</button>
                            </div>
                    </div>
            </div>
            </section>

            </section>
        <section className='orderDetail'>
            <ul> 
            {Object.entries(formData).map(([name, value]) => (
                <p key={name}>{value.toString()}</p>
            ))}
            </ul>
            <table  className='tableComponent' > 
                <thead>
                    <tr>
                        <th>product</th>
                        <th>amount</th>
                        <th>price</th>
                        <th>subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Glass of soda (500ml)</th>
                        <th>
                            <button>-</button>
                            1
                            <button>+</button>
                        </th>
                        <th>$7</th>
                        <th>$14 </th>
                    </tr>
                </tbody>
               
                
            </table>
            <div>
            <span>TOTAL </span>
            <span> $29</span>
            </div>
    
            <button>Done</button>
        </section>
    </main>
   </div>
   
  )
}

export default CashierScreen;