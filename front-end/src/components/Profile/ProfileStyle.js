// PROFILE STYLE
import { css } from 'emotion'

export const wrapper = css({
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
})

export const container = css({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: '100%'
})

export const contentContainer = css({
    width: '70%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'poppins',
    overflow: 'auto'
})

export const navigationContainer = css({
    width: '30%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    boxSizing: 'border-box',
    fontFamily: 'poppins',
    position: 'sticky',
    top: 0,
    backgroundColor: '#F7F7F7'
})

export const navigationButtonsContainer = css({
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '400px',
    textAlign: 'left',
    fontSize: '1.2rem',
    marginLeft: '20px',
    height: '10%',
    padding: 'none',
})

export const navigationButtons = css({
    width: '100px',
    fontSize: '1rem',
    textAlign: 'left',
    backgroundColor: 'inherit',
    border: 'none',
    transition: 'all 0.2s ease',
    ':hover':{
        color: 'gray',
        borderLeft: '3px solid black',
        cursor: 'pointer'
    },
    ':focus': {
        outline: 0,
        borderLeft: '3px solid black'
    }
})

export const contentBox = css({
    display: 'flex',
    alignItems: 'center',
    width: '70%',
    height: '100%'
})

export const navigationProfile = css({
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
})

export const imageGrid = css({
    width: '90%',
    padding: '50px',
    height: '50vh',
    overflow: 'auto'
})

export const imageStyle = css({
    margin: '5px'
})

