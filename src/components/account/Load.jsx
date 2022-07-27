import React from "react";
import './Load.css';
import loading from '../../items/icon/loading-icon.svg';


export const Load = () => {
  return (
    <div className="loading">
      <img src={loading} alt="loading" />
      <div className="loading-text">Загрузка...</div>
    </div>
  );
};
