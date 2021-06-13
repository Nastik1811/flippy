import React from 'react'
import {ReactComponent as home} from '../../assets/icons/home.svg'
import {ReactComponent as manage} from '../../assets/icons/manage.svg'
import {ReactComponent as settings} from '../../assets/icons/settings.svg'
import {ReactComponent as pen} from '../../assets/icons/pen.svg'
import {ReactComponent as user} from '../../assets/icons/user.svg'
import {ReactComponent as back} from '../../assets/icons/back.svg'
import {ReactComponent as git} from '../../assets/icons/github.svg'
import {ReactComponent as linkedin} from '../../assets/icons/linkedin.svg'
import {ReactComponent as google} from '../../assets/icons/google.svg'
import {ReactComponent as facebook} from '../../assets/icons/facebook.svg'
import styled from 'styled-components'
import theme from 'styled-theming'

export const currentColor = theme('theme', {
    light: '#296c8b',
    dark: '#d2c3ff',
})

const icons = {
    home,
    manage,
    settings,
    pen,
    user,
    back,
    git,
    google,
    facebook,
    linkedin,
}

interface SVGIconPropsType {
    iconName: IconName
    readonly size?: number
}

type IconName = keyof typeof icons

const IconWrapper = styled.i<{size?: number}>`
    display: block;
    width: ${props => (props.size ? `${props.size}px` : '24px')};
    height: ${props => (props.size ? `${props.size}px` : '24px')};
    color: inherit;

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

const SVGIcon: React.FC<SVGIconPropsType> = ({iconName, size}) => {
    const Icon = icons[iconName]

    return (
        <IconWrapper size={size}>
            <Icon />
        </IconWrapper>
    )
}

export default SVGIcon
