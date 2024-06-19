import React from 'react';
import { Button } from 'antd';
import TimeTable from './TimeTable';

const TimeTableComponent = ({ timeData, setEditTimeId, setAddingTime, handleDeleteTime }) => (
    <>
        <Button onClick={() => setAddingTime(true)}>Add Time</Button>
        <TimeTable
            data={timeData}
            onEdit={(timeId) => {
                setEditTimeId(timeId);
                setAddingTime(false);
            }}
            onDelete={handleDeleteTime}
        />
    </>
);

export default TimeTableComponent;
