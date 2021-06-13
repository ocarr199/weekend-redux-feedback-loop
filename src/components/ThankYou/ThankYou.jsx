import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
function ThankYou (){


    const history = useHistory();

    const restart = () => {
        history.push('/')

    }
    return (
        <>
        <h1>Thanks</h1>
        <Button
            onClick={restart}
                variant="contained"
                color="primary"
                type="submit">
                Next
         </Button>
        </>
    )
}
export default ThankYou