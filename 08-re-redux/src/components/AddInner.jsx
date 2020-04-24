import React from 'react';

class AddInner extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            _size : 1
        }
    }
  render(){
    return (
      <div>
          <input type="text" onChange={(e)=>{
              this.setState({
                  _size: e.target.value
              })
          }}></input>
          <button type="button" onClick={(e)=>{
              this.props.changeStore(this.state._size)
              //this.props.chageSize(this.state._size)
              //store.dispatch({type:"MAKE", size:this.state._size})
          }}>적용</button>
      </div>
    );
  }
  
}

export default AddInner;
