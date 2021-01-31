import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setShowAll, setShowActive, setShowCompleted } from '../actions/filters';
import { VISIBILITY_FILTERS } from '../utils/constants';

const VisibilityFilter = ({ currentFilter, setShowAll, setShowActive, setShowCompleted}) => {
    return(
        <div>
            <span>Show: </span>
            <button onClick={()=>setShowAll()} value='SHOW_ALL' disabled={currentFilter===VISIBILITY_FILTERS.SHOW_ALL}>All</button>
            <button onClick={()=>setShowActive()} value='SHOW_ACTIVE' disabled={currentFilter===VISIBILITY_FILTERS.SHOW_ACTIVE}>Active</button>
            <button onClick={()=>setShowCompleted()} value='SHOW_COMPLETED' disabled={currentFilter===VISIBILITY_FILTERS.SHOW_COMPLETED}>Completed</button>
        </div>
    )
};
const mapStateToProps = state => ({ currentFilter: state.currentFilter});
export default connect(mapStateToProps, {
    setShowAll, setShowActive, setShowCompleted
})(VisibilityFilter);