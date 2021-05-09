import React from 'react';

//styled components
import { Heading, Subheading, Description, OrderButton, InfoWrap } from './styles.component';

const TextDetail = ({ data }) => {
  return (
    <InfoWrap id={data.id}>
      <Heading color={data.color}>{data.info.price}</Heading>
      <Subheading dangerouslySetInnerHTML={{ __html: data.info.heading }} />
      <Description dangerouslySetInnerHTML={{ __html: data.info.description }} />
      <OrderButton color={data.color}>Order Now</OrderButton>
    </InfoWrap>
  );
};

export default TextDetail;
