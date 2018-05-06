import React, { Component } from 'react';
import PropTypes from 'prop-types';

const dog = require('../../../assets/dog.svg');
const cat = require('../../../assets/cat.svg');

import Button, { ButtonGroup } from '../../../components/Button';
import '../../../components/Form';

class FilterForm extends Component {
  render() {
    const petTypes = [
      { name: 'dog', type: 'image', content: dog },
      { name: 'cat', type: 'image', content: cat },
      { name: 'all', type: 'text', content: 'both' }
    ];
    
    return (
      <div className="form__container--inline">
        <p>Find your lost pet by filtering through the pets recently found by the Austin Animal Center. The database is updated hourly.</p>
        <form className="form__group--inline">
          <ButtonGroup
            label="Pet Type"
            onChange={petType => this.props.onChange({ ...this.props, petType })}
            selected={this.props.petType}
            options={petTypes}
          />
          <div className="select__container--custom">
            <select
              aria-label="Pet Gender"
              className="select--custom btn btn--primary-inverted"
              onChange={({ target: { value }}) => this.props.onChange({...this.props, sex: value})}
              value={this.props.sex}
            >
              <option value="Intact Male">Intact Male</option>
              <option value="Intact Female">Intact Female</option>
              <option value="Neutered Male">Neutered Male</option>
              <option value="Spayed Female">Spayed Female</option>
              <option value="all">All Males/Females</option>
            </select>
          </div>
          {/* <label htmlFor="atAAC">
            <input
              name="atAAC"
              type="checkbox"
              defaultChecked={this.props.atAAC}
              value={this.props.atAAC}
              onChange={(e) => this.props.onChange({...this.props, atAAC: e.getAttribute(checked) })}
            /> Only at AAC
          </label> */}
          <div className="flex--grow">
            <Button 
              type="primary"
              onClick={() => this.props.resetForm}
              text="Reset Filter"
            />
          </div>
        </form>
      </div>
    )
  }
};

FilterForm.propTypes = {
  sex: PropTypes.string,
  petType: PropTypes.string,
  atAAC: PropTypes.any,
  onChange: PropTypes.func,
  resetForm: PropTypes.func,
};

export default FilterForm;