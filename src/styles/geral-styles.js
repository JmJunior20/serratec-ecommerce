import styled from "styled-components";

export const NavBar = styled.ul`
    list-style-type: none;
    margin:0;
    padding:0;
    overflow: hidden;
    background-color:#333;

    li {
        float: left;
    }

    li a {
        display: block;
        color: #fff;
        padding: 15px 17px;
        text-decoration: none;
        text-align:center;

        :hover{
            background-color: #111;
        }

    }   
`;

export const DivPersonalizada = styled.div`
    width: ${props => props.width};
    border: ${props => props.border};
    padding: 25px; 
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop}
`;