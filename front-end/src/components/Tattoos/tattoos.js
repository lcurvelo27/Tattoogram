import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import ImageView from '../ImageView/ImageView';
import Modal from '@material-ui/core/Modal'
import MediaQuery from 'react-responsive';
import { imageGridStyle } from './tattoosStyle';
import { loadContent } from '../../utils/api';
import { GridListTile, GridList } from '@material-ui/core';
let newPosts = loadContent()

  function gridGenerator(imagesArray, onClickFunction){
    let images = imagesArray.map(image => {
        return <img src={image.url} key={image.id} value={image.id} alt='image' onClick={() => onClickFunction(image)}/>
    })
    let i = 0
    let imageWidhtBasedOnColumns = [3, 2, 1, 4, 2, 3]
    let widthIndex = 0
    let output = []
    while(i < images.length){
      output.push(
        <GridListTile cols={imageWidhtBasedOnColumns[widthIndex]}>
          { images[i] }
        </GridListTile>
      )
      i++
      if(widthIndex == imageWidhtBasedOnColumns.length - 1){
        widthIndex = 0
      }
      else{
        widthIndex++
      }
    }
    return output
  }
  

const MobileGrid = (props) => {
     return props.images.map(image => {
        return(
            <div>
                <ImageView image={image} />
            </div> 
        )
})}



class Tattoos extends Component{
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
                    setTimeout(this.loadPosts, 1000)
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
        const { images, loading, modal, imageSelected } = this.state
        let gridTiles = gridGenerator(images, this.selectImage)
        return(
            <div>
                <Navbar />
                    { !loading ? 
                        <div className={ imageGridStyle } id='container'>
                            <MediaQuery query='(max-width: 576px)'>
                                <MobileGrid images={ images }/>
                            </MediaQuery>
                            <MediaQuery query='(min-width: 576px)'>
                                <GridList cols={10} spacing={15} style = {{width: '90%', margin: 'auto'}}>
                                    { gridTiles }
                                </GridList>
                            </MediaQuery>
                        </div>
                        :
                        'loading'
                    }
                    <Modal open={ modal } disableAutoFocus={true} onBackdropClick={() => this.close()}>
                        <ImageView image={ imageSelected }/> 
                    </Modal>
            </div>
        )
    }
}


export default Tattoos