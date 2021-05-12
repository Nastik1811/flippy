import {Switch, Route, Redirect} from 'react-router'
import CardsPanel from './CardsPanel'
import {Layout} from './styled'

const ManagePage = () => {
    return (
        <Layout>
            <CardsPanel />
        </Layout>
    )
}

export default ManagePage
