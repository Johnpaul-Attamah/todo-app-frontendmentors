import React from 'react';
import ControlBar from './ControlBar';
import { CircleStyle } from '../styles/circle.style';
import DeleteTask from '../images/vectors/deleteTask';
import CompletedTasks from '../images/vectors/completedTasks';
import { StyledItemsList} from '../styles/ItemsList.style';

const ItemsList = ({ 
    todoTasks, 
    todoPending, 
    filterTodo, 
    onComplete, 
    onDelete, 
    onToggleTodo,
    onClear,
    onDragStart,
    onDragEnter,
    onDragLeave,
    onDragEnd
}) => {

    return (
        <StyledItemsList>
            <div className="card">
                <div className="item-box">
                    {
                        todoTasks.map((task, index) => (
                            <div 
                                draggable
                                onDragStart={(e) => onDragStart(e, index)}
                                onDragEnter={(e) => onDragEnter(e, index)}
                                onDragLeave={onDragLeave}
                                onDragOver={(e) => e.preventDefault()}
                                onDragEnd={onDragEnd}
                                className={ task.isCompleted ? "item completed" : "item"}
                                key={index}
                            >
                                <CircleStyle
                                    onClick={() => onComplete(index)}
                                ><span>
                                    { task.isCompleted && <CompletedTasks/> }
                                </span></CircleStyle>
                                <span>{task.item}</span>
                                <DeleteTask onDeleteTask={() => onDelete(index)}/>
                            </div>
                        ))
                    }
                </div>
                <ControlBar 
                    todoCount={todoPending.length}
                    filterTodo={filterTodo}
                    onToggleTodo={onToggleTodo}
                    onClear={onClear}
                />
            </div>
            <div className="mobile-control">
                <div 
                    className={filterTodo === 'all' ? "items active" : "items"}
                    onClick={() =>onToggleTodo('all')}
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
        </StyledItemsList>
    )
}

export default ItemsList
