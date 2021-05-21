import {ErrorMessage, Formik, FormikErrors} from 'formik'
import {useState} from 'react'
import {useFirebase} from '../../context/FirebaseContext'
import {IAuthUserData} from '../../types'
import Typography from '../Typography'
import {
    AuthForm,
    ErrorContainer,
    Input,
    Label,
    Submit,
    SwitchLink,
    Title,
} from './styled'
import * as Yup from 'yup'

interface IFormStatus {
    message: string
    type: string
}

interface IFormStatusProps {
    [key: string]: IFormStatus
}

const formStatusProps: IFormStatusProps = {
    success: {
        message: 'Signed up successfully.',
        type: 'success',
    },
    duplicate: {
        message: 'Email-id already exist. Please use different email-id.',
        type: 'error',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}

const Signup = () => {
    const {app} = useFirebase()
    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: '',
        type: '',
    })

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })

    const createNewUser = async (data: IAuthUserData, resetForm: Function) => {
        try {
            app.createUser(data)
        } catch (error) {
            console.log(error)
        } finally {
            setDisplayFormStatus(true)
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

                <Typography>
                    Already have an account?
                    <SwitchLink to='/auth/login'>Login</SwitchLink>
                </Typography>

                {displayFormStatus && (
                    <div className='formStatus'>
                        {formStatus.type === 'error' ? (
                            <p>{formStatus.message}</p>
                        ) : formStatus.type === 'success' ? (
                            <p>{formStatus.message}</p>
                        ) : null}
                    </div>
                )}
            </AuthForm>
        </Formik>
    )
}

export default Signup
