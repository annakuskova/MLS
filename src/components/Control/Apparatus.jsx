import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../items/icon/arrow.svg";
import doublearrow from "../../items/icon/double-arrow.svg";
import arrowdouwn from "../../items/icon/arrow-down.svg";
import cloud from "../../items/icon for table/cloud.svg";
import sun from "../../items/icon for table/sun.svg";
import rain from "../../items/icon for table/rain.svg";
import "./Control.css";
import "./Apparatus.css";

export const Apparatus = () => {
  return (
    <div>
      <div className="sorted_menu">
        <div className="dropdown">
          <button className="dropbtn">
            <div className="item-btn">
              Аппарат <i className="fa fa-caret-down"></i>
            </div>
            <div>
              <img src={arrowdouwn} alt="arrow" />
            </div>
          </button>
          <div class="dropdown-content">
            <NavLink to="/mls1/control/days" className="link">
              День
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
                <a href="#" className="link">6</a>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div class="table-wrapper">
        <div class="table-scroll">
          <div class="table-placeholder"></div>
          <table class="main_table">
            <thead>
              <tr>
                <th>Состояние</th>
                <th>Название КА</th>
                <th>Зона видимости</th>
                <th>Время измерений</th>
                <th>Результат измерений</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={cloud} />
                </td>
                <td>Космический аппарат 1</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={cloud} />
                </td>
                <td>Космический аппарат 2</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={sun} />
                </td>
                <td>Космический аппарат 3</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={rain} />
                </td>
                <td>Космический аппарат 4</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={sun} />
                </td>
                <td>Космический аппарат 5</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={sun} />
                </td>
                <td>Космический аппарат 6</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={sun} />
                </td>
                <td>Космический аппарат 7</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={cloud} />
                </td>
                <td>Космический аппарат 8</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={cloud} />
                </td>
                <td>Космический аппарат 9</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={cloud} />
                </td>
                <td>Космический аппарат 10</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={sun} />
                </td>
                <td>Космический аппарат 11</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={sun} />
                </td>
                <td>Космический аппарат 12</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={rain} />
                </td>
                <td>Космический аппарат 13</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
              <tr>
                <td>
                  <img src={cloud} />
                </td>
                <td>Космический аппарат 14</td>
                <td>10:15 - 13:00</td>
                <td>10:35 - 10:38; 180 сек</td>
                <td>1358 ответов</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
