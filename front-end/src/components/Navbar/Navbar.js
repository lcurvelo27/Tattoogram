import React from 'react'
import style from './NavbarStyle'
import { Link } from 'react-router-dom'
const { container, buttonsContainer } = style

const Navbar = () => {
    return(
        <div style = {container}>
            <div>
                <Link to='/'><p>Home</p></Link>
            </div>
            <div style = { buttonsContainer }>
                <Link to='/search'><p>Search</p></Link>
                <p>Login</p>
            </div>
        </div>
    )
}

export default Navbar