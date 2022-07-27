import React from "react";
import "./Main.css";
import cloud from "../../items/icon for table/cloud.svg";
import sun from "../../items/icon for table/sun.svg";

export const MainOn = () => {
  return (
    <div class="table-wrapper">
      <div class="table-scroll">
        <div class="table-placeholder"></div>
        <table>
          <thead>
            <tr>
              <th>Название КА</th>
              <th>
                Видимость КА
                <br />с - до
              </th>
              <th>
                Облачность
                <br />в направлении КА
              </th>
              <th>Результаты измерений</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Космический аппарат 1</td>
              <td>10:15 - 13:00</td>
              <td>
                <img src={cloud} alt="cloud" />
              </td>
              <td>Время: 12:05 - 12:07; Длит.:2:14; 0 ответов</td>
            </tr>
            <tr>
              <td>Космический аппарат 2</td>
              <td>12:05 - 14:50</td>
              <td>
                <img src={cloud} alt="cloud" />
              </td>
              <td>Время: 11:12 - 11:16; Длит.: 4:10; 1358 ответов</td>
            </tr>
            <tr>
              <td>Космический аппарат 3</td>
              <td>9:10 - 11:30</td>
              <td></td>
              <td>Время: 11:12 - 11:16; Длит.: 4:10; 1358 ответов</td>
            </tr>
            <tr>
              <td>Космический аппарат 4</td>
              <td>14:20 - 18:50</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 5</td>
              <td>10:15 - 13:10</td>
              <td>
                <img src={sun} alt="sun" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 6</td>
              <td>14:50 - 17:20</td>
              <td>
                <img src={sun} alt="sun" />
              </td>
              <td>Идут измерения...</td>
            </tr>
            <tr>
              <td>Космический аппарат 7</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 8</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 9</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 10</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 11</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 12</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 13</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 13</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 13</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 13</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 13</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Космический аппарат 13</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// // import { useTable } from "react-table";
// // import React from "react";

// // function Appp() {
// //   const data = React.useMemo(
// //     () => [
// //       {
// //         col1: "Hello",
// //         col2: "World",
// //       },
// //       {
// //         col1: "react-table",
// //         col2: "rocks",
// //       },
// //       {
// //         col1: "whatever",
// //         col2: "you want",
// //       },
// //     ],
// //     []
// //   );

// //   const columns = React.useMemo(
// //     () => [
// //       {
// //         Header: "Column 1",
// //         accessor: "col1", // accessor is the "key" in the data
// //       },
// //       {
// //         Header: "Column 2",
// //         accessor: "col2",
// //       },
// //     ],
// //     []
// //   );

// //   const {
// //     getTableProps,
// //     getTableBodyProps,
// //     headerGroups,
// //     rows,
// //     prepareRow,
// //   } = useTable({ columns, data });

// //   return (
// //     <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
// //       <thead>
// //         {headerGroups.map((headerGroup) => (
// //           <tr {...headerGroup.getHeaderGroupProps()}>
// //             {headerGroup.headers.map((column) => (
// //               <th
// //                 {...column.getHeaderProps()}
// //                 style={{
// //                   borderBottom: "solid 3px red",
// //                   background: "aliceblue",
// //                   color: "black",
// //                   fontWeight: "bold",
// //                 }}
// //               >
// //                 {column.render("Header")}
// //               </th>
// //             ))}
// //           </tr>
// //         ))}
// //       </thead>
// //       <tbody {...getTableBodyProps()}>
// //         {rows.map((row) => {
// //           prepareRow(row);
// //           return (
// //             <tr {...row.getRowProps()}>
// //               {row.cells.map((cell) => {
// //                 return (
// //                   <td
// //                     {...cell.getCellProps()}
// //                     style={{
// //                       padding: "10px",
// //                       border: "solid 1px gray",
// //                       background: "papayawhip",
// //                     }}
// //                   >
// //                     {cell.render("Cell")}
// //                   </td>
// //                 );
// //               })}
// //             </tr>
// //           );
// //         })}
// //       </tbody>
// //     </table>
// //   );
// // }

// // export default Appp;
// import React from "react";
// import styled from "styled-components";
// import { useTable } from "react-table";

// import makeData from "./table";

// const Styles = styled.div`
//   padding: 1rem;

//   table {
//     border-spacing: 0;
//     border: 1px solid black;

//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }
// `;
// function Table({ columns, data }) {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({
//     columns,
//     data,
//   });

//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row, i) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// function Appp() {
//   const columns = React.useMemo(
//     () => [
//       {
//         columns: [
//           {
//             Header: "Название КА",
//             accessor: "nazvanie",
//             id: 123,
//           },
//           {
//             Header: `Видимость КА${(<br />)}с - до`,
//             accessor: "vidimost",
//             id: 345,
//           },
//           {
//             Header: `Облачность${(<br />)}в направлении КА`,
//             accessor: "oblachnost",
//             id: 678,
//           },
//           {
//             Header: "Результаты измерений",
//             accessor: "result",
//             id: 912,
//           },
//         ],
//       },
//     ],
//     []
//   );

//   const data = React.useMemo(() => makeData(1), []);

//   return (
//     <Styles>
//       <Table columns={columns} data={data} />
//     </Styles>
//   );
// }

// export default Appp;

// // // import React from "react";
// // // import "./Main.css";
// // // import cloud from "../../items/icon for table/cloud.svg";
// // // import sun from "../../items/icon for table/sun.svg";
// // // //import rain from "../../items/icon for table/rain.svg";

// // // export const Main = () => {
// // //   return (
// // //     <div className="body">
// // //       <div className="container">
// // //         <div className="header">
// // //           <div class="table-wrapper">
// // //             <div class="table-scroll">
// // //               <div class="table-placeholder"></div>
// // //               <table>
// // //                 <tbody>
// // //                   <thead>
// // //                     <tr>
// // //                       <th>Название КА</th>
// // //                       <th>
// // //                         Видимость КА
// // //                         <br />с - до
// // //                       </th>
// // //                       <th>
// // //                         Облачность
// // //                         <br />в направлении КА
// // //                       </th>
// // //                       <th>Результаты измерений</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tr>
// // //                     <td>Космический аппарат 1</td>
// // //                     <td>10:15 - 13:00</td>
// // //                     <td>
// // //                       <img src={cloud} alt="Облачно"/>
// // //                     </td>
// // //                     <td>Время: 12:05 - 12:07;Длит.:2:14; 0 ответов</td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 2</td>
// // //                     <td>12:05 - 14:50</td>
// // //                     <td>
// // //                       <img src={cloud} alt="Облачно"/>
// // //                     </td>
// // //                     <td>Время: 11:12 - 11:16; Длит.: 4:10; 1358 ответов</td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 3</td>
// // //                     <td>9:10 - 11:30</td>
// // //                     <td></td>
// // //                     <td>Время: 11:12 - 11:16; Длит.: 4:10; 1358 ответов</td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 4</td>
// // //                     <td>14:20 - 18:50</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 5</td>
// // //                     <td>10:15 - 13:10</td>
// // //                     <td>
// // //                       <img src={sun} alt="Солнечно"/>
// // //                     </td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 6</td>
// // //                     <td>14:50 - 17:20</td>
// // //                     <td>
// // //                       <img src={sun} alt="Солнечно"/>
// // //                     </td>
// // //                     <td>Идут измерения...</td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 7</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 8</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 9</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 10</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 11</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 12</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 13</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 13</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 13</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 13</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 13</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td>Космический аппарат 13</td>
// // //                     <td></td>
// // //                     <td></td>
// // //                     <td></td>
// // //                   </tr>
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
