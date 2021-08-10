import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "regenerator-runtime/runtime";
import axios from "axios";
import champions from "../Champion.json";
const CardContentLol = (props) => {
  const { path, url } = useRouteMatch();
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState({ source: null });
  const getRandomImg = () => {
    const imgMax = champions[props.id].cardImgMax;
    return Math.floor(Math.random() * imgMax);
  };
  useEffect(() => {
    const fetchImg = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
          props.imgName
        }_${getRandomImg()}.jpg`
      );
      setLoading(false);
    };
    fetchImg();
  }, []);
  return (
    <div className="wrap">
      <div className="card">
        <div className="card-img">
          {loading === true ? (
            <h1>loading...</h1>
          ) : (
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
                props.imgName
              }_${getRandomImg()}.jpg`}
              alt="no-img"
            />
          )}
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
