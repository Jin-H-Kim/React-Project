import React from 'react'
import store from '../Store'
import GetNumber from '../components/GetNumber'
import {connect} from 'react-redux'

function SteateToReactProps(state){
    return ({
        size : state.number
    })
}
export default connect(SteateToReactProps)(GetNumber)

// export default class extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             number: store.getState().number
//         }
//         store.subscribe((e)=>{
//             this.setState({
//                 number: store.getState().number
//             })
//         })
//     }
//     componentWillUpdate(){
//         // let data = JSON.stringify(this.state)
//         // localStorage.liked = data
//         // console.log(localStorage.liked)
//     }
//     render(){
//         return(
//             <GetNumber size={this.state.number} ></GetNumber>
//         )
//     }
// }

