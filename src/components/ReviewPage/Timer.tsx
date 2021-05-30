import {TimeContainer, Time} from './styled'

const Timer = ({time}: {time: number}) => {
    return (
        <TimeContainer>
            <Time>
                {Math.floor((time / 60) % 60)}:{Math.floor(time % 60)}
            </Time>
        </TimeContainer>
    )
}

export default Timer
