import React from 'react';
import { StyledControlBar } from '../styles/ControlBar.style';

const ControlBar = ({ onToggleTodo, onClear, todoCount, filterTodo }) => {
    return (
        <StyledControlBar>
            <div className="control-items">{todoCount} item{todoCount > 1 ? "s" : ""} left</div>
            <div className="control-items desktop-control">
                <div 
                    className={filterTodo === 'all' ? "items active" : "items"}
                    onClick={() => onToggleTodo('all')}
                >All</div>
                <div 
                    className={filterTodo === 'pending' ? "items active" : "items"}
                    onClick={() =>onToggleTodo('pending')}
                >Active</div>
                <div 
                    className={filterTodo === 'completed' ? "items active" : "items"}
                    onClick={() =>onToggleTodo('completed')}
                >Completed</div>
            </div>
            <div className="control-items" onClick={onClear}> clear completed</div>
        </StyledControlBar>
    )
}

export default ControlBar
