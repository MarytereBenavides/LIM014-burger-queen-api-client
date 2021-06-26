import Product from '../components/item';

const CartList = ({ cartItems, setCartItems, handleAddItemToCart, handleRemoveItemFromCart }) => {


    const calculeTotal = cartItems.reduce(
        (sum,i) => sum +  Math.round(i.price*i.qty),
        0
    );

    return(
        <div>
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
                   
               
           
                {cartItems.length === 0 ? (<tr><th colSpan='4'> No hay productos agregados al carrito todavia...</th></tr>) : (cartItems.map((product => <tr><th colSpan='4'>  <Product key={product._id}  product={product} cartItems={cartItems} setCartItems={setCartItems} /></th></tr> )))}
    
               </tbody>
               <tr>
            <th  colSpan='3'>TOTAL </th>
            <th>{calculeTotal}</th>
            </tr>
         
            </table>
        
        </div>
    );
};
export default CartList;