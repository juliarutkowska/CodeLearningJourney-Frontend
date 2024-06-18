import React, { useState } from "react";
import { Input, Button, Form } from "antd";

const AddSourceForm = ({ onAdd }) => {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        if (!name){
            return;
        }

        onAdd({ name });
        setName("");
    };

    return (
        <Form layout="inline" onFinish={handleSubmit}>
            <Form.Item>
                <Input
                    placeholder="Enter source name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Add Source</Button>
            </Form.Item>
        </Form>
    );
};

export default AddSourceForm;
// import React, { useState } from 'react';
// import { Form, Input, Button } from 'antd';
//
// const AddSourceForm = ({ onAdd }) => {
//     const [name, setName] = useState('');
//
//     const handleSubmit = () => {
//         if (!name) return;
//         onAdd({ name });
//         setName('');
//     };
//
//     return (
//         <Form layout="inline" onFinish={handleSubmit}>
//             <Form.Item>
//                 <Input
//                     placeholder="Enter source name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </Form.Item>
//             <Form.Item>
//                 <Button type="primary" htmlType="submit">Add Source</Button>
//             </Form.Item>
//         </Form>
//     );
// };
//
// export default AddSourceForm;