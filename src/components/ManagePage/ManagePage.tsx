import {Switch, Route, Redirect} from 'react-router'
import CardsPanel from './CardsPanel'
import CollectionsPanel from './CollectionsPanel'
import {Layout} from './styled'

const ManagePage = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/manage/collections'>
                    <CollectionsPanel />
                </Route>
                <Route path='/manage/cards'>
                    <CardsPanel />
                </Route>
                <Redirect to='manage/collections' />
            </Switch>
        </Layout>
    )
}

export default ManagePage
