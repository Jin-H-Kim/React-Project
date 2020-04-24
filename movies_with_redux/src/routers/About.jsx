import React from 'react';
import AddNumber from '../containers/AddNumber';
import GetNumber from '../containers/GetNumber';


class Home extends React.Component{
    render(){
        return(
            <div>
                THIS IS ABOUT PAGE
                <div>
                    <AddNumber></AddNumber>
                    <GetNumber></GetNumber>
                </div>
            </div>
        )
    }
}

export default Home;