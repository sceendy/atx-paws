import React, { Component } from 'react';
import PropTypes from 'prop-types';

const dog = require('../../../assets/dog.svg');
const cat = require('../../../assets/cat.svg');

import Button, { ButtonGroup } from '../../../components/Button';
import '../../../components/Form';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = props;

    this.updateSex = this.updateSex.bind(this);
    this.updateAtAAC = this.updateAtAAC.bind(this);
    this.updateType = this.updateType.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.filterSubmit(this.state);
  }

  updateSex(e) {
    e.preventDefault();
    this.setState({sex: e.target.value});
  }

  updateType(e) {
    e.preventDefault();
    this.setState({petType: e.target.name});
  }

  updateAtAAC(e) {
    e.preventDefault();
    this.setState({ atAAC: !e.target.getAttribute('value')});
  }

  render() {
    const petTypes = [
      { name: 'dog', type: 'image', content: dog },
      { name: 'cat', type: 'image', content: cat },
      { name: 'all', type: 'text', content: 'both' }
    ];
    
    return (
      <div className="form__container--inline">
        <form className="form__group--inline" onSubmit={this.handleFormSubmit}>
          <ButtonGroup
            label="Pet Type"
            onClick={this.updateType}
            selected={this.state.petType}
            options={petTypes}
          />
          <div className="select__container--custom">
            <select
              aria-label="Pet Gender"
              className="select--custom btn btn--primary-inverted"
              onChange={this.updateSex}
              value={this.state.sex}
            >
              <option value="Intact Male">Intact Male</option>
              <option value="Intact Female">Intact Female</option>
              <option value="Neutered Male">Neutered Male</option>
              <option value="Spayed Female">Spayed Female</option>
              <option value="all">All Males/Females</option>
            </select>
          </div>
          <label htmlFor="atAAC">
            <input
              name="atAAC"
              type="checkbox"
              value={this.state.atAAC}
              onChange={this.updateAtAAC}
            /> Only at AAC
          </label>
          <div className="flex--grow">
            <Button 
              type="submit" 
              classNames="btn--primary text--center"
              onClick={this.handleFormSubmit}
            >
              Search Pets
            </Button>
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
};

export default FilterForm;