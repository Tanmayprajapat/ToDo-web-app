import React from 'react'
import { Card, CardContent, Button ,makeStyles} from '@material-ui/core'
import './ShowList.css'
// const useStyles=makeStyles({
//     card:{
//         minheight:200,
//         margin:15,
//         minwidth:200,
//     },
// })
function ShowList({ taskList, deleteTask }) {
    // const classes=useStyles();
    return (
        <div className="showList">
            <div className="outer">
               
                    {
                        taskList.length === 0 ? <h2></h2> :


                            taskList.map((item, index) =>
                            <Card className="root">
                                <CardContent className="cardcontent">

                                    <h1>{item.title}</h1>
                                    <p>{item.task}</p>
                                    <Button className="button" variant="contained" color="secondary" onClick={() => deleteTask(item)}>Delete</Button>
                                 </CardContent>
                                
                            </Card>
                            )
                    }
            </div>
        </div>
    )
}

export default ShowList;
