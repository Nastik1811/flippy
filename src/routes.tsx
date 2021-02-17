import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './components/HomePage'
import ManagePage from './components/ManagePage'

const useRoutes = () => {
    return(
        <Switch>
            <Route path="/home" component={HomePage}/>
            <Route path="/manage" component={ManagePage}/>
            <Redirect to="/home"/>
        </Switch>
    )
}

export default useRoutes