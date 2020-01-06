import React from 'react';
import clsx from 'clsx';
import { Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginRight: 'auto',
  },
  rightAligned: {
    marginRight: 'none',
    marginLeft: 'auto',
    flexDirection: 'row-reverse',
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
      {avatar}
      <Card>
        <Typography gutterBottom>{text}</Typography>
      </Card>
    </div>
  );
};

export default Message;
