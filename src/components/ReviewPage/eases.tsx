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
    width: 28px;
    height: 28px;
    color: white;
`

const Mark: React.FC<{name: MarkName; onClick: () => void}> = ({
    name,
    onClick,
}) => {
    const Mark = marks[name]

    return (
        <Wrapper onClick={onClick}>
            <Mark fill='white' />
        </Wrapper>
    )
}

export default Mark
