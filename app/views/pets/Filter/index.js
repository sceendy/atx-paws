import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../components/Button';
import '../../../components/Form';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petType: props.petType,
      sex: props.sex,
      submitForm: props.submitForm
    };
    
    this.updateSex = this.updateSex.bind(this);
    this.updateType = this.updateType.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let selectedFilters = {};
    Object.keys(this.state)
      .filter(k => this.state[k] !== undefined && this.state[k] !== 'Both' && this.state[k] !== 'all')
      .forEach(l => (selectedFilters[l] = this.state[l]));

    this.props.onChange(selectedFilters);
  }

  updateSex(e) {
    this.setState({sex: e.target.value});
  }

  updateType(e) {
    let prevButtonSelected = document.getElementsByName(this.state.petType)[0];
    if (prevButtonSelected) prevButtonSelected.classList.remove('btn-group__item--selected');
    
    this.setState({petType: e.target.name});
    
    e.target.classList.add('btn-group__item--selected');
  }

  componentDidMount() {
    let initialType = document.getElementsByName(this.state.petType)[0];
    initialType.classList.add('btn-group__item--selected');
  }

  render() {
    return (
      <div className="form__container--inline">
        <h2>
          <i className="material-icons u--teal">filter_list</i>
          <span>Provide details about your pet</span>
        </h2>
        <form className="form__group--inline">
          <div 
            className="btn-group" 
            role="group" 
            aria-label="Pet Type" 
            onClick={this.updateType}
          >
            <button type="button" className="btn btn--secondary btn-group__item" name="Dog">dog</button>
            <button type="button" className="btn btn--secondary btn-group__item" name="Cat">cat</button>
            <button type="button" className="btn btn--secondary btn-group__item" name="Both">both</button>
          </div>
          <div className="select__container--custom">
            <select 
              className="select--custom btn btn--secondary" 
              value={this.state.sex} 
              onChange={this.updateSex}
            >
              <option value="Intact Male">Intact Male</option>
              <option value="Intact Female">Intact Female</option>
              <option value="Neutered Male">Neutered Male</option>
              <option value="Spayed Female">Spayed Female</option>
              <option value="all">Males/Females</option>
            </select>
          </div>
          <button 
            type="submit" 
            className="btn btn--primary" 
            onClick={this.handleFormSubmit}
          >
            Search
          </button>
        </form>
      </div>
    )
  }
};

FilterForm.propTypes = {
  sex: PropTypes.string,
  petType: PropTypes.string,
  onChange: PropTypes.func,
};

export default FilterForm;