import React from "react";
import "./Home.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";


class Home extends React.Component {
  render() {
    const { harryPotter, filterName, handleFilterName } = this.props;
    return (
      <div className="title__container">
        <h1 className="title__home">Harry Potter List</h1>
        <Filters handleFilterName={handleFilterName} />
        <CharacterList harryPotter={harryPotter} filterName={filterName} />
      </div>
    );
  }
}

export default Home;
