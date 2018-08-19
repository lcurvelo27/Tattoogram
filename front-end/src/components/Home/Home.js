import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import style from './HomeStyle'
import ImageView from '../ImageView/ImageView';
import { homeImageGrid } from '../../utils/api'
const { imageGridStyle } = style

class Home extends Component{
    constructor(props){
        super (props)

            this.state = {
                images: [],
                imageSelected: null
            }  
        }

    componentDidMount() {
        homeImageGrid().then(response => {
            this.setState({
                images: response
            })
        })
    }

    selectImage(image) {
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
        
        let imageGrid = this.state.images.map((image, i) =>{
            return(
                <div key={i}>
                    <img src={image.url} value={image.id} alt='image' height='300' onClick={() => this.selectImage(image)}/>
                </div>
            )
        })
        
        return(
            <div>
                <Navbar />
                <div style={imageGridStyle}>
                    { 
                    !this.state.imageSelected ? imageGrid : 
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