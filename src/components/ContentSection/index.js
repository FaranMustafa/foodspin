import React from 'react';

//components
import TextDetails from './textDetail';
import RotateFood from './foodRotate';

import { Row, Col } from 'react-bootstrap';

//styles
import styled from 'styled-components';

const index = () => {
  return (
    <ContentContainer>
      <Row className="w-100">
        <Col xs={5}>
          <TextDetails />
        </Col>
        <Col xs={7}>
          <RotateFood />
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default index;

const ContentContainer = styled.div`
  //   margin-top: 10vh;
  padding: 65px 100px;
`;
