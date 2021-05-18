import {Link} from 'react-router-dom'
import Button from '../Button'
import {Layout} from './styled'

const Landing = () => {
    return (
        <Layout>
            <Button to='/auth/signup'>Start learning!</Button>
        </Layout>
    )
}

export default Landing
