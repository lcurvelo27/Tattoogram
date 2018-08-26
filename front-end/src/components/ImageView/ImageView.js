import React, { Component } from 'react';
import { getUserById } from '../../utils/api'
import style from './ImageViewStyle'
const { iconStyle, container, contentContainer, artistContainer } = style


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
            <div style={container}>
                { 
                this.state.artist ?
                <div style={contentContainer} >
                    <img src={this.state.image.url} alt='image' height='500'/>
                    <p>{this.state.image.description}</p>
                    <div style={artistContainer}>
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