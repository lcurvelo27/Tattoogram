// Navbar
import { css } from 'emotion'


export const container = css({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    boxSizing: 'border-box',
    fontFamily : 'Poppins'
})

export const buttonsContainer = css({
    display: 'flex',
    width: '200px',
    justifyContent: 'space-around',
    textDecoration: 'none'
})

export const textDecoration = css({
    textDecoration: 'none',
    color: 'black',
    ':hover': {
        textDecoration: 'underline'
    }
})

export const underline = css({
    textDecoration: 'none',
    color: 'black',
    ':hover': {
        textDecoration: 'underline'
    }
})
