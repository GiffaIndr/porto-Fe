import React from 'react';

export const SideText = () => {
  return (
    <>
      <div className='flex justify-between font-bold text-4xl absolute p-5' >
        <div className='parallax' data-speed="0.7" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          <h1>
            Fフロントエンド
          </h1>
        </div>
        <div className='parallax' data-speed="0.8" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          <h1>私を見つけました</h1>
        </div>
      </div>
    </>
  );
};

export default SideText;
