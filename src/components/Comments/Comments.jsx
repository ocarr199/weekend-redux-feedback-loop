import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'


function Comments(){
    const history = useHistory();

    const handleClick = () => {
        history.push('/Review')
    }

    return(
        <>
        <h1>Any comments you want to leave??</h1>
        <TextField required id="standard-number"  label="Comments?" />
        <Button 
                   onClick={handleClick}
        variant="contained" color="primary">
        Next
         </Button>
         </>
        
    )
}
export default Comments