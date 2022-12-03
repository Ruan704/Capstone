import * as actions from './actionType';
import axios from 'axios';
export const onAddContactData = (item) => {
    // return  {
    //     axios.post(url, {}, {headers}).then().catch()
    // }
    return {
        // return to home component
        type: actions.ADD_CONTACT,
        payload: item
    }
}

export const onGetData =() => {
    return (dispatch) => {
        let url = "https://api.gbif.org/v1/species";
        axios.get(url)
            .then((res => {
                dispatch( 
                    ((data) => {
                        return{
                type:actions.GET_POSTS,
                payload: {httpResponse:data}
                }
        })   (res.data)
            )} 
            ))  
           .catch (err => console.log(err) )
    }
}