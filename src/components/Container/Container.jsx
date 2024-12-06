import React from 'react'
import styles from './Container.module.css'

const Container = ({ className, children, ...props }) => {
  return (
    <div className={`${styles.con} ${className}`} {...props}>
        {children}
    </div>
  )
}

export default Container