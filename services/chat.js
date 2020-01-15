import { chatsData } from '../mocks/chats';
import { usersData } from '../mocks/users';
import { getUserData } from './user';

export const getChatData = chatId => {
  if (!chatsData[chatId]) return null;

  const chatData = JSON.parse(JSON.stringify(chatsData[chatId]));

  chatData.id = chatId;

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

export const getChatList = async userId => {
  const userData = await getUserData(userId);

  const { chats } = userData;

  const chatData = await Promise.all(chats.map(id => getChatData(id)));

  const chatList = await Promise.all(
    chatData.map(async ({ id, messages, avatars }) => {
      const otherUserId = Object.keys(avatars).filter(key => key != userId)[0];
      const avatar = avatars[otherUserId];

      const lastMessage =
        messages.length > 0 ? messages[messages.length - 1] : '';

      const { username: name } = await getUserData(otherUserId);

      return Promise.resolve({
        id,
        avatar,
        name,
        lastMessage,
      });
    })
  );

  return Promise.resolve(chatList);
};
