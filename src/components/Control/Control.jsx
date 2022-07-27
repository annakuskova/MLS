import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../items/icon/arrow.svg";
import doublearrow from "../../items/icon/double-arrow.svg";
import { Apparatus } from "./Apparatus";
import "./Control.css";
import { Days } from "./Days";
import { Hours } from "./Hours";

export const Control = () => {
  return (
    <div>
      <div className="sorted_menu">
        <div className="dropdown">
          <button class="dropbtn">
            Аппарат <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <NavLink to='/mls1/control/days' className='days'>День</NavLink>
            <NavLink to='/mls1/control/hours' className='hours'>Час</NavLink>
          </div>
        </div>
        <div className="page">
          <ul className="number_page">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>
              <img src={arrow} />
            </li>
            <li>
              <img src={doublearrow} />
            </li>
            <div className="text">
              <p>Показать:</p>
            </div>
            <div className="dropdown">
              <button className="dropbtnNum">
                4 <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">5</a>
                <a href="#">6</a>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <Apparatus />
    </div>
  );
};
