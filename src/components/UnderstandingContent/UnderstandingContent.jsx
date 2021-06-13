import  { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

function UnderstandingContent(){
    const history = useHistory();
    const dispatch = useDispatch();

    let[understanding, setUnderstanding] = useState( 0);

    const handleUnderstanding = (event) => {
        setUnderstanding(event.target.value);
    }

    const handleClick = () => {

        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })

        history.push('/Supported')
    }

    const goBack = () => {
        history.goBack();
    }

    console.log(understanding)
    return(
        <>
        <Grid container>
        <Grid item   >
          <Button 
          onClick={goBack}
        variant="contained" 
        color="primary">
           Previous
         </Button>
         </Grid>
         </Grid>
<Grid container justify="center">


         <Grid item>
         <h1>How well are you understanding the content?</h1>
         </Grid>
         </Grid>
        <form onSubmit={handleClick}>
        <TextField 
        onChange={handleUnderstanding}
        required={true}
        id="standard-number" 
        type="number" 
        label="Understanding?" />

       

    <Grid item m={2}>
        <Button 
        variant="contained" 
        color="primary"
        type="submit">
            Next
         </Button>
         </Grid>
     
         </form >
         
         </>
    )
}
export default UnderstandingContent