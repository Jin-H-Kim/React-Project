import React from 'react';

class Delete extends React.Component{
    deleteRow(id){
        const url = '/api/customers/'+id;
        //console.log(url);
        fetch(url, {
            method : 'DELETE'
        });
        this.props.stateRefresh();
    }
    // deleteCustomer(id){
    //     const url = '/api/customers/' + id;
    //     fetch(url, {
    //         method: 'DELETE'
    //     });
    //     this.props.stateRefresh();
    // }
    render(){
        return(
            <div>
                <button onClick={(e)=>{this.deleteRow(this.props.id)}}>삭제</button>
            </div>
        );
    }
}

export default Delete;