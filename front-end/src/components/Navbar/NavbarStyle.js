// Navbar
import { css } from 'emotion'


export const container = css({
    width: '100%',
    position: 'sticky',
    backgroundColor: '#570000',
    opacity: 0.5,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    boxSizing: 'border-box',
    fontFamily : 'Poppins',
    'z-index': 1,
    height: '60px',
    top: 0
})

export const buttonsContainer = css({
    display: 'flex',
    width: '200px',
    justifyContent: 'space-around',
    textDecoration: 'none',
    fontSize: '2rem',
    '@media (max-width: 576px)': {
        width: '100px'
    }
})

export const textDecoration = css({
    textDecoration: 'none',
    color: '#DEDEDE',
    margin: 0
})

export const logoContainer = css({
    fontSize: '1.5rem',
    '@media (max-width: 576px)': {
        marginLeft: '15px'
    }
})

export const underline = css({
    textDecoration: 'none',
    color: '#DEDEDE',
    fontSize: '1.5rem',
    margin: 0,
    transition: 'all 0.4s ease',
    ':hover': {
        color: '#5E3838',
        textDecoration: 'underline'
    }
})
