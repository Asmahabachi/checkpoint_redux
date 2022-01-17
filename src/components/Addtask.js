import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import{addHandler} from '../redux/action'
import {Button,Form} from 'react-bootstrap'

function Addtask() {

const dispatch = useDispatch()   
const data = useSelector ((state)=> state.task)
const [text,setText] = useState("")
const textHandler =(e)=>{

setText(e.target.value)
}
const addedTextHandler =()=> {
    data.push({name: text,isDone: false,id:data.length+1})
dispatch(addHandler(data))
}


return (
        <div className="add-task">
            <Form.Control
                type="text"
                onChange={textHandler}
                aria-describedby="passwordHelpBlock"
                placeholder="please put your task"
                name="task" className="input-task" 
            />
            <Button variant="outline-success" className="add-task" onClick={addedTextHandler}><i className="fas fa-plus-square"></i></Button>
        </div>
    )

}
export default Addtask

