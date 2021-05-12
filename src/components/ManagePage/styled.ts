import styled from 'styled-components'

export const Board = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  gap: 16px;
`

export const Layout = styled.div`
    display: grid;
    row-gap: 12px;
    margin-top: 2vw;
    `

export const ItemsGrid = styled.div`
    display: grid;
    width: 100%;
    margin: auto;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(260px, 270px));
    grid-gap: 20px 10px;
    
`
