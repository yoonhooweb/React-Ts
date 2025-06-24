const countReducer = (count : number, action : {type : string}) => {
    if (action.type == 'plus') {
        return count + 1
    } else if (action.type == 'minus') {
        return count - 1
    } else if (action.type == 'reset') {
        return 0
    }
    return 0
}

export default countReducer;