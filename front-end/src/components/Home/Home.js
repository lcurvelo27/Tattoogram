import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import ImageView from '../ImageView/ImageView';
import Modal from '@material-ui/core/Modal'
import MediaQuery from 'react-responsive'
import { homeImageGrid, loadContent } from '../../utils/api'
import { iconStyle, imageStyle, imageGridStyle } from './HomeStyle'
let newPosts = loadContent()


const ImageGrid = (props) => {
    var grid = props.images.map((image, i) =>{
        return(
            <div key={i} style={{marginTop: i % 2 == 0 ? '50px' : '100px'}}>
                <img src={image.url} key={image.id} value={image.id} className={imageStyle} alt='image' onClick={() => props.selectImage(image)}/>
            </div>
            )
        })



    return grid
}

const MobileGrid = (props) => {
     return props.images.map(image => {
        return(
            <div>
                <ImageView image={image} />
            </div> 
        )
})}


class Home extends Component{
    constructor(props){
        super (props)

            this.state = {
                images: [],
                imageSelected: null,
                modal: false,
                loading: true
            }  

            window.onscroll = () => {      
                // Checks that the page has scrolled to the bottom
                if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
                ) {
                    console.log(this)
                    setTimeout(this.loadPosts, 3000)
                }
            };
        }
        
    componentDidMount() {
        newPosts().then(response => {
            let newState; 
            newState = response
            this.setState({
                images: newState,
                loading: false
            })
        })
    }

    loadPosts = () => {
        return newPosts().then(response => {
            let newScrollState;
            newScrollState = response
            this.setState({
                images: newScrollState
            })
        })
    }

    selectImage = (image) => {
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
        
        return(
            <div>
                <Navbar />
                    { !this.state.loading ? 
                        <div className={imageGridStyle}>
                            <MediaQuery query='(max-width: 576px)'>
                                <MobileGrid images={this.state.images}/>
                            </MediaQuery>
                            <MediaQuery query='(min-width: 576px)'>
                                <ImageGrid images={this.state.images} selectImage={this.selectImage}/>
                            </MediaQuery>
                        </div>
                        :
                        'loading'
                    }
                    <Modal open={this.state.modal} disableAutoFocus={true} onBackdropClick={() => this.close()}>
                        <ImageView image={this.state.imageSelected}/> 
                    </Modal>
            </div>
        )
    }
}


export default Home