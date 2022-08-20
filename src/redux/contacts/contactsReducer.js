import store from "../store";

const initialState = {
    contacts : []
}
const contactReducer = (state = initialState , {type , payload}) => {
    switch (type){
        case "ADD" : {
            const time = new Date().getTime() ;
            return (
                    {
                        contacts : [...state.contacts , {
                            name : payload.name , 
                            number : payload.number ,
                            id : time
                        }]
                    }

                )
        }
        case "EDIT" : {
            const changedItems = state.contacts.map(value=>{
                if(value.id === payload.id){
                    return (
                        {
                            name : payload.name ,
                            number : payload.number , 
                            id : payload.id
                        }
                    )
                }else return value
            })
         return(
             {
                 contacts : changedItems
             }
         )
        }
        case "REMOVE" : {
            const remainItems = state.contacts.filter(item => item.id !== payload.id)
            return (
               {
                   contacts : remainItems
               }
           )
        }
        default : return state
    }
}

export default contactReducer