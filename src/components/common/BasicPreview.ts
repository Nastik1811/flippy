import styled from "styled-components";

export const BasicPreview = styled.div`
    position: relative;
    height: 170px;
    border-radius: 8px;
    background-color: rgb(206, 239, 252);

    &:hover {
        background-color: rgb(138, 209, 236);
        box-shadow: 0px 0px 15px rgba(45, 92, 116, 0.4);
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid rgba(55, 115, 145, 0.856);
        left: 7px;
        bottom: 7px;
    }

    &:hover::before {
        border-color: rgb(55, 115, 145);
    }
`