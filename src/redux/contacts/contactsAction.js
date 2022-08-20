export const addContactAction = (payload) => {
    return {
        type : "ADD" ,
        payload : payload
    }
}
export const removeContactAction = (payload) => {
    return {
        type : "REMOVE" ,
        payload : payload
    }
}

export const editContactAction = (payload) => {
    return {
        type : "EDIT" ,
        payload : payload
    }
}

