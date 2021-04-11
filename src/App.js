import React, {useState, useEffect} from "react";
import "./App.css";
import CharacterDetails from "./components/CharacterDetails";
import Home from "./components/Home";
import fetchHarry from './services/fetchHarry';
import { Route, Switch } from "react-router-dom";


const App = () => {
 
  const [harryPotter,  setHarryPotter] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    fetchHarry()
      .then(data => {
        const newData = data.map((item, index) => {
          return { ...item, id: index };
        });
        setHarryPotter(newData);
      });
      return () => {
        setFilterName("");
      }

  }, []);

  const  handleFilterName = (event)  => {
    setFilterName(event.currentTarget.value);
  }

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
                handleFilterName={handleFilterName}
              />
            )}
          />
          <Route
            path="/character/:id"
            render={props => (
              <CharacterDetails
                match={props.match}
                harryPotter={harryPotter}
              />
            )}
          />
        </Switch>
      </div>
  );
}

export default App;
