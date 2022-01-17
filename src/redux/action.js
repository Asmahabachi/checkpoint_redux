
import {DELETE,DONE,ADD} from "./action-type";

export const deleteHandler=(ID) =>{
    return{
        type: DELETE,
        payload: ID
    }

}
export const addHandler=(list) =>{
    console.log(list)
    return{
        type: ADD,
        payload: list,
    }
}
export const doneHandler=(data) =>{
    console.log(data)
    return{ 
        type: DONE,
        payload: data,
    }
}