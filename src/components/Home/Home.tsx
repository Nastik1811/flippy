import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled(Link)`
    display: inline-block;
    position: relative;
    text-align: center;
    text-decoration: none;
    padding: 1rem;
    border-radius: 10px;
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
  padding: 1vw;
  margin-right: 30px;
  border-radius: 15px;
  font-size: 1.5rem;
  width: 650px;
  text-align: center;
`

const CollectionBoard = styled.div`
`

const Message = styled.div`
    margin: 2vw ;
    font-weight: 300;
    font-size: 1.6rem;
`

const message = `You seem to be new here. Let's add your first card! There is a lot of work ahead :)`

 const Home = () => { 
     return(
         <div>
             <Button to="#">Add</Button>
             <GreetingContainer>
                 <Message>{message}</Message>
             </GreetingContainer>
             <CollectionBoard>

             </CollectionBoard>
         </div>
     )
}


export default Home;
