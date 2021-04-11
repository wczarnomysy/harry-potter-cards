import React from "react";
import "./CharacterList.css";
import CharacterName from "./CharacterName";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

  const CharacterList = (props) => {
    return (
      <div>
        <ul className="harry__list">
          {props.harryPotter
            .filter(item =>
              item.name.toUpperCase().includes(props.filterName.toUpperCase())
            )
            .map((item, index) => (
              <li key={index}>
                <CharacterName
                  image={item.image}
                  name={item.name}
                  house={item.house}
                />
                <Link className="link__character" to={`/character/${item.id}`}>{item.name} Details</Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }

CharacterList.propTypes = {
  harryPotter: PropTypes.array,
  filterName: PropTypes.string
};

export default CharacterList;
