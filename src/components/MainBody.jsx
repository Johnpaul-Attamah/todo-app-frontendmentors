import React, { useState, useEffect, useCallback, useRef } from 'react';
import InputBox from './InputBox';
import ItemsList from './ItemsList';
import { StyledMainBody } from '../styles/MainBody.style';

const MainBody = () => {

    const [newTask, setNewTask] = useState('');
    const [todo, setTodo] = useState([]);
    const [filterTodo, setFilterTodo] = useState('all');


    const draggingItem = useRef();
    const dragOverItem = useRef();

    const handleTodoFilter = useCallback(() => {
            let tasks;
            switch(filterTodo) {
                case 'all':
                    tasks = todo;
                    break;
                case 'pending':
                    let pendingTasks = todo.filter(t => !t.isCompleted || t.isCompleted === false);
                    tasks = pendingTasks;
                    break;
                case 'completed':
                    let completedTasks = todo.filter(t => t.isCompleted === true);
                    tasks = completedTasks;
                    break;
                default:
                    tasks = todo;
            }
            return tasks;
        },[filterTodo, todo],)

    useEffect(() => {
        const oldTodo = localStorage.getItem('todo');

        if(oldTodo) setTodo(JSON.parse(oldTodo));
    },[]);

    useEffect(() => {
        handleTodoFilter();
        localStorage.setItem('todo', JSON.stringify(todo));
    },[handleTodoFilter, todo])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newTask) return;
        addTodo(newTask);
        setNewTask('');
    } 

    const addTodo = item => {
        const newTodo = [...todo, { item }];
        setTodo(newTodo)
    }

    const handleCompleteToggle = index => {
        const todoCopy = [...todo];
        todoCopy[index].isCompleted = !todoCopy[index].isCompleted;
        setTodo(todoCopy);
    }


const toggleTodoDisplay = input => setFilterTodo(input);


    const handleDelete = index => {
        const filteredTodo = todo.filter((td, idx) => idx !== index);
        setTodo(filteredTodo);
    }

    const handleClearCompleted = () => {
        let pendingTasks = todo.filter(t => !t.isCompleted || t.isCompleted === false);
        setTodo(pendingTasks);
    }

    let todoTasks = handleTodoFilter();

    //Drag and Drop

    const handleDragStart = (e, position) => {
        e.target.classList.add('dragging');
        draggingItem.current = position;
    }

    const handleDragEnter = (e, position) => {
        e.target.classList.add('target');
        dragOverItem.current = position;
        
        const listCopy = [...todo];

        const draggingItemContent = listCopy[draggingItem.current];
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(dragOverItem.current, 0, draggingItemContent);

        draggingItem.current = dragOverItem.current;
        dragOverItem.current = null;
        setTodo(listCopy);
    }
    
    const handleDragLeave = (e) => {
        e.preventDefault()
        e.target.classList.remove('target');
    }

    const handleDragEnd = (e) => {
        e.preventDefault();
        const list = [...document.querySelectorAll('.item')];
        e.target.classList.remove('dragging');
        list.forEach(item => item.classList.remove('target'));
    }


    return (
        <StyledMainBody>
            <InputBox
                newTask={newTask}
                onChange={e => setNewTask(e.target.value)}
                onSubmit={handleSubmit}
            />
            <ItemsList 
                todo={todo}
                todoTasks={todoTasks}
                filterTodo={filterTodo}
                onComplete={handleCompleteToggle}
                onDelete={handleDelete}
                onToggleTodo={toggleTodoDisplay}
                onClear={handleClearCompleted}
                onDragStart={handleDragStart}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragEnd={handleDragEnd}
            />
        </StyledMainBody>
    )
}

export default MainBody
