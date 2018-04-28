import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const ButtonGroup = ({ onClick, selected, options, label }) => {
	return (
		<div className="btn-group" onClick={onClick} role="group" aria-label={label}>
    	<legend className="u--hide">{label}</legend>
			{ options.map(btn => 
					<button
						key={btn.name}
						type="button" 
						className={`btn btn--primary-inverted btn-group__item 
							${btn.name === selected ? 'btn-group__item--selected' : ''}`}
						name={btn.name}
					>
						{ btn.type === 'image' &&
							<img src={btn.content} alt={`${btn.name} icon`} name={btn.name} />
						}
						{btn.type === 'text' ? 'both' : ''}
					</button>
			)}
		</div>
	);
}
ButtonGroup.propTypes = {
	/** button options */
	options: PropTypes.array.isRequired,
	/** sets selected button */
	selected: PropTypes.string,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
	/** sets aria label value */
  label: PropTypes.string,
};

ButtonGroup.defaultProps = {
	onClick: event => {
		console.log('You have clicked me!', event.target);
	},
};

export default ButtonGroup;