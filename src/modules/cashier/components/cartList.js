import Product from '../components/item';

const CartList = ({ cartItems, setCartItems }) => {


    const calculeTotal = cartItems.reduce(
        (sum, i) => sum + Math.round(i.price * i.qty),
        0
    );

    return (
        <div>
            <table className='tableComponent' >
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length === 0 ? (<tr><th colSpan='4' style={{ "padding": "100px" }}> No hay productos agregados al carrito todavia...</th></tr>) : (cartItems.map((product => <Product key={product._id} product={product} cartItems={cartItems} setCartItems={setCartItems} />)))}

                </tbody>
                <tr>
                    <th colSpan='3'>TOTAL </th>
                    <th>${calculeTotal}</th>
                </tr>

            </table>

        </div>
    );
};
export default CartList;