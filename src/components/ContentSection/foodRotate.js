import React from 'react';

//components
import {
  ArrowButton,
  DashedLine,
  ArrowButtonWrap,
  SpinnerContainer,
  SpinnerWheel,
  SpinnerDish,
  Spinner,
  MainDish,
} from './styles.component';

//icons
import { ArrowDown } from '../../assets/icons';

//images
import BorderSVG from '../../assets/images/DashedLine.svg';

const foodRotate = ({ data, handleRight, handleLeft }) => {
  return (
    <SpinnerContainer>
      <Spinner bgcolor={data.backgroundColor}>
        <SpinnerWheel id={data.id}>
          {/* Dashed Line   */}
          <DashedLine style={{ backgroundImage: `url(${BorderSVG})` }} />

          {/* Dish Images */}
          <SpinnerDish style={{ left: '46vw', backgroundImage: `url(${data.subImages.image1})` }} />
          <SpinnerDish
            style={{ left: '475.99px', top: '80.0101px', backgroundImage: `url(${data.subImages.image2})` }}
          />
          <SpinnerDish style={{ left: '278px', top: '-2px', backgroundImage: `url(${data.subImages.image3})` }} />
          <SpinnerDish
            style={{ left: '80.0101px', top: '80.0101px', backgroundImage: `url(${data.subImages.image4})` }}
          />
          <SpinnerDish style={{ left: '-4vw', top: '35vh', backgroundImage: `url(${data.subImages.image5})` }} />
          <SpinnerDish style={{ left: '6vw', top: '52vh', backgroundImage: `url(${data.subImages.image6})` }} />
          <SpinnerDish style={{ left: '21vw', top: '60vh', backgroundImage: `url(${data.subImages.image7})` }} />
          <SpinnerDish style={{ left: '38vw', top: '52vh', backgroundImage: `url(${data.subImages.image8})` }} />
        </SpinnerWheel>
      </Spinner>
      <MainDish id={data.id} src={data.mainImage} alt="Asian Cucumber Salad" />
      <ArrowButtonWrap>
        <ArrowButton onClick={() => handleLeft()} color={data.color}>
          <img src={ArrowDown} alt="arrow-down" />
        </ArrowButton>
        <ArrowButton onClick={() => handleRight()} color={data.color}>
          <img src={ArrowDown} alt="arrow-down" />
        </ArrowButton>
      </ArrowButtonWrap>
    </SpinnerContainer>
  );
};

export default foodRotate;
