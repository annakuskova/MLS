import React from "react";
import "./Main.css";
import cloud from "../../items/icon for table/cloud.svg";
import sun from "../../items/icon for table/sun.svg";

export const MainOff = () => {
  return (
    <div className="table-wrapper">
      <div className="table-scroll">
        <div className="table-placeholder"></div>
        <table>
          <thead>
            <tr>
              <th>Название КА</th>
              <th>Видимость КА с - до</th>
              <th>Сеанс с - до</th>
              <th>Облачность в направлении КА</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Космический аппарат 1</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={cloud} alt="cloud" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 2</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={sun} alt="sun" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 3</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={cloud} alt="cloud" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 4</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={sun} alt="sun" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 5</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={cloud} alt="cloud" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 6</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={sun} alt="sun" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 7</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={cloud} alt="cloud" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 8</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={sun} alt="sun" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 9</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={sun} alt="sun" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 10</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={cloud} alt="cloud" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 11</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={sun} alt="sun" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 12</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={cloud} alt="cloud" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 13</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={cloud} alt="cloud" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 14</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={sun} alt="sun" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 15</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={sun} alt="sun" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 16</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={cloud} alt="cloud" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 17</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={sun} alt="sun" />
              </td>
            </tr>
            <tr>
              <td>Космический аппарат 18</td>
              <td>10:15 - 13:00</td>
              <td>12:20 - 12:25</td>
              <td>
                <img src={cloud} alt="cloud" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
