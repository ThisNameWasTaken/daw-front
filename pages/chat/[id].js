import React from 'react';
import { getChatData } from '../../services/chat';
import { Card, CardContent, Typography } from '@material-ui/core';

const Chat = ({ messages, avatars }) => {
  return (
    <>
      {messages.map(message => (
        <Card key={message.date}>
          <CardContent>
            <Typography gutterBottom>{message.text}</Typography>
          </CardContent>
        </Card>
      ))}
      <p></p>
    </>
  );
};

Chat.getInitialProps = async context => {
  const { id } = context.query;

  const { messages, avatars } = await getChatData(id);

  return { messages, avatars };
};

export default Chat;
