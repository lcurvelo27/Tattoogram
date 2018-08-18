import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import images from '../FakeDb/mock-image-data'
import style from './HomeStyle'
import ImageView from '../ImageView/ImageView';
const { imageGridStyle } = style

class Home extends Component{
    constructor(props){
        super (props)

            this.state = {
                imageSelected: null
            }  
        }

    
    updateImage(image) {
        this.setState({
            imageSelected: image
        },() => console.log('image selected', this.state.imageSelected))
    }

    goBack() {
        this.setState({
            imageSelected: null
        })
    }

    
    render(){
        
        let imageGrid = images.map((image, i) =>{
            return(
                <div key={i}>
                    <img src={image.url} value={image.id} alt='image' height='300' onClick={() => this.updateImage(image)}/>
                </div>
            )
        })
        
        return(
            <div>
                <Navbar />
                <div style={imageGridStyle}>
                    { !this.state.imageSelected ? imageGrid : 
                    <div>
                        <i className="fas fa-times" onClick={() => this.goBack()}></i>
                        <ImageView image={this.state.imageSelected} /> 
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Home