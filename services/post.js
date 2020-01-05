import { postsData } from '../mocks/posts';
import { usersData } from '../mocks/users';

export const getPostData = postId => {
  const postData = JSON.parse(JSON.stringify(postsData[postId]));

  const authorId = postData.author.id;

  postData.author = {
    id: authorId,
    name: usersData[authorId].name,
    profilePhoto: usersData[authorId].profilePhoto,
  };

  return Promise.resolve(postData);
};
