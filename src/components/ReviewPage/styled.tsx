import styled from 'styled-components'
import {CardSide} from '../../../types'
import path from '../../assets/images/success.png'

export const StyledCard = styled.div<{isFlipped: boolean; isNew: boolean}>`
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
    transform: ${props => props.isNew ? 'translateY(-800px) rotate(-45deg)' : (props.isFlipped ? 'rotateY(180deg)' : 'none')};
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
    overflow: hidden;
    background-color: ${props =>
        props.side === 'front' ? 'rgb(176, 229, 248)' : 'rgb(255, 221, 133)'};
    transform: ${props => (props.side === 'back' ? 'rotateY(180deg)' : 'none')};
`

export const CardContent = styled.p`
    width: 100%;
    height: 100%;
    font-size: 2rem;
    text-align: center;
    position: absolute;
    padding: 20px 20px 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    border-radius: inherit;
    font-family: $font-basic;
    font-weight: 300;
`

export const TurnCardCaption = styled.span`
    color: #fff;
    font-size: 1rem;
    position: absolute;
    bottom: 20px;
    text-align: center;
    width: 100%;
`

export const Layout = styled.div`
    display: grid;
    row-gap: 12px;
    margin-top: 2vw;
`

export const MarkPanel = styled.div<{isVisible: boolean}>`
    visability: ${props => props.isVisible ? 'visible' : 'hidden'};
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    column-gap: 12px;
    margin: auto;
    margin-top: 10px;
`
export const ReviewContainer = styled.div`
    padding: 20px 10px;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`
export const TimeContainer = styled.div`
    grid-row: 1 / span 2;
    grid-column: 2;
    align-self: center;
`
export const Time = styled.span``
export const SessionInfo = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: rows;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
`
export const CardsLeft = styled.span``

export const CongratsImage = styled.div`
    margin: auto;
    height: 280px;
    width: 290px;
    background-image: url(${path});
    background-repeat: no-repeat;
    background-size: cover;
`