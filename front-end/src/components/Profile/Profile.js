import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import style from './ProfileStyle'
import users from '../FakeDb/mock-data'
import about from '../FakeDb/mock-data-about'
import images from '../FakeDb/mock-image-data'
import Gallery from 'react-grid-gallery'
import axios from 'axios'
import { getUserAll } from '../../utils/api'
const { navigationProfile, navigationButtons, navigationContainer, imageGrid , wrapper, container, contentContainer, contentBox, navigationBar } = style
  

class Profile extends Component { 
    constructor(props){
        super(props)

        this.state = {
            user: null,
            selected: 'About',
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
                        thumbnailWidth: 300,
                        thumbnailHeight: 300
                }
            })
            this.setState({
                user: response.info[0],
                gallery: galleryImages,
                workInfo: response.work[0]
            }, () => console.log(this.state))
        })
    }
    
    updateContent(value){
        this.setState({
            selected: value
        })
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
                                    {this.state.workInfo.about} 
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
                                    <p>Email Address: Email</p>
                                    <p>Phone Number: +1 801-830-2972</p>
                                    <p>Address: 1882 ashley valley lane, Sandy. UT</p>
                                    <img src='https://maps.googleapis.com/maps/api/staticmap?center=Sandy,UT&markers=size:mid|1882+ashley+valley+lane,sandy,ut&zoom=15&size=300x300&key=AIzaSyCSLFENvVixOGW_2gx7JyWKdOKf2ToBxhw' alt=""/>
                                </div> 
                            }
                        </div>
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
