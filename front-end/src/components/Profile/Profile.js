import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import Gallery from 'react-grid-gallery'
import Scroll from 'react-scroll'
import { getUserAll } from '../../utils/api'
import { navigationButtons, navigationProfile, navigationButtonsContainer, navigationContainer, imageGrid , wrapper, container, contentContainer, contentBox, navigationBar } from './ProfileStyle'
  
let Link = Scroll.Link;
let DirectLink = Scroll.DirectLink;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;


class Profile extends Component { 
    constructor(props){
        super(props)

        this.state = {
            user: null,
            gallery: [],
            workInfo: null,
            location: ''
        }
    }

    componentDidMount() {
        let username = this.props.match.params.username
        getUserAll(username).then(response => {
            let locationUri = response.work[0] ? encodeURI(response.work[0].location) : ''
            let galleryImages = response.images.map(image => {
                return {
                        src: image.url,
                        thumbnail: image.url,
                        thumbnailWidth: 500,
                        thumbnailHeight: 500                        
                }
            })
            this.setState({
                user: response.info[0],
                gallery: galleryImages,
                workInfo: response.work[0],
                location: locationUri
            }, () => console.log(this.state))
        })

        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
          });
      
          Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
          });
      
          scrollSpy.update();
    }

    scrollToTop = () => {
        scroll.scrollToTop();
      }
    
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }

    render() {

        return(
            <div className = {wrapper}>
                <Navbar />
                {
                this.state.user ? 
                <div className = {container}>
                    <div className={navigationContainer}>
                        <div className={navigationProfile}>
                            <img src={ this.state.user.profilepicture ? this.state.user.profilepicture 
                                : 
                                require('../Images/default-user-image.png')} 
                                alt="profile image" 
                                height="65"
                                width="65"
                                style={{borderRadius: '100%'}}
                                />
                                <div>
                                    <p className={{marginTop: 0, marginBottom: 0}}>Name: {`${this.state.user.firstname} ${this.state.user.lastname}`} </p>
                                    <p className={{marginTop: 20, marginBottom: 0}}>Username: {this.state.user.username}</p>
                                </div>
                            </div>
                            <div className={navigationButtonsContainer}>
                                <Link activeClass='active' to='portfolio' spy={true} smooth={true} duration={250}> <button className={navigationButtons} key='portfolio'>PORTFOLIO</button></Link> 
                                <Link activeClass='active' to='about' spy={true} smooth={true} duration={250}><button className={navigationButtons} key='about'>ABOUT</button></Link> 
                            </div>
                    </div>
                        <div className={contentContainer}>
                                { this.state.workInfo ? 
                                <div>
                                    <Element name='portfolio'>
                                        <h2>Portfolio</h2>  
                                    </Element>
                                    <div className={imageGrid}>                                    
                                        <Gallery images={this.state.gallery} backdropClosesModal={true} rowHeight={300}/>
                                    </div> 
                                    <Element name='about' className={{marginTop: '100px'}}>
                                        <h2>About</h2>
                                        <p>{this.state.workInfo.about}</p>
                                    </Element>
                                    <Element name='contact' className={{marginTop: '100px'}}>
                                        <h2>Contact Info</h2>
                                        <p>Email Address: {this.state.workInfo.email}</p>
                                        <p>Phone Number: +1 {this.state.workInfo.phonenumber}</p>
                                        <p>Address: {this.state.workInfo.location}</p>
                                        <img src={`https://maps.googleapis.com/maps/api/staticmap?markers=size:mid|${this.state.location}&zoom=15&size=300x300&key=AIzaSyCSLFENvVixOGW_2gx7JyWKdOKf2ToBxhw`} alt=""/>
                                    </Element>
                                </div>
                                    :
                                    <h3>Oops... It seems like the artist hasn't uploaded any content as of today. Check back tomorrow!</h3>
                                }
                        </div>
                    </div>
                :
                <p>Loading</p>
                }
            </div>
        )
    }
}

export default Profile
