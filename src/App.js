import React from 'react';
import DataFetcher from './DataFetcher';
import { Layout, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
    return (
        <Layout className="App">
            <Header>
                <Title level={1} style={{ color: 'white' }}>Learning Sources</Title>
            </Header>
            <Content style={{ padding: '20px' }}>
                <DataFetcher />
            </Content>
        </Layout>
    );
}

export default App;
