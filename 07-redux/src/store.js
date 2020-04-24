import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state === undefined){
        return {number : 0}
    }else if(action.type === "MAKE"){
        console.log(state, action)
        return{
            ...state, 
            number: state.number + Number(action.size)
        }
    }
    
    //return state
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())