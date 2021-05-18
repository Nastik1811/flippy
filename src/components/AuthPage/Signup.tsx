import {Formik, FormikErrors} from 'formik'
import {FormEvent, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useFirebase} from '../../context/FirebaseContext'
import {IAuthUserData} from '../../types'
import Typography from '../Typography'
import {AuthForm, Input, Submit, SwitchLink, Title} from './styled'

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
            validate={(values: IAuthUserData) => {
                let errors: FormikErrors<IAuthUserData> = {}
                if (!values.email) {
                    errors.email = 'Required'
                }
                return errors
            }}
            onSubmit={(values, actions) => {
                createNewUser(values, actions.resetForm)
            }}>
            <AuthForm>
                <Title>REGISTER</Title>
                <Input type='text' placeholder='name' name='name' />
                <Input type='email' placeholder='email' name='email' />
                <Input type='password' placeholder='password' name='password' />

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
