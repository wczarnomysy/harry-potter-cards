import React from "react";

class CharacterName extends React.Component {
  render() {
      const{image,name,house} = this.props
    return (
      <div className="container__card">
        <img
          className="card__photo"
          src={image}
          alt={"This is character:" + name}
        />
        <h2 className="card__name">{name}</h2>
        <h3 className="card__house">{house}</h3>
      </div>
    );
  }
}

export default CharacterName;
