// Home Style 

import { css } from 'emotion'

export const imageStyling = css({
    width: '50%',
    maxHeight: '500px'
})

export const portfolioShowcase = css({
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

export const splashContainer = css({
    height: '70vh',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
})

export const splash = css({
    fontFamily: 'Major Mono Display',
    fontSize: '100px',
    borderBottom: '10px solid black'
})

export const featuredArtistContainer = css({
    display: 'flex', 
    marginBottom: '150px',
    margin: 'auto',
    justifyContent: 'space-between'
})

export const featuredArtistInfoContainer = css({
    width: '50%',
    boxSizing: 'border-box',
    display: 'flex', 
    flexDirection: 'column', 
    fontFamily: 'Poppins',
    padding: '55px',
    textAlign: 'left'
})

export const title = css({
    fontFamily: 'Poppins',
    fontSize: '3rem',
    textAlign: 'left',
    fontWeight: '100'
})