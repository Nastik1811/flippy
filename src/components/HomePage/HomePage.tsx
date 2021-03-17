import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'
import SVGIcon from '../SVGIcon'

const Layout = styled.div`
    display: grid;
    row-gap: 12px; 
    margin-top: 2vw;
`

const Button = styled(Link)`
    display: block;
    width: fit-content;
    height: fit-content;
    position: relative;
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    color: #000000;
    background-color: rgb(255, 214, 102);
    box-shadow: 0 4px 15px rgba(255, 215, 112, 0.62);
    transition: 0.1s ease;
    padding: .8rem 2rem;

    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 1px solid #f3bc30;
        left: 4px;
        bottom: 4px;
    }

`

const AddButton = styled(Button)`
  
    @media only screen and (max-width: 760px){
        position: fixed;
        bottom: 70px;
        right: 20px;
        z-index: 100;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: grid;
        place-items: center;
    }
`
const GreetingContainer = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    row-gap: 12px;
    margin: auto;
    padding: 1.5rem;
    //font-size: 1.5rem;
    //text-align: center;

    @media only screen and ${breakpoints.device.tablet}{
        max-width: 650px;
        border: 1px solid rgba(150, 180, 200, 1);
        border-radius: 15px;
    }       

`

const CollectionBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(255px, 1fr ));
    gap: 20px;
`
interface TypographyProps {
    readonly onlyMobile?: boolean;
    readonly onlyDesktop?: boolean;
}

const Typography = styled.span<TypographyProps>`
    display: ${props => props.onlyDesktop ? "none" : "block"};

    @media only screen and (min-width: 760px){
        display: ${props => props.onlyMobile ? "none" : "block"};
    }
`

const Title = styled.h2`
    font-size: 1.4rem;
`

const Preview = styled.div`
    position: relative;
    //width: 100%;
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
    const [collections, setCollections] = useState<string[] | undefined>(undefined)
     
    useEffect(() => {
        setCollections([
            "Collection1",
            "Collection2",
            "Collection3"
        ])
    }, [])

    if(!collections){
        return <div>Loading</div>
    }

    return(
         <Layout>
             <GreetingContainer>
                    <h1>Hello, Anastasia</h1>
                    <p>{message}</p>
                <Button to="#">Review all cards</Button>
                <AddButton to="#">
                    <Typography onlyMobile><SVGIcon iconName="pen"/></Typography>
                    <Typography onlyDesktop>Add Card</Typography>
                </AddButton>
             </GreetingContainer>
             <Title>Review collection</Title>
             <CollectionBoard>
                {collections.map(c => 
                    <Preview key={c}>
                        <PreviewContent>
                            {c}
                        </PreviewContent>
                    </Preview>
                )        
                }
             </CollectionBoard>
         </Layout>
     )
}


export default HomePage;
