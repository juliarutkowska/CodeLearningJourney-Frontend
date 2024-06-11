import React, { useState } from 'react';
import { Table, Button, Input } from 'antd';

const DataTable = ({ data, onEdit, onDelete }) => {
    const [filterText, setFilterText] = useState('');

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const filteredData = data.filter(item =>
        item.displayName.toLowerCase().includes(filterText.toLowerCase())
    );

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Display Name',
            dataIndex: 'displayName',
            key: 'displayName',
            sorter: (a, b) => a.displayName.localeCompare(b.displayName),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <>
                    <Button type="link" onClick={() => onEdit(record.id)}>Edit</Button>
                    <Button type="link" danger onClick={() => onDelete(record.id)}>Delete</Button>
                </>
            ),
        },
    ];
    return (
        <div>
            <Input
                placeholder="Filter by name"
                value={filterText}
                onChange={handleFilterChange}
                style={{ marginBottom: '20px', width: '300px' }}
            />
            <Table
                dataSource={filteredData}
                columns={columns}
                rowKey="id" />
        </div>
    );
};

export default DataTable;
