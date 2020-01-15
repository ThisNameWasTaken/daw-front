import React from 'react';
import { Container } from '@material-ui/core';

import Post from '../components/post';
import { getAllPosts } from '../services/post';

const Index = ({ posts }) => (
  <>
    <Container>
      {posts.map(post => (
        <Post {...post} />
      ))}
    </Container>
  </>
);

Index.getInitialProps = async context => {
  const posts = await getAllPosts();

  console.log(posts);

  return { posts };
};

export default Index;
