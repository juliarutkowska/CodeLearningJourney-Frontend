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
                <Title level={1} style={{ color: 'white' }}>Learning Sources</Title>
                <NavigationMenu handleClick={handleClick} current={current} />
            </Header>
            <Content style={{ padding: '20px' }}>
            </Content>
        </Layout>
    );
}

export default App;
// import React from 'react';
// import DataFetcher from './DataFetcher';
// import { Layout, Typography } from 'antd';
//
// const { Header, Content } = Layout;
// const { Title } = Typography;
//
// function App() {
//     return (
//         <Layout className="App">
//             <Header>
//                 <Title level={1} style={{ color: 'white' }}>Learning Sources</Title>
//             </Header>
//             <Content style={{ padding: '20px' }}>
//                 <DataFetcher />
//             </Content>
//         </Layout>
//     );
// }
//
// export default App;
