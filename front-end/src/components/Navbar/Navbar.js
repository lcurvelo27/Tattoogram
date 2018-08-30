import React from 'react'
import { Link } from 'react-router-dom'
import { underline, textDecoration, container, buttonsContainer } from './NavbarStyle'

let Navbar = () => {
    return(
        <div className={container}>
            <div>
                <Link to='/' className={textDecoration} key='home'><p className={underline} key='1'>Home</p></Link>
            </div>
            <div className={ buttonsContainer }>
                <Link to='/search' className={textDecoration} key='search'><p className={underline} key='2'>Search</p></Link>
            </div>
        </div>
    )
}

export default Navbar