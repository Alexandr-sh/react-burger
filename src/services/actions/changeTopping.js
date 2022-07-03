export function addTopping(data){
    return {type: "ADD_TOPPING",
    data: data}
}

export function removeTopping(data){
    return {type: "REMOVE_TOPPING",
    data: data}
}

export function updateTopping(data){
    return {type: "UPDATE_TOPPING",
    data: data}
}