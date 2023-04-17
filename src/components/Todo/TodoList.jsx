import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({ todos }) => {
    return (
        <ul className={styles.todos}>
            {todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
    )
}

export default TodoList