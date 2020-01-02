import React, { useState } from 'react';
import {
  Collapse,
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
import clsx from 'clsx';

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

  const [expanded, setExpanded] = useState(false);

  const onExpand = event => setExpanded(!expanded);

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
        // component="img"
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
        <Typography
          variant="body2"
          component="p"
          // className={classNames.likesCount}
        >
          32 likes
        </Typography>

        <IconButton aria-label="share" className={classNames.shareButton}>
          <ShareIcon />
        </IconButton>
        {/* <IconButton
          onClick={onExpand}
          aria-expanded={expanded}
          aria-label={expanded ? 'show less' : 'show more'}
        >
          <ExpandMoreIcon
            className={clsx(classNames.expandMoreIcon, {
              [classNames.expandMoreIconOn]: expanded,
            })}
          />
        </IconButton> */}
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
