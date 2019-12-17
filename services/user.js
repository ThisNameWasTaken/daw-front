import { usersData } from '../mocks/users';

export const getUserData = userId => Promise.resolve(usersData[userId]);
