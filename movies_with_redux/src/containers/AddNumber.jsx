import React from 'react';
import AddNumber from '../components/AddNumber'
import store from '../Store';
import {connect} from 'react-redux'

function dispatchToReact(dispatch){
    return {
        changeStore : (size)=>{
            dispatch({type:"Make", size: size + 1})
        }
    }
}
export default connect(null, dispatchToReact)(AddNumber)

// export default class extends React.Component{
//     render(){
//         return(
//             <AddNumber changeStore={(size)=>{
//                 store.dispatch({type:"Make", size: size + 1})
//             }}></AddNumber>
//         )
//     }
// }
