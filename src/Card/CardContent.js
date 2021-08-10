import React from "react";
import champions from "../Champion.json";
const CardContent = (props) => {
  const getRandomImg = () => {};
  getRandomImg;
  return (
    <div className="wrap">
      <div className="card">
        <div className="card-img">
          <img src="" alt="not-found" />
        </div>
        <div className="card-body">
          <div className="card-title">Aatrox</div>
          <div className="card-info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            praesentium beatae, possimus cumque veritatis incidunt cupiditate
            maiores placeat consectetur perspiciatis.
          </div>
        </div>
        <div className="card-footer">
          <div className="card-btn">
            <div>技能</div>
          </div>
          <div className="card-btn">
            <div>故事</div>
          </div>
          <div className="card-btn">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
