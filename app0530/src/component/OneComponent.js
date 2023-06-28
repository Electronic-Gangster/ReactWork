import React, { useEffect, useState } from 'react';
import '../App.css';

function OneComponent(props) {

    const [number,setNumber] = useState(1);
    const [photo,setPhoto] = useState('1.png')
    const [visible,setVisible] = useState('hidden');

    useEffect(() => {
        console.log('처음 딱 한번만 호출');
    }, []);   //최초 1회만 호출
    
    
    // useEffect(() => {
    //     console.log('useEffect()1 호출됨');
    // });             //모든 state 변수 변경 시 무조건 자동 호출

    useEffect(() => {
        console.log('숫자 변경 됨')
        setVisible(number%3===0?'visible':'hidden');
    }, [number]);   //number가 변경될 때만 호출

    useEffect(() => {
        console.log('사진 변경 됨');
    }, [photo]);    //photo가 변경될 때만 호출

    const changePhoto = (e) => {
        setPhoto(e.target.value);
    }

    return (
        <div>
            <h2 className='alert alert-success scale'>OneComponent</h2>
            <h1>{number}</h1>
            <button type='button' className='btn btn-info so' onClick={()=>{
                setNumber(number-1);
            }}>감소</button>
            &nbsp;&nbsp;&nbsp;
            <button type='button' className='btn btn-warning so2' onClick={()=>{
                setNumber(number+1);
            }}>증가</button>

            <hr/>

            <label>
                <input type='radio' name='photo' defaultValue={'1.png'} defaultChecked onClick={changePhoto}/>태조
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
                <input type='radio' name='photo' defaultValue={'2.png'} onClick={changePhoto}/>정종
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
                <input type='radio' name='photo' defaultValue={'3.png'} onClick={changePhoto}/>태종
            </label>
            <br/><br/>
            <img alt='' src={require(`../image/${photo}`)} width={200} style={{visibility:visible}}/>
            
        </div>
    );
}

export default OneComponent;