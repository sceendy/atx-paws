import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../components/Button';
import '../../../components/Form';
import { ETIME } from 'constants';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = props;

    this.updateSex = this.updateSex.bind(this);
    this.updateType = this.updateType.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.onChange(this.state);
  }

  updateSex(e) {
    this.setState({sex: e.target.value});
  }

  updateAge(e) {
    this.setState({age: e.target.value});
  }

  updateType(e) {
    let prevButtonSelected = document.getElementsByName(this.state.petType)[0];
    if (prevButtonSelected) prevButtonSelected.classList.remove('btn-group__item--selected');
    this.setState({petType: e.target.name});
    e.target.classList.add('btn-group__item--selected');
  }

  componentDidUpdate() {
    let initialType = document.getElementsByName(this.state.petType)[0];

    if (this.state.petType && initialType) {
      initialType.classList.add('btn-group__item--selected');
    }
  }

  render() {
    return (
      <div className="form__container--inline">
        <form className="form__group--inline">
          <div 
            className="btn-group" 
            role="group" 
            aria-label="Pet Type" 
            onClick={this.updateType}
          >
            <button type="button" className="btn btn--secondary btn-group__item" name="dog">dog</button>
            <button type="button" className="btn btn--secondary btn-group__item" name="cat">cat</button>
            <button type="button" className="btn btn--secondary btn-group__item" name="all">both</button>
          </div>
          <div className="select__container--custom">
            <select 
              className="select--custom btn btn--secondary" 
              value={this.state.sex} 
              onChange={this.updateSex}
            >
              <option value="m">Male</option>
              <option value="f">Female</option>
              <option value="all">Males/Females</option>
            </select>
          </div>
          <div className="select__container--custom">
            <select 
              className="select--custom btn btn--secondary" 
              value={this.state.age} 
              onChange={this.updateAge}
            >
              <option value="puppy">Puppy</option>
              <option value="kitten">Kitten</option>
              <option value="young">Young</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
              <option value="all">All Ages</option>
            </select>
          </div>
          <div>
            <input type="checkbox" id="immediate" name="immediate" value="optional" />
            <label htmlFor="optional">Immediate</label>
          </div>
          <div>
            <input type="checkbox" id="specialNeeds" name="specialNeeds" value="optional" />
            <label htmlFor="optional">Special needs</label>
          </div>
          <div>
            <input type="checkbox" id="available" name="available" value="optional" />
            <label htmlFor="available">Available</label>
          </div>
          <button 
            type="submit" 
            className="btn btn--primary text--center" 
            onClick={this.handleFormSubmit}
          >
            Search Pets
          </button>
        </form>
      </div>
    )
  }
};

FilterForm.propTypes = {
  sex: PropTypes.string,
  petType: PropTypes.string,
  age: PropTypes.string,
  onChange: PropTypes.func,
};

export default FilterForm;