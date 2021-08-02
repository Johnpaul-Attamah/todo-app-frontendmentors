import React from 'react';
import { Wrapper } from '../styles/Wrapper.style';
import Todo from './Todo';

const Container = ({ onToggle }) => {
    return (
        <Wrapper role="main">
            <div className="top-wrapper"></div>
            <Todo onToggle={onToggle}/>
        </Wrapper>
    );
};

export default Container;