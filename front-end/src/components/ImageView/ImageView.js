import React, { Component } from 'react';
import { getUserById } from '../../utils/api'
import { iconStyle, container, contentContainer, artistContainer } from './ImageViewStyle'


class ImageView extends Component{
    state = {
        image: this.props.image,
        artist: null
    }

    componentDidMount() {
        getUserById(this.state.image.artistid).then(response => {
            this.setState({
                artist: response[0]
            })
        })
    }

    
    render(){

    return(
            <div className={container}>
                { 
                this.state.artist ?
                <div className={contentContainer} >
                    <img src={this.state.image.url} alt='image' height='500'/>
                    <p>{this.state.image.description}</p>
                    <div className={artistContainer}>
                        <p>By: <a href={`http://localhost:3000/#/profile/${this.state.artist.username}`} style={{textDecoration: 'none', color: 'black'}}>{this.state.artist.firstname} {this.state.artist.lastname}</a></p> 
                    </div>
                </div>
                :
                <p>Loading</p>
                }
            </div>
        )
    }
}


export default ImageView 