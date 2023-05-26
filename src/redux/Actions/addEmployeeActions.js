export const SUCCESS_ADD_DB = "SUCCESS_ADD_DB"

export default function addEmployeeAction (newData, dataEmployees) {
   return  async (dispatch) => {
    try { 
        dataEmployees.push(newData)
        console.log(dataEmployees)
        dispatch({type: SUCCESS_ADD_DB, payload : dataEmployees})
    }
    
    catch (err) {
       return  console.log(err.message)
    }    
}

}