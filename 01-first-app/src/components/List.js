import React from 'react';

class List extends React.Component{
    render(){
        var data = this.props.data;
        var event = this.props.onChangeMode;
        return(
            <div className="list">
                <ul>
                    {data.map(function(value, idx){
                        return (
                        <li key={value.id}>
                            <a 
                                data-id={value.id}
                                onClick={(e)=>{
                                    e.preventDefault();
                                    event(idx);
                                    //console.log(e.target.dataset.id)
                                }
                            } href="#">{value.title}</a>
                        </li>)
                    })}
                </ul>
            </div>
        );
    }
}

export default List;