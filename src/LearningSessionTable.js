import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import moment from 'moment'; // Import moment for date formatting

const LearningSessionTable = ({ data = [], onEdit, onDelete }) => {
    const [filterText, setFilterText] = useState('');

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const filteredData = Array.isArray(data)
        ? data.filter(item => item.times?.toString().toLowerCase().includes(filterText.toLowerCase()))
        : [];

    const columns = [
        {
            title: 'Hours',
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
            render: (text) => moment(text).format('YYYY-MM-DD'), // Format date using moment
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
                placeholder="Filter by hours"
                value={filterText}
                onChange={handleFilterChange}
                style={{ marginBottom: '20px', width: '300px' }}
            />
            <Table dataSource={filteredData} columns={columns} rowKey="id" />
        </div>
    );
};

export default LearningSessionTable;

// import React, { useState } from 'react';
// import {Table, Input, Button} from 'antd';
// import moment from 'moment';
//
// const TimeTable = ({ data, onEdit, onDelete }) => {
//     const [filterText, setFilterText] = useState('');
//
//     const handleFilterChange = (e) => {
//         setFilterText(e.target.value);
//     };
//
//     const filteredData = data.filter(item =>
//         item.times?.toString().includes(filterText.toLowerCase())
//     );
//
//     const columns = [
//         {
//             title: 'Hours',
//             dataIndex: 'times',
//             key: 'times',
//             sorter: (a, b) => a.times - b.times,
//         },
//         {
//             title: 'ID',
//             dataIndex: 'id',
//             key: 'id',
//             sorter: (a, b) => a.id - b.id,
//         },
//         {
//             title: 'Date',
//             dataIndex: 'dateColumn',
//             key: 'dateColumn',
//             sorter: (a, b) => new Date(a.dateColumn) - new Date(b.dateColumn),
//             render: (text) => moment(text).format('YYYY-MM-DD'),
//         },
//         {
//             title: 'Actions',
//             key: 'actions',
//             render: (text, record) => (
//                 <>
//                     <Button type="link" onClick={() => onEdit(record.id)}>Edit</Button>
//                     <Button type="link" danger onClick={() => onDelete(record.id)}>Delete</Button>
//                 </>
//             ),
//         },
//     ];
//
//     return (
//         <div>
//             <Input
//                 placeholder="Filter by hours"
//                 value={filterText}
//                 onChange={handleFilterChange}
//                 style={{ marginBottom: '20px', width: '300px' }}
//             />
//             <Table dataSource={filteredData} columns={columns} rowKey="Id" />
//         </div>
//     );
// };
//
// export default TimeTable;