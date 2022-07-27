import React from "react";
import { NavLink } from "react-router-dom";
import "./Days.css";
import "./Control.css";
import arrow from "../../items/icon/arrow.svg";
import doublearrow from "../../items/icon/double-arrow.svg";
import arrowdouwn from "../../items/icon/arrow-down.svg";
import res from "../../items/icon/res.png";

export const Hours = () => {
  return (
    <div>
      <div className="sorted_menu">
        <div className="dropdown">
          <button className="dropbtn">
            <div className="item-btn">
              Час <i className="fa fa-caret-down"></i>
            </div>
            <div>
              <img src={arrowdouwn} alt="arrow" />
            </div>
          </button>
          <div className="dropdown-content">
            <NavLink to="/mls1/control/" className="link">
              Аппарат
            </NavLink>
            <NavLink to="/mls1/control/days" className="link">
              День
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
                <a href="#" className="link">
                  5
                </a>
                <a href="#" className="link">
                  6
                </a>
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
                6 июня
              </th>
              <th colspan="8" className="month">
                7 июня
              </th>
            </tr>
            <tr>
              <th className="number">16:00</th>
              <th className="number">17:00</th>
              <th className="number">18:00</th>
              <th className="number">19:00</th>
              <th className="number">20:00</th>
              <th className="number">21:00</th>
              <th className="number">22:00</th>
              <th className="number">23:00</th>
              <th className="number">00:00</th>
              <th className="number">01:00</th>
              <th className="number">02:00</th>
              <th className="number">03:00</th>
              <th className="number">04:00</th>
              <th className="number">05:00</th>
              <th className="number">06:00</th>
            </tr>
            <tr>
              <td>Космический аппарат 1</td>
              <td colSpan="15">
                <img src={res} alt="img" className="res"/>
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 2</td>
              <td colSpan="15"></td>
            </tr>
            <tr>
              <td>Космический аппарат 3</td>
              <td colSpan="15"></td>
            </tr>
            <tr>
              <td>Космический аппарат 4</td>
              <td colSpan="15"></td>
            </tr>
            <tr>
              <td>Космический аппарат 5</td>
              <td colSpan="15"></td>
            </tr>
            <tr>
              <td>Космический аппарат 6</td>
              <td colSpan="15"></td>
            </tr>
            <tr>
              <td>Космический аппарат 7</td>
              <td colSpan="15"></td>
            </tr>
            <tr>
              <td>Космический аппарат 8</td>
              <td colSpan="15"></td>
            </tr>
            <tr>
              <td>Космический аппарат 9</td>
              <td colSpan="15"></td>
            </tr>
            <tr>
              <td>Космический аппарат 10</td>
              <td colSpan="15"></td>
            </tr>
            <tr>
              <td>Космический аппарат 11</td>
              <td colSpan="15"></td>
            </tr>
            <tr>
              <td>Космический аппарат 12</td>
              <td colSpan="15"></td>
            </tr>
            <tr>
              <td>Космический аппарат 13</td>
              <td colSpan="15"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
