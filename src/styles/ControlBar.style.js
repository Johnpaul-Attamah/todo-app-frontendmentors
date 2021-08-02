import styled from "styled-components";

export const StyledControlBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    padding: 3rem 2rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${(props) => props.theme.taskComplete};
    background-color: ${(props) => props.theme.todoBg};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    .control-items:last-child:hover {
        cursor: pointer;
        color: ${(props) => props.theme.todoBgInv};
    }
    
    .desktop-control {
        display: none;

        @media screen and (min-width: 750px) {
            display: flex;
            justify-content: space-between;

            & .items:not(:last-child) {
            margin-right: 2rem;
        }

        & .items {
            font-weight: 700;
            cursor: pointer;

            &:hover {
                color: ${(props) => props.theme.todoBgInv};
            }
        }

        & .items.active {
            color: hsl(220, 66%, 59%);
        }

        }
    }
`;