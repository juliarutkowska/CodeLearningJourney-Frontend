import React, { useState, useEffect } from 'react';
import AddSourceForm from './AddSourceForm';
import EditSourceForm from './EditSourceForm';
import EditTimeForm from "./EditTimeForm";
import AddTimeForm from "./AddTimeForm";
import DataTable from './DataTable';
import TimeTable from './TimeTable';
import {Spin, Alert, Button} from 'antd';

const DataFetcher = () => {
    const [showSourceTable, setShowSourceTable] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const [timeData, setTimeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editSourceId, setEditSourceId] = useState(null);
    const [addingSource, setAddingSource] = useState(false);
    const [showTimeTable, setShowTimeTable] = useState(false);
    const [addingTime, setAddingTime] = useState(false);
    const [editTimeId, setEditTimeId] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchTimeData = async () => {
        try {
            const response = await fetch('http://localhost:5081/Time');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTimeData(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5081/LearningSources');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setResponseData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
        await fetchTimeData();
    };

    const handleAddSource = async (newSource) => {
        try {
            const response = await fetch('http://localhost:5081/LearningSources', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Name: newSource.name, DisplayName: newSource.name }),            });
            if (!response.ok) {
                const errorMessage = await response.json();
                console.error('Server response:', errorMessage);

                throw new Error('Failed to add source');
            }
            fetchData();
        } catch (error) {
            setError(error.message);
        }
        setAddingSource(false);
    };

    const handleAddTime = async (newTime) => {
        try {
            const response = await fetch('http://localhost:5081/Time', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTime),
            });
            if (!response.ok) {
                const errorMessage = await response.json();
                console.error('Server response:', errorMessage);

                throw new Error('Failed to add time');
            }
            fetchTimeData();
        } catch (error) {
            setError(error.message);
        }
        setAddingTime(false);
    };

    const handleEditSource = async (sourceId, updatedSource) => {
        try {
            const response = await fetch(`http://localhost:5081/LearningSources/${sourceId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedSource),
            });
            if (!response.ok) {
                throw new Error('Failed to update source');
            }
            fetchData();
        } catch (error) {
            setError(error.message);
        }
        setEditSourceId(null);
    };

    const handleEditTime = async (timeId, updatedTime) => {
        try {
            const response = await fetch(`http://localhost:5081/Time/${timeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTime),
            });
            if (!response.ok) {
                throw new Error('Failed to update time');
            }
            fetchTimeData();
        } catch (error) {
            setError(error.message);
        }
        setEditTimeId(null);
    };

    const handleDeleteSource = async (sourceId) => {
        try {
            const response = await fetch(`http://localhost:5081/LearningSources/${sourceId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete source');
            }
            fetchData();
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDeleteTime = async (timeId) => {
        try {
            const response = await fetch(`http://localhost:5081/Time/${timeId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete time');
            }
            fetchTimeData();
        } catch (error) {
            setError(error.message);
        }
    };

    if (loading) {
        return <Spin size="large" />;
    }

    if (error) {
        return <Alert message="Error" description={error} type="error" showIcon />;
    }

    return (
        <div>
            {addingSource && !editSourceId &&
                <AddSourceForm onAdd={handleAddSource} />}
            {addingTime && !editTimeId &&
                <AddTimeForm onAdd={handleAddTime} />}

            {editTimeId && (
                <EditTimeForm
                    time={timeData.find((time) =>
                        time.id === editTimeId)}
                    onEdit={(updatedTime) =>
                        handleEditTime(editTimeId, updatedTime)}
                    onCancel={() => {
                        setEditTimeId(null);
                        setAddingTime(false);
                    }}
                />
            )}

            {editSourceId && (
                <EditSourceForm
                    source={responseData.find((source) =>
                        source.id === editSourceId)}
                    onEdit={(updatedSource) =>
                        handleEditSource(editSourceId, updatedSource)}
                    onCancel={() => {
                        setEditSourceId(null);
                        setAddingSource(false);
                    }}
                />
            )}

            {!editSourceId && !editTimeId &&
                <>
                    <Button onClick={() => {
                        fetchData();
                        setShowSourceTable(true);
                        setShowTimeTable(false);
                    }}>Open Source Table
                    </Button>
                    <Button onClick={() => {
                        setShowTimeTable(true);
                        setShowSourceTable(false);
                    }}>Open Time Table
                    </Button>
                    {showSourceTable && !addingSource &&
                        <Button onClick={() =>
                            setAddingSource(true)}>Add Source
                        </Button>}
                    {showSourceTable &&
                        <DataTable
                            data={responseData}
                            onEdit={(sourceId) => {
                                setEditSourceId(sourceId);
                                setAddingSource(false);
                            }}
                            onDelete={handleDeleteSource}
                        />
                    }
                    {showTimeTable && !addingTime &&
                        <Button onClick={() =>
                            setAddingTime(true)}>Add Time
                        </Button>}
                    {showTimeTable &&
                        <TimeTable
                            data={timeData}
                            onEdit={(timeId) => {
                                setEditTimeId(timeId);
                                setAddingTime(false);
                            }}
                            onDelete={handleDeleteTime}
                        />
                    }
                </>
            }
        </div>
    );

    // return (
    //     <div>
    //         {addingSource && !editSourceId &&
    //             <AddSourceForm onAdd={handleAddSource} />}
    //         {addingTime && !editTimeId && <AddTimeForm onAdd={handleAddTime} />}
    //
    //         {editTimeId && (
    //             <EditTimeForm
    //                 time={timeData.find((time) => time.id === editTimeId)}
    //                 onEdit={(updatedTime) => handleEditTime(editTimeId, updatedTime)}
    //                 onCancel={() => {
    //                     setEditTimeId(null);
    //                     setAddingTime(false);
    //                 }}
    //                 />
    //         )}
    //
    //         {editSourceId && (
    //             <EditSourceForm
    //                 source={responseData.find((source) =>
    //                     source.id === editSourceId)}
    //                 onEdit={(updatedSource) =>
    //                     handleEditSource(editSourceId, updatedSource)}
    //                 onCancel={() => {
    //                     setEditSourceId(null);
    //                     setAddingSource(false);
    //                 }}
    //             />
    //         )}
    //
    //         {!editSourceId &&
    //             <>
    //                 <Button onClick={() => {
    //                     fetchData();
    //                     setShowSourceTable(true);
    //                     setShowTimeTable(false);
    //                 }}>Open Source Table
    //                 </Button>
    //                 <Button onClick={() => {
    //                     setShowTimeTable(true);
    //                     setShowSourceTable(false);
    //                 }}>Open Time Table
    //                 </Button>
    //                 {showSourceTable && !addingSource &&
    //                     <Button onClick={() => {console.log("Add source button clicked");
    //                         setAddingSource(true)}}>Add Source</Button>}
    //                 {showSourceTable &&
    //                     <DataTable
    //                         data={responseData}
    //                         onEdit={(sourceId) => {
    //                             setEditSourceId(sourceId);
    //                             setAddingSource(false);
    //                         }}
    //                         onDelete={handleDeleteSource}
    //                     />
    //                 }
    //                 {showTimeTable && <TimeTable data={timeData} onEdit={setEditSourceId} onDelete={handleDeleteSource} />}
    //             </>
    //         }
    //     </div>
    // );
};

export default DataFetcher;