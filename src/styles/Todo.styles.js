import styled from 'styled-components';


export const TodoWrapper = styled.section`
    position: absolute;
    width: 88%;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

    @media screen and (min-width: 750px) {
        width: 68%; 
    }
    
    @media screen and (min-width: 1000px) {
        width: 40%; 
    }
`;