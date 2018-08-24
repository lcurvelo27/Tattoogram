// Home Style 

const imageGridStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    backgroundColor: '#F7F7F7'
}

const imageStyle = {
    borderRadius: '10%',
    marginLeft: '5px',
    marginRight: '5px',
    position: 'relative',
    top: 0,
    transition: 'top ease 0.2s',
    ':hover': {
        boxShadow: '0.5px 0.5px 0.5px 0.5px #74735E',
        top: '-2px'
    }
}

const iconStyle = {
    position: 'relative', 
    left: '50%', 
    fontSize: '1.5rem'
}

module.exports = {
    iconStyle: iconStyle,
    imageStyle: imageStyle,
    imageGridStyle: imageGridStyle
}