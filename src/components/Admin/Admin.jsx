import axios from "axios";
import { useState, useEffect } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

function Admin() {
  // state of data in table
  const [feedbackHistory, setFeedbackHistory] = useState([])
  // get data on page load
  useEffect(() => {
    getFeedbackHistory();
  }, [])
  // axios call to get data from DB
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
  return (
    <>
      <h1>ADMIN</h1>
      <TableContainer >
        <Table aria-label="simple table">
          <TableHead>
            {/* table headers */}
            <TableRow>
              <TableCell align="right">Feeling</TableCell>
              <TableCell align="right">Understanding</TableCell>
              <TableCell align="right">Support</TableCell>
              <TableCell align="right">Comments</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* looping through response.data */}
            {feedbackHistory.map((feedback) => (
              // putting repsponse.data in table
              <TableRow key={feedback.id}>
                <TableCell align="right">{feedback.feeling}</TableCell>
                <TableCell align="right">{feedback.understanding}</TableCell>
                <TableCell align="right">{feedback.support}</TableCell>
                <TableCell align="right">{feedback.comments}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      // function to delete row from DOM & DB
                      axios.delete(`/feedback/${feedback.id}`)
                        .then(response => {
                          console.log(response);
                          getFeedbackHistory();
                        }).catch(err => {
                          console.log(err)
                        })
                    }}
                    variant="contained"
                    color="secondary"

                    startIcon={<DeleteIcon />}
                  >
                    Delete
               </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Admin