import { HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
  } from '@ant-design/icons';
  
  import React from 'react';
  
  function App(){

    return(
        <>
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
                </>
    )
  }
   
  
  
  export default App;