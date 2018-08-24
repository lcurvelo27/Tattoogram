import React, { Component } from 'react'
import users from '../FakeDb/mock-data'
import Navbar from '../Navbar/Navbar'
import style from './EditStyle'
import images from '../FakeDb/mock-image-data'
import axios from 'axios'
import { getUserAllByID, updateUserInfo, updateWorkInfo } from '../../utils/api';

const { buttonsContainer, galleryContainer, inputContainer, container, menuContainer, navigationMenu, contentContainer } = style

const Buttons = (props) =>{
    return(
        <div style={buttonsContainer}>
            <button onClick={() => props.saveInfo()}>Save</button>
            <button onClick={() => props.reset()}>Cancel</button>
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
        firstname: this.props.firstname,
        lastname: this.props.lastname,
        username: this.props.username,
        profilepicture: this.props.profilepicture
    }

    updateInput = (state, value) => {
        this.setState(
            {[state]: value}
        )
    }

    saveInfo = () => {
        updateUserInfo({...this.state}).then(response => {
            let updatedUser = response.data[0]
            this.setState({updatedUser}, () => console.log(this.state))
        })
    }

    render() {
        return(
            <div style = {container}>
                <h3>Personal Info</h3>
                <div style = {{...container, height: '50%'}}>
                    <Input state={'firstname'} value={this.state.firstname} updateInput={this.updateInput}>Name: </Input>
                    <Input state={'lastname'} value={this.state.lastname} updateInput={this.updateInput}>Last Name: </Input>
                    <Input state={'username'} value={this.state.username} updateInput={this.updateInput}>Username: </Input>
                    <Input state={'profilepicture'} value={this.state.profilepicture} updateInput={this.updateInput}>Profile Picture Url: </Input>
                    <img src={this.state.profilepicture} alt='profile picture' height= '100' style={{borderRadius: '100%'}}/>
                </div>
                <Buttons saveInfo = {this.saveInfo}/>
            </div>
        )
    }
}

class WorkInfoEdit extends Component {
    state = {  
        location: this.props.workInfo.location,
        about: this.props.workInfo.about
    }

    updateInput = (state, value) => {
        this.setState(
            {[state]: value}
        )
    }

    saveInfo = () => {
        updateWorkInfo({...this.state}).then(response => {
            let newState = response.data[0]
            this.setState(newState)
        })
    }

    render() {
        return(
            <div style={container}>
                <h3>Work Info</h3>
                <div style={{...container, height: '50%'}}>
                    <Input state={'about'} value={this.state.about} updateInput={this.updateInput}>About: </Input>
                    <Input state={'location'} value={this.state.location} updateInput={this.updateInput}>Location Address: </Input>
                </div>
                <Buttons saveInfo={this.saveInfo}/>
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

    saveInfo = () => {
        
    }

    render() {
        let gallery = this.state.images.map((image, i) => {
            return(
                <div style={{padding: '5px'}}key={i}>
                    <img src={image.url} alt={image.url} height='120'/>
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
        user: '',
        images: [],
        workInfo: '',
        editSelected: 'Personal Info'
    }
    
    componentDidMount() {
        getUserAllByID(1).then(response => {
            let newImagesState = response.images
            let newUserState = response.user[0]
            let newWorkInfo = response.work[0]

            this.setState({
                images: newImagesState,
                user: newUserState,
                workInfo: newWorkInfo
            }, () => console.log(this.state))
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
                    { this.state.user ? 
                    <div>
                        { 
                        this.state.editSelected == 'Personal Info' &&
                        <PersonalInfoEdit 
                            firstname = {this.state.user.firstname}
                            lastname = {this.state.user.lastname}
                            username = {this.state.user.username}
                            profilepicture = {this.state.user.profilepicture}
                        />
                        }
                        
                        { 
                        this.state.editSelected == 'Work Info' &&
                        <WorkInfoEdit 
                            workInfo = {this.state.workInfo}
                        />
                        }
                        
                        { 
                        this.state.editSelected == 'Gallery' &&
                        <GalleryEdit images={this.state.images}/>
                        }
                        </div>
                        :
                        <p>Loading</p>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default Edit