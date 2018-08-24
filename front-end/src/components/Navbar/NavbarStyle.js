// Navbar

const container = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    boxSizing: 'border-box',
    fontFamily : 'Poppins'
}

const buttonsContainer = {
    display: 'flex',
    width: '200px',
    justifyContent: 'space-around',
    textDecoration: 'none'
}

const textDecoration = {
    textDecoration: 'none',
    color: 'black',
    ':hover': {
        textDecoration: 'underline'
    }
}

const underline = {
    textDecoration: 'none',
    color: 'black',
    ':hover': {
        textDecoration: 'underline'
    }
}

module.exports = {
    underline: underline,
    textDecoration: textDecoration,
    container: container,
    buttonsContainer: buttonsContainer
}