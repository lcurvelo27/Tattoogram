// Navbar
import { css } from 'emotion'


export const container = css({
    width: '100%',
    position: 'sticky',
    marginBottom:'100px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    boxSizing: 'border-box',
    fontFamily : 'Poppins',
    'z-index': 1,
    top: 0
})

export const buttonsContainer = css({
    display: 'flex',
    width: '200px',
    justifyContent: 'space-around',
    textDecoration: 'none',
    fontSize: '2rem'
})

export const textDecoration = css({
    textDecoration: 'none',
    color: 'black',
    ':hover': {
        textDecoration: 'underline'
    },
    
})

export const underline = css({
    textDecoration: 'none',
    color: 'black',
    fontSize: '2rem',
    marginBottom: 0,
    transition: 'all 0.4s ease',
    ':hover': {
        color: '#5E3838',
        textDecoration: 'underline'
    }
})
