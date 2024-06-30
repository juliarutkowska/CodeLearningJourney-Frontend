import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

const EditLearningSessionForm = ({ time, onEdit, onCancel }) => {
    const [timeValue, setTimeValue] = useState('');

    useEffect(() => {
        if (time) {
            setTimeValue(time.time);
        }
    }, [time]);

    const handleSubmit = () => {
        if (!timeValue) return;
        onEdit({ ...time, time: timeValue });
    };

    return (
        <Form layout="inline"
              onFinish={handleSubmit}>
            <Form.Item>
                <Input
                    placeholder="Enter new time"
                    value={timeValue}
                    onChange={(e) => setTimeValue(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary"
                        htmlType="submit">
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

export default EditLearningSessionForm;