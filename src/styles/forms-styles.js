import styled from "styled-components";

export const InputText = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0px;
    display: inline-block;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Select = styled(InputText)`

`;

export const Button = styled.button`
    width: 100%;
    background-color: purple;
    color: #fff;
    padding: 14px 20px;
    margin: 8px 0px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    :hover{
        background-color: deeppink;
    }
`;
