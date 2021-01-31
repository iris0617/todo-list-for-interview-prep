const initialState=[];

const TodoReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id != action.payload)
        case 'EDIT_TODO':
            return state.map(ele => {
                    if(ele.id == action.payload.id){
                        ele.text = action.payload.text;
                    }
                    return ele;
                });
        case 'TOGGLE_TODO': 
            return state.map(ele => {
                if(ele.id == action.payload){
                    ele.isCompleted = !ele.isCompleted;
                }
                return ele;
            });
        default:
            return state;
    }
}
export default TodoReducer;