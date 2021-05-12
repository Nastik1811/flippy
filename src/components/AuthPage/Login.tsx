import {Formik, FormikErrors} from 'formik'
import {NavLink} from 'react-router-dom'
import {useDataManager} from '../../context/DataManagerContext'
import {useFirebase} from '../../context/FirebaseContext'
import {IUserData} from '../../context/UserContext'
import Typography from '../Typography'
import {AuthForm, Input, Submit, Title} from './styled'

const Login = () => {
    const {auth} = useFirebase()
    const {manager} = useDataManager()
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
                auth.signInWithEmailAndPassword(
                    values.email,
                    values.password
                ).catch(console.log)
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
