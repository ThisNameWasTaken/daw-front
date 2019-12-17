import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  Person as ProfileIcon,
  ArrowUpward as UploadIcon,
  Search as SearchIcon,
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    transition: 'transform 270ms ease',
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles({});
  const [state, setState] = useState({ route: null, isActive: false });

  const router = useRouter();

  const navigationRoutes = ['', 'profile', 'upload', 'search'];

  useEffect(() => {
    navigationRoutes.forEach(route => router.prefetch(`/${route}`));
  }, []);

  useEffect(() => {
    const route = router.pathname.split('/')[1];
    const isActive = navigationRoutes.includes(route);

    document.body.style.paddingBottom = isActive ? '56px' : '';

    setState({
      route,
      isActive,
    });
  }, [router]);

  const onChange = (event, route) => {
    router.push(`/${route}`);
  };

  return (
    <BottomNavigation
      value={state.route}
      onChange={onChange}
      className={classes.root}
      style={{ transform: `translateY(${state.isActive ? '0%' : '100%'})` }}
      aria-hidden={state.isActive}
      tabIndex={state.isActive ? 0 : -1}
    >
      <BottomNavigationAction label="Home" value="" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<ProfileIcon />}
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
