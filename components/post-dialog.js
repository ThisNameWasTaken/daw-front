import React from 'react';
import { Dialog, makeStyles } from '@material-ui/core';
import Post from './post';

const useStyles = makeStyles({});

const PostDialog = ({ post, isOpen, onClose }) => {
  const classNames = useStyles({});

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Post {...post} />
    </Dialog>
  );
};

export default PostDialog;
