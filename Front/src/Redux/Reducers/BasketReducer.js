import { ADD_TO_BASKET, DELETE_BASKET, REMOVE_FROM_BASKET } from "../Const/ConstProduct";



const initialState = {
  items: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return { ...state, items: [...state.items,{ newtitle:action.payload.title,newprice:action.payload.price,id:state.items.length}],};
    case DELETE_BASKET:
      return {...state, items: state.items.filter(item => item.id !== action.payload.id),
      };
    
    
    default:
      return state;
  }
};

export default basketReducer;
