import React from 'react';

class Top extends React.Component{
    render(){
        return(
            <div className="top">
                <h1>
                    <a href="#"
                        onClick={(e)=>{
                            e.preventDefault();
                            this.props.onChangeMode();
                        }}
                    >{this.props.title}</a>
                </h1>
            </div>
        );
    }
}

export default Top;