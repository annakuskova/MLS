import "./Authorization.css";
import React from "react";

export const Authorization = () => {
  return (
    <div className="form">
      <div className="head">АВТОРИЗАЦИЯ</div>
      <div>
        <div>
          <input placeholder="Имя пользователя" className="inputName" />
        </div>
        <div>
          <input placeholder="Пароль" className="inputPass" />
        </div>
        <div>
          <button className="login" type="submit" children={"Войти"} />
        </div>
      </div>
    </div>
  );
};
