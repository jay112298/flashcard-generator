import styled from "styled-components";

export const HeaderBar = styled.section`

    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.71);

    .logo-section {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .text {
            font-size: 50px;
            color: #da1124;
            font-family: "Tilt Neon", cursive;
        }
  }
`;
