import React from 'react';
import {BrowserRouter, HashRouter, Switch, Route, useParams, Link} from 'react-router-dom'

function Nav(){
    return(
        <HashRouter>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/list">LIST</Link>
            <Switch>
                <Route exact path="/"><HOME></HOME></Route>
                <Route path="/about"><ABOUT></ABOUT></Route>
                <Route path="/list"><LIST></LIST></Route>
                <Route path="/" ><div>NOT FIND</div></Route>
            </Switch>
        </HashRouter>
    )
}

function Content(props){
    console.log(props)
    let con = [
        {id:'a', title:"A..."},
        {id:'b', title:"B...."},
        {id:'c', title:"C..."},
    ]
    let saw = {id:'sorry', title:"sorry..."}
    let id = useParams().id;
    
    for(var i = 0; i < con.length; i++){
        if(con[i].id == id){
            saw = con[i]
            break
        }
    }
    
    //console.log(con[0].id, useParams().id, list)
   
    return(
        <div>{saw.title}</div>
    )
}

function HOME(){
    return(
        <div>
            HOME
        </div>
        
    )
}

function ABOUT(){
    return(
        <div>
            <Link to={{
                pathname : "/about/a",
                state : {
                    img : 'aaaa'
                }
            }}>a</Link>
            <Link to="/about/b">b</Link>
            <Link to="/about/c">c</Link>
            <Route path="/about/:id" component={Content}>
            </Route>
        </div>
        
    )
}

function LIST(){
    return (<div>LIST...</div>)
}

function RouteTest(){
    return(
        <div>
            <Nav></Nav>
        </div>

    )
}

export default RouteTest;