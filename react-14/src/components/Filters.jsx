import React from 'react';
import './Filters.scss';

class Filters extends React.Component {
  render() {
    const { searchTerm, handleInputChange, handleClick, active } = this.props;

    return (
      <div data-testid="filters" className="container">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={handleInputChange}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            id="name"
            className={`${
              active === 'name' ? 'filters__item is-selected' : 'filters__item'
            }`}
            onClick={(event) => handleClick(event)}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button
            id="country"
            className={`${
              active === 'country'
                ? 'filters__item is-selected'
                : 'filters__item'
            }`}
            onClick={(event) => handleClick(event)}
          >
            País <i className="fas fa-sort-down" />
          </button>

          <button
            id="company"
            className={`${
              active === 'company'
                ? 'filters__item is-selected'
                : 'filters__item'
            }`}
            onClick={(event) => handleClick(event)}
          >
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button
            id="department"
            className={`${
              active === 'department'
                ? 'filters__item is-selected'
                : 'filters__item'
            }`}
            onClick={(event) => handleClick(event)}
          >
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button
            id="admissionDate"
            className={`${
              active === 'admissionDate'
                ? 'filters__item is-selected'
                : 'filters__item'
            }`}
            onClick={(event) => handleClick(event)}
          >
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;
