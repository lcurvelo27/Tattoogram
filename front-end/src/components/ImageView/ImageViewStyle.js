// Image View Style
import { css } from 'emotion'

export const contentContainer = css({
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    fontFamily: 'poppins'
})

export const container = css({
    width: '50%', 
    padding: '30px', 
    backgroundColor: 'white', 
    margin: 'auto', 
    marginTop: '10px'
})

export const artistContainer = css({
    display:'flex', 
    width: '50%', 
    justifyContent: 'space-around',
    fontFamily: 'poppins',
    letterSpacing: '2px'
})

export const imageSize = css({
    height: '500px',
    '@media (max-width: 576px)': {
        height: '300px'
    }
})