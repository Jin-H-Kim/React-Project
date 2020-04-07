import React from 'react';

class Control extends React.Component{
    changeMode(_mode){
        this.props.onChangeMode(_mode)
    }
    render(){
        return(
            <div className="control">
                <ul>
                    <li><a href="#"
                        onClick={(e)=>{
                            e.preventDefault();
                            this.changeMode('create')
                            //this.props.onChangeMode('create')
                        }}
                    >Create</a></li>
                    <li><a href="#"
                        onClick={(e)=>{
                            e.preventDefault();
                            this.changeMode('update');
                        }}
                    >Update</a></li>
                    <li><button type="button"
                        onClick={(e)=>{
                            e.preventDefault();
                            this.changeMode('delete');
                        }}
                    >Delete</button></li>
                </ul>
            </div>
        )
    }
}

export default Control;