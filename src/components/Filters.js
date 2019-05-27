import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";

class Filters extends React.Component {
  render() {
    const { handleFilterName } = this.props;
    return (
      <div className="container__filterName">
        <label className="label__name" htmlFor="name__filterName">
          Search Character Name
        </label>
        <input type="text" id="name__filterName" onChange={handleFilterName} />
      </div>
    );
  }
}

Filters.propTypes = {
  handleFilterName: PropTypes.func
};

export default Filters;
