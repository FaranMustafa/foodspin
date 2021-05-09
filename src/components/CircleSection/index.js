import React from 'react';

const index = ({ backgroundColor }) => {
  return (
    <div
      style={{
        width: '1177px',
        height: '1177px',
        borderRadius: '50%',
        backgroundColor: backgroundColor,
        position: 'absolute',
        left: '20rem',
        top: '-38rem',
        zIndex: '-5',
      }}
    ></div>
  );
};

export default index;
