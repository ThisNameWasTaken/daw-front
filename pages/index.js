import React from 'react';
import { Container } from '@material-ui/core';

import Post from '../components/post';

const Index = () => (
  <>
    <Container>
      <Post />
      <Post />
      <Post />
    </Container>
  </>
);

export default Index;
