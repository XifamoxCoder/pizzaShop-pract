import styles from './Title.module.css'
import cn from 'classnames';
import {TitleProps} from './Title.props.ts';

const Title = function Input({ children, className, ...props }:TitleProps) {
	return (
		<h1 className={cn(className, styles['h1'])} {...props}>{children} </h1>
	)
}

export default Title
