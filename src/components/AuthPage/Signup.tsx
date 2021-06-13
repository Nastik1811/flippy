import {ErrorMessage, Formik} from 'formik'
import {useFirebase} from '../../context/FirebaseContext'
import {IAuthUserData} from '../../../types'
import Typography from '../Typography'
import {
    AuthForm,
    ErrorContainer,
    Input,
    Label,
    ProviderAuth,
    ProvidersContainer,
    Submit,
    SwitchLink,
    Title,
} from './styled'
import * as Yup from 'yup'
import SVGIcon from '../SVGIcon'

// interface IFormStatus {
//     message: string
//     type: string
// }

// const formStatusProps: IFormStatusProps = {
//     success: {
//         message: 'Signed up successfully.',
//         type: 'success',
//     },
//     duplicate: {
//         message: 'Email-id already exist. Please use different email-id.',
//         type: 'error',
//     },
//     error: {
//         message: 'Something went wrong. Please try again.',
//         type: 'error',
//     },
// }

const Signup = () => {
    const {app} = useFirebase()

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })

    const createNewUser = async (data: IAuthUserData, resetForm: Function) => {
        try {
            app.createUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                createNewUser(values, actions.resetForm)
            }}>
            <AuthForm>
                <Title>REGISTER</Title>
                <Typography size='xs'>
                    <span>Already have an account? </span>
                    <SwitchLink to='/auth/login'>Login</SwitchLink>
                </Typography>
                <Label>
                    Name
                    <ErrorContainer>
                        <ErrorMessage name='name' />
                    </ErrorContainer>
                    <Input type='text' placeholder='name' name='name' />
                </Label>
                <Label>
                    Email
                    <ErrorContainer>
                        <ErrorMessage name='email' />
                    </ErrorContainer>
                    <Input type='text' placeholder='email' name='email' />
                </Label>
                <Label>
                    Password
                    <ErrorContainer>
                        <ErrorMessage name='password' />
                    </ErrorContainer>
                    <Input type='text' placeholder='password' name='password' />
                </Label>

                <Submit as='button' type='submit'>
                    Create an account
                </Submit>

                <Typography size='xs'>----- or sign up with -----</Typography>

                <ProvidersContainer>
                    <SVGIcon iconName='facebook' size={32} />
                    <ProviderAuth onClick={app.createUserUsingProvider}>
                        <SVGIcon iconName='google' size={32} />
                    </ProviderAuth>
                    <SVGIcon iconName='linkedin' size={32} />
                </ProvidersContainer>
            </AuthForm>
        </Formik>
    )
}

export default Signup
