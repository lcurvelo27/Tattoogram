import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Search from './components/Search/Search'
import Tattoos from './components/Tattoos/tattoos'


    export default(
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/profile/:username' component={Profile} />
            <Route path='/search' component={Search} />
            <Route path='/tattoos' component={Tattoos} />
        </Switch>
    )
