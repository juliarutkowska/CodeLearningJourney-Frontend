import React from 'react';
import { Button } from 'antd';
import LearningSessionTable from './LearningSessionTable';

const LearningSessionTableComponent = ({ timeData, setEditTimeId, setAddingTime, handleDeleteTime }) => (
    <>
        <Button onClick={() => setAddingTime(true)}>Add Time</Button>
        <LearningSessionTable
            data={timeData}
            onEdit={(timeId) => {
                setEditTimeId(timeId);
                setAddingTime(false);
            }}
            onDelete={handleDeleteTime}
        />
    </>
);

export default LearningSessionTableComponent;
