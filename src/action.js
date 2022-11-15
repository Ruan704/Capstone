import * as actions from './actionType';

export const onAddData = (item) => {
    // return  {
    //     axios.post(url, {}, {headers}).then().catch()
    // }
    return {
        // return to home component
        type: actions.ADD_ITEM,
        payload: item
    }
}

export const onDelete = (id) => {
    // return  {
    //     axios.post(url, {}, {headers}).then().catch()
    // }
    return {
        type: actions.REMOVE_ITEM,
        payload: id
    }
}

export const onAddContactData = (item) => {
    // return  {
    //     axios.post(url, {}, {headers}).then().catch()
    // }
    return {
        // return to home component
        type: actions.ADD_ITEM,
        payload: item
    }
}