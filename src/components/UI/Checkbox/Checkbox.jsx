import React from 'react'
import styles from './Checkbox.module.css'

const Checkbox = ({ placeholder, value, onChange, ...props }) => {
    return (
        <input
            type='checkbox'
            value={value}
            onChange={onChange}
            className={styles.checkbox}
            {...props}
        />
    )
}

export default Checkbox