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

const useStyles = makeStyles(theme => ({
  cardContent: {
    position: 'relative',
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
  },
  gridList: {
    paddingTop: theme.spacing(6),
  },
  photoGrid: {
    position: 'relative',
  },
  photoGridItem: {
    paddingTop: '35%',
    position: 'relative',
    overflow: 'hidden',
    border: '4px solid #424242',
    '& > img': {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: 'block',
      maxWidth: '100%',
    },
  },
}));

const userData = {
  profilePhoto: {
    src:
      'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    alt: 'profile photo',
  },
  coverPhoto: {
    src:
      'https://images.pexels.com/photos/3354641/pexels-photo-3354641.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    alt: 'cover photo',
  },
  name: 'John Doe',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A blanditiis voluptates ratione dolorum perspiciatis eum tenetur.',
  photos: [
    {
      src:
        'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      alt: 'gallery photo',
    },
    {
      src:
        'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      alt: 'gallery photo',
    },
    {
      src:
        'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      alt: 'gallery photo',
    },
    {
      src:
        'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      alt: 'gallery photo',
    },
    {
      src:
        'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      alt: 'gallery photo',
    },
  ],
};

const Profile = () => {
  const classNames = useStyles({});

  return (
    <Container>
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

          <Container maxWidth="md">
            <Grid container className={classNames.photoGrid}>
              {userData.photos.map(photo => (
                <Grid item className={classNames.photoGridItem} xs={4}>
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

export default Profile;
