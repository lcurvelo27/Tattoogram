import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import ImageView from '../ImageView/ImageView';
import Modal from '@material-ui/core/Modal'
import { homeImageGrid } from '../../utils/api'
import { iconStyle, imageStyle, imageGridStyle } from './HomeStyle'

class Home extends Component{
    constructor(props){
        super (props)

            this.state = {
                images: [],
                imageSelected: null,
                modal: false
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
            imageSelected: image,
            modal: true
        },() => console.log('image selected', this.state.imageSelected))
    }

    close() {
        this.setState(currentState => {
            return {
                imageSelected: null,
                modal: !currentState.modal
            }
        })
    }

    
    render(){
        
        let imageGrid = this.state.images.map((image, i) =>{
            return(
                <div key={i} style={{marginTop: i % 2 == 0 ? '50px' : '100px'}}>
                    <img src={image.url} key={image.id} value={image.id} className={imageStyle} alt='image' height='300' onClick={() => this.selectImage(image)}/>
                </div>
            )
        })
        
        return(
            <div>
                <Navbar />
                <div className={imageGridStyle}>
                    {imageGrid}
                    <Modal open={this.state.modal} disableAutoFocus={true} onBackdropClick={() => this.close()}>
                        <ImageView image={this.state.imageSelected}/> 
                    </Modal>
                </div>
            </div>
        )
    }
}


export default Home