import React from "react";
import "./App.css";
import Filters from "./components/Filters";
import CharacterList from "./components/CharacterList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      harryPotter: [],
      filterName: ""
    };
    this.handleFilterName = this.handleFilterName.bind(this);
  }

  componentDidMount() {
    this.getPotter();
  }

  getPotter() {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then(response => response.json())
      .then(data => {
        const newData = data.map((item, index) => {
          return { ...item, id: index };
        });
        console.log(newData);
        this.setState({
          harryPotter: newData
        });
      });
  }

  handleFilterName(event) {
    const trigger = event.currentTarget.value;
    this.setState({ filterName: trigger });
  }

  render() {
    return (
      <div>
        <h1>Harry Potter List</h1>
        <Filters handleFilterName={this.handleFilterName} />
        <CharacterList harryPotter={this.state.harryPotter}
        filterName = {this.state.filterName} />
      </div>
    );
  }
}

export default App;
