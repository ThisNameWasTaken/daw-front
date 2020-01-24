import React from 'react';
import Link from 'next/link';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

import withPrivateRoute from '../components/private-route';
import { getChatList } from '../services/chat';

const useStyles = makeStyles(theme => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const ChatList = ({ chatList }) => {
  const classNames = useStyles({});

  return (
    <List>
      {chatList.map(({ id, avatar, lastMessage, name }) => (
        <Link href="/chat/[id]" as={`/chat/${id}`} key={id}>
          <a className={classNames.link}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={avatar.src} alt={avatar.alt} />
              </ListItemAvatar>
              <ListItemText primary={name} secondary={lastMessage.text} />
            </ListItem>
          </a>
        </Link>
      ))}
    </List>
  );
};

ChatList.getInitialProps = async (context, { decodedToken }) => {
  const chatList = await getChatList(decodedToken.id);

  return { chatList };
};

export default withPrivateRoute(ChatList);
