
import React, { useState } from 'react';
import DataTable from './DataTable'; // Make sure to import the DataTable component correctly

const NavigationMenu = () => {
    const [tableData, setTableData] = useState([]);
    const [showTable, setShowTable] = useState(false);

    const fetchData = async () => {
        setShowTable(false);
        const response = await fetch('http://localhost:5081/LearningSources');
        const data = await response.json();
        setTableData(data);
        setShowTable(true);
    };

    return (
        <div>
            {showTable && <DataTable data={tableData}/>}
            <a href="#" onClick={(e) => {e.preventDefault(); fetchData();}}>Home</a>
            {' | '}
            <a href="#" onClick={(e) => {e.preventDefault(); fetchData();}}>Data Table</a>
        </div>
    );
};

export default NavigationMenu;

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