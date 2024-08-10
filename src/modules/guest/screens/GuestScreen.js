import React from 'react'
import { Link } from 'react-router-dom'
const GuestScreen = () => {
    return (
        <div className='box'>
            <h1 className='titleCenter'>
                Bienvenido al Restaurante Lydemar
            </h1>
            <img src="https://cdn.prod.website-files.com/6423e8cf97045d0ac6e9ffb9/6565d9491a89f4b7b7915b3e_tipos%20de%20restaurante.jpg" alt="Logo-Lydemar" border="0" className='imgCenter' />
            <Link to={'/auth'} className="form-btnLogin titleCenter" >INICIAR SESIÓN</Link>
        </div>
    )
}

export default GuestScreen
