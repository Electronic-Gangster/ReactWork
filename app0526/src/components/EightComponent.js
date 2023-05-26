import React, { useState } from 'react';
import us1 from '../image/1.png';
import us2 from '../image/2.png';
import us3 from '../image/3.png';
import us4 from '../image/4.png';
import us5 from '../image/5.png';
import us6 from '../image/6.png';
import us7 from '../image/7.png';
import us8 from '../image/8.png';
import us9 from '../image/9.png';
import us10 from '../image/10.png';
import us11 from '../image/11.png';
import us12 from '../image/12.png';
import us13 from '../image/13.png';
import us14 from '../image/14.png';
import us15 from '../image/15.png';


function EightComponent(props) {
    let message="오늘의문제 리엑트 편";

    const [typing, setTyping] = useState('');
    const [show, setShow] = useState(true); //보이면 true, 안보이면 false
    const [pborder, setPBorder] = useState('solid');
    const [people, setPeople] = useState(us1);
    const [size, setSize] = useState(250);



    //타이핑시 바로 적용 이벤트
    const changeTyping = (e) => {
        setTyping(e.target.value);
    }

    //사진 테두리 이벤트
    const changeBorder = (e) => {
        setPBorder(e.target.value);
    }

    //사진 변경 이벤트
    const changePeople = (e) => {
        setPeople(e.target.value);
    }

    //사진 크기 변경 이벤트
    const changeSize = () => {
        const newSize = parseInt(size) - 20 + 'px'; // 현재 크기에서 -20px 계산
        setSize(newSize); // 작아진 크기로 업데이트
      };

      const changeSize2 = () => {
        const newSize = parseInt(size) + 20 + 'px'; // 현재 크기에서 -20px 계산
        setSize(newSize); // 작아진 크기로 업데이트
      };

    return (
        
        <div>
            <h5 style={{border:'3px solid gray', backgroundColor:'#add836'}}>
                EightComponent 실습
            </h5>

            {/* 타이틀 영역 */}
            <h1 className='one two' style={{fontSize:'40px', textAlign:'left', fontFamily:'fantasy', marginTop:'15px'}}>{message}</h1>
            <hr/>

            <div>
                <label>
                    <input type='checkbox' defaultChecked onClick={(e)=>{
                        setShow(e.target.checked);
                    }}/> 사진 숨김
                </label>
                &nbsp;&nbsp;
                <button type='button' className='btn btn-outline-danger btn-m' onClick={changeSize}>점점 작게</button>
                &nbsp;&nbsp;
                <button type='button' className='btn btn-outline-success btn-m' onClick={changeSize2}>점점 크게</button>
                <br/><br/>
                <input type='text' className='form-control' placeholder='입력하는대로 출력'
                style={{width:'80%', height:'60px', margin:'0 auto' }} onKeyUp={(e)=>{
                    setTyping(e.target.value);
                }}/>
            </div>

            <div>
                    <div className='input-group' style={{width:'200px', marginLeft:'75px', top:'30px'}}>
                        <select className='form-select' onChange={changePeople}>
                            <option value={us1} selected>조지 워싱턴</option>
                            <option value={us2}>존 애덤스</option>
                            <option value={us3}>토마슨 제퍼슨</option>
                            <option value={us4}>제임스 매디슨</option>
                            <option value={us5}>제임스 먼로</option>
                            <option value={us6}>존 퀀시 애덤스</option>
                            <option value={us7}>앤드류 잭슨</option>
                            <option value={us8}>마틴 밴 뷰런</option>
                            <option value={us9}>윌리엄 헨리 헤리슨</option>
                            <option value={us10}>존 타일러</option>
                            <option value={us11}>제임스 K 포크</option>
                            <option value={us12}>재커리 테일러</option>
                            <option value={us13}>밀러드 필모어</option>
                            <option value={us14}>프랭클린 피어스</option>
                            <option value={us15}>제임스 뷰캐넌</option>
                        </select>
                    </div>

                <div className='input-group' style={{width:'200px',marginLeft:'75px', top:'60px'}}>
                        <select className='form-select' onChange={changeBorder}>
                            <option selected value='10px solid red'>solid</option>
                            <option value='10px dotted orange'>dotted</option>
                            <option value='10px dashed yellow'>dashed</option>
                            <option value='10px double green'>double</option>
                            <option value='10px groove blue'>groove</option>
                            <option value='10px ridge navy'>ridge</option>
                            <option value='10px inset purple'>inset</option>
                            <option value='10px outset gray'>outset</option>
                        </select>
                </div>
                
                <div style={{float:'right', marginTop:'-50px', marginRight:'100px'}}>
                    {
                        !show &&
                        <img alt='대충 사진 출력 영역' src={people} width={size} style={{border:pborder}}/>
                    }
                </div>

                <div style={{clear:'both', marginTop:'230px', marginLeft:'65px',width:'600px', height:'100px', backgroundColor:'skyblue'}}>
                    <h1 style={{lineHeight:'100px'}}>{typing}</h1>
                </div>
           </div>
        </div>
    );
}

export default EightComponent;