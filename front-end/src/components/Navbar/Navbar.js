import React from 'react'
import style from './NavbarStyle'
import Radium from 'radium'
import { Link } from 'react-router-dom'
const { underline, textDecoration, container, buttonsContainer } = style

let Navbar = () => {
    return(
        <div style = {container}>
            <div>
                <Link to='/' style={textDecoration} key='home'><p style={underline} key='1'>Home</p></Link>
            </div>
            <div style = { buttonsContainer }>
                <Link to='/search' style={textDecoration} key='search'><p style={underline} key='2'>Search</p></Link>
                <p>Login</p>
            </div>
        </div>
    )
}

Navbar = Radium(Navbar)

export default Navbar