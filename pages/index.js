import React from 'react';
import { Container } from '@material-ui/core';

import Post from '../components/post';
import { getAllPosts } from '../services/post';
import withPrivateRoute from '../components/private-route';
import { getUserData } from '../services/user';

const Index = ({ userData, posts }) => (
  <>
    <Container>
      {posts.map(post => (
        <Post key={post.id} userData={userData} {...post} />
      ))}
    </Container>
  </>
);

Index.getInitialProps = async (context, { decodedToken }) => {
  const [userData, posts] = await Promise.all([
    getUserData(decodedToken.id),
    getAllPosts(),
  ]);

  return { userData, posts };
};

export default withPrivateRoute(Index);
