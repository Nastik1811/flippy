import {useFormik} from 'formik'
import {useState} from 'react'
import {ICardDetails, CardSide, ICollection} from '../../../types'
import * as Yup from 'yup'
import Typography from '../Typography'
import {
    Card,
    CardContent,
    CollectionSelect,
    CollectionSelectWrapper,
    SaveButton,
    SideView,
    StyledForm,
    TurnCard,
} from './styled'
import {useLanguage} from '../../context/LanguageContext'

type CardFromPropsType = {
    collections: ICollection[]
    onSubmit: (details: ICardDetails) => void
}

const emptyDetails: ICardDetails = {
    front: '',
    back: '',
    collectionId: '1',
}

const CardForm = ({collections, onSubmit}: CardFromPropsType) => {
    const [targetSide, setTargetSide] = useState<CardSide>('front')
    const {strings} = useLanguage()

    const flipSide = () => {
        setTargetSide(current => (current === 'front' ? 'back' : 'front'))
    }

    const validationSchema = Yup.object({
        front: Yup.string().required('You need to fill both card sides'),
        back: Yup.string().required('You need to fill both card sides'),
        collectionId: Yup.string().required('Required'),
    })

    const formik = useFormik<ICardDetails>({
        initialValues: emptyDetails,
        onSubmit: onSubmit,
        validationSchema,
        validateOnChange: false,
    })

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <Card side={targetSide}>
                <SideView side='front'>
                    <CardContent
                        name='front'
                        value={formik.values.front}
                        onChange={formik.handleChange}
                        placeholder='front side'
                    />
                </SideView>
                <SideView side='back'>
                    <CardContent
                        name='back'
                        placeholder='back side'
                        value={formik.values.back}
                        onChange={formik.handleChange}
                    />
                </SideView>
            </Card>
            <TurnCard type='button' onClick={flipSide}>
                {strings.turnSide}
            </TurnCard>
            <CollectionSelectWrapper>
                <Typography>{strings.chooseCollection}</Typography>
                <CollectionSelect
                    name='collectionId'
                    value={formik.values.collectionId}
                    onChange={formik.handleChange}>
                    {collections.map(c => (
                        <option value={c.id} key={c.id}>
                            {c.name}
                        </option>
                    ))}
                </CollectionSelect>
            </CollectionSelectWrapper>
            <SaveButton as='button' type='submit'>
                <Typography>{strings.save}</Typography>
            </SaveButton>
        </StyledForm>
    )
}
export default CardForm
