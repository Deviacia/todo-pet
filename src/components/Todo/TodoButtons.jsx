import Button from "../UI/Button/Button";
import styles from './TodoButtons.module.css';

const TodoButtons = ({
    updateTodo,
    editTodo,
    deleteTodo,
    todo,
    taskTitle
}) => {
    return (
        <div className={styles.buttons}>
            {
                todo.isEditable
                    ? <>
                        <Button
                            onClick={() => updateTodo(todo.id, taskTitle)}
                            disabled={todo.title === taskTitle}
                        >
                            Save
                        </Button>
                        <Button onClick={() => editTodo(todo.id)}>Cancel</Button>
                    </>
                    : <>
                        <Button onClick={() => editTodo(todo.id)}>Edit</Button>
                        <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
                    </>
            }
        </div>
    )
}

export default TodoButtons