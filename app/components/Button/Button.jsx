import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ classNames, onClick, disabled, children }) => {
	const styles = {
		classNames,
	};

	return (
		<button className={`btn ${classNames}`} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}
Button.propTypes = {
	/** Button label */
	children: PropTypes.node.isRequired,
	/** The color for the button */
	color: PropTypes.string,
	/** Disable button */
	disabled: PropTypes.bool,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	color: '#333', // primary, secondary
	size: 'normal',
	onClick: event => {
		console.log('You have clicked me!', event.target);
	},
};

export default Button;