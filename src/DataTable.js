import React from 'react';
import { Table, Button } from 'antd';

const DataTable = ({ data, onEdit, onDelete }) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
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

    return <Table dataSource={data} columns={columns} rowKey="id" />;
};

export default DataTable;
