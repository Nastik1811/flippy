import styled from "styled-components"
import { breakpoints } from "../../theme"

type FontSize = 'xs' | 'xxs' | 's' | 'm' | 'l' | 'xl'
type Align = 'center'

interface TypographyProps {
    readonly onlyMobile?: boolean
    readonly onlyDesktop?: boolean
    readonly size?: FontSize
    readonly align?: Align
  }
  
const Typography = styled.span<TypographyProps>`
  display: ${props => (props.onlyDesktop ? 'none' : 'block')};
  color: inherit;
  font-size: ${props => (props.size ? `var(--font-${props.size})` : 'inherit')};
  text-align: ${props => props.align || 'inherit'};
  @media only screen and (min-width: ${breakpoints.DESKTOP}) {
      display: ${props => (props.onlyMobile ? 'none' : 'block')};
  }
`
  

export default Typography
