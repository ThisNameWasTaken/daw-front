import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  makeStyles,
  Grid,
  Button,
} from '@material-ui/core';
import Cookies from 'js-cookie';

import { getUserData } from '../services/user';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
  },
  cardContent: {
    position: 'relative',
    padding: 0,
    paddingTop: 'calc(10vh + 16px)',
  },
  cardMedia: {
    height: '40vh',
  },
  profilePhoto: {
    width: '20vh',
    height: '20vh',
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  profileDescription: {
    maxWidth: 300,
    margin: 'auto',
    display: 'block',
    marginBottom: theme.spacing(6),
  },
  photoGalleryContainer: {
    padding: 0,
  },
  photoGalleryGrid: {
    position: 'relative',
  },
  photoGalleryGridItem: {
    paddingTop: '35%',
    position: 'relative',
    overflow: 'hidden',
    border: '2px solid transparent',
    '& > a > img': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'block',
      maxWidth: '100%',
      cursor: 'pointer',
    },
  },
  logOutButton: {
    marginTop: theme.spacing(5),
  },
}));

const Profile = ({ userData, shouldDisplayLogOut }) => {
  const classNames = useStyles({});

  const router = useRouter();

  const logOut = () => {
    Cookies.remove('token');

    router.push('/login');
  };

  return (
    <Container className={classNames.container}>
      <Card>
        <CardMedia
          component="img"
          alt={userData?.coverPhoto.alt}
          className={classNames.cardMedia}
          image={userData?.coverPhoto.src}
          title={userData?.coverPhoto.alt}
        />
        <CardContent className={classNames.cardContent}>
          <Avatar
            alt={userData?.profilePhoto.alt}
            src={userData?.profilePhoto.src}
            className={classNames.profilePhoto}
          />

          <Typography gutterBottom variant="h5" component="h2" align="center">
            {userData?.name}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            className={classNames.profileDescription}
            component="p"
            align="center"
          >
            {userData?.description}
            {shouldDisplayLogOut && (
              <Button
                className={classNames.logOutButton}
                variant="contained"
                onClick={logOut}
              >
                Log Out
              </Button>
            )}
          </Typography>

          <Container maxWidth="md" className={classNames.photoGalleryContainer}>
            <Grid container className={classNames.photoGalleryGrid}>
              {userData?.posts.map(post => (
                <Grid
                  item
                  className={classNames.photoGalleryGridItem}
                  xs={4}
                  key={post.photos[0].src}
                >
                  <Link href="/post/[id]" as={`/post/${post.id}`}>
                    <a>
                      <img src={post.photos[0].src} alt={post.photos[0].alt} />
                    </a>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
};

Profile.getInitialProps = async (context, { decodedToken }) => {
  const { id: userId } = decodedToken;

  const { id: profileId } = context.query;

  const userData = await getUserData(profileId || userId);

  const shouldDisplayLogOut = userId === profileId || !profileId;

  return {
    userData,
    shouldDisplayLogOut,
  };
};

export default Profile;
