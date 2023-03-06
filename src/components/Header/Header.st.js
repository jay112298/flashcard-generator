import styled from "styled-components";

export const HeaderBar = styled.section`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background: #fff;
    -webkit-box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.5);

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
