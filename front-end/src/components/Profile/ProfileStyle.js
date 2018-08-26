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
    height: '100%'
}

const contentContainer = {
    width: '70%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'poppins',
    overflow: 'auto'
}

const navigationContainer = {
    width: '30%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px',
    boxSizing: 'border-box',
    fontFamily: 'poppins',
    position: 'sticky',
    top: 0,
    backgroundColor: '#F7F7F7'
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
    height: '100%'
}

const navigationProfile = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const imageGrid = {
    width: 'inherit',
    padding: '50px',
    height: '50vh',
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