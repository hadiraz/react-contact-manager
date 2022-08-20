export const openAddContactAction = (payload = "") => {
    return {
        type : "OPEN" ,
        payload : payload
    }
}

export const closeAddContactAction = () => {
    return {
        type : "CLOSE" ,
    }
}