import { VISIBILITY_FILTERS } from '../utils/constants';

const initialState=VISIBILITY_FILTERS.SHOW_ALL;

const VisibilityFilterReducer = (state=initialState, action) => {
    switch(action.type){
        case VISIBILITY_FILTERS.SHOW_ALL:
            return VISIBILITY_FILTERS.SHOW_ALL;
        case VISIBILITY_FILTERS.SHOW_ACTIVE:
            return VISIBILITY_FILTERS.SHOW_ACTIVE;
        case VISIBILITY_FILTERS.SHOW_COMPLETED:
            return VISIBILITY_FILTERS.SHOW_COMPLETED;
        default: return state;
    }
}
export default VisibilityFilterReducer;