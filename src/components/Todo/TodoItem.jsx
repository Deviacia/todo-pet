import React, { useState, useContext } from 'react'
import { TodoContext } from './Todo'
import Checkbox from '../UI/Checkbox/Checkbox'
import TextField from '../UI/TextField/TextField'
import TodoButtons from './TodoButtons'
import TodoSublist from './TodoSublist'
import Button from '../UI/Button/Button'
import styles from './TodoItem.module.css'

const TodoItem = ({ todo }) => {
    const [taskTitle, setTaskTitle] = useState(todo.title)
    const [isExpanded, setIsExpanded] = useState(false);
    const context = useContext(TodoContext);

    return (
        <li className={!todo.isComplete
            ? styles.item
            : [styles.item, styles.item_completed].join(' ')
        }>
            <div className={styles.header}>
                {todo.sublist
                    ? <Button
                        className={styles.minimize}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? '-' : '+'}
                    </Button>
                    : null
                }
                <div className={styles.title}>
                    <div className={styles.main}>
                        <Checkbox
                            value={todo.isComplete}
                            onChange={() => context.toggleTodo(todo.id)}
                        />
                        {!todo.isEditable
                            ? <h2>{todo.title}</h2>
                            : <TextField
                                type="text"
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                            />
                        }
                    </div>
                    <TodoButtons
                        todo={todo}
                        taskTitle={taskTitle}
                        deleteTodo={context.deleteTodo}
                        editTodo={context.editTodo}
                        updateTodo={context.updateTodo}
                        completeTodo={context.completeTodo}
                    />
                </div>
            </div>
            {todo.sublist && isExpanded
                ? <TodoSublist sublist={todo.sublist} />
                : null
            }
        </li>
    )
}

export default TodoItem