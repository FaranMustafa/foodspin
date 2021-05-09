//styles
import styled, { keyframes, css } from 'styled-components';

//components
import { Button } from 'react-bootstrap';

const ArrowButton = styled(Button)`
  background: ${props => props.color};
  width: 40px;
  height: 40px;
  box-shadow: 0px 10px 20px #f5ece3;
  border-radius: 50%;
  border: none;
`;

const DashedLine = styled.div`
  left: -3vw;
  top: 14vh;
  width: 49vw;
  height: 46vh;
  background-color: initial;
  transform: rotate(180deg);

  border-radius: 50%;
  position: absolute;
  background-position: center center;
  background-size: cover;
`;

const ArrowButtonWrap = styled.div`
  position: absolute;
  height: 100px;
  bottom: 15%;
  width: 50vw;
  display: flex;
  justify-content: space-between;
`;

const SpinnerContainer = styled.div`
  position: relative;
`;

const SpinnerWheel = styled.div`
position: relative;
    width: 560px;
    height: 560px;
    border: 2px dashed #e87f1e;
    border-radius: 50%;
    transform: rotate(
0deg
);
    transition: transform .7s linear;
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 30vh;
}`;
const SpinnerDish = styled.div`
  position: absolute;
  transform: rotate(0deg);
  transition: transform 0.7s linear;
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background: center;
  border-radius: 50%;
  background-size: contain;
`;
const Spinner = styled.div`
  width: 1177px;
  height: 1177px;
  border-radius: 50%;
  position: absolute;
  top: -800px;
  left: -260px;
  display: flex;
  align-items: flex-end;
  z-index: -1;
  overflow: hidden;
  justify-content: center;
  background-color: ${props => props.bgcolor};
`;

const rotateBackward = keyframes`
0% {
    transform: rotate(-45deg)
  }
  25% {
    opacity: 0.25;

  }
  50% {
    transform: scale(0.5)

  }
  75% {
    transform: rotate(45deg)
  }
  100% {
    transform: scale(1)

  }
`;

const rotateForward = keyframes`
0% {
    transform: rotate(-45deg)
  }
  25% {
    opacity: 0.25;

  }
  50% {
    transform: scale(0.5)

  }
  75% {
    transform: rotate(45deg)
  }
  100% {
    transform: scale(1)

  }
  `;

const MainDish = styled.img`
  animation: fadein ease-in 0.3s;
  position: absolute;
  animation: fade ease-out 0.3s;

  animation: ${props =>
    props.id
      ? css`
          ${rotateForward} 0.5s linear forwards
        `
      : css`
          ${rotateBackward} 0.5s linear forwards
        `};
`;

const fadeIn = keyframes`
0% {
  transform: scale(0, 0)
}
25% {
  opacity: 0.25;
}
50% {
  opacity: 0.5;
}
75% {
  opacity: 0.75;
}
100% {
  transform: scale(1, 1)
}

`;

const update = keyframes`
0% {
  transform: scale(0, 0)
}
25% {
  opacity: 0.25;
}
50% {
  opacity: 0.5;
}
75% {
  opacity: 0.75;
}
100% {
  transform: scale(1, 1)
}
`;

const Heading = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 66px;
  color: ${props => props.color};
`;

const InfoWrap = styled.div`
  animation: ${props =>
    props.id
      ? css`
          ${update} 0.25s linear forwards
        `
      : css`
          ${fadeIn} 0.25s linear forwards
        `};
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
  background: ${props => props.color};
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

const MainDishWrap = styled.div`
  width: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
  transform: rotate(0deg);
  transition: transform 0.7s linear;
  top: 80px;
  right: -100px;
`;

export {
  ArrowButton,
  DashedLine,
  ArrowButtonWrap,
  SpinnerContainer,
  SpinnerWheel,
  SpinnerDish,
  Spinner,
  MainDish,
  Heading,
  Subheading,
  Description,
  OrderButton,
  InfoWrap,
  MainDishWrap,
};
