import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

function FeelingToday() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/Understanding')
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <TextField required id="standard-number" type="number" label="feeling?" />
            <Button 
            onClick={handleClick}
            variant="contained" color="primary">
                Primary
             </Button>
        </>
    )
}
export default FeelingToday