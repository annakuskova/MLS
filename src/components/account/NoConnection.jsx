import React from "react";
import { NavLink } from "react-router-dom";
import "./NoConnection.css";
import signal from "../../items/icon/network-signal.svg";
import checkMark from "../../items/status/checkMark.svg";
import laser from "../../items/status/laser.svg";
import userPhoto from "../../items/icon/userPhoto.svg";

export const NoConnection = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div>
            <NavLink to="#" className="disabled">
              <div className="item">
                <img src={checkMark} alt="работает" />
              </div>
              <div className="item">
                <img src={laser} alt="лазер" />
              </div>
              <div className="item">Контроль</div>
            </NavLink>
          </div>
          <div>
            <NavLink to="#" className="disabled">
              Оперативное планирование
            </NavLink>
          </div>
          <div>
            <NavLink to="#" className="disabled">
              Долгосрочное планирование
            </NavLink>
          </div>
          <div className="userBlock">
            <div>
              <img src={userPhoto} alt="фото профиля" />
            </div>
            <div className="nameProfile">
              <NavLink to="#" className="name-disabled">
                Петров Иван
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="connection">
        <img src={signal} alt="no connection" />
        <div className="connection-text">Нет связи</div>
      </div>
    </div>
  );
};
