import React from 'react';

//components
import TextDetails from './textDetail';
import RotateFood from './foodRotate';
// import CircularSection from '../CircleSection';
import { Row, Col } from 'react-bootstrap';

//styles
import styled from 'styled-components';

//images
import { MainImage1, MainImage2, MainImage3 } from '../../assets/images/MainImages';
import { image1, image2, image3, image4, image5, image8 } from '../../assets/images/SubImages';

const ContentSection = () => {
  const [index, setIndex] = React.useState(0);
  const handleRight = () => {
    index < 2 && setIndex(index + 1);
  };
  const handleLeft = () => {
    index > 0 && setIndex(index - 1);
  };
  return (
    <ContentContainer>
      {/* <CircularSection backgroundColor={data[index].backgroundColor} /> */}
      <Row className="w-100">
        <Col md={5} sm={12}>
          <TextDetails data={data[index]} />
        </Col>
        <Col xs={7} className="d-none d-lg-block">
          <RotateFood data={data[index]} handleRight={handleRight} handleLeft={handleLeft} />
        </Col>
      </Row>
    </ContentContainer>
  );
};

export default ContentSection;

const ContentContainer = styled.div`
  margin-top: 10vh;
  padding: 65px 100px;

  @media (max-width: 768px) {
    padding: 20px 50px;
  }
`;

const data = [
  {
    id: 0,
    backgroundColor: '#FFEEDE',
    color: '#FF922C',
    mainImage: MainImage1,
    subImages: {
      image1: image5,
      image2: image3,
      image3: image4,
      image4: image8,
      image5: image1,
      image6: image2,
      image7: image5,
      image8: image3,
    },
    info: {
      price: '$32',
      heading: 'Green Goddess <br/> Chicken Salad',
      description:
        'It is a non vegetarian salad which consists of the <br/> green goddess dressing mixed with chicken,<br/> peppers, olives and celery. ',
    },
  },
  {
    id: 1,
    backgroundColor: '#EAFFE2',
    color: '#54BF29',
    mainImage: MainImage2,

    subImages: {
      image1: image3,
      image2: image4,
      image3: image8,
      image4: image1,
      image5: image2,
      image6: image5,
      image7: image3,
      image8: image5,
    },

    info: {
      price: '$35',
      heading: 'Asian Cucumber <br/> Salad',
      description:
        'Asian Cucumber Salad Recipe made with crunchy <br/> cucumber, onion, rice wine vinegar, and a few <br/> secret ingredients!',
    },
  },
  {
    id: 0,
    backgroundColor: '#FFEEDE',
    color: '#FF922C',
    mainImage: MainImage3,

    subImages: {
      image1: image4,
      image2: image8,
      image3: image1,
      image4: image2,
      image5: image5,
      image6: image3,
      image7: image5,
      image8: image3,
    },

    info: {
      price: '$32',
      heading: 'Green Goddess <br/> Chicken Salad',
      description:
        'It is a non vegetarian salad which consists of the <br/> green goddess dressing mixed with chicken,<br/> peppers, olives and celery. ',
    },
  },
];
