import {Formik, FormikErrors} from 'formik'
import {FormEvent, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useFirebase} from '../../context/FirebaseContext'
import {IUserData} from '../../context/UserContext'
import Button from '../Button'
import Typography from '../Typography'
import {AuthForm, Input, Submit, Title} from './styled'

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
    const {auth} = useFirebase()
    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: '',
        type: '',
    })

    const createNewUser = async (data: IUserData, resetForm: Function) => {
        try {
            auth.createUserWithEmailAndPassword(data.email, data.password).then(
                cred => {
                    if (cred.user) {
                        cred.user.updateProfile({
                            displayName: data.name,
                        })
                    }
                }
            )
        } catch (error) {
            console.log(error)
        } finally {
            setDisplayFormStatus(true)
        }
    }

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validate={(values: IUserData) => {
                let errors: FormikErrors<IUserData> = {}
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

                <Button as='button' type='submit'>
                    Create an account
                </Button>

                <Typography>
                    Already have an account?
                    <NavLink to='/auth/login'>Login</NavLink>
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