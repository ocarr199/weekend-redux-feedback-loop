import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import './Thanksyou.css'
function ThankYou (){


    const history = useHistory();

    const restart = () => {
        history.push('/Feeling')

    }
    const admin = () => {
        history.push('/Admin')

    }
    return (
        <>
        <h1>Thank you for the feedback!</h1>
        <div className="restart">
        <Button
            onClick={restart}
                variant="contained"
                color="primary"
                type="submit">
                submit More
         </Button>
         </div>
         <Button
            onClick={admin}
                variant="contained"
                color="primary"
                type="submit">
                Admin
         </Button>
        </>
    )
}
export default ThankYou