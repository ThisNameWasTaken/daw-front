import React, { useContext } from 'react';
import { getChatData } from '../../services/chat';
import Message from '../../components/message';
import {
  Avatar,
  makeStyles,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';
import { UserContext } from '../../services/user';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 690,
    margin: 'auto',
    position: 'relative',
  },
  chatInput: {
    position: 'fixed',
    bottom: theme.spacing(3),
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  chatAvatar: {
    marginRight: theme.spacing(1),
  },
  chatTextField: {
    // maxWidth: '100%',
  },
}));

const Chat = ({ messages, avatars }) => {
  const classNames = useStyles({});

  const { userData } = useContext(UserContext);

  return (
    <div className={classNames.root}>
      {messages.map(({ date, text, senderId }) => (
        <Message
          avatar={
            <Avatar src={avatars[senderId].src} alt={avatars[senderId].alt} />
          }
          text={text}
          align={senderId === userData.id ? 'right' : 'left'}
        />
      ))}

      <div className={classNames.chatInput}>
        <Avatar
          className={classNames.chatAvatar}
          alt={userData.profilePhoto.alt}
          src={userData.profilePhoto.src}
        />

        <TextField
          label='Comment'
          variant='outlined'
          className={classNames.chatTextField}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={() => {
                    console.log('comment');
                  }}
                  className={''}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

Chat.getInitialProps = async context => {
  const { id } = context.query;

  const { messages, avatars } = await getChatData(id);

  return { messages, avatars };
};

export default Chat;
