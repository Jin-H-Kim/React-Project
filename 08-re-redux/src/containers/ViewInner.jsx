
import Viewinner from '../components/ViewInner'
import {connect} from 'react-redux';
function ReduxStateToReactProps(state){
    return({
        _size: state.number
    })
}
export default connect(ReduxStateToReactProps)(Viewinner)

// import React from 'react';
// import store from '../Store'

// export default class extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             _size : store.getState().number
//         }
//         store.subscribe(()=>{
//             this.setState({
//                 _size: store.getState().number
//             })
//         })
//     }
//     render(){
//         return(
//             <Viewinner _size={this.state._size}></Viewinner>
//         )
//     }
// }