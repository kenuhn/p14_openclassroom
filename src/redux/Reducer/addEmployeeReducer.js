import {SUCCESS_ADD_DB} from "../Actions/addEmployeeActions";
import EmployeeData from "../../data/EmployeeData";


const INITIAL_STATE = {
    EmployeeData: EmployeeData
}


const profileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SUCCESS_ADD_DB: {
            console.log(action.payload, "action")
            return  {
                ...state,
                EmployeeData: action.payload
            }
        }
        default:
            return state
    }
   
}

export default profileReducer