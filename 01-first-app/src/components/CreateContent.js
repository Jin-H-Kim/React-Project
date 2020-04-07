import React from 'react';

class CreateContent extends React.Component{
    render(){
        return(
            <div>
                <h2>Create</h2>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    let _title = e.target.title.value;
                    let _desc = e.target.desc.value;
                    this.props.onChangeContent(_title, _desc)
                    console.log()
                }}>
                    <p>
                        <input name="title" type="text" />
                    </p>
                    <p>
                        <textarea name="desc"></textarea>
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                </form>
            </div>
        )
    }
}

export default CreateContent;