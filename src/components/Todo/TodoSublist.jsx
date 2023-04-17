import React from 'react'
import styles from './TodoSublist.module.css'

const TodoSublist = ({ sublist }) => {
    return (
        <ul className={styles.sublist}>
            {
                sublist.map(subtask => (
                    <li key={subtask.id} className={styles.item}>
                        <input
                            type='checkbox'
                            value={subtask.isComplete}
                            className={styles.checkbox}
                        // onChange={() => completeSubtask(subtasks.id)}
                        />
                        <span key={subtask.id}>{subtask.text}</span>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoSublist