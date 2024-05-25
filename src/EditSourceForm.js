import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

const EditSourceForm = ({ source, onEdit, onCancel }) => {
    const [name, setName] = useState('');

    useEffect(() => {
        if (source) {
            setName(source.name);
        }
    }, [source]);

    const handleSubmit = () => {
        if (!name) return;
        onEdit({ ...source, name });
    };

    return (
        <Form layout="inline" onFinish={handleSubmit}>
            <Form.Item>
                <Input
                    placeholder="Enter new source name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
            <Form.Item>
                <Button type="default" onClick={onCancel}>Cancel</Button>
            </Form.Item>
        </Form>
    );
};

export default EditSourceForm;
