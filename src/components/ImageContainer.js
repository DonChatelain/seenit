import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';

import DummyImage from './DummyImage';

const Wrapper = styled.section`
  background: salmon;
  width: 100%;
  min-height: 100vh;
`;

export default class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const masonryOptions = {
      transitionDuration: 500,
      itemSelector: '.dummy-image',
      columnWidth: 200,
      gutter: 0,
      // percentPosition: true,
      horizontalOrder: true,
    }

    const masonryStyle = {
      // lineHeight: 0,
      // columnCount: 3,
      // columnGap: 0, 
      display: 'block',
      maxWidth: '1200px',
      margin: '0 auto',
      counterReset: 'grid-item',
    };

    return (
        <Masonry
            className={'image-container'} // default ''
            style={masonryStyle}
            elementType={'div'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            // imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
            {generateDummyImages()}
        </Masonry>
    );

    // return (
    //   <Wrapper>
    //     {generateDummyImages()}
    //   </Wrapper>
    // );
  }
}

function generateDummyImages () {
  const dummyImgCount = 50;
  const dummyImgs = [];
  for (let i = 0; i < dummyImgCount; i += 1) {
    dummyImgs.push(<DummyImage className="dummy-image" key={"image_" + i}></DummyImage>);
  }
  return dummyImgs;
}
