import styled from "styled-components";

export const StyledInputBox = styled.div`
    width: 100%;
    position: relative;
    font-size: 2.25rem;
    color: var(--color-input-text-label);
    label {
        display: block;
        position: absolute;
        width: 2.7rem;
        height: 2.7rem;
        position: absolute;
        top: 50%;
        left: 7%;
        transform: translate(-8%, -50%);
        border: 2px solid ${(props) => props.theme.taskBorder};;
        border-radius: 50%;
    }

    input {
        width: 100%;
        display: block;
        font-size: inherit;
        color: ${(props) => props.theme.todoFg};
        padding: 2rem 4rem 2rem 7.5rem;
        background-color: ${(props) => props.theme.todoBg};
        border: none;
        border-radius: 5px;

        @media screen and (min-width: 500px) {
            padding: 3rem 4rem 2rem 10rem; 
        }

        

        &:focus {
            outline: none;
            border: none;
        }
    }
`;