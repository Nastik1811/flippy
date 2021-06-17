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
    cursor: pointer;
    display: block;
    width: 80px;
    height: 60px;
    color: white;
    background-color: transparent;
    border: none;
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    .mark-stroke {
        fill: none;
        stroke: currentColor;
        stroke-miterlimit: 10;
        stroke-width: 3px;
    }

    .mark-details {
        fill: currentColor;
    }

    &:hover {
        transform: scale(1.15);
        .mark-stroke {
            stroke: rgb(255, 221, 133);
        }
        .mark-details {
            fill: rgb(255, 221, 133);
        }
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
