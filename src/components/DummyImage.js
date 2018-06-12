import React from 'react';
import styled from 'styled-components';

import util from '../util.js';

const MIN_SIZE = 175;
const MAX_SIZE = 350;

const SIZES = [
  // 116.666,
  175,
  350,
];

const Image = styled.img`
  box-sizing: border-box;
  margin: 0;
`;

export default class DummyImage extends React.Component {
  render() {
    const size = SIZES[Math.floor(Math.random() * SIZES.length)];
    // const size = Math.round(util.mapValue(Math.random(), 0, 1, MIN_SIZE, MAX_SIZE));

    return (
      <Image style={{
        minWidth: size,
        minHeight: size,
          // maxWidth: size + 25,
          // minWidth: size - 25,
          // maxHeight: size + 25,
          // minHeight: size - 25,
          background: `rgb(${generateRandomRGBValues()})`,
        }}>
      </Image>
    );
  }
}

function generateRandomRGBValues() {
  const a = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const c = Math.floor(Math.random() * 255);
  return [a, b, c];
}
