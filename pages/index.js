import React from 'react';
import { Container } from '@material-ui/core';

import Post from '../components/post';
import { getAllPosts } from '../services/post';
import withPrivateRoute from '../components/private-route';

const Index = props => {
  const { posts } = props;

  return (
    <>
      <Container>
        {posts.map(post => (
          <Post {...post} />
        ))}
      </Container>
    </>
  );
};

Index.getInitialProps = async context => {
  const posts = await getAllPosts();

  return { posts };
};

export default withPrivateRoute(Index);
