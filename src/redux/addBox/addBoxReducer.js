import store from "../store"

const initialState = {
    status : false , 
    editID : null
}

const boxReducer = (state = initialState , {type , payload=""}) => {
    switch (type){
        case "OPEN" :
            return {
                status : true ,
                editID : payload.id ? payload.id : null
            }
        case "CLOSE" :
            return {
                status : false ,
                editID : null
            }
        default : return state
    }
}

export default boxReducer