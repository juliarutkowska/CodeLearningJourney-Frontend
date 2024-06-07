import React, { useState } from 'react';
import { Layout, Typography } from 'antd';
import NavigationMenu from './NavigationMenu';


const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
    const [current, setCurrent] = useState('Sources');

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
        <Layout className="App">
            <Header>
                <Title level={2} style={{ color: 'white' }}>Learning Sources</Title>
                <NavigationMenu handleClick={handleClick} current={current} />
            </Header>
            <Content style={{ padding: '15px' }}>
            </Content>
        </Layout>
    );
}

export default App;
