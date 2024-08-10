import React, { useReducer, useEffect, useState, useContext } from 'react';

import Product from '../components/item';
import CartList from '../components/cartList';
import { getProducts } from '../../../services/productsService';
import { createOrder } from '../../../services/orderService';
import AuthContex from '../../auth/context/authContext'
import { Timestamp } from 'firebase/firestore';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}


function CashierScreen() {

    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [showResults, setShowResults] = React.useState(false)
    const [formData, setFormData] = useReducer(formReducer, {});
    const showButtons = () => setShowResults(true)
    const hideButtons = () => setShowResults(false)
    const { usuId } = useContext(AuthContex)

    useEffect(() => {
        getProducts()
            .then((resp) => {
                console.log('hola', resp)
                setProducts(resp)
                const breakfast = resp.filter(e => e.type === "BREAKFAST");
                setFilterProducts(breakfast);
            })
    }, [])

    function productsType(option) {
        // eslint-disable-next-line default-case
        switch (option) {
            case "BREAKFAST":
                const breakfast = products.filter(e => e.type === option);
                setFilterProducts(breakfast);
                hideButtons();
                break;
            case "LUNCHDINNER/HAMBURGERS":
                const hamburgers = products.filter(e => e.type === option);
                setFilterProducts(hamburgers);
                break;
            case "LUNCHDINNER/SNACKS":
                const snacks = products.filter(e => e.type === option);
                setFilterProducts(snacks);
                break;
            case "LUNCHDINNER/DRINKS":
                const drinks = products.filter(e => e.type === option);
                setFilterProducts(drinks);
                break;
        }
    }

    const onkeyup = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
        console.log(formData)
    }



    const sendOrder = async () => {
        if (cartItems.filter((e) => e._id).length > 0) {
            const products = cartItems.map((e) => {
                return { productId: e._id, qty: e.qty, name: e.name };

            })
            const client = formData.name;
            const order = {
                _id: Math.random().toString(36),
                status: "pending",
                userId: usuId,
                client: client,
                products: products,
                dateEntry: Timestamp.fromDate(new Date()),
            }
            setOrders(order);
            console.log('linea 97', order)
            await createOrder(order)
            alert('orden enviada')
            setCartItems([]);
            return orders
        } else {
            alert('La orden no se envio')
        }
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
                {/* <HeaderSecundary /> */}
                <main className='boxMain' >
                    <section className='orderButton'>
                        <section>
                            <div className='buttonOrder'  >
                                <div>
                                    <label>CLIENT :</label>
                                    <input maxLength='19' name="name" onChange={onkeyup} required />
                                </div>
                                <div className='boxButtonMenu'>
                                    <button className='buttonMenu' type="submit" onClick={() => { productsType('BREAKFAST') }} >BREAKFAST</button>
                                    <button className='buttonMenu' type="submit" id="buttonDinner" onClick={showButtons} >LUNCH / DINNER</button>
                                </div>
                                {showResults ? <Results /> : null}
                            </div>
                        </section>
                        <section>
                            <div className="" id="">
                                {filterProducts.map((product) => (
                                    <Product
                                        key={product._id}
                                        product={product}
                                        cartItems={cartItems}
                                        setCartItems={setCartItems}
                                        products={products} />
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

                        <button onClick={sendOrder} className="buttonAdd form-btnLogin borderRadiousNone">Done</button>
                    </section>
                </main>
            </div>

        )


}

export default CashierScreen;