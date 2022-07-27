import React from "react";
import "./CheckBox.css";
import { FooterOff } from "./FooterOff";
import { FooterOn } from "./FooterOn";
import { MainOff } from "./MainOff";
import { MainOn } from "./MainOn";

export const CheckBox = () => {
  const [cheched, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!cheched);
  };

  const time = new Date();
  const showTime = time.getHours() + ":" + time.getMinutes();

  return (
    <div>
      <div className="manualControl">
        <div className="checkBoxText">Ручное управление</div>
        <div className="checkBox">
          <input
            type="checkbox"
            cheched={cheched}
            id="checkbox"
            onChange={handleChange}
          />
        </div>
        <div className="time">Время МЛС: {showTime}</div>
      </div>
      <div>
        {cheched ? <MainOn /> : <MainOff />}
        {cheched ? <FooterOn /> : <FooterOff />}
      </div>
    </div>
  );
};
