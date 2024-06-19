import React from 'react';
import { Button } from 'antd';
import DataTable from './DataTable';

const DataTableComponent = ({ responseData, setEditSourceId, setAddingSource, handleDeleteSource }) => (
    <>
        <Button onClick={() => setAddingSource(true)}>Add Source</Button>
        <DataTable
            data={responseData}
            onEdit={(sourceId) => {
                setEditSourceId(sourceId);
                setAddingSource(false);
            }}
            onDelete={handleDeleteSource}
        />
    </>
);

export default DataTableComponent;
