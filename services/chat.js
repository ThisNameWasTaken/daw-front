import { chatsData } from '../mocks/chats';
import { usersData } from '../mocks/users';

export const getChatData = chatId => {
  if (!chatsData[chatId]) return null;

  const chatData = JSON.parse(JSON.stringify(chatsData[chatId]));

  const uniqueIds = chatData.messages.reduce(
    (uniqueIds, { senderId }) =>
      uniqueIds.includes(senderId) ? uniqueIds : [...uniqueIds, senderId],
    []
  );

  chatData.avatars = {};

  uniqueIds.forEach(id => {
    chatData.avatars[id] = {
      src: usersData[id].profilePhoto.src,
      alt: usersData[id].profilePhoto.alt,
    };
  });

  return Promise.resolve(chatData);
};
