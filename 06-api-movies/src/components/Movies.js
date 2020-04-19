import React from 'react';

function Movies({msg, data}){
    return (
        <div>
            
            {data ? data.map(function(v, i){
                return <p key={v.id}>{v.title}</p>
            }) : 'loding'}
            {/* {data.map(function(v, i){
                <p key={i}>{v.title}</p>
            })} */}
        </div>
    )
}

export default Movies;