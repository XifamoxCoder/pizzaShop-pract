import {forwardRef} from 'react';
import styles from './Input.module.css'
import cn from 'classnames';
import {InputProps} from "./Input.props.ts";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, isValid, ...props }, ref) {
  return (
    <input {...props} ref={ref} className={cn(styles['input'], className, {
      [styles['invalid']]: !isValid,
    })}/>
  )
})

export default Input
