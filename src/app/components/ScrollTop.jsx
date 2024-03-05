import React from 'react';
import { FloatButton } from 'antd';

export const ScrollTop = () => {
  return (
    <>
      <FloatButton.BackTop visibilityHeight={0} style={customStyles} />
    </>
  );
};

const customStyles = {
  backgroundColor: '#ff0000', 
  color: '#fff',
  borderRadius: '50%', 
  fontSize: '16px', 
};

export default ScrollTop;
