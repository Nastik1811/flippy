import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'

const useRoutes = () => {
    return(
        <Switch>
            <Route path="/home" component={Home}/>
            <Redirect to="/"/>
        </Switch>
    )
}

export default useRoutes