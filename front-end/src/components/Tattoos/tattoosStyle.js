// Home Style 

import { css } from 'emotion'


export const imageGridStyle = css({
    display: 'flex',
    width: '100%',
    height: '150vh',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    backgroundColor: '#F7F7F7'
})

export const imageStyle = css({
    marginLeft: '5px',
    marginRight: '5px',
    position: 'relative',
    top: 0,
    transition: 'top ease 0.2s',
    '@media (max-width: 576px)': {
        height: '150'
    }
})

export const iconStyle = css({
    position: 'relative', 
    left: '50%', 
    fontSize: '1.5rem'
})
