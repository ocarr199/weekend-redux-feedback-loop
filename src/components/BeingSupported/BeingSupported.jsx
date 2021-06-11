import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

function BeingSupported(){

    const history = useHistory();

    const handleClick = () => {
        history.push('/Comments')
    }

    return(
        <>
        <h1>How well are you being supported?</h1>
        <TextField required id="standard-number" type="number" label="feeling?" />
        <Button 
                   onClick={handleClick}
        variant="contained" color="primary">
        Next
         </Button>
         </>
    )
}
export default BeingSupported