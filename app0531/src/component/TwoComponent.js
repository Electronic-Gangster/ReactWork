import React from 'react';
import Swal from 'sweetalert2';
import xmas1 from '../xmas/candle2.gif'
import xmas2 from '../xmas/tree3.gif'
import xmas3 from '../xmas/house1.gif'

import { Button } from '@mui/material';

function TwoComponent(props) {

    const buttonEvent1=()=>{
        Swal.fire("김두한","여기 있었구만 심영이","success")
    }

    const buttonEvent2=()=>{
        Swal.fire({
            title: '심영',
            html: '<h5>메리크리스마스요 김두한대장!!</h5>',
            imageUrl: xmas1 /* src의 사진 : import된 사진 */
        })
    }

    const buttonEvent3=()=>{
        Swal.fire({
            html: `<b>개소리 집어쳐!</b><br/>
                   <b>무슨 님을 만난다는 거야!</b>
                   <b>나 김두한이다.</b>`,
                   imageUrl: '../a5.gif', /* public의 사진 */
                   icon: 'warning',
                   confirmButtonText: '네 알겠습니다.',
                   confirmButtonColor: 'red',
                   showCancelButton: true,
                    cancelButtonText: '아니요',
                    cancelButtonColor: 'blue'
        }).then((result)=>{
            if(result.isConfirmed){
                Swal.fire('김두한','함께 폭사하자','success');
            }else{
                Swal.fire('김두한','일어나 어서 일어서!','error');
            }
        })
    }

    const buttonEvent4=()=>{
        Swal.fire({
            title:'이것은 수류탄이여',
            input: 'email',
            inputLabel: '그러니까 까불지덜 말더라고',
            inputPlaceholder: '아야 날려라!',
        }).then((result)=>{
            Swal.fire(`당신의 이메일 주소는 ${result.value}입니다. 아시겠습니까?`);
        })
    }

    const buttonEvent5=()=>{
        let arr=[{photo:xmas1,likesid:"gay"},
        {photo:xmas2,likesid:"guy"},{photo:xmas3,likesid:"go"},];

        let s='';
        for(let m of arr){
            s+=`<img alt='' src=${m.photo} width=60/> &nbsp; <b>${m.likesid}</b><br/>`
        }

        Swal.fire({
            title: "좋아요 누른 회원들",
            imageUrl: xmas3,
            html: s
        })
    }
    return (
        <div>
            <h2 className='alert alert-info'>TwoComponent - SweetAlert</h2>
            <Button variant="contained" color='warning' onClick={buttonEvent1} className='bb'>SweetAlert 연습 #1</Button><br/><br/>
            <Button variant="outlined" color='secondary' onClick={buttonEvent2} className='bb'>SweetAlert 연습 #2</Button><br/><br/>
            <Button variant="text" color='success' onClick={buttonEvent3} className='bb'>SweetAlert 연습 #3</Button><br/><br/>
            <Button variant="outlined" color='error' onClick={buttonEvent4} className='bb'>SweetAlert 연습 #4</Button><br/><br/>
            <Button variant="contained" color='primary' onClick={buttonEvent5} className='bb'>SweetAlert 연습 #5</Button><br/><br/>
        </div>
    );
}

export default TwoComponent;