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
    transition: 'transform 270ms ease-out',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles({});
  const [state, setState] = useState({ route: null, isActive: false });

  const router = useRouter();

  useEffect(() => {
    const route = router.pathname.split('/')[1];
    setState({
      route,
      isActive: ['', 'account', 'upload', 'search'].includes(route),
    });
  }, []);

  const handleChange = (event, route) => {
    setState(route);

    if (router.pathname === `/${route}`) return;

    router.push(`/${route}`);
  };

  return (
    <BottomNavigation
      value={state.route}
      onChange={handleChange}
      className={classes.root}
      style={{ transform: `translateY(${state.isActive ? '0%' : '100%'})` }}
      aria-hidden={state.isActive}
      tabIndex={state.isActive ? 0 : -1}
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
