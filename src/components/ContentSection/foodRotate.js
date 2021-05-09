import React from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';

//icons
import { ArrowDown } from '../../assets/icons';

//images
import { MainImage, Image3 } from '../../assets/images/Section-1';

const foodRotate = () => {
  return (
    <SpinnerContainer>
      <Spinner>
        <SpinnerWheel>
          <SpinnerDish style={{ left: '558px', top: '278px', backgroundImage: `url(${Image3})` }} />
          <SpinnerDish style={{ left: '475.99px', top: '80.0101px', backgroundImage: `url(${Image3})` }} />
          <SpinnerDish style={{ left: '278px', top: '-2px', backgroundImage: `url(${Image3})` }} />
          <SpinnerDish style={{ left: '80.0101px', top: '80.0101px', backgroundImage: `url(${Image3})` }} />
          <SpinnerDish style={{ left: '-2px', top: '278px', backgroundImage: `url(${Image3})` }} />
          <SpinnerDish style={{ left: '80.0101px', top: '475.99px', backgroundImage: `url(${Image3})` }} />
          <SpinnerDish style={{ left: '278px', top: '558px', backgroundImage: `url(${Image3})` }} />
          <SpinnerDish style={{ left: '475.99px', top: '475.99px', backgroundImage: `url(${Image3})` }} />
        </SpinnerWheel>
      </Spinner>
      <MainDish src={MainImage} alt="Asian Cucumber Salad" />
      <ArrowButtonWrap>
        <ArrowButton>
          <img src={ArrowDown} alt="arrow-down" />
        </ArrowButton>
        <ArrowButton>
          <img src={ArrowDown} alt="arrow-down" />
        </ArrowButton>
      </ArrowButtonWrap>
    </SpinnerContainer>
  );
};

export default foodRotate;

const ArrowButton = styled(Button)`
  width: 40px;
  height: 40px;
  background: #ff922c;
  box-shadow: 0px 10px 20px #f5ece3;
  border-radius: 50%;
  border: none;
`;
const ArrowButtonWrap = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 600px;
  right: 8%;
`;

const SpinnerContainer = styled.div`
  width: calc(100vw - 430px);
  height: calc(100vh - 100px);
  margin-right: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpinnerWheel = styled.div`
  width: 560px;
  height: 540px;
  border: 2px dashed #e87f1e;
  border-radius: 50%;
  position: absolute;
  top: 93%;
  left: 50%;
  transition: all 0.5s ease-in-out;
  transform: translate(-50%, -50%) rotate(-1260deg);
`;
const SpinnerDish = styled.div`
  width: 97px;
  height: 99px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  background-position: center center;
  background-size: cover;

  background-image: url(${Image3});
`;
const Spinner = styled.div`
  position: fixed;
  width: 1200px;
  height: 1117px;
  right: -16%;
  top: -66%;
  border-radius: 50%;
  z-index: -1;
  clip-path: circle();
  background-color: #ffeede;
`;

const MainDish = styled.img`
  position: fixed;
  border-radius: 50%;
  right: calc(215px) !important;
  top: calc(380px) !important;
`;
