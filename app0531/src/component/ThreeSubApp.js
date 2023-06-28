import React, {useState} from 'react';

function ThreeSubApp(props) {


    const onSelectChange=(e)=>{
        let photo = e.target.value;
        let photoName = e.target.options[e.target.selectedIndex].text;

        props.onChangePhoto(photo,photoName);
    }

    return (
        <div style={{width:'200px',margin:'0 auto'}}>
            <br/><br/>
            <select className='form-select' onChange={onSelectChange}>
                <option value={'xmas01.gif'}>snowman</option>
                <option value={'bell3.gif'}>bell</option>
                <option value={'snow.gif'}>snow</option>
                <option value={'xmas.gif'}>xmas</option>
                <option value={'xbar10.gif'}>bar</option>
            </select>

        </div>
    );
}

export default ThreeSubApp;