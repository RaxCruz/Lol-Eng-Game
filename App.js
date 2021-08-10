import React from "react";
import "./App.scss";
import Card from "./src/Card/Card";
import Header from "./src/Header/Header";
import SelectChar from "./src/SelectChar/SelectChar";
import LolMain from "./src/LolMain/LolMain";
import {
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import champions from "./src/Champion.json";

<LolMain />;
const App = () => {
  const LolRoute = champions.map((champion) => {
    return (
      <Route path={`/${champion.name[0]}`}>
        <LolMain
          name={champion.name[0]}
          imgName={champion.imgName[0]}
          id={champion.id}
          key={champion.id}
        />
      </Route>
    );
  });
  return (
    <Router>
      <div className="app-wrap">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-side-bar">
          <Route path="/">
            <SelectChar />
          </Route>
        </div>

        <Switch>{LolRoute}</Switch>
      </div>
    </Router>
  );
};

export default App;
