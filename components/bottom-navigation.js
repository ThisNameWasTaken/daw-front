import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  ArrowUpward as UploadIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles({});
  const [state, setState] = useState();

  const router = useRouter();

  useEffect(() => {
    setState(router.pathname.split('/')[1]);
  }, []);

  const handleChange = (event, route) => {
    setState(route);

    if (router.pathname === `/${route}`) return;

    router.push(`/${route}`);
  };

  return (
    <BottomNavigation
      value={state}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction label="Home" value="" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Account"
        value="account"
        icon={<PersonIcon />}
      />
      <BottomNavigationAction
        label="Upload"
        value="upload"
        icon={<UploadIcon />}
      />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
