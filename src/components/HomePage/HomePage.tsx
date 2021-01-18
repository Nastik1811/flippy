import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Layout = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    row-gap: 24px;
`


const Button = styled(Link)`
    display: inline-block;
    width: fit-content;
    height: fit-content;
    position: relative;
    text-align: center;
    text-decoration: none;
    padding: .5rem 2rem;
    border-radius: 5px;
    color: #000;
    background-color: rgb(255, 214, 102);
    border: 1px solid rgba(226, 166, 0, 0.514);
    transition: 0.1s ease;
    &:hover{
        transform: scale(1.1); 
    }
`
const GreetingContainer = styled.div`
    border: 1px solid rgba(150, 180, 200, 1);
    margin: 5rem;
    padding: 1vw;
    border-radius: 15px;
    font-size: 1.5rem;
    width: 650px;
    text-align: center;
`

const CollectionBoard = styled.div`
    grid-column: 1 / span 2;
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    gap: 16px;
`

const Message = styled.div`
    margin: 2vw ;
    font-weight: 400;
    font-size: 1.6rem;
`

const Preview = styled.div`
    position: relative;
    width: 255px;
    height: 170px;
    border-radius: 8px;
    background-color: rgb(206, 239, 252);

    &:hover{
        background-color:rgb(138, 209, 236);
        box-shadow: 0px 0px 15px rgba(45, 92, 116, 0.4)
    }

    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid rgba(55, 115, 145, 0.856);
        left: 7px;
        bottom: 7px;
    }

    &:hover::before{
        border-color: rgb(55, 115, 145);
    }

`

const PreviewContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: grid;
`



const message = `You seem to be new here. Let's add your first card! There is a lot of work ahead =D`

 const HomePage = () => { 
     return(
         <Layout>
             <GreetingContainer>
                 <Message>{message}</Message>
                 <Button to="#">Review all cards</Button>
             </GreetingContainer>
             <Button to="#">Add</Button>

             <CollectionBoard>
                <Preview>
                    <PreviewContent>
                        Collection
                    </PreviewContent>
                </Preview>
                <Preview>
                    <PreviewContent>
                        Collection
                    </PreviewContent>
                </Preview>
                <Preview>
                    <PreviewContent>
                        Collection
                    </PreviewContent>
                </Preview>
                <Preview>
                    <PreviewContent>
                        Collection
                    </PreviewContent>
                </Preview>
             </CollectionBoard>
         </Layout>
     )
}


export default HomePage;
