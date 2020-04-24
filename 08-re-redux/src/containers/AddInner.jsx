// import React from 'react';
// import store from '../Store';
import AddInner from '../components/AddInner';
import {connect} from 'react-redux'
function ReduxDispatchToReactProps(dispatch){
    return({
        changeStore : (_size)=>{
            dispatch({type:"MAKE", size:_size})
        }
    })
}
export default connect(null, ReduxDispatchToReactProps)(AddInner)

// export default class extends React.Component{
//     render(){
//         return(
//             <AddInner changeStore={(_size)=>{
//                 store.dispatch({type:"MAKE", size: _size});
//             }}></AddInner>
//         )
//     }
// }
