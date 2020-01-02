import React from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  makeStyles,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import {
  Send as SendIcon,
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
}));

const Post = () => {
  const classNames = useStyles({});

  const onAddComment = event => console.log('comment');

  return (
    <Card className={classNames.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Adrian Dinca" className={classNames.avatar}>
            AD
          </Avatar>
        }
        action={
          <IconButton aria-label="open menu">
            <MoreVertIcon />
          </IconButton>
        }
        title="Adrian Dinca"
        subheader="Dec 26, 2019"
      />
      <CardMedia
        className={classNames.media}
        image="https://images.pexels.com/photos/3336152/pexels-photo-3336152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Cabs on a London street"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests.Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions className={classNames.cardActions} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" component="p">
          32 likes
        </Typography>

        <IconButton aria-label="share" className={classNames.shareButton}>
          <ShareIcon />
        </IconButton>
      </CardActions>

      <CardActions className={classNames.cardActions}>
        <div className={classNames.commentInputContainer}>
          <Avatar aria-label="Adrian Dinca" className={classNames.avatar}>
            AD
          </Avatar>

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
  );
};

export default Post;
