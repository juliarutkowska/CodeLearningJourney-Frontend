import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

const EditSourceForm = ({ source, onEdit, onCancel }) => {
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        if (source) {
            setDisplayName(source.displayName);
        }
    }, [source]);

    const handleSubmit = () => {
        if (!displayName) return;
        onEdit({ ...source, displayName });
    };

    return (
        <Form layout="inline" onFinish={handleSubmit}>
            <Form.Item>
                <Input
                    placeholder="Enter new source name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
            <Form.Item>
                <Button type="default" onClick={onCancel}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditSourceForm;
