import React from "react";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import Home from "./components/Home";
import fetchHarry from './services/fetchHarry';
import { Route, Switch } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      harryPotter: [],
      filterName: ""
    };
    this.handleFilterName = this.handleFilterName.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  componentDidMount() {
    this.getPotter();
  }

  getPotter() {
    fetchHarry()
      .then(data => {
        const newData = data.map((item, index) => {
          return { ...item, id: index };
        });
        this.setState({
          harryPotter: newData
        });
      });
  }

  handleFilterName(event) {
    const trigger = event.currentTarget.value;
    this.setState({ filterName: trigger });
  }

  resetFilters() {
    this.setState({ filterName: "" });
  }

  render() {
    const { harryPotter, filterName } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                harryPotter={harryPotter}
                filterName={filterName}
                handleFilterName={this.handleFilterName}
              />
            )}
          />
          <Route
            path="/character/:id"
            render={props => (
              <CharacterDetails
                match={props.match}
                harryPotter={harryPotter}
                resetFilters={this.resetFilters}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
