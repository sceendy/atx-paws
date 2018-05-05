import React from 'react';
import PropTypes from 'prop-types';

import './Badge.css';

const BadgeList = ({ classNames, items }) => {
	return (
    <ul className={`badge__list ${classNames}`}>
      { items.map((item, id) => (
         <li className="badge" key={id}>
          {item}
        </li>
      ))}
    </ul>
	);
};

BadgeList.propTypes = {
  items: PropTypes.array,
  classNames: PropTypes.string
};

BadgeList.defaultProps = {
  items: ['Number 1 Badge!', 'Number 2!'],
  classNames: ''
};

export default BadgeList;