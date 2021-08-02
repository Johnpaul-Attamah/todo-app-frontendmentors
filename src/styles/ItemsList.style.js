import styled from 'styled-components';

export const StyledItemsList = styled.section`
    width: 100%;
    border-radius: 5px;

    .card {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: var(--dark-shadow);
    }

    .item-box {
        width: 100%;
        margin-top: 2.2rem;

        & .completed span{
            text-decoration: line-through;
            color: ${(props) => props.theme.taskComplete};
        }

    }

    .item {
        font-size: 1.7rem;
        color: ${(props) => props.theme.todoFg};
        padding: 3rem 4rem 2rem 7.5rem;
        background-color: ${(props) => props.theme.todoBg};
        position: relative;
        display: flex;
        align-items: center;
        line-height: 2.4rem;
        border-bottom: 1px solid ${(props) => props.theme.taskBorder};
        cursor: move;

        &.dragging {
            opacity: 0.5;
        }

        &.target {
            border-style: double;
        }

        &:hover div:first-child {
            border: none;
            background-image: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        }

        &:hover div:first-child span {
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

        &:hover svg#delete-task {
            display: block;
        }

        @media screen and (min-width: 500px) {
            padding: 3rem 4rem 2rem 10rem; 
        }

        &:first-child{
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }

        & svg {
            display: block;
            position: absolute; 
            right: 7%;
            cursor: pointer;
        }

        & svg#delete-task {
            display: none;
        }
    }

    .mobile-control {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: hsl(236, 9%, 48%);
        padding: 3rem 0;
        margin-top: 2.2rem;
        background-color: ${(props) => props.theme.todoBg};
        border: none;
        border-radius: 5px;
        box-shadow: var(--dark-shadow);

        @media screen and (min-width: 750px) {
            display: none;
        }

        & .items:not(:last-child) {
            margin-right: 2rem;
        }

        & .items {
            font-weight: 700;
            cursor: pointer;

            &:hover {
            cursor: pointer;
            color: ${(props) => props.theme.todoBgInv};
        }
        }

        & .items.active {
            color: hsl(220, 66%, 59%);
        }
    }
`;