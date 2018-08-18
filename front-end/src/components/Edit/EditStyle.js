const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%'
}

const menuContainer = {
    display: 'flex',
    width: '60%',
    border: '1px solid blue',
    height: '80vh'
}

const navigationMenu = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px',
    width: '30%',
    height: '100%'
}

const contentContainer = {
    width: '70%',
    height: '90%',
    border: '1px solid green'
}

const inputContainer = {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between'
}

const galleryContainer = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '90%',

    border: '1px solid red',
    height: '50%',
    overflow: 'auto',
    padding: '10px'
}

const buttonsContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '20%'
}


module.exports = {
    buttonsContainer: buttonsContainer,
    galleryContainer: galleryContainer,
    inputContainer: inputContainer,
    container: container,
    menuContainer: menuContainer,
    navigationMenu: navigationMenu,
    contentContainer: contentContainer 
}