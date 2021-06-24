import styled from "styled-components";

export const NavBar = styled.ul`
    list-style-type: none;
    margin:0;
    padding:0;
    overflow: hidden;
    background-color:#333;
    text-align: center;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    align-items: center;


    a {
        color: #fff;
        padding: 15px 17px;
        text-decoration: none;
    }

    img {
        border-radius: 4px;
        width:80px;
        height: 50px;
    }   
`;