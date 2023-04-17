import React from 'react'
import styles from './TextField.module.css'

const TextField = ({ placeholder, value, onChange, ...props }) => {
    return (
        <input
            type='text'
            placeholder={placeholder || 'Placeholder'}
            value={value}
            onChange={onChange}
            className={styles.textfield}
            {...props}
        />
    )
}

export default TextField