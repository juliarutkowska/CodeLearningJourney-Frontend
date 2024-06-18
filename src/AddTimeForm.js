import React, { useState } from "react";
import { Input, Button, Form } from "antd";

const AddTimeForm = ({ onAdd, onCancel }) => {
    const [time, setTime] = useState("");

    const handleSubmit = () => {
        if (!time){
            return;
        }

        onAdd({ id: Date.now(), time });
        setTime("");
    };

    return (
        <Form layout="inline" o
              nFinish={handleSubmit}>
            <Form.Item>
                <Input
                    placeholder="Enter time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Add Time</Button>
            </Form.Item>
        </Form>
    );
};

export default AddTimeForm;