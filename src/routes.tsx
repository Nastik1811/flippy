import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './components/HomePage'
import OverviewPage from './components/OverviewPage'

const useRoutes = () => {
    return(
        <Switch>
            <Route path="/home" component={HomePage}/>
            <Route path="/overview" component={OverviewPage}/>
            <Redirect to="/home"/>
        </Switch>
    )
}

export default useRoutes