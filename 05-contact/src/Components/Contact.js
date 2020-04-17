import React from 'react';

class Contact extends React.Component{
    render(){
        const _data = this.props.data
        console.log(_data)
        return(
            <div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    {this.props.data.map(function(v, i){
                        return <p key={i}>{v.name} - {v.tel}</p>
                    })}
                </div>
            </div>
        )
    }
}

export default Contact;