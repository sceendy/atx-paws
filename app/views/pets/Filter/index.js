import React, { Component } from 'react';

export default class FilterForm extends Component {
  render() {
    return (
      <div className="form__container--inline">
        <h2>
          <i className="material-icons u--teal">filter_list</i>
          <span>Filter details about your pet</span>
        </h2>
        <form className="form__group--inline">
          <div className="btn-group" role="group" aria-label="Pet Type">
            <button type="button" className="btn btn--secondary btn-group__item">dog</button>
            <button type="button" className="btn btn--secondary btn-group__item">cat</button>
            <button type="button" className="btn btn--secondary btn-group__item">all</button>
          </div>
          <div className="select__container--custom">
            <select className="select--custom btn btn--secondary">
              <option>Neutered Male</option>
              <option>Spayed Female</option>
            </select>
          </div>
          <button type="submit" className="btn btn--primary">Apply Filter</button>
        </form>
      </div>
    )
  }
}