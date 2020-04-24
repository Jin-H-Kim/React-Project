import React from 'react';
import AddInner from '../components/AddInner'
import store from '../store'

export default class extends React.Component{
    render(){
        return(
            <AddInner onClick={(size)=>{
                store.dispatch({type:'MAKE', size: size})
            }}></AddInner>
        )
    }
}