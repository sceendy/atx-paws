import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const ButtonGroup = ({ value, options, label, onChange, selected }) => {
	const buttons = options.map((btn, i) => {
		return <button 
			key={i}
			name={btn.name}
			type="button"
			onClick={() => onChange(btn.name)}
			className={`btn btn--primary-inverted btn-group__item 
				${btn.name === selected ? 'btn-group__item--selected' : ''}`
			}
		>
			{ btn.type === 'image' &&
				<img src={btn.content} alt={`${btn.name} icon`} name={btn.name} />
			}
			{btn.type === 'text' ? 'both' : ''}
		</button>
	});

	return (
		<div
			className="btn-group"
			role="group" 
			aria-label={label}
		>
    	<legend className="u--hide">{label}</legend>
			{buttons}
		</div>
	);
}
ButtonGroup.propTypes = {
	/** button options */
	options: PropTypes.array.isRequired,
	/** sets selected button */
	selected: PropTypes.string,
	/** Gets called when the user clicks on the button */
	onChange: PropTypes.func,
	/** sets aria label value */
	label: PropTypes.string,
};

ButtonGroup.defaultProps = {
	onChange: () => {},
};

export default ButtonGroup;