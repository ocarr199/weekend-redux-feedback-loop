
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'


function ReviewFeedback() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/ThankYou')
    }
    return(
        <>
        <h1>Review Your Feedback</h1>
        <ul>
            <li>Feelings</li>
            <li>Understanding</li>
            <li>Support</li>
            <li>Comments</li>
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