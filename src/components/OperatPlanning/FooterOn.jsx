import React, { useState } from "react";
import { BtnComponent } from "./BtnComponent";
import "./Footer.css";

export const FooterOn = () => {
  const [status, setStatus] = useState(0);

  const start = () => {
    setStatus(1);
  };

  const stop = () => {
    setStatus(0);
  };

  return (
    <footer>
      <div className="footer-wrapper">
        <BtnComponent status={status} start={start} stop={stop} />
        {/* <button className="button-stop">Остановить измерения</button> */}
        <div className="footer-text">
          <div className="numKA">
            <div className="numKA-text">Космический аппарат 6</div>
          </div>
          <div className="secondStr">
            <div className="time-seanse">Время сеанса: 3:21</div>
            <div className="dimension">Измерений: 1896 (+18/сек)</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
