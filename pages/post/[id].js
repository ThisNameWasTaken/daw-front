import React from 'react';

import PostComponent from '../../components/post';

import { getPostData } from '../../services/post';

const Post = ({ post }) => (
  <>
    <PostComponent {...post} />
  </>
);

Post.getInitialProps = async context => {
  const { id } = context.query;

  const post = await getPostData(id);

  return { post };
};

export default Post;
