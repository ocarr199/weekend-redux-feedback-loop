import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function ReviewFeedback() {
  const history = useHistory();

  const feedback = useSelector(store => store.feedback)

  // CREATE TABLE "feedback" (
  //     "id" serial primary key,
  //     "feeling" INT not null,
  //     "understanding" INT not null,
  //     "support" INT not null,
  //     "comments" text,
  //     "flagged" boolean default false,
  //     "date" date not null default CURRENT_DATE
  //   ); 

  const handleClick = () => {
    axios.post('/feedback', {
      feeling: feedback.feeling,
      understanding: feedback.understanding,
      support: feedback.support,
      comments: feedback.comments
    })
      .then(response => {
        console.log(response)
        dispatch({ type: 'FEEDBACK_CONFIRMED' })
        history.push('/')
      }).catch(err => {
        console.log(err);
      })
    history.push('/ThankYou')
  }

  const goBack = () => {
    history.goBack();
  }

  return (
    <>
      <Button
        onClick={goBack}
        variant="contained"
        color="primary">
        Previous
         </Button>
      <h1>Review Your Feedback</h1>

      <Card variant="outlined" style={{display: 'inline-block'}}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Your Feedback:
        </Typography>
          <Typography variant="h6" component="h4">
            Feelings: {feedback.feeling}
          </Typography>
          <Typography variant="h6" component="h4">
            Understanding: {feedback.understanding}
          </Typography>
          <Typography variant="h6" component="h4">
            Comments: {feedback.comments}
          </Typography>
        </CardContent>
        <CardActions>

        </CardActions>
      </Card>

      <div>
        <Button
          onClick={handleClick}
          variant="contained" color="primary">
          Submit
         </Button>
      </div>
    </>
  )
}
export default ReviewFeedback