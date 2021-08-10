import React from "react";
import "./index.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import champions from "../Champion.json";
import Game from "../Game/Game";
import CardLol from "../CardLol/CardLol";
function LolMain(props) {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <div className="LolMain-Out-Wrap">
        <div className="left">
          <CardLol imgName={props.imgName} id={props.id} />
        </div>
        <div className="right"></div>
        <Route path={`${url}/skills`}>
          <Game
            name={props.name}
            id={props.id}
            mode={champions[props.id].skills}
            param="skills"
          />
        </Route>
        <Route path={`${url}/storys`}>
          <Game
            name={props.name}
            id={props.id}
            mode={champions[props.id].storys}
            param="storys"
          />
        </Route>
        <Route path={`${url}/lines`}>
          <div className="lines">
            <h1>敬啟期待 !!</h1>
            <h3>施工中</h3>
            <img
              src="http://pngimg.com/uploads/under_construction/under_construction_PNG6.png"
              alt=""
            />
            <h4>Rax</h4>
          </div>
        </Route>
      </div>
    </Switch>
  );
}

export default LolMain;
