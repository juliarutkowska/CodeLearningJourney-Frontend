import React, { useState, useEffect } from 'react';
import {Table, Input, Button} from 'antd';
import NavigationMenu from './NavigationMenu';

const TimeTable = ({ data, onEdit, onDelete }) => {
    const [filterText, setFilterText] = useState('');

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const filteredData = data.filter(item =>
        item.times.toString().includes(filterText.toLowerCase())
    );

    const columns = [
        {
            title: 'Time',
            dataIndex: 'times',
            key: 'times',
            sorter: (a, b) => a.times - b.times,
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Date',
            dataIndex: 'dateColumn',
            key: 'dateColumn',
            sorter: (a, b) => new Date(a.dateColumn) - new Date(b.dateColumn),
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
        // {
        //     title: 'Actions',
        //     key: 'actions',
        //     render: (text, record) => (
        //         <>
        //             <Button type="link" onClick={() => onEdit(record.id)}>Edit</Button>
        //             <Button type="link" danger onClick={() => onDelete(record.id)}>Delete</Button>
        //         </>
        //     ),
        // },
    ];

    return (
        <div>
            <NavigationMenu />
            <Input
                placeholder="Filter by time"
                value={filterText}
                onChange={handleFilterChange}
                style={{ marginBottom: '20px', width: '300px' }}
            />
            <Table dataSource={filteredData} columns={columns} rowKey="Id" />
        </div>
    );
};

export default TimeTable;