import { postsData } from '../mocks/posts';
import { usersData } from '../mocks/users';

const getMonthAsString = monthAsNumber =>
  [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ][monthAsNumber - 1];

const getDateString = date => {
  console.log({ date });
  const [year, month, day] = date
    .toString()
    .split('T')[0]
    .split('-');

  return [day, getMonthAsString(month), year].join(' ');
};

export const getPostData = postId => {
  if (!postsData[postId]) return null;

  const postData = JSON.parse(JSON.stringify(postsData[postId]));

  postData.id = postId;

  const authorId = postData.author.id;

  postData.author = {
    id: authorId,
    name: usersData[authorId].name,
    profilePhoto: usersData[authorId].profilePhoto,
  };

  postData.dateString = getDateString(postData.date);

  return Promise.resolve(postData);
};

export const getAllPosts = async () =>
  Promise.resolve(
    await Promise.all(Object.keys(postsData).map(id => getPostData(id)))
  );
