import React, { Component } from 'react';
import users from '../FakeDb/mock-data'

const ImageView = (props) => {

    let user = users.filter(user =>{
        return user.id === props.image.artistId
    })

    return(
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                <img src={props.image.url} alt='image' height='500'/>
                <p>{props.image.description}</p>
                <div style={{display:'flex', width: '100%', justifyContent: 'flex-start'}}>
                    <img src={user[0].profileImage} alt="Profile Image" height="50" style={{borderRadius: '100%'}}/>
                    <p>Artist: <a href={`http://localhost:3000/#/profile/${user[0].username}`}>{user[0].first_name} {user[0].last_name}</a></p> 
                </div>
            </div>
        </div>
    )
}

export default ImageView 