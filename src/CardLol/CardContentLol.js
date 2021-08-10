import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import champions from "../Champion.json";

const CardContentLol = (props) => {
  const { path, url } = useRouteMatch();

  const getRandomImg = () => {
    const imgMax = champions[props.id].cardImgMax;
    return Math.floor(Math.random() * imgMax);
  };

  return (
    <div className="wrap">
      <div className="card">
        <div className="card-img">
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
              props.imgName
            }_${getRandomImg()}.jpg`}
            alt="no-img"
          />
        </div>
        <div className="card-footer">
          <Link className="card-btn card-btn-first" to={`${path}/skills`}>
            技能
          </Link>

          <Link className="card-btn" to={`${path}/storys`}>
            故事
          </Link>
          <Link className="card-btn card-btn-last" to={`${path}/lines`}>
            台詞
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardContentLol;
