import {Route, Redirect} from 'react-router-dom'
import {useUserInfo} from '../../context/UserContext'

type RoutePropsType = {
    component: React.FC
    path: string
    exact: boolean
}
const PrivateRoute = ({component, path, exact}: RoutePropsType) => {
    const user = useUserInfo()
    return user ? (
        <Route path={path} exact={exact} component={component} />
    ) : (
        <Redirect to='/page/login' />
    )
}
export default PrivateRoute
