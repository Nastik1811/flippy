import {Switch, Route, Redirect} from 'react-router'
import CardsPanel from './CardsPanel'
import CollectionPanel from './CollectionPanel'
import {Layout} from './styled'
import {Tab, Tabbar, Hr} from './Tabbar'

const ManagePage = () => {
    return (
        <Layout>
            <Tabbar>
                <Tab to='/manage/collections'>Collections</Tab>
                <Tab to='/manage/cards'>Cards</Tab>
            </Tabbar>
            <Hr />
            <Switch>
                <Route
                    path='/manage/collections'
                    children={<CollectionPanel />}
                />
                <Route path='/manage/cards' children={<CardsPanel />} />
                <Redirect to='/manage/collections' />
            </Switch>
        </Layout>
    )
}

export default ManagePage
