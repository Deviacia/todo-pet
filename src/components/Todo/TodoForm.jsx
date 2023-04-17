import React, { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = (event, todo) => {
        event.preventDefault();

        addTodo(todo)
        setTodo('')
    }

    return (
        <form onSubmit={(e) => handleSubmit(e, todo)} className={styles.form}>
            <input
                type="search"
                value={todo}
                placeholder={'Type your task...'}
                className={styles.textfield}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                disabled={todo === ''}
                className={styles.button}
            >
                Add todo
            </button>
        </form>
    )
}

export default TodoForm