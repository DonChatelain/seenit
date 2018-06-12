import React from 'react';
import styled from 'styled-components';

import ImageContainer from './ImageContainer';

const Wrapper = styled.section`
  padding: 0;
  margin: 0;
`;

export default class Main extends React.Component {
  render() {
    return (
      <Wrapper>
        <ImageContainer/>
      </Wrapper>
    );
  }
}