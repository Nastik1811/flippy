import styled from 'styled-components'
import {breakpoints} from '../../theme'
import {CardSide} from '../../../types'
import Button from '../Button'
import {IconButton} from '../common'
import theme from 'styled-theming'

const primaryColor = theme('theme', {
    light: 'var(--blue)',
    dark: 'var(--purple)',
})

export const StyledForm = styled.form`
    display: grid;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    place-items: center;
    column-gap: 12px;
    grid-template-rows: 1fr auto auto auto;
    grid-template-columns: 1fr auto;
    grid-template-areas:
        'card card'
        'turn turn'
        'select select'
        'submit submit';

    @media only screen and (min-width: ${breakpoints.TABLET}) {
        grid-template-areas:
            'card select'
            'card select'
            'turn select'
            'submit submit';
    }
`
export const Card = styled.div<{side: CardSide}>`
    grid-area: card;
    position: relative;
    cursor: pointer;
    width: 100%;
    max-width: 600px;
    min-height: 400px;
    max-height: 400px;
    height: 100%;
    margin: 10px;
    border-radius: 8px;
    //box-shadow: 0px 0px 30px rgba(51, 95, 121, 0.2);
    transform-style: preserve-3d;
    transform: ${props => (props.side === 'back' ? 'rotateY(180deg)' : 'none')};
    transition: all 1s cubic-bezier(0.445, -0.15, 0.55, 1.35);
`

export const SideView = styled.div<{side: CardSide}>`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 5px 5px 13px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 20px;
    backface-visibility: hidden;
    background-image: url('https://www.transparenttextures.com/patterns/notebook.png');
    overflow: hidden;
    background-color: ${props =>
        props.side === 'front' ? 'rgb(176, 229, 248)' : 'rgb(255, 221, 133)'};
    transform: ${props => (props.side === 'back' ? 'rotateY(180deg)' : 'none')};
`

export const CardContent = styled.textarea`
    resize: none;
    padding: 20px;
    height: 100%;
    text-align: center;
    font-size: 1.5rem;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    border: 2px solid transparent;
    background-color: transparent;
    color: black;

    &:focus {
        outline: none;
        border: 2px dashed;
        border-radius: 5px;
        border-color: rgba(7, 7, 7, 0.1);
    }

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-size: var(--font-xl);
        text-transform: uppercase;
    }
`

export const TurnCard = styled(IconButton)`
    grid-area: turn;
    text-shadow: 0px 0px 25px rgba(${primaryColor}, 1);
`

export const CollectionSelectWrapper = styled.label`
    grid-area: select;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    gap: 10px;
    margin-top: 20px;

    @media only screen and (min-width: ${breakpoints.TABLET}) {
        place-self: start;
    }
`
export const CollectionSelect = styled.select`
    background-color: transparent;
    font-size: 1.3rem;
    padding: 0 5px;
    min-width: 250px;
    border-radius: 10px;
    height: 3rem;
    //border: 2px solid $color-primary-dark;

    &:focus {
        outline: none;
        //border-color: $color-secondary;
    }
`

export const SaveButton = styled(Button)`
    grid-area: submit;
    width: 150px;
    height: 50px;
    font-family: inherit;
    font-size: 1.3rem;
    margin-top: 24px;
`
