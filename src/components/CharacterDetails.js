import React from "react";
import "./CharacterDetails.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class CharacterDetails extends React.Component {
  componentWillUnmount() {
    this.props.resetFilters();
  }

  render() {
    const { harryPotter } = this.props;
    const harryId = this.props.match.params.id;
    const harryPrint = harryPotter[harryId];

    return (
      <React.Fragment>
        {harryPrint ? (
          <div className="character__details">
            <img
              className="character__photo"
              src={harryPrint.image}
              alt={"This is character" + harryPrint.name}
            />
            <div className="character__text">
              <h2>{harryPrint.name}</h2>
              <h3>{harryPrint.house}</h3>
              <h3>{harryPrint.dateOfBirth}</h3>
              <h3>{harryPrint.patronus}</h3>
              <h3>{harryPrint.alive ? "alive" : "dead"}</h3>
            </div>
          </div>
        ) : (
          <p>Loading character details</p>
        )}
        <div className="btn__return">
          <Link className="link__return" to="/">Return</Link>
        </div>
      </React.Fragment>
    );
  }
}

CharacterDetails.propTypes = {
  resetFilters: PropTypes.func,
  harryPotter: PropTypes.array
};

export default CharacterDetails;
