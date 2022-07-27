import React from "react";
import "./Footer.css";

export const FooterOff = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <button className="button-add">Добавить</button>
        <div className="footer-text">
          <div className="secondStr">
            <div className="time-seanse">Время сеанса: 3:21</div>
            <div className="dimension">Измерений: 1896 (+18/сек)</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
