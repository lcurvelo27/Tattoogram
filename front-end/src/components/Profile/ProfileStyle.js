// PROFILE STYLE

const wrapper = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

const container = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}

const contentContainer = {
    width: '70%',
    border: '1px solid blue',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'poppins'
}

const navigationContainer = {
    width: '30%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px',
    boxSizing: 'border-box',
    fontFamily: 'poppins'
}

const navigationButtons = {
    ...navigationContainer,
    width: '100%',
    height: '20%',
    padding: 'none'
}

const contentBox = {
    display: 'flex',
    alignItems: 'center',
    width: '70%',
    border: '1px solid red',
    height: '100%'
}

const navigationProfile = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const imageGrid = {
    width: '90%',
    overflow: 'auto'
}

const imageStyle = {
    margin: '5px'
}

module.exports = {
    navigationProfile: navigationProfile,
    navigationButtons: navigationButtons,
    navigationContainer: navigationContainer,
    imageStyle: imageStyle,
    imageGrid: imageGrid,
    wrapper: wrapper,
    container: container,
    contentContainer: contentContainer,
    contentBox: contentBox
}