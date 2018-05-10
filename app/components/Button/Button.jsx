import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ type, classNames, dataTest, onClick, disabled, text }) => {
	return (
		<button
			className={`btn btn--${type} ${classNames}`}
			onClick={onClick} 
			disabled={disabled}
			type={`${type === 'primary' ? 'submit' : 'button'}`}
			data-test={dataTest}
		>
			{text}
		</button>
	);
}

Button.propTypes = {
	/** Button label */
	text: PropTypes.node.isRequired,
	/** The color for the button */
	color: PropTypes.string,
	/** Disable button */
	disabled: PropTypes.bool,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
	dataTest: PropTypes.string
};

Button.defaultProps = {
	classNames: '',
	dataTest: 'button',
	type: 'primary',
	text: 'Hello',
	onClick: event => {
		console.log('You have clicked me!', event.target);
	},
};

export default Button;