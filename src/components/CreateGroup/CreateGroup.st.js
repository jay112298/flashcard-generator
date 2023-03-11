import styled from "styled-components"


export const Card = styled.div`

    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 1px 2px #808080;
    font-family: "Tilt Neon", cursive;
    display: block;
    display: flex;
    flex-direction: column;
    

    .heading {
        padding: 15px 15px;
    }

    input {
        margin: 15px 15px;
        border: solid 1px #808080;
        border-radius: 3px;
        height: 25px;
        width: 200px;
        padding-left: 5px;
        font-family: "Tilt Neon", cursive;
    }

    .description {
        width: 600px;
        height: 100px;
    }
`