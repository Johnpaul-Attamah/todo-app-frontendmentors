import React from 'react';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';
import { TodoWrapper } from '../styles/Todo.styles';

const Todo = ({ onToggle }) => {
    return (
        <TodoWrapper>
            <Header onToggle={onToggle}/>
            <MainBody/>
            <Footer/>
        </TodoWrapper>
    )
}

export default Todo
