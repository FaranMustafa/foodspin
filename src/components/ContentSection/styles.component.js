//styles
import styled, { keyframes, css } from 'styled-components';

//components
import { Button } from 'react-bootstrap';

const ArrowButton = styled(Button)`
  width: 40px;
  height: 40px;
  background: ${props => props.color};
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
  width: 46vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 78vh;
  right: 6%;
`;

const SpinnerContainer = styled.div`
  width: calc(100vw - 430px);
  margin-right: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const rotate45 = keyframes`
0% {
  transform: translate(-50%, -50%) rotate(-1260deg)
}
25% {
  opacity: 0.25;
}
50% {
    transform: translate(-50%, -50%) rotate(-1220deg)
}
75% {
  opacity: 0.75;
}
100% {
  transform: translate(-50%, -50%) rotate(-1260deg);
}

`;
const rotate45back = keyframes`
0% {
  transform: translate(-50%, -50%) rotate(-1260deg)
}
25% {
  opacity: 0.25;
}
50% {
    transform: translate(-50%, -50%) rotate(-1280deg)
}
75% {
  opacity: 0.75;
}
100% {
  transform: translate(-50%, -50%) rotate(-1260deg);
}

`;

const SpinnerWheel = styled.div`
  width: 560px;
  height: 540px;
  //   border: 2px dashed #e87f1e;
  border-radius: 50%;
  position: absolute;
  top: 93%;
  left: 50%;
  transition: all 0.5s ease-in-out;
  transform: translate(-50%, -50%) rotate(-1260deg);

  animation: ${props =>
    props.id
      ? css`
          ${rotate45} 0.5s linear forwards
        `
      : css`
          ${rotate45back} 0.5s linear forwards
        `};
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
  //   background-position: center center;
  //   background-size: cover;
  background-position: -34px -22px;
  background-size: 172% 181%;
`;
const Spinner = styled.div`
  position: fixed;
  width: 90vw;
  height: 138vh;
  right: -16%;
  top: -66%;
  border-radius: 50%;
  z-index: -1;
  clip-path: circle();

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
  position: fixed;
  border-radius: 50%;
  right: 14vw !important;
  top: 50vh !important;
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
};
