import React, { useState } from 'react'
import styles from './TodoSort.module.css'

const TodoSort = ({ todos, sortTodos }) => {

    return (
        <div className={styles.sort}>
            <select onChange={(e) => sortTodos(e.target.value)}>
                <option value={'id'}>ID</option>
                <option value={'title'}>TITLE</option>
            </select>
        </div>
    )
}

export default TodoSort