import { css } from 'emotion'

export const wrapper = css({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

export const searchContainer = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '85%',
    marginTop: '100px',
    '& a': {
        textDecoration: 'none',
        color: 'black'
    }
})

export const userTilesContainer = css({
    width: '100%'
})

export const tile = css({
    display: 'flex',
    alignContent: 'center', 
    alignItems:'center', 
    width: '100%',
    padding: '20px',
    opacity: '0.7',
    transition: 'opacity 0.2s ease',
    ':hover' : {
        opacity: '1'
    }
})

export const tileImagesStyle = css({
    display: 'flex',
    width: '100%'
})

export const tileInfo = css({
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    textAlign: 'left',
    marginLeft: '10px',
    fontFamily: 'poppins',
    '& p' : {
        marginTop: '0',        
        width: '60%',
        fontSize: '0.8rem'
    },
    '& .info': {
        fontWeight: 'light',
        marginBottom: '0'        
    }
})

export const filterImagesContainer = css({
    width: '100%',
    display: 'flex'
})

export const imageStyle = css({
    width: '100%',
    height: '60vh',
})

export const filterSingleImageContainer = css({
    width: '50%',
    height: '60vh',
    color: '#3E3B3B',
    filter: 'grayscale(100%)',
    transition: 'all 0.3s ease',
    ':hover, :focus':{
        color: 'white',
        filter: 'none',
        outline: 'none'
    }
})

export const splashTitle = css({
    position: 'relative',
    top: -115, 
    textAlign: 'left',
    fontSize: '3rem',
    marginLeft: '10px',
    fontFamily: 'poppins'
})
