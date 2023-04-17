import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, type, onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
            type={'button' || type}
            className={styles.button}
            {...props}
        >
            {children || 'Button'}
        </button>
    )
}

export default Button