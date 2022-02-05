import classes from "./Button.module.css";

export default function Button({ className, onClick, children }) {
	return (
		<button
			className={`${classes.submitButton} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
