import '../../../scss/cashier.scss';

export default function Product({ product, cartItems, setCartItems, products }) {
    const { name, price, image, _id, qty } = product

    const handleAddItemToCart = _id => {
        const product = products.find((product) => product._id === _id)
        if (cartItems.filter((product) => product._id === _id).length > 0) {
            product.qty++;
            setCartItems((prevState) => [...prevState, product]);
            const orderList = [...new Set(cartItems)];
            return setCartItems(orderList);
        } else {
            product.qty = 1;
            return setCartItems((prevState) => [...prevState, product]);
        }

    }


    const handleRemoveQty = _id => {
        const productsAll = cartItems.filter((product) => product._id !== _id)
        // setCartItems( (prev)=> ({...prev, product: productsAll}))
        setCartItems(productsAll)
    }

    const handleReduceQty = _id => {
        const product = cartItems.find((product) => product._id === _id)
        product.qty--;
        if (product.qty > 0) {
            setCartItems((prevState) => [...prevState, product]);
            const orderList = [...new Set(cartItems)];
            return setCartItems(orderList);

        } else {
            const productsAll = cartItems.filter((product) => product._id !== _id)
            setCartItems(productsAll)
        }




    }

    const handlePlusQty = _id => {
        const product = cartItems.find((product) => product._id === _id)
        product.qty++;
        setCartItems((prevState) => [...prevState, product]);
        const orderList = [...new Set(cartItems)];
        return setCartItems(orderList);
    }


    return console.log(product.qty) || (
        <>
            {products ? (
                (
                    <div key={_id} className='productCashier'>
                        <img src={image} width='200px' height='200px' alt='logo' className='imageCashier' />
                        <div className='buttonProduct'>
                            <div className='productName'>  <div>
                                <p>{name}</p>
                            </div>
                                <div>
                                    <p>${price}</p>
                                </div>
                            </div> <button type='button' className='buttonAdd form-btnLogin ' onClick={() => handleAddItemToCart(_id)}>ADD</button>
                        </div>

                    </div>
                )
            ) : (
                <tr key={_id} >
                    <th style={{ "padding-top": "20px", "padding-bottom": "20px" }}>{name}</th>
                    <th style={{ "padding-top": "20px", "padding-bottom": "20px" }}>
                        <button onClick={() => handleReduceQty(_id)} >-</button>
                        {"  " + qty + "  "}
                        <button onClick={() => handlePlusQty(_id)} >+</button>
                    </th>
                    <th style={{ "padding-top": "20px", "padding-bottom": "20px" }}>{price}</th>
                    <th style={{ "padding-top": "20px", "padding-bottom": "20px" }}>{product.qty * price} </th>
                    <th style={{ "padding-top": "20px", "padding-bottom": "20px" }}>
                        <button onClick={() => handleRemoveQty(_id)} >trash</button>
                    </th>
                </tr>

            )}

        </>
    )
}