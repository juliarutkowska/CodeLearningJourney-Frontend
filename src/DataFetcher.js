import React, { useState, useEffect } from 'react';
import AddSourceForm from './AddSourceForm';
import EditSourceForm from './EditSourceForm';
import DataTable from './DataTable';
import { Spin, Alert } from 'antd';

const DataFetcher = () => {
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editSourceId, setEditSourceId] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

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
    };

    const handleAddSource = async (newSource) => {
        try {
            const response = await fetch('http://localhost:5081/LearningSources', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSource),
            });
            if (!response.ok) {
                throw new Error('Failed to add source');
            }
            fetchData();
        } catch (error) {
            setError(error.message);
        }
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

    if (loading) {
        return <Spin size="large" />;
    }

    if (error) {
        return <Alert message="Error" description={error} type="error" showIcon />;
    }

    return (
        <div>
            <AddSourceForm onAdd={handleAddSource} />
            <DataTable
                data={responseData}
                onEdit={(sourceId) => setEditSourceId(sourceId)}
                onDelete={handleDeleteSource}
            />
            {editSourceId && (
                <EditSourceForm
                    source={responseData.find((source) => source.id === editSourceId)}
                    onEdit={(updatedSource) => handleEditSource(editSourceId, updatedSource)}
                    onCancel={() => setEditSourceId(null)}
                />
            )}
        </div>
    );
};

export default DataFetcher;