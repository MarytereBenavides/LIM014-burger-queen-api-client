import React from 'react';
import '../../../scss/auth.scss';
import logo from '../../../assets/images/LogoBurger.png';

const AuthLoginScreen = () => {
 return (
     <div>
         <header>
             <img src={logo} width='973' height='191' alt='logo' />
         </header>
         <main>
            <form>
                <label>Username</label>
                <input type="email" placeholder='Enter gmail'></input>

                <label>Password</label>
                <input type="password" placeholder='***********'></input>
                <div>
                    <button className='buttonLogin' type="submit">Submit</button>
                </div>
            </form>
         </main>
     </div>
 )
}

export default AuthLoginScreen