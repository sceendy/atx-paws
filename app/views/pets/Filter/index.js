import React, { Component } from 'react';
import PropTypes from 'prop-types';

const dog = require('../../../assets/dog.svg');
const cat = require('../../../assets/cat.svg');

import '../../../components/Button';
import '../../../components/Form';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = props;

    this.updateSex = this.updateSex.bind(this);
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
    this.resetButtonGroup();
    this.setState({petType: e.target.name});
    e.target.classList.add('btn-group__item--selected');
  }

  resetButtonGroup() {
    let buttonGroup = document.getElementsByClassName('btn-group')[0];
    buttonGroup.childNodes.forEach(c => c.classList.remove('btn-group__item--selected'));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      //this.resetButtonGroup();
      let initialType = document.getElementsByName(nextProps.petType)[0];
      initialType.classList.add('btn-group__item--selected');
      return {...nextProps};
    }
    return null;
  }

  render() {
    return (
      <div className="form__container--inline">
        <form className="form__group--inline" onSubmit={this.handleFormSubmit}>
          <div 
            className="btn-group" 
            role="group" 
            aria-label="Pet Type" 
            onClick={this.updateType}
          >
            <legend className="u--hide">Pet Type</legend>
            <button type="button" className="btn btn--primary-inverted btn-group__item" name="dog">
              <img src={dog} alt="dog icon" />
            </button>
            <button type="button" className="btn btn--primary-inverted btn-group__item" name="cat">
              <img src={cat} alt="cat icon" />
            </button>
            <button type="button" className="btn btn--primary-inverted btn-group__item" name="all">both</button>
          </div>
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
          <div className="flex--grow">
            <button 
              type="submit" 
              className="btn btn--primary text--center" 
            >
              Search Pets
            </button>
          </div>
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