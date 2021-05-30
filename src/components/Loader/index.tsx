import {AnimationContainer, Component, Container} from './Loader'

const Loader = () => {
    return (
        <Container>
            <AnimationContainer>
                <div>
                    <Component />
                    <Component />
                    <Component />
                    <Component />
                </div>
            </AnimationContainer>
        </Container>
    )
}

export default Loader
