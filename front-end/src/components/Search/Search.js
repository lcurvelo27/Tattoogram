import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import users from '../FakeDb/mock-data'
import style from './SearchStyle'
import axios from 'axios'
import { Link } from 'react-router-dom'
const { searchContainer, tile, wrapper } = style

class Search extends Component{ 
    state = {
        users: []
    }

    componentDidMount(){
        axios.get('http://localhost:3005/api/users')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
    }

    render(){
        return(
            <div style={wrapper}>
                <Navbar />
                <div style={searchContainer}>
                    {
                        this.state.users.map(user => {
                            console.log(user)
                        return(
                                <div style={tile} key={user.username}>
                                    <Link to={`/profile/${user.username}`}>
                                        <img src={ user.profilepicture ? user.profilepicture : require('../Images/default-user-image.png')} alt='user' height='100' width='100' style={{borderRadius: '100%'}}/>
                                    </ Link>
                                    <p>id: {user.id}</p>
                                    <p>First Name: {user.firstname}</p>
                                    <p>Last Name: {user.lastname}</p>
                                </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Search