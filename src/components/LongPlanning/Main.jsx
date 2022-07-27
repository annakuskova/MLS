import React from "react";
import "./Main.css";

export const Main = () => {
  return (
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Название КА</th>
              <th>Приоритет</th>
              <th>
                Кол-во
                <br />
                нормальных
                <br />
                точек за сеанс
              </th>
              <th>
                Мин. кол-во
                <br />
                сеансов
                <br />
                за проводку
              </th>
              <th>
                Макс. кол-во
                <br />
                сеансов
                <br />
                за проводку
              </th>
              <th>
                Мин. зазор
                <b />
                между сеансами,
                <br />
                мин.
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Космический аппарат 1</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 2</td>
              <td>Не отслеживается</td>
              <td  className="not-tracked"></td>
              <td  className="not-tracked"></td>
              <td  className="not-tracked"></td>
              <td  className="not-tracked"></td>
            </tr>
            <tr>
              <td>Космический аппарат 3</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 4</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 5</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 6</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 7</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 8</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 9</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 10</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 11</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 12</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 13</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 14</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 15</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 16</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 17</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Космический аппарат 18</td>
              <td>Высокий</td>
              <td>3</td>
              <td>2</td>
              <td>3</td>
              <td>40</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};
