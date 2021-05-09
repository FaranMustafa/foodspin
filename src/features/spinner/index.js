import React from 'react';
import { Spinner } from 'react-bootstrap';

const index = () => {
  return (
    <>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </>
  );
};

export default index;
