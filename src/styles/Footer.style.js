import styled from 'styled-components';

export const StyledFooter = styled.footer`
    width: 100%;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .attribution { 
        font-size: 12px; 
        margin-top: 4rem;
        color: ${(props) => props.theme.footerFg};
    }
    .attribution a { 
        color: hsl(228, 45%, 44%); 
        font-size: inherit;
        line-height: 2.5rem;
    }

    h4 {
        font-size: 1.6rem;
        color: hsl(236, 9%, 64%);
        letter-spacing: .14rem;
        text-decoration: none;

    }
`;