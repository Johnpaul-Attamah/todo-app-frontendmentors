import styled from 'styled-components';

export const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;

    h1 {
        margin: 5rem 0;
        font-size: 3.5rem;
        font-weight: 700;
        color: var(--color-main-text);
        text-transform: uppercase;
        letter-spacing: 1.2rem;

        @media screen and (min-width: 750px) {
            font-size: 4rem;
        }
    }

`;
