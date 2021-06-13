import axios from "axios";
import { useState, useEffect } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

function Admin() {

    const [feedbackHistory, setFeedbackHistory] = useState([])

    useEffect(() => {
        getFeedbackHistory();
    }, [])
    
const getFeedbackHistory = () => {
    axios.get('/feedback')
    .then(response => {
        console.log(response.data)
            setFeedbackHistory(response.data)
    })
    .catch(err => {
        console.log(err);
    })


    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
}
    return(
        <> 
        <h1>ADMIN</h1>
        <TableContainer >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Feeling</TableCell>
                  <TableCell align="right">Understanding</TableCell>
                  <TableCell align="right">Support</TableCell>
                  <TableCell align="right">Comments</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feedbackHistory.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell align="right">{feedback.feeling}</TableCell>
                    <TableCell align="right">{feedback.understanding}</TableCell>
                    <TableCell align="right">{feedback.support}</TableCell>
                    <TableCell align="right">{feedback.comments}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
    )
}

export default Admin