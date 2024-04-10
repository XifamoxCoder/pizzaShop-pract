import {forwardRef} from 'react';
import styles from './Search.module.css'
import cn from 'classnames';
import {SearchProps} from "./Search.props.ts";

const Input = forwardRef<HTMLInputElement, SearchProps>(function Input({ className, isValid, ...props }, ref) {
  return (
    <div className={styles['input-wrapper']}>
    <input {...props} ref={ref} className={cn(styles['input'], className, {
      [styles['invalid']]: !isValid,
    })}/>
      <img className={styles['icon']} src='/assets/searchIcon.svg' alt='Иконка поиска'/>
    </div>
  )
})

export default Input
