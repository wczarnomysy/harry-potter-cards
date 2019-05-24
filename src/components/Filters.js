import React from "react";

class Filters extends React.Component {
  render() {
      const{handleFilterName} = this.props
    return (
      <div className="container__filterName">
        <label htmlFor="name__filterName">Search Character Name</label>
        <input
          type="text"
          id="name__filterName"
          onChange={handleFilterName}
        />
      </div>
    );
  }
}

export default Filters;
