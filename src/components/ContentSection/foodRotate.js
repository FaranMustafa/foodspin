import React from 'react';

//components
import {
  ArrowButton,
  ArrowButtonWrap,
  SpinnerContainer,
  SpinnerWheel,
  SpinnerDish,
  Spinner,
  MainDish,
  MainDishWrap,
} from './styles.component';
import CircleSection from '../CircleSection';

//icons
import { ArrowDown } from '../../assets/icons';

const foodRotate = ({ data, subImages, handleRight, handleLeft }) => {
  return (
    <SpinnerContainer>
      {/* <CircleSection></CircleSection> */}
      <Spinner bgcolor={data.backgroundColor}>
        <SpinnerWheel id={data.id} style={{ transform: `rotate(${data.rotate}deg)` }}>
          <SpinnerDish
            style={{ transform: 'rotate(-85deg) translate(280px)', backgroundImage: `url(${subImages.image1})` }}
          />
          <SpinnerDish
            style={{ transform: 'rotate(-121deg) translate(280px)', backgroundImage: `url(${subImages.image2})` }}
          />
          <SpinnerDish
            style={{ transform: 'rotate(-157deg) translate(280px)', backgroundImage: `url(${subImages.image3})` }}
          />
          <SpinnerDish
            style={{ transform: 'rotate(-193deg) translate(280px)', backgroundImage: `url(${subImages.image4})` }}
          />
          <SpinnerDish
            style={{ transform: 'rotate(-229deg) translate(280px)', backgroundImage: `url(${subImages.image5})` }}
          />
          <SpinnerDish
            style={{ transform: 'rotate(-265deg) translate(280px)', backgroundImage: `url(${subImages.image6})` }}
          />
          <SpinnerDish
            style={{ transform: 'rotate(-301deg) translate(280px)', backgroundImage: `url(${subImages.image7})` }}
          />
          <SpinnerDish
            style={{ transform: 'rotate(-337deg) translate(280px)', backgroundImage: `url(${subImages.image8})` }}
          />
          <SpinnerDish
            style={{ transform: 'rotate(-373deg) translate(280px)', backgroundImage: `url(${subImages.image9})` }}
          />
          <SpinnerDish
            style={{ transform: 'rotate(-409deg) translate(280px)', backgroundImage: `url(${subImages.image10})` }}
          />
          <SpinnerDish
            style={{
              transform: 'rotate(-337deg) translate(280px)',
              backgroundImage: `url(${data.subImages.image8})`,
            }}
          />
        </SpinnerWheel>
      </Spinner>

      <MainDishWrap>
        <MainDish id={data.id} src={data.mainImage.main} alt="Asian Cucumber Salad" />
      </MainDishWrap>
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
