import styled from 'styled-components';

export const CircleStyle = styled.div`
    width: 2.7rem;
    height: 2.7rem;
    position: absolute;
    top: 50%;
    left: 7%;
    transform: translate(-8%, -50%);
    border: 2px solid ${(props) => props.theme.taskBorder};
    border-radius: 50%;
    z-index: 1;
    cursor: pointer;

    &:hover {
        border: none;
        background-image: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    }

    &:hover span {
        display: block;
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${(props) => props.theme.todoBg};
    }

    &:hover span svg {
        width: 18px;
        height: 25px;
    }
`;
