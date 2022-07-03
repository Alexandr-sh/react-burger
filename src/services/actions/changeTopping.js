export function addTopping(data){
    return {type: "ADD_TOPPING",
    data: data}
}

export function removeTopping(id){
    return {type: "REMOVE_TOPPING",
    id: id}
}