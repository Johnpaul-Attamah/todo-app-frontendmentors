import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { HeaderStyles } from '../styles/Header.style';

const Header = ({ onToggle }) => {
    const {icon} = useContext(ThemeContext);
    return (
        <HeaderStyles>
            <h1>Todo</h1>
            <div style={{cursor: 'pointer'}} onClick={onToggle}>{ icon }</div>
        </HeaderStyles>
    )
}

export default Header
