import React from 'react';
import { useRouter } from 'next/router';
import { IconButton } from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

const BackButton = () => {
  const router = useRouter();

  return (
    <IconButton aria-label="Go Back" onClick={router.back}>
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
