import React from "react";
import { NavLink } from "react-router-dom";
import "./Days.css";
import "./Control.css";
import arrow from "../../items/icon/arrow.svg";
import doublearrow from "../../items/icon/double-arrow.svg";
import arrowdouwn from "../../items/icon/arrow-down.svg";

export const Days = () => {
  return (
    <div>
      <div className="sorted_menu">
        <div className="dropdown">
        <button className="dropbtn">
            <div className="item-btn">
              День <i className="fa fa-caret-down"></i>
            </div>
            <div>
              <img src={arrowdouwn} alt="arrow" />
            </div>
          </button>
          <div className="dropdown-content">
            <NavLink to="/mls1/control/" className="link">
              Аппарат
            </NavLink>
            <NavLink to="/mls1/control/hours" className="link">
              Час
            </NavLink>
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
                <a href="#" className="link">5</a>
                <a href="#"className="link">6</a>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="table-wrapper">
        <div className="table-scroll">
          <div className="table-placeholder"></div>
          <table className="main_table">
            <tr>
              <th rowspan="2" className="nameKA">
                Название КА
              </th>
              <th colspan="8" className="month">
                Май
              </th>
              <th colspan="9" className="month">
                Июнь
              </th>
            </tr>
            <tr>
              <th className="number">24</th>
              <th className="number">25</th>
              <th className="number">26</th>
              <th className="number">27</th>
              <th className="number">28</th>
              <th className="number">29</th>
              <th className="number">30</th>
              <th className="number">31</th>
              <th className="number">1</th>
              <th className="number">2</th>
              <th className="number">3</th>
              <th className="number">4</th>
              <th className="number">5</th>
              <th className="number">6</th>
              <th className="number">7</th>
              <th className="number">8</th>
              <th className="number">9</th>
            </tr>
            <tr className="margin"></tr>
            <tr>
              <td>Космический аппарат 1</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 2</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 4</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 5</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 6</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 7</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 8</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 9</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 10</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 11</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 12</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Космический аппарат 13</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
              <td>1/3</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
