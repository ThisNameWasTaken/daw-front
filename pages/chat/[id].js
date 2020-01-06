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
    paddingBottom: 88,
  },
  chatInput: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      maxWidth: 690,
      margin: 'auto',
      padding: theme.spacing(3, 2, 2, 2),
      background: `linear-gradient(transparent, ${theme.palette.background.default} 23%)`,
    },
  },
  chatAvatar: {
    marginRight: theme.spacing(1),
  },
  chatTextField: {
    width: '100%',
  },
}));

const Chat = ({ messages, avatars }) => {
  const classNames = useStyles({});

  const { userData } = useContext(UserContext);

  return (
    <div className={classNames.root}>
      {messages.map(({ date, text, senderId }) => (
        <Message
          key={date}
          avatar={
            <Avatar src={avatars[senderId].src} alt={avatars[senderId].alt} />
          }
          text={text}
          align={senderId === userData.id ? 'right' : 'left'}
        />
      ))}

      <div className={classNames.chatInput}>
        <div>
          <TextField
            label="Reply"
            variant="outlined"
            className={classNames.chatTextField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
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
    </div>
  );
};

Chat.getInitialProps = async context => {
  const { id } = context.query;

  const { messages, avatars } = await getChatData(id);

  return { messages, avatars };
};

export default Chat;
