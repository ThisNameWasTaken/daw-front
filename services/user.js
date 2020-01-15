import { createContext } from 'react';

import { usersData } from '../mocks/users';
import { postsData } from '../mocks/posts';

export const getUserData = userId => {
  if (!usersData[userId]) return null;

  const userData = JSON.parse(JSON.stringify(usersData[userId]));

  userData.id = userId;

  userData.posts = [];

  usersData[userId].posts.forEach(postID => {
    userData.posts.push({
      id: postID,
      ...postsData[postID],
    });
  });

  return Promise.resolve(userData);
};

export const UserContext = createContext({
  userData: { id: null, profilePhoto: { src: null, alt: null } },
  setUserData: () => {},
  logInUser: () => {},
});
