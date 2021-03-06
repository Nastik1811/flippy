import {ErrorMessage, Formik} from 'formik'
import {useFirebase} from '../../context/FirebaseContext'
import {
    AuthForm,
    Input,
    ErrorContainer,
    Label,
    Submit,
    SwitchLink,
    Title,
} from './styled'
import * as Yup from 'yup'
import Typography from '../Typography'

const Login = () => {
    const {app} = useFirebase()

    const validationSchema = Yup.object({
        email: Yup.string().required('*Required'),
        password: Yup.string().required('*Required'),
    })

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                app.login({
                    email: values.email,
                    password: values.password,
                }).catch(console.log)
            }}>
            <AuthForm>
                <Title>LOGIN</Title>
                <Typography size='xs'>
                    <span>Don't have an account? </span>
                    <SwitchLink to='/auth/signup'>Sign up here</SwitchLink>
                </Typography>
                <Label>
                    Email
                    <ErrorContainer>
                        <ErrorMessage name='email' />
                    </ErrorContainer>
                    <Input type='email' placeholder='email' name='email' />
                </Label>
                <Label>
                    Password
                    <ErrorContainer>
                        <ErrorMessage name='password' />
                    </ErrorContainer>
                    <Input
                        type='password'
                        placeholder='password'
                        name='password'
                    />
                </Label>
                <Submit as='button' type='submit'>
                    Login
                </Submit>
            </AuthForm>
        </Formik>
    )
}

export default Login
