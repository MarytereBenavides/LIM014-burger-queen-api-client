import '../../../scss/cashier.scss';

export default function Product({product, cartItems, setCartItems, products}) {
    const {name, price, image, _id, qty} = product

    const handleAddItemToCart = _id => {
        const product = products.find((product) => product._id === _id)
        if(cartItems.filter((product) => product._id === _id).length>0){
            product.qty++;
            setCartItems((prevState) => [...prevState,product]);
            const orderList = [...new Set(cartItems)];
            return setCartItems(orderList);
        }else{
            product.qty=1;
            return  setCartItems((prevState) => [...prevState,product]);
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
        if(product.qty > 0){
            setCartItems((prevState) => [...prevState,product]);
            const orderList = [...new Set(cartItems)];
            return setCartItems(orderList);

        }else{
            const productsAll = cartItems.filter((product) => product._id !== _id)
            setCartItems(productsAll)
        }
        



    }

    const handlePlusQty = _id => {
        const product = cartItems.find((product) => product._id === _id)
        product.qty++;
        setCartItems((prevState) => [...prevState,product]);
        const orderList = [...new Set(cartItems)];
        return setCartItems(orderList);
    }


    return console.log(product.qty) || (
        <div>
            {products ? (
                (
                    <div key={_id}> 
                        <img src={image} width='200px' height='200px' alt='logo' />
                    <div>
                        <p>{name}</p>
                    </div>
                    <div>
                    <p>${price}</p>
                    </div>
                    <button type='button' className='buttonAdd' onClick = {() => handleAddItemToCart(_id)}>ADD</button>
                    </div>
                )
            ):(
               <tr  key={_id}>
                        <th>{name}</th>
                        <th>
                            <button onClick = {() => handleReduceQty(_id)} >-</button>
                            {qty}
                            <button  onClick = {() => handlePlusQty(_id)} >+</button>
                        </th>
                        <th>{price}</th>
                        <th>{product.qty*price} </th>
                        <th>
                            <button onClick = {() => handleRemoveQty(_id)} >trash</button>
                        </th>
              </tr>
              
            )}
                           
        </div>
    )
}