import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import style from './ProfileStyle'
import Gallery from 'react-grid-gallery'
import Scroll from 'react-scroll'
import { getUserAll } from '../../utils/api'
const { navigationProfile, navigationButtons, navigationContainer, imageGrid , wrapper, container, contentContainer, contentBox, navigationBar } = style
  
let Link = Scroll.Link;
let DirectLink = Scroll.DirectLink;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;
const styles = {
  fontFamily: 'poppins',
  textAlign: 'center',
};

class Profile extends Component { 
    constructor(props){
        super(props)

        this.state = {
            user: null,
            gallery: [],
            workInfo: null
        }
    }

    componentDidMount() {
        let username = this.props.match.params.username
        getUserAll(username).then(response => {
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
                workInfo: response.work[0]
            })
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
            <div style = {wrapper}>
                <Navbar />
                {
                this.state.user ? 
                <div style = {container}>
                    <div style={navigationContainer}>
                        <div style={navigationProfile}>
                            <img src={ this.state.user.profilepicture ? this.state.user.profilepicture 
                                : 
                                require('../Images/default-user-image.png')} 
                                alt="profile image" 
                                height="100"
                                width="100"
                                style={{borderRadius: '100%'}}
                                />
                                <p>Username: {this.state.user.username}</p>
                                <p>First Name: {this.state.user.firstname}</p>
                                <p>Last Name: {this.state.user.lastname}</p>
                            </div>
                            <div style={navigationButtons}>
                                <Link activeClass='active' to='portfolio' spy={true} smooth={true} duration={250}>Portfolio</Link> 
                                <Link activeClass='active' to='about' spy={true} smooth={true} duration={250}>About</Link> 
                                <Link activeClass='active' to='contact' spy={true} smooth={true} duration={250}>Contact</Link> 
                            </div>
                    </div>
                        <div style={contentContainer}>
                                <Element name='portfolio'>
                                    <h2>Portfolio</h2>  
                                </Element>
                                <div style={imageGrid}>                                    
                                    <Gallery images={this.state.gallery} backdropClosesModal={true} rowHeight={300}/>
                                </div> 
                                <Element name='about' style={{marginTop: '100px'}}>
                                    <h2>About</h2>
                                    <p>{this.state.workInfo.about}</p>
                                </Element>
                                <Element name='contact' style={{marginTop: '100px'}}>
                                    <h2>Contact Info</h2>
                                    <p>Email Address: Email</p>
                                    <p>Phone Number: +1 801-830-2972</p>
                                    <p>Address: 1882 ashley valley lane, Sandy. UT</p>
                                    <img src='https://maps.googleapis.com/maps/api/staticmap?center=Sandy,UT&markers=size:mid|1882+ashley+valley+lane,sandy,ut&zoom=15&size=300x300&key=AIzaSyCSLFENvVixOGW_2gx7JyWKdOKf2ToBxhw' alt=""/>
                                </Element>
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
