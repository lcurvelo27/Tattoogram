import React, { Component } from 'react';
import { getHomePageInfo, getUserImagesByID } from '../../utils/api';
import { imageStyling, portfolioShowcase, splash, splashContainer, featuredArtistContainer, featuredArtistInfoContainer, title } from './HomeStyle';
import Navbar from '../Navbar/Navbar';


function FeaturedArtistInfo(props){
    const { firstname, lastname, about, profilepicture } = props.featuredArtist
    return(
        <div className = { featuredArtistContainer }>
            <img src = { profilepicture } alt="" className={imageStyling}/>
            <div className = { featuredArtistInfoContainer }>
                <h2>{ firstname } { lastname }</h2>
                <h3>Bio:</h3>
                <p>{ about }</p>
            </div>
        </div>
    )
}

function PortfolioByFeaturedArtist(props){
    console.log(props.images.length)
    return props.images.splice(0, 3).map(image => {
        return (
            <div>
                <img src={image.url} style = {{width: '300px', maxHeight: '350px'}}/>
            </div>
            )
        }
    )
}

class Home extends Component{
    constructor(props){
        super (props)

            this.state = {
                featuredArtist: [],
                imagesLoading: true,
                loading: true
            }  
        }
        
        componentWillMount(){
            getHomePageInfo().then( response => {
                const newState = response[0]
                this.setState({
                    featuredArtist: newState,
                    loading: false
                })
            })            
        }

    render(){    
        const { loading, featuredArtist } = this.state    

        return(
            <div>
                <Navbar />
                <div style = {{width: '80%', margin: 'auto'}}>
                    <div className = { splashContainer }>
                        <h1 className = { splash }>Tattoogram</h1>
                    </div>
                    {
                        !loading ? 
                        <div>
                            <h1 className = { title }>Featured Artist</h1>
                            <FeaturedArtistInfo featuredArtist = { featuredArtist }/>
                            <h1 className = { title }>Work by { featuredArtist.firstname }</h1>
                            <div className = { portfolioShowcase }>
                                <PortfolioByFeaturedArtist images = { featuredArtist.images } />
                            </div>
                        </div>
                        :
                        <p>loading</p>
                    }
                </div>
            </div>
        )
    }
}


export default Home