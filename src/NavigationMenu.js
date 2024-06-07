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

        const onEdit = (id) => {
            console.log(`Edit button clicked for ID: ${id}`);
        };

        const onDelete = (id) => {
            console.log(`Delete button clicked for ID: ${id}`);
        };

        return (
            <div>
                {showSourcesTable && <DataTable data={dataSources} onEdit={onEdit} onDelete={onDelete} />}
                {showTimeTable && <TimeTable data={timeData} onEdit={onEdit} onDelete={onDelete} />}
                <a href="#" onClick={(e) => {e.preventDefault(); fetchSourceData();}}>Sources</a>
                {' | '}
                <a href="#" onClick={(e) => {e.preventDefault(); fetchTimeData();}}>Time Table</a>
            </div>
        );
    // return (
    //     <div>
    //         {showSourcesTable && <DataTable data={dataSources}/>}
    //         {showTimeTable && <TimeTable data={timeData}/>}
    //         <a href="#" onClick={(e) => {e.preventDefault(); fetchSourceData();}}>Sources</a>
    //         {' | '}
    //         <a href="#" onClick={(e) => {e.preventDefault(); fetchTimeData();}}>Time Table</a>
    //     </div>
    // );
};

export default NavigationMenu;