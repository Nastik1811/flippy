import {Formik, FormikErrors} from 'formik'
import {NavLink} from 'react-router-dom'
import {useFirebase} from '../../context/FirebaseContext'
import {IAuthUserData} from '../../types'
import Typography from '../Typography'
import {AuthForm, Input, Submit, Title} from './styled'

const Login = () => {
    const {app} = useFirebase()
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
                app.login({
                    email: values.email,
                    password: values.password,
                }).catch(console.log)
            }}>
            <AuthForm>
                <Title>LOGIN</Title>
                <Input type='email' placeholder='email' name='email' />
                <Input type='password' placeholder='password' name='password' />

                <Submit as='button' type='submit'>
                    Login
                </Submit>

                <Typography>Forgot the password?</Typography>
                <Typography>
                    Don't have an account?
                    <NavLink to='/auth/signup'>Sign up here</NavLink>
                </Typography>
            </AuthForm>
        </Formik>
    )
}

export default Login
