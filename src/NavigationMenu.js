import React, { useState } from 'react';
import DataTable from './DataTable';
import TimeTable from './TimeTable';

const NavigationMenu = () => {
    const [dataSources, setDataSource] = useState([]);
    const [showSourcesTable, setShowSourcesTable] = useState(false);

    const [timeData, setTimeData] = useState([]);
    const [showTimeTable, setShowTimeTable] = useState(false);

    const fetchSourceData = async () => {
        setShowSourcesTable(false);
        const response = await fetch('http://localhost:5081/LearningSources');
        const data = await response.json();
        setDataSource(data);
        setShowSourcesTable(true);
    };

    const fetchTimeData = async () => {
        setShowTimeTable(false);
        // adjust endpoint URL to the one that returns time data
        const response = await fetch('http://localhost:5081/Time');
        const data = await response.json();
        setTimeData(data);
        setShowTimeTable(true);
    };

    return (
        <div>
            {showSourcesTable && <DataTable data={dataSources}/>}
            {showTimeTable && <TimeTable data={timeData}/>}
            <a href="#" onClick={(e) => {e.preventDefault(); fetchSourceData();}}>Sources</a>
            {' | '}
            <a href="#" onClick={(e) => {e.preventDefault(); fetchTimeData();}}>Time Table</a>
        </div>
    );
};

export default NavigationMenu;
// import React, { useState } from 'react';
// import DataTable from './DataTable';
// import TimeTable from "./TimeTable";// Make sure to import the DataTable component correctly
//
// const NavigationMenu = () => {
//     const [tableData, setTableData] = useState([]);
//     const [showTable, setShowTable] = useState(false);
//
//     const fetchData = async () => {
//         setShowTable(false);
//         const response = await fetch('http://localhost:5081/LearningSources');
//         const data = await response.json();
//         setTableData(data);
//         setShowTable(true);
//     };
//
//     return (
//         <div>
//             {showTable && <DataTable data={tableData}/>}
//             <a href="#" onClick={(e) => {e.preventDefault(); fetchData();}}>Home</a>
//             {' | '}
//             <a href="#" onClick={(e) => {e.preventDefault(); fetchData();}}>Data Table</a>
//         </div>
//     );
// };
//
// export default NavigationMenu;

// import React from 'react';
//
// const NavigationMenu = () => {
//     return (
//         <div>
//             <a href="#" onClick={e => {
//                 e.preventDefault();
//                 alert('Home Clicked');
//             }}>Home</a>
//             {' | '}
//             <a href="#" onClick={e => {
//                 e.preventDefault();
//                 alert('Data Tables Clicked');
//             }}>Data Table</a>
//         </div>
//     );
// };
//
// export default NavigationMenu;

// import { Menu } from 'antd';
// import React from 'react';
//
// const NavigationMenu = ({ handleClick, current }) => {
//     return (
//         <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
//             <NavigationMenu.Item key="Sources">Sources</NavigationMenu.Item>
//             <NavigationMenu.Item key="Time">Time</NavigationMenu.Item>
//         </Menu>
//     );
// };
//
// export default NavigationMenu;