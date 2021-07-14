import { useState,useEffect } from 'react';
import './App.css';
import ShowList from './Components/ShowList';
import AddingTask from './Components/AddingTask';
function App() {
  let start;
  if(localStorage.getItem('taskList')===null)
    start=[]
  else  start=JSON.parse(localStorage.getItem('taskList'))
  const [taskList,setTaskList]=useState(start);

  function addTask(title,task){
    let id;
    if(taskList.length===0)
      id=0;
    else id=taskList[taskList.length-1].id + 1;
    const newTask={
      id:id,
      title:title,
      task:task,
    }
    setTaskList([...taskList,newTask]) 
  }
  
  function deleteTask(item){
    console.log(item)
    setTaskList(taskList.filter((e)=>{
      return e!==item
    }))
    localStorage.setItem('taskList',JSON.stringify(taskList))
  }

  useEffect(()=>
    localStorage.setItem('taskList',JSON.stringify(taskList))
  ,[taskList])

  return (
    <>
    <AddingTask addTask={addTask} taskList={taskList}/>
    <ShowList taskList={taskList} deleteTask={deleteTask} />
    </>
  );
}

export default App;
