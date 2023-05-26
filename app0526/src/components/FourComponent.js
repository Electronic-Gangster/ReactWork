import React, { useState } from 'react';
import us1 from "../image/1.png";
import us2 from "../image/2.png";
import us3 from "../image/3.png";
import us4 from "../image/4.png";
import us5 from "../image/5.png";

function FourComponent(props) {
    const [bcolor,setBColor] = useState('red');
    const [fsize,setFSize] = useState('15px');
    const [show,setShow] = useState(false);
    const [people,setPeople] = useState(us1);

    //1. 글꼴크기 이벤트
    const onSizeEvent=(e)=>{
        setFSize(e.target.value);
    }

    //2. 배경색 이벤트
    const onColorEvent=(e)=>{
        setBColor(e.target.value);
    }

    //3. 사진 변경 이벤트
    const onImgEvent=(e)=>{
        setPeople(e.target.value);
    }

    //4. 사진 보이기/숨기기 이벤트
    const onChangeShow=(e)=>{
        setShow(e.target.checked);
    }    

    return (
        <div>
           <h5 style={{border:'3px solid gray', backgroundColor:'plum'}}>
                FourComponent 실습
           </h5>
           
           {/* 글꼴영역 */}
           <div className='input-group' style={{width:'300px', margin:'30px 30px'}}>
                <b>글꼴크기</b> &nbsp;
                <select className='form-select' onChange={onSizeEvent}>
                    <option>15px</option>
                    <option selected>25px</option>
                    <option>35px</option>
                    <option>45px</option>
                    <option>55px</option>
                    <option>65px</option>
                    <option>75px</option>
                    <option>85px</option>
                </select>
           </div>
            
            {/* 배경색 영역 */}
           <div>
                <h5>배경색을 선택하세요.</h5>
                <label>
                    <input type='radio' name='bcolor' defaultValue={'red'} defaultChecked onClick={onColorEvent}/>빨강
                </label>
                <label>
                    <input type='radio' name='bcolor' defaultValue={'yellow'} onClick={onColorEvent}/>노랑
                </label>
                <label>
                    <input type='radio' name='bcolor' defaultValue={'green'} onClick={onColorEvent}/>녹색
                </label>
                <label>
                    <input type='radio' name='bcolor' defaultValue={'blue'} onClick={onColorEvent}/>파랑
                </label>
                <label>
                    <input type='radio' name='bcolor' defaultValue={'purple'} onClick={onColorEvent}/>보라
                </label>
           </div>

           {/* 출력영역 */}
           <div style={{border:'5px dotted green', backgroundColor:bcolor, fontSize:fsize}} className='fontstyle'>
                오늘은 즐거운 금요일입니다.
           </div>

           {/* 사진영역 */}
           <div className='input-group' style={{width:'300px',marginTop:'30px'}}>
                <b>사진 선택</b>
                <select onChange={onImgEvent}>
                    <option value={us1}>사람1</option>
                    <option value={us2}>사람2</option>
                    <option value={us3}>사람3</option>
                    <option value={us4}>사람4</option>
                    <option value={us5}>사람5</option>
                </select>
               
                &nbsp;&nbsp;
               
                <label>
                    <input type='checkbox' onClick={onChangeShow}/>숨김
                </label>
               
                {
                    !show &&
                    <img alt='' src={people} width={300}/>
                }
                
           </div>
        </div>
    );
}

export default FourComponent;