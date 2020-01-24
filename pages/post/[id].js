import React from 'react';

import PostComponent from '../../components/post';
import BackButton from '../../components/back-button';
import withPrivateRoute from '../../components/private-route';
import { getPostData } from '../../services/post';
import { getUserData } from '../../services/user';

const Post = ({ userData, post }) => (
  <>
    <BackButton />
    <PostComponent userData={userData} {...post} />
  </>
);

Post.getInitialProps = async (context, { decodedToken }) => {
  const [userData, post] = await Promise.all([
    getUserData(decodedToken.id),
    getPostData(context.query.id),
  ]);

  return { userData, post };
};

export default withPrivateRoute(Post);
