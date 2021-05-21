import styled from "styled-components"
import { breakpoints } from "../../theme"

type FontSize = 'xs' | 'xxs' | 's' | 'm' | 'l' | 'xl'

interface TypographyProps {
    readonly onlyMobile?: boolean
    readonly onlyDesktop?: boolean
    readonly size?: FontSize
  }
  
const Typography = styled.span<TypographyProps>`
  display: ${props => (props.onlyDesktop ? 'none' : 'block')};
  color: inherit;
  font-size: ${props => (props.size ? `var(--font-${props.size})` : 'inherit')};

  @media only screen and (min-width: ${breakpoints.DESKTOP}) {
      display: ${props => (props.onlyMobile ? 'none' : 'block')};
  }
`
  

export default Typography
