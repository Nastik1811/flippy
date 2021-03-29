import styled from "styled-components"

interface TypographyProps {
    readonly onlyMobile?: boolean
    readonly onlyDesktop?: boolean
  }
  
const Typography = styled.span<TypographyProps>`
display: ${props => (props.onlyDesktop ? 'none' : 'block')};

@ only screen and (min-width: 760px) {
    display: ${props => (props.onlyMobile ? 'none' : 'block')};
}
`
  

export default Typography