import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import { getAllUsers } from '../../utils/api'
import { Link } from 'react-router-dom'
import { tileImagesStyle ,tileInfo, splashTitle, imageContainer, imagesContainer, imageStyle, searchContainer, tile, wrapper } from './SearchStyle'

const TileImages = (props) => {
    let images = props.images.splice(0, 6).map(image =>{
        return(
            <div>
                <img src={image.url} alt="image" height='150'/>
            </div>
        )
    })
    return images 
}

const UserTiles = (props) => {
    let userTiles = props.users.map(user => {
        return(
            <Link to={`/profile/${user.username}`}>
                <div className={tile} key={user.username}>
                        <img src={ user.profilepicture ? user.profilepicture : require('../Images/default-user-image.png')} alt='user' height='70' width='70' style={{borderRadius: '100%'}}/>
                    <div className={tileInfo}>
                        <h3 className='info'>{user.firstname} {user.lastname}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.</p>
                    </div>
                    <div className={tileImagesStyle}>
                        <TileImages images = {user.url} />
                    </div>
                </div>
            </ Link>
        )})   
    return userTiles
}


class Search extends Component{ 
    constructor(props){
        super(props)
        this.hairstyle = React.createRef()
        this.tattoo = React.createRef()
        this.state = {
            users: []
        }
    }
    

    componentDidMount(){
        getAllUsers().then(response =>{
            let newState = response
            this.setState({
                users: newState
            }, () => console.log(this.state))
        })
    }

    render(){
        return(
            <div className={wrapper}>
                <Navbar />
                <div className={imagesContainer}>
                    <div className={imageContainer} ref={this.tattoo} onClick={() => this.tattoo.current.focus()} tabIndex='0'>
                        <img src={require('../../utils/images/pexels-photo-1249214.jpeg')} className={imageStyle} alt="tattoo"/>
                        <h3 className={splashTitle}>Tattoos</h3>
                    </div>
                    <div className={imageContainer} ref={this.hairstyle} onClick={() => this.hairstyle.current.focus()} tabIndex='0'>
                        <img src={require('../../utils/images/pexels-photo-995300.jpeg')} className={imageStyle} alt="tattoo" />
                        <h3 className={splashTitle}>HairStyle</h3>
                    </div>                    
                </div>
                <div className={searchContainer}>
                    {this.state.users ? 
                    <UserTiles users={this.state.users} />
                    :
                    'loading'
                }
                </div>
            </div>
        )
    }
}

export default Search