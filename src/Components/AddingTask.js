import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Card, CardContent, Button,makeStyles } from '@material-ui/core'
import './AddingTask.css'
const useStyles=makeStyles({
    inputtext:{
        margin:10,
    },
    head:{
        margin:10,
    },
    
})
function AddingTask(props) {
    const classes=useStyles()
    const [title, setTitle] = useState('')
    const [task, setTask] = useState('')
    function Add(e) {
        e.preventDefault();
        props.addTask(title, task);
        setTitle("")
        setTask("")
    }
    return (
        <div className="addTask">
            <Card className="card">
                <CardContent >
                    <form onSubmit={Add}>
                        <h1 className={classes.head}>Add Task</h1>
                        <TextField className={classes.inputtext}  variant="outlined" multiline value={title} onChange={(e) => setTitle(e.target.value)} label="Task Title" required />
                        <TextField className={classes.inputtext} value={task} onChange={(e) => setTask(e.target.value)} variant="outlined" label="Description" multiline rows={5} required />
                        <Button className="button" variant="contained" color="primary" type="submit" >Add</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddingTask;
