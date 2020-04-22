import React from 'react';

class Contact extends React.Component{
    //Render : componentWillMount > render > componentDidMount
    //update : componentWillReceiveProps > shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate
    constructor(props){
        super(props)
        this.state = {
            keyword: '',
            isSelected: 1,
            data:''
        }
    }
    _seleted = (i) => {
        console.log('hi')
    }
    makeList(data){
        let handel = this.props.chageV;
        data.sort();
        data = data.filter((v) => {
            return v.name.indexOf(this.state.keyword) > -1
        });
        return data.map(function(v,i){
            return <p key={i} data-index={v.id} onClick={e => {handel(e.target.dataset.index)}}>{v.id} = {v.name} - {v.tel}</p>
        })
    }
    
    render(){
        return(
            <div>
                <div>
                    <div>
                        <input type="text" value={this.state.keyword} onChange={(e)=>{
                            this.setState({
                                keyword : e.target.value
                            })
                        }} />
                    </div>
                    {this.makeList(this.props.data, this.props.chageV)}
                </div>
                <div>
                    <h2>Detail</h2>
                    {this.props.is ? <p>{this.props.data[this.props.is -1].name}</p> : ""}
                    
                </div>
            </div>
        )
    }
}

export default Contact;