import React from 'react';

class UpdateContent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title: this.props.title,
            desc: this.props.desc
        };
        this.chageValue = this.chageValue.bind(this);
    }
    chageValue(e){
        this.setState({
            [e.target.name] : e.target.value
        }) 
    }
    render(){
        return(
            <div>
                <h2>Update</h2>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    let _title = e.target.title.value;
                    let _desc = e.target.desc.value;
                    this.props.onChangeContent(_title, _desc)
                }}>
                    <p>
                        <input 
                            value={this.state.title} 
                            onChange={this.chageValue} 
                            name="title" 
                        type="text" />
                    </p>
                    <p>
                        <textarea 
                            value={this.state.desc} 
                            onChange={this.chageValue}
                        name="desc"></textarea>
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                </form>
            </div>
        )
    }
}

export default UpdateContent;