import React, { useState } from 'react';
import ThreeSubApp from './ThreeSubApp';

function ThreeComponent(props) {

    const [data, setData] = useState({
        photo: 'tree3.gif',
        photoName: '크리스마스 트리'
    });

    const onChangePhoto = (photo, photoName)=>{
        setData({
            photo,
            photoName
        });
    }

    return (
        <div>
            <h2 className='alert alert-info'>ThreeComponent</h2>
            <ThreeSubApp onChangePhoto={onChangePhoto}/>
            
            <hr/>
            
            <h3><b>{data.photoName}</b></h3>
            <br/><br/>
            
            <img alt='' src={require(`../xmas/${data.photo}`)} style={{maxWidth:'300px'}}/>

        </div>
    );
}

export default ThreeComponent;