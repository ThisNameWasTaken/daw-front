import React, { useState } from 'react';
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
import PostDialog from '../components/post-dialog';

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
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'block',
      maxWidth: '100%',
      cursor: 'pointer',
    },
  },
}));

const Profile = ({ userData }) => {
  const classNames = useStyles({});
  const [post, setPost] = useState({
    post: '',
    photos: [],
    comments: [],
    author: { profilePhoto: { src: '', alt: '' }, username: '' },
  });
  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false);

  const showPost = post => {
    setPost({
      ...post,
      author: {
        profilePhoto: userData.profilePhoto,
        username: userData.username,
      },
    });
    setIsPostDialogOpen(true);
  };

  const onPostDialogClose = event => {
    setIsPostDialogOpen(false);
  };

  return (
    <>
      <PostDialog
        post={post}
        isOpen={isPostDialogOpen}
        onClose={onPostDialogClose}
      />
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

            <Container
              maxWidth="md"
              className={classNames.photoGalleryContainer}
            >
              <Grid container className={classNames.photoGalleryGrid}>
                {userData.posts.map(post => (
                  <Grid
                    item
                    className={classNames.photoGalleryGridItem}
                    xs={4}
                    key={post.photos[0].src}
                  >
                    <img
                      src={post.photos[0].src}
                      alt={post.photos[0].alt}
                      onClick={() => showPost(post)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

Profile.getInitialProps = async () => ({
  userData: await getUserData('e2H4aD3j1'),
});

export default Profile;
