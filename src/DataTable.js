import React from 'react';
import './styles.css';
const DataTable = ({ data }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                {/* Dodaj inne kolumny tutaj */}
            </tr>
            </thead>
            <tbody>
            {data.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    {/* Dodaj inne komórki tutaj */}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default DataTable;