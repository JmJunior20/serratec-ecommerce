import styled from "styled-components";

// export const body = styled.Container`
//     margin: 0;
//     padding: 0;
// `;

export const DivPersonalizada = styled.div`
    width: ${props => props.width};
    border: ${props => props.border};
    padding: 25px; 
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop}
`;

export const DivPersonalizada2 = styled(DivPersonalizada)`
    display:grid;
    grid-template-columns: 1fr 3fr; 
    gap: 10px;
    padding:0;  
`;

export const DivPersonalizada3 = styled(DivPersonalizada)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    padding:0;
`;

export const Card = styled.div`
    width:400px;
    height:400px;
    border: 2px solid black;
    text-align: center;
    font-size: 15px;
    margin-bottom:2%; 
`;