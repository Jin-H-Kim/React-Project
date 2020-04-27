import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

function Home(){
    return(
        <div>HOME</div>
    )
}

function About(){
    return(
        <div>
            <h1>ABOUT</h1>
            <ul>
                <li><Link to={{
                    pathname: "/about/a",
                    state: {
                        name: "Kim",
                        age: 40
                    }
                }}>A</Link></li>
                <li><Link to="/about/b">B</Link></li>
                <li><Link to="/about/c">C</Link></li>
            </ul>
            <Route path="/about/:id" component={AboutContent}>
                {/* <AboutContent></AboutContent> */}
            </Route>
        </div>
    )
}

function AboutContent(props){
    //console.log(props)
    let {location, match} = props;
    let person = [
        {id: 'a', name:"Kim", age:40},
        {id: 'b', name:"Han", age:41},
        {id: 'c', name:"Um", age:42},
    ]
    let user = {
        name: "Sorry",
        age: "WOOPS"
    }
    console.log(match.params.id)
    for(let i=0; i < person.length; i++){
        if(match.params.id === person[i].id){
            user = person[i]
        }
    }
    
    return(
        <div>
            <p>{match.params.id}</p>
            <p>{user.name}</p>
            <p>{user.age}</p>
        </div>
    )
}

function List(){
    return(
        <div>LIST</div>
    )
}

function Router(){
    return(
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to="/" >HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/list">LIST</Link></li>
                </ul>
                <Route path="/" exact><Home></Home></Route>
                <Route path="/about"><About></About></Route>
                <Route path="/list"><List></List></Route>
            </BrowserRouter>
           
        </div>
    );
}

export default Router