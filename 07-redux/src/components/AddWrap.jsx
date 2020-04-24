import React from 'react';
import AddInner from '../containers/AddInner';

class AddWrap extends React.Component{
    render(){
        return(
            <div>
                AddWrap
                {/* <AddInner changeValue={(num)=>{this.props.changeValue(num)}}></AddInner> */}
                <AddInner></AddInner>
            </div>
        )
    }
}

export default AddWrap;