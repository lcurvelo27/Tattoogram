import React, { Component } from 'react'
import users from '../FakeDb/mock-data'
import Navbar from '../Navbar/Navbar'
import style from './EditStyle'
import images from '../FakeDb/mock-image-data'

const { buttonsContainer, galleryContainer, inputContainer, container, menuContainer, navigationMenu, contentContainer } = style

const Buttons = () =>{
    return(
        <div style={buttonsContainer}>
            <button>Save</button>
            <button>Cancel</button>
        </div>
    )
}

const Input = (props) => {
    return(
        <div style = {inputContainer}>
            <label>{props.children}</label><input type="text" value={props.value} onChange={(e) => props.updateInput(props.state, e.target.value)} style={props.width ? props.width : null}/>
        </div>
    )
}


class PersonalInfoEdit extends Component {
    state = {
        name: this.props.name,
        lastName: this.props.lastName,
        username: this.props.username,
        profilePic: this.props.profilePic
    }

    updateInput = (state, value) => {
        this.setState(
            {[state]: value}
        )
    }

    render() {
        return(
            <div style = {container}>
                <h3>Personal Info</h3>
                <div style = {{...container, height: '50%'}}>
                    <Input state={'name'} value={this.state.name} updateInput={this.updateInput}>Name: </Input>
                    <Input state={'lastName'} value={this.state.lastName} updateInput={this.updateInput}>Last Name: </Input>
                    <Input state={'username'} value={this.state.username} updateInput={this.updateInput}>Username: </Input>
                    <Input state={'profilePic'} value={this.state.profilePic} updateInput={this.updateInput}>Profile Picture Url: </Input>
                    <img src={this.state.profilePic} alt='profile picture' height= '100' style={{borderRadius: '100%'}}/>
                </div>
                <Buttons />
            </div>
        )
    }
}

class WorkInfoEdit extends Component {
    state = {  
        experience: '',
        location: ''
    }

    updateInput = (state, value) => {
        this.setState(
            {[state]: value}
        )
    }

    render() {
        return(
            <div style={container}>
                <h3>Work Info</h3>
                <div style={{...container, height: '50%'}}>
                    <Input state={'experience'} value={this.state.experience} updateInput={this.updateInput}>Experience: </Input>
                    <Input state={'location'} value={this.state.location} updateInput={this.updateInput}>Location Address: </Input>
                </div>
                <Buttons />
            </div>
        )
    }
}

class GalleryEdit extends Component {

    state = {
        images: this.props.images,
        addImage: ''
    }

    updateInput = (state, value) => {
        this.setState(
            {[state]: value}
        )
    }

    render() {
        let gallery = this.state.images.map((image, i) => {
            return(
                <div style={{padding: '5px'}}key={i}>
                    <img src={image} alt={image.url} height='120'/>
                </div>
            )
        })

        return(
            <div style={container}>
                <h3>Gallery</h3>
                <div style={galleryContainer}>
                    {gallery}
                </div>
                <div style={{...inputContainer, justifyContent: 'center', width: '100%'}}>
                    <Input state={'addImage'} value={this.state.addImage} updateInput={this.updateInput} width={{width: '100%'}}/>
                    <button>Add</button>
                </div>
                <Buttons />
            </div>
        )
    }
}


class Edit extends Component {
    state = {
        user: users[0],
        images: [],
        editSelected: 'Personal Info'
    }
    
    componentDidMount() {
        let imagesGallery = []
        images.map(image => {
            return imagesGallery.push(image.url)
        })
        this.setState({
            images: imagesGallery
        })
    }

    handleMenuClick = value => {
        this.setState({
            editSelected: value
        })
    }

    render(){
        return(
            <div style={ container }>
                <Navbar />
                <h1>Account</h1>
                <div style = { menuContainer }>
                    <div style = { navigationMenu }>
                        <p onClick ={() => this.handleMenuClick('Personal Info')}>Personal Info</p>
                        <p onClick ={() => this.handleMenuClick('Work Info')}>Work Info</p>
                        <p onClick ={() => this.handleMenuClick('Gallery')}>Gallery</p>
                    </div>
                    <div style = { contentContainer }>
                        { 
                        this.state.editSelected == 'Personal Info' &&
                        <PersonalInfoEdit 
                            name = {this.state.user.first_name}
                            lastName = {this.state.user.last_name}
                            username = {this.state.user.username}
                            profilePic = {this.state.user.profileImage}
                        />
                        }
                        
                        { 
                        this.state.editSelected == 'Work Info' &&
                        <WorkInfoEdit />
                        }
                        
                        { 
                        this.state.editSelected == 'Gallery' &&
                        <GalleryEdit images={this.state.images}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Edit