import {Switch, Route, Redirect} from 'react-router'
import {useLanguage} from '../../context/LanguageContext'
import CardsPanel from './CardsPanel'
import CollectionPanel from './CollectionPanel'
import {Layout} from './styled'
import {Tab, Tabbar, Hr} from './Tabbar'

const ManagePage = () => {
    const {strings} = useLanguage()
    return (
        <Layout>
            <Tabbar>
                <Tab to='/manage/collections'>{strings.collections}</Tab>
                <Tab to='/manage/cards'>{strings.cards}</Tab>
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
