import React from 'react';
import styled from 'styled-components';


const CompletedMark = styled.div`
    width: 2.7rem;
    height: 2.7rem;
    background-image: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    position: absolute;
    top: 50%;
    left: 7%;
    transform: translate(-8%, -50%);
    border: 2px solid ${(props) => props.theme.taskBorder};
    border-radius: 50%;
    cursor: pointer;

    svg {
        @media screen and (min-width: 750px) {
            width: 16px;
            height: 24px;
        }
    }
    
`;

const CompletedTasks = () => {
    return (
        <CompletedMark>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0, 0, 11, 9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
        </CompletedMark>
    )
}

export default CompletedTasks;
