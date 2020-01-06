import React from 'react';

import PostComponent from '../../components/post';

import { getPostData } from '../../services/post';
import BackButton from '../../components/back-button';

const Post = ({ post }) => (
  <>
    <BackButton />
    <PostComponent {...post} />
  </>
);

Post.getInitialProps = async context => {
  const { id } = context.query;

  const post = await getPostData(id);

  return { post };
};

export default Post;
