import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core';
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
    '& > img': {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: 'block',
      maxWidth: '100%',
      cursor: 'zoom-in',
    },
  },
}));

const Profile = ({ userData }) => {
  const classNames = useStyles({});

  return (
    <Container className={classNames.container}>
      <Card>
        <CardMedia
          component="img"
          alt={userData.coverPhoto.alt}
          className={classNames.cardMedia}
          image={userData.coverPhoto.src}
          title={userData.coverPhoto.alt}
        />
        <CardContent className={classNames.cardContent}>
          <Card className={classNames.profilePhoto}>
            <CardMedia
              component="img"
              alt={userData.profilePhoto.alt}
              image={userData.profilePhoto.src}
              title={userData.profilePhoto.alt}
            />
          </Card>

          <Typography gutterBottom variant="h5" component="h2" align="center">
            {userData.name}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            className={classNames.profileDescription}
            component="p"
            align="center"
          >
            {userData.description}
          </Typography>

          <Container maxWidth="md" className={classNames.photoGalleryContainer}>
            <Grid container className={classNames.photoGalleryGrid}>
              {userData.photos.map(photo => (
                <Grid item className={classNames.photoGalleryGridItem} xs={4}>
                  <img src={photo.src} alt={photo.alt} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
};

Profile.getInitialProps = async () => ({
  userData: await getUserData('e2H4aD3j1'),
});

export default Profile;
