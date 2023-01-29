
import {  Typography } from 'antd';
import React from 'react';

var { Text, Link } = Typography;
function Typographyhello()
{
    return(
        <>
    <Text>Ant Design (default)</Text><br></br> 
    <Text type="secondary">Ant Design (secondary)</Text><br></br>
    <Text type="success">Ant Design (success)</Text><br></br>
    <Text type="warning">Ant Design (warning)</Text><br></br>
    <Text type="danger">Ant Design (danger)</Text><br></br>
    <Text disabled>Ant Design (disabled)</Text><br></br>
    <Text mark>Ant Design (mark)</Text><br></br>
    <Text code>Ant Design (code)</Text><br></br>
    <Text keyboard>Ant Design (keyboard)</Text><br></br>
    <Text underline>Ant Design (underline)</Text><br></br>
    <Text delete>Ant Design (delete)</Text><br></br>
    <Text strong>Ant Design (strong)</Text><br></br>
    <Text italic>Ant Design (italic)</Text><br></br>
    <Link href="https://ant.design" target="_blank">
      Ant Design (Link)
    </Link>

        </>
    )
}
export default Typographyhello