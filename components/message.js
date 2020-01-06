import React from 'react';
import clsx from 'clsx';
import { Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginRight: 'auto',
    margin: theme.spacing(1, 0),
    alignItems: 'center',
  },
  rightAligned: {
    marginRight: 'none',
    marginLeft: 'auto',
    flexDirection: 'row-reverse',
  },
  chatBubble: {
    padding: theme.spacing(1.5, 2),
    // margin: theme.spacing(1, 0),
    borderRadius: '1.5rem',
    background: theme.palette.secondary.dark,
  },
  self: {
    background: theme.palette.background.paper,
  },
  avatar: {
    margin: theme.spacing(0, 1),
  },
}));

const Message = ({ text, avatar, align = 'left' }) => {
  const classNames = useStyles({});

  return (
    <div
      className={clsx(classNames.root, {
        [classNames.rightAligned]: align === 'right',
      })}
    >
      <div className={classNames.avatar}>{avatar}</div>
      <Card
        className={clsx(classNames.chatBubble, {
          [classNames.self]: align === 'right',
        })}
      >
        <Typography>{text}</Typography>
      </Card>
    </div>
  );
};

export default Message;
