import React from "react";
import "./NoConnection.css";
import signal from "../../items/icon/network-signal.svg";

export const NoConnection = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div>
            <NavLink to="/mls1/control" className={setActive}>
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
            <NavLink to="/mls1/OP" className={setActive}>
              Оперативное планирование
            </NavLink>
          </div>
          <div>
            <NavLink to="/mls1/DP" className={setActive}>
              Долгосрочное планирование
            </NavLink>
          </div>
          <div className="userBlock">
            <div>
              <img src={userPhoto} alt="фото профиля" />
            </div>
            <div className="nameProfile">
              <NavLink to="/" className="name">
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
    </>
  );
};
