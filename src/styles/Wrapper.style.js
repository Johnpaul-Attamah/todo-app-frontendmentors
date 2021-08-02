import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.bgColor};
    position: relative;

    .top-wrapper {
        width: 100%;
        height: 32vh;
        background-image: ${ (props) => props.theme.bgImageMb};
        background-size: cover;
        background-repeat: no-repeat;

        @media screen and (min-width: 750px) {
            height: 42vh;
            background-image: ${ (props) => props.theme.bgImageDsk}; 
        }
    }
`;



