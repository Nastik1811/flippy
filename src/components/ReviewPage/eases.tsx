import {ReactComponent as easy} from '../../assets/icons/smile-cloud.svg'
import {ReactComponent as norm} from '../../assets/icons/meh-cloud.svg'
import {ReactComponent as hard} from '../../assets/icons/sad-cloud.svg'
import styled from 'styled-components'

export const EasyMark = styled(easy)``
export const NormMark = styled(norm)``
export const HardMArk = styled(hard)``

const marks = {
    easy: EasyMark,
    norm: NormMark,
    hard: HardMArk,
}

export type MarkName = keyof typeof marks

const Wrapper = styled.button`
    display: block;
    width: 60px;
    height: 60px;
    color: white;
    background-color: transparent;
    border: none;

    .mark-stroke {
        fill: none;
        stroke: currentColor;
        stroke-miterlimit: 10;
        stroke-width: 3px;
    }

    .mark-details {
        fill: currentColor;
    }
`

const Mark: React.FC<{name: MarkName; onClick: () => void}> = ({
    name,
    onClick,
}) => {
    const Mark = marks[name]

    return (
        <Wrapper onClick={onClick}>
            <Mark />
        </Wrapper>
    )
}

export default Mark
