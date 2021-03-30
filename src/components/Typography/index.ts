import styled from "styled-components"
import { breakpoints } from "../../theme"

interface TypographyProps {
    readonly onlyMobile?: boolean
    readonly onlyDesktop?: boolean
  }
  
const Typography = styled.span<TypographyProps>`
  display: ${props => (props.onlyDesktop ? 'none' : 'block')};

  @media only screen and (min-width: ${breakpoints.DESKTOP}) {
      display: ${props => (props.onlyMobile ? 'none' : 'block')};
  }
`
  

export default Typography