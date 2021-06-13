import Typography from '../Typography'
import {TimeContainer} from './styled'

const Timer = ({time}: {time: number}) => {
    return (
        <TimeContainer>
            <Typography size='l'>
                {Math.floor((time / 60) % 60)}:{Math.floor(time % 60)}
            </Typography>
        </TimeContainer>
    )
}

export default Timer
