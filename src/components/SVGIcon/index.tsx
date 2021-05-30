import React from 'react'
import {ReactComponent as home} from '../../assets/icons/home.svg'
import {ReactComponent as manage} from '../../assets/icons/manage.svg'
import {ReactComponent as settings} from '../../assets/icons/settings.svg'
import {ReactComponent as pen} from '../../assets/icons/pen.svg'
import {ReactComponent as user} from '../../assets/icons/user.svg'
import {ReactComponent as back} from '../../assets/icons/back.svg'
import styled from 'styled-components'
import theme from 'styled-theming'

export const currentColor = theme('theme', {
    light: '#296c8b',
    dark: '#ded4fc',
})

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
    color: white;

    .icon-stroke {
        fill: none;
        stroke: ${currentColor};
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 1.5px;
    }

    .icon-fill {
        fill: ${currentColor};
    }
`

const SVGIcon: React.FC<{iconName: IconName}> = ({iconName}) => {
    const Icon = icons[iconName]

    return (
        <IconWrapper>
            <Icon />
        </IconWrapper>
    )
}

export default SVGIcon
