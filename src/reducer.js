import * as actions from "./actionType";

const initState = {
  employee: [],
  contact:[],
  form:[]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      console.log(action);
      return { ...state, employee: [...state.employee, action.payload] };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        employee: state.employee.filter((info) => info.id != action.payload),
      };
      case actions.ADD_CONTACT:
      console.log(action);
      //adding a data inside the store.
      return { ...state, contact: [...state.contact, action.payload] };
    case actions.DELETE_DATA:
      return {
        ...state,
        contact: state.contact.filter((info) => info.id != action.payload),
      };
      case actions.ADD_ITEM:
        console.log(action);
        //adding a data inside the store.
        return { ...state, form: [...state.form, action.payload] };
      case actions.DELETE_FORM:
        return {
          ...state,
          form: state.form.filter((info) => info.id != action.payload),
        };
    default:
      return state;
  }
};


// const authReducer = (state = initState, action) => {
//   switch (action.type) {
//     case actions.ADD_DATA:
//       console.log(action);
//       //adding a data inside the store.
//       return { ...state, contact: [...state.contact, action.payload] };
//     case actions.DELETE_DATA:
//       return {
//         ...state,
//         contact: state.contact.filter((info) => info.id != action.payload),
//       };
//       //if any-action not perform still needs to send state.
//     default:
//       return state;
//   }
// };

// const reducer = Redux.combineReducers({
//   count: counterReducer,
//   auth: authReducer
// });

// export default Redux.createStore(reducer);
// export default () =>{
//   const store = createStore(combineReducers(
//     {
//       employee: counterReducer,
//       contact: authReducer
//     }
//   ));
//   return store
// }
export default reducer;