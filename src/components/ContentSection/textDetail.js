import React from 'react';

//components
import { Button } from 'react-bootstrap';

//styles
import styled from 'styled-components';

const TextDetail = () => {
  return (
    <div>
      <Heading>$32</Heading>
      <Subheading>
        Green Goddess <br /> Chicken Salad
      </Subheading>
      <Description>
        It is a non vegetarian salad which consists of the <br />
        green goddess dressing mixed with chicken, <br />
        peppers, olives and celery.
      </Description>

      <OrderButton>Order Now</OrderButton>
    </div>
  );
};

export default TextDetail;

const Heading = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 66px;
  color: #ff922c;
`;

const Subheading = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 50px;
  text-transform: capitalize;
  color: #333333;
`;

const Description = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  text-transform: capitalize;
  color: #333333;
`;

const OrderButton = styled(Button)`
  margin-top: 28px;
  background: #ff922c;
  box-shadow: 0px 20px 40px #f4e2d1;
  border-radius: 69px;
  border: none;
  width: 163px;
  height: 48px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  text-transform: Uppercase;
  color: #ffffff;
`;
