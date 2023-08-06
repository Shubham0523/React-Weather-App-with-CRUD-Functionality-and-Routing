import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
    return (
    <div className='container'>
        <div className="nav-menu"> 
        <h1>Home Page</h1>
        <div className="routes">
            <div className='crud-route'>
                <NavLink to='crud'>Crud</NavLink>
            </div>
            <div className='weather-route'>
                <NavLink to='weather'>Weather</NavLink>
            </div>
            <div className='login-route'>
                <NavLink to='login'>Login</NavLink>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Home