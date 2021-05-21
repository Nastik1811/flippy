import React from 'react'
import {ReactComponent as home} from '../../assets/icons/home.svg'
import {ReactComponent as manage} from '../../assets/icons/manage.svg'
import {ReactComponent as settings} from '../../assets/icons/settings.svg'
import {ReactComponent as pen} from '../../assets/icons/pen.svg'
import {ReactComponent as user} from '../../assets/icons/user.svg'
import {ReactComponent as back} from '../../assets/icons/back.svg'
import styled from 'styled-components'

const icons = {
    home,
    manage,
    settings,
    pen,
    user,
    back,
}

type IconName = keyof typeof icons

const IconWrapper = styled.i`
    display: block;
    width: 28px;
    height: 28px;
`

const SVGIcon: React.FC<{iconName: IconName}> = ({iconName}) => {
    const Icon = icons[iconName]

    return (
        <IconWrapper>
            <Icon fill='currentColor' />
        </IconWrapper>
    )
}

export default SVGIcon
