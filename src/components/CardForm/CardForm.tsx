import {FormEvent, useState} from 'react'
import styled from 'styled-components'

const SideView = styled.div``

const CardContent = styled.textarea``

const CollectionSelect = styled.select``

type CardFromPropsType = {
    initialDetails: {
        content: {
            front: string
            back: string
        }
        collection: string
    }
    collections: string[]
    onSubmit: () => void
}
const CardForm = ({
    initialDetails,
    collections,
    onSubmit,
}: CardFromPropsType) => {
    const [cardContent, setCardContent] = useState(initialDetails.content)
    const [cardCollection, setCardCollection] = useState(
        initialDetails.collection
    )

    return (
        <form>
            <section>
                <SideView>
                    <CardContent value={cardContent.front} />
                </SideView>
                <SideView>
                    <CardContent value={cardContent.back} />
                </SideView>
            </section>
            <section>
                <label>
                    {' '}
                    Set a collection
                    <CollectionSelect />
                </label>
            </section>
        </form>
    )
}
export default CardForm
