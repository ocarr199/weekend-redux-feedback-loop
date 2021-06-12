import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'


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
        axios.post('/api/order', {
            feeling: feedback.feeling,
            understanding: feedback.understanding,
            support: feedback.support,
            comments: feedback.comments
          })
        .then(response => {
       console.log(response)
       dispatch({type:'FEEDBACK_CONFIRMED'})
       history.push('/')
        }).catch(err => {
          console.log(err);
        })
        history.push('/ThankYou')
    }
    return(
        <>
        <h1>Review Your Feedback</h1>
        <ul>
            <li>Feelings: {feedback.feeling}</li>
            <li>Understanding: {feedback.understanding}</li>
            <li>Support: {feedback.support}</li>
            <li>Comments: {feedback.comments}</li>
        </ul>
        <Button 
                   onClick={handleClick}
        variant="contained" color="primary">
       Submit
         </Button>
        </>
    )
}
export default ReviewFeedback