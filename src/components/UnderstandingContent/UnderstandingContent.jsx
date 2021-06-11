import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

function UnderstandingContent(){
    const history = useHistory();

    const handleClick = () => {
        history.push('/Supported')
    }

    return(
        <>
        <h1>How well are you understanding the content?</h1>
        <TextField required id="standard-number" type="number" label="Understanding?" />
        <Button 
               onClick={handleClick}
        variant="contained" color="primary">
            Next
         </Button>
         </>
    )
}
export default UnderstandingContent