
import { AdminActionTypes } from './admin.types';

const INITIAL_STATE = {
  allSelected: false,
  pendingSelected: false,
  confirmSelected: false,
  cancelSelected: false
};

const adminReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AdminActionTypes.SET_ALL_SELECTED:
            return {
                ...state,
                allSelected: action.payload
            };
        case AdminActionTypes.SET_PENDING_SELECTED:
            return {
                ...state,
                pendingSelected: action.payload
            }
        case AdminActionTypes.SET_CONFIRM_SELECTED:
            return {
                ...state,
                confirmSelected: action.payload
            }
        case AdminActionTypes.SET_CANCEL_SELECTED:
            return {
                ...state,
                cancelSelected: action.payload
            }    
        default: 
            return state;
    }
};

export default adminReducer;