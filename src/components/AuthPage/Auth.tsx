import {NavLink, Switch, Route, Redirect} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import {AuthContainer} from './styled'

const Auth = () => {
    return (
        <AuthContainer>
            <Switch>
                <Route path='/auth/login' children={<Login />} />
                <Route path='/auth/signup' children={<Signup />} />
                <Redirect path='/auth' to='/auth/login' />
            </Switch>
        </AuthContainer>
    )
}

export default Auth
