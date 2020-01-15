import React from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardActions,
  Typography,
  makeStyles,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import {
  ArrowBack as ArrowBackIcon,
  Send as SendIcon,
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from '@material-ui/icons';
import { useContext } from 'react';
import { UserContext } from '../services/user';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  rootContainer: {
    margin: 'auto',
    maxWidth: 690,
  },
  card: {
    marginBottom: theme.spacing(1),
  },
  media: {
    position: 'relative',

    display: 'flex',
    flexFlow: 'column nowrap',

    width: '100%',
    paddingTop: '100%',
    '& > div': {
      position: 'absolute',

      display: 'flex',
      flex: 'none',
      flexFlow: 'row nowrap',

      top: 0,
      bottom: 0,
      left: 0,
      right: 0,

      overflowX: 'auto',
      overflowY: 'hidden',

      scrollSnapType: 'x mandatory',
      '& > div': {
        position: 'relative',

        flex: 'none',
        flexFlow: 'row nowrap',

        width: '100%',
        height: '100%',

        scrollSnapAlign: 'center',

        '& > img': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: 'auto',
        },
      },
    },
  },
  shareButton: {
    marginLeft: 'auto',
  },
  expandMoreIcon: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandMoreIconOn: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  cardActions: {
    position: 'relative',
  },
  likesCount: {
    position: 'absolute',
    bottom: 0,
    left: theme.spacing(2),
    transform: 'translateY(50%)',
  },
  commentInputContainer: {
    paddingLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  commentInput: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
  },
  addCommentButton: {
    transform: `translateX(${theme.spacing(2) - 4}px)`,
  },
  comments: {
    padding: theme.spacing(0, 3),
  },
}));

const Post = ({ photos, comments, likes, date, author, id }) => {
  const classNames = useStyles({});

  const { userData, setUserData } = useContext(UserContext);

  // useEffect(() => {
  //   loggedInUser.setUserData({ id: 'lorem' });
  // }, []);

  const onAddComment = event => console.log('comment');

  return (
    <div className={classNames.rootContainer}>
      <Card className={classNames.card}>
        <CardHeader
          avatar={
            <Link href="/profile/[id]" as={`/profile/${author.id}`}>
              <a>
                <Avatar
                  alt={author.profilePhoto.alt}
                  src={author.profilePhoto.src}
                />
              </a>
            </Link>
          }
          action={
            <IconButton aria-label="open menu">
              <MoreVertIcon />
            </IconButton>
          }
          title={author.username}
          subheader={date}
        />

        <Link href="/post/[id]" as={`/post/${id}`}>
          <a>
            <div className={classNames.media}>
              <div>
                {photos.map(({ src, alt }) => (
                  <div key={src}>
                    <img src={src} alt={alt} />
                  </div>
                ))}
              </div>
            </div>
          </a>
        </Link>
        <CardActions className={classNames.cardActions} disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography variant="body2" component="p">
            {likes} likes
          </Typography>

          <IconButton aria-label="share" className={classNames.shareButton}>
            <ShareIcon />
          </IconButton>
        </CardActions>

        <div className={classNames.comments}>
          {comments.map(({ id, comment, user }) => (
            <Typography
              key={id}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {comment}
            </Typography>
          ))}
        </div>

        <CardActions className={classNames.cardActions}>
          <div className={classNames.commentInputContainer}>
            <Avatar
              alt={userData?.profilePhoto.alt}
              src={userData?.profilePhoto.src}
            />

            <TextField
              label="Comment"
              variant="outlined"
              className={classNames.commentInput}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={onAddComment}
                      className={classNames.addCommentButton}
                    >
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

Post.getInitialProps = () => {};

export default Post;
