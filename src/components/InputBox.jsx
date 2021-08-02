import React from 'react';
import { StyledInputBox } from '../styles/InputBox.style';

const InputBox = ({ newTask, onChange, onSubmit }) => {
    return (
        <StyledInputBox>
            <form onSubmit={onSubmit}>
                <label htmlFor="task-input"></label>
                <input 
                    value={newTask}
                    type="text" 
                    id="task-input" 
                    onChange={onChange}
                    placeholder="Create a new todo..."
                />
            </form>
        </StyledInputBox>
    )
}

export default InputBox
