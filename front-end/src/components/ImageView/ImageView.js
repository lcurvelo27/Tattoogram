import React, { Component } from 'react';
import { getImageView } from '../../utils/api'


class ImageView extends Component{
    state = {
        image: this.props.image,
        artist: null
    }

    componentDidMount() {
        getImageView(this.state.image.artistid).then(response => {
            this.setState({
                artist: response[0]
            })
        })
    }
    
    render(){

    return(
            <div>
                { 
                this.state.artist ?
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                    <img src={this.state.image.url} alt='image' height='500'/>
                    <p>{this.state.image.description}</p>
                    <div style={{display:'flex', width: '100%', justifyContent: 'flex-start'}}>
                        <img src={this.state.artist.profilepicture} alt="Profile Image" height="50" style={{borderRadius: '100%'}}/>
                        <p>Artist: <a href={`http://localhost:3000/#/profile/${this.state.artist.username}`}>{this.state.artist.firstname} {this.state.artist.lastname}</a></p> 
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