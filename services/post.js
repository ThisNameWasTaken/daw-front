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

export const getAllPosts = async () => {
  return Promise.resolve(
    await Promise.all(Object.keys(postsData).map(id => getPostData(id)))
  );
};
