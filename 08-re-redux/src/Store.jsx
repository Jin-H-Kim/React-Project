import {createStore} from 'redux';

export default createStore((state, action)=>{
    console.log(state, action)
    if(state === undefined){
        return {number: 0}
    }else if(action.type === "MAKE"){
        return{
            number: Number(action.size) + state.number
        }
    }
    return state
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())