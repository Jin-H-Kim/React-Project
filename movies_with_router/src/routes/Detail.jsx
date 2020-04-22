import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state == undefined){
            history.push('/');
        }
    }
    render(){
        const { location } = this.props;
        if(location.state !== undefined){
            return(
                <div>
                    <p><img src={location.state.img} alt={location.state.title} /></p>
                    <p>{location.state.title}</p>
                    <p>{location.state.summary}</p>
                </div>
            )
        }else{
            return null
        }
        
    }
}

export default Detail;