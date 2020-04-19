import React from 'react';

class Contact extends React.Component{
    //Render : componentWillMount > render > componentDidMount
    //update : componentWillReceiveProps > shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate
    constructor(props){
        super(props)
        this.state = {
            keyword: ''
        }
    }
    makeList(data){
        data.sort();
        data = data.filter((v) => {
            return v.name.indexOf(this.state.keyword) > -1
        });
        console.log(data)
        return data.map(function(v,i){
            return <p key={i}>{v.name} - {v.tel}</p>
        })
    }
    
    render(){
        return(
            <div>
                <div>
                    <input type="text" value={this.state.keyword} onChange={(e)=>{
                        this.setState({
                            keyword : e.target.value
                        })
                    }} />
                </div>
                {this.makeList(this.props.data)}
            </div>
        )
    }
}

export default Contact;