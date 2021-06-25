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
    margin-top: ${props => props.marginTop};
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
    width: 250px;
    height: 320px;
    border: 2px solid #ccc;
    border-radius: 2px;
    -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
	-moz-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
	box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
    text-align: center;
    font-size: 15px;
    margin-bottom:2%; 
`;

export const DivPersonalizada4 = styled(DivPersonalizada)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
`;

export const Card3 = styled(Card)`
    width: auto;
    height: 150px;
    padding:1%;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;    

`;

export const Card4 = styled(Card)`
    width: auto;
    height: 280px;
    padding:1%;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 

`;

export const DivPersonalizada5 = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 5px;
    align-items: center;
`;

export const DivPersonalizada6 = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 5px;
    align-items: center;
`;