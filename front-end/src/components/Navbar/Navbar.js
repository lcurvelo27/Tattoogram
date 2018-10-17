import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { logoContainer, logo, underline, textDecoration, container, buttonsContainer } from './NavbarStyle'

let Navbar = () => {
    let innerWidth = window.innerWidth
    return(
        <div className={container}>
            <div className={logoContainer}>
                <MediaQuery query='(max-width: 576px)'>
                    <Link to='/' className={textDecoration} key='home'><i className="far fa-newspaper"></i></Link>
                </MediaQuery>
                <MediaQuery query='(min-width: 576px)'>
                    <Link to='/' className={textDecoration} key='home'><p key='1'><i className="far fa-newspaper"></i>TattooGram</p></Link>
                </MediaQuery>
            </div>
            <div className={ buttonsContainer }>
                <MediaQuery query='(max-width: 576px)'>
                    <Link to='/search' key='search'><i className="fas fa-search"></i></Link>
                </MediaQuery> 
                <MediaQuery query='(min-width: 576px)'>
                    <Link to='/search' className={textDecoration} key='search'><p className={underline} key='2'>Search</p></Link>
                </MediaQuery>
            </div>
        </div>
    )
}

export default Navbar