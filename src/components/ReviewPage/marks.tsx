import React from 'react'
import {ReactComponent as good} from '../../assets/icons/home.svg'
import {ReactComponent as norm} from '../../assets/icons/manage.svg'
import {ReactComponent as bed} from '../../assets/icons/settings.svg'
import styled from 'styled-components'

const marks = {
    good,
    norm,
    bed,
}

export type MarkName = keyof typeof marks

const Wrapper = styled.button`
    display: block;
    width: 28px;
    height: 28px;
    color: white;
`

const Mark: React.FC<{markName: MarkName; onClick: (m: MarkName) => void}> = ({
    markName,
    onClick,
}) => {
    const Mark = marks[markName]

    return (
        <Wrapper onClick={() => onClick(markName)}>
            <Mark fill='white' />
        </Wrapper>
    )
}

export default Mark
