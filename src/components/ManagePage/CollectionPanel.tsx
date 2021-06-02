import {useEffect, useState} from 'react'
import {Route} from 'react-router'
import {useFirebase} from '../../context/FirebaseContext'
import {ICollection} from '../../../types'
import CollectionCreate from './CreateCollection'
import {Preview, ItemsGrid, NewItemLink} from './styled'

const CollectionPanel = () => {
    const {manager} = useFirebase()
    const [collections, setCollections] = useState<ICollection[] | null>(null)

    useEffect(() => {
        manager!.getCollections().then(data => setCollections(data))
    }, [manager])

    return (
        <>
            <ItemsGrid>
                <Preview>
                    <NewItemLink to='/manage/collections/new'>+</NewItemLink>
                </Preview>
                {collections
                    ? collections?.map(c => (
                          <Preview key={c.id}>{c.name}</Preview>
                      ))
                    : null}
            </ItemsGrid>
            <Route
                path='/manage/collections/new'
                render={() => <CollectionCreate />}
            />
        </>
    )
}

export default CollectionPanel
