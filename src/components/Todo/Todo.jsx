import React, { createContext } from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoTabs from './TodoTabs';
import TodoSort from './TodoSort';
import { useTodo } from '../../hooks/useTodo';
import styles from './Todo.module.css'

export const TodoContext = createContext();

const Todo = ({
    data,
    list = true,
    form = true,
    sort = true,
    // filter = false,
    tabs = false,
}) => {
    const {
        todos,
        deleteTodo,
        editTodo,
        updateTodo,
        addTodo,
        toggleTodo,
        sortTodos
    } = useTodo(data);

    return (
        <TodoContext.Provider value={{
            deleteTodo,
            editTodo,
            updateTodo,
            addTodo,
            toggleTodo
        }}>
            <div className={styles.todo}>
                {form ? <TodoForm addTodo={addTodo} /> : null}
                {tabs ? <TodoTabs addTodo={addTodo} /> : null}
                {sort ? <TodoSort todos={todos} sortTodos={sortTodos} /> : null}
                {/* {filter ? <TodoForm addTodo={addTodo} /> : null} */}
                {list ? <TodoList todos={todos} /> : null}
            </div>
        </TodoContext.Provider>
    )
}

export default Todo