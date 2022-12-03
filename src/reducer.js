import * as actions from "./actionType";

const initState = {
  contact:[],
  posts: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
      case actions.ADD_CONTACT:
      console.log(action);
      //adding a data inside the store.
      return { ...state, contact: [...state.contact, action.payload] };
    case actions.DELETE_DATA:
      return {
        ...state,
        contact: state.contact.filter((info) => info.id != action.payload),
      };
      case actions.GET_POSTS:
        console.log(action)
        return {...state,posts:action.payload.httpResponse}
    default:
      return state;
  }
};
 export default reducer;