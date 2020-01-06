import { postsData } from '../mocks/posts';
import { usersData } from '../mocks/users';

export const getPostData = postId => {
  if (!postsData[postId]) return null;

  const postData = JSON.parse(JSON.stringify(postsData[postId]));

  const authorId = postData.author.id;

  postData.author = {
    id: authorId,
    name: usersData[authorId].name,
    profilePhoto: usersData[authorId].profilePhoto,
  };

  return Promise.resolve(postData);
};
