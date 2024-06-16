import React from 'react';
import { Layout, Typography } from 'antd';
import DataFetcher from './DataFetcher';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
    return (
        <Layout className="App">
            <Header>
                <Title level={2} style={{ color: 'white' }}>Learning Sources</Title>
            </Header>
            <Content style={{ padding: '15px' }}>
                <DataFetcher />
            </Content>
        </Layout>
    );
}

export default App;
