import styled from 'styled-components'
import {IconButton} from '../common'

export const CardEditor = styled.div`
    width: 100%;
    max-width: 900px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 10px 0px;
`
export const PageHeader = styled.header`
    position: relative;
    width: 100%;
    max-width: 900px;
    padding: 10px 20px;
    display: grid;
    grid-template-areas:
        'icon title'
        'line  line';
    grid-template-rows: auto 20px;
    grid-template-columns: 40px 1fr;
`

export const HeaderNav = styled(IconButton)`
    grid-area: icon;
    place-self: center;
`

export const HeaderTitle = styled.span`
    display: inline-block;
    //color: $dark-blue-text;
    //font-family: $font-decorative;
    font-weight: 400;
    font-size: 1.7rem;
    padding: 5px 25px;
    grid-area: title;
`
export const PageHeaderLine = styled.hr`
    border: none;
    border-bottom: 2px solid rgba(139, 199, 224, 0.2);
    width: 100%;
    grid-area: line;
`
