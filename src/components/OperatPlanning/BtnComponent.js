import React from "react";
import "./Footer.css";

export function BtnComponent(props) {
  return (
    <div>
      {props.status === 0 ? (
        <button className="button-start" onClick={props.start}>
          Начать измерения
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <button className="button-stop" onClick={props.stop}>
          Остановить измерения
        </button>
      ) : (
        ""
      )}
    </div>
  );
}


