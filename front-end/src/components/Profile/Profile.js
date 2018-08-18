import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import style from './ProfileStyle'
import users from '../FakeDb/mock-data'
import about from '../FakeDb/mock-data-about'
import images from '../FakeDb/mock-image-data'
import Gallery from 'react-grid-gallery'
const { navigationProfile, navigationButtons, navigationContainer, imageGrid , wrapper, container, contentContainer, contentBox, navigationBar } = style
let user = []
  

class Profile extends Component { 
    constructor(props){
        super(props)

        this.state = {
            selected: 'About',
            gallery: []
        }
    }

    componentDidMount() {
        let galleryImages = []
        images.map(image =>{
            galleryImages.push({
                src: image.url,
                thumbnail: image.url,
                thumbnailWidth: 300,
                thumbnailHeight: 300
            })
        })

        this.setState({
            gallery: galleryImages
        })
    }
    
    updateContent(value){
        this.setState({
            selected: value
        })
    }
    

    render() {

        user = users.filter(user => {
            return user.username === this.props.match.params.username
        })

        return(
            <div style = {wrapper}>
                <Navbar />
                <div style = {container}>
                    <div style={navigationContainer}>
                        <div style={navigationProfile}>
                            <img src={user[0].profileImage ? user[0].profileImage 
                                : 
                                require('../Images/default-user-image.png')} 
                                alt="profile image" 
                                height="100"
                                width="100"
                                style={{borderRadius: '100%'}}
                                />
                                <p>{user[0].username}</p>
                                <p>{user[0].first_name}</p>
                                <p>{user[0].last_name}</p>
                            </div>
                            <div style={navigationButtons}>
                                <p onClick={() => this.updateContent('About')}>About</p>
                                <p onClick={() => this.updateContent('Work')}>Work</p>
                                <p onClick={() => this.updateContent('Contact')}>Contact</p>
                            </div>
                    </div>
                    <div style = {contentContainer}>
                        <div style={contentContainer}>
                            { 
                                this.state.selected == 'About' &&
                                <div style={contentBox}>
                                    {about[0].about} 
                                </div>
                            }
                            { 
                                this.state.selected == 'Work' &&
                                <div style={imageGrid}>
                                    <Gallery images={this.state.gallery} />
                                </div> 
                            }
                            { 
                                this.state.selected == 'Contact' &&
                                <div style={{...contentBox, flexDirection: 'column', justifyContent: 'center'}}>
                                    <p>Email Address: {user[0].email}</p>
                                    <p>Phone Number: +1 801-830-2972</p>
                                    <p>Address: 1882 ashley valley lane, Sandy. UT</p>
                                    <img src='https://maps.googleapis.com/maps/api/staticmap?center=Sandy,UT&markers=size:mid|1882+ashley+valley+lane,sandy,ut&zoom=15&size=300x300&key=AIzaSyCSLFENvVixOGW_2gx7JyWKdOKf2ToBxhw' alt=""/>
                                </div> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
