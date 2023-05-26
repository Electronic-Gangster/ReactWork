import React, {useState} from 'react';
import us2 from '../image/2.png';

function ThreeComponent(props) {
    const [name, setName] = useState('');
    const [score, setScore] = useState(0);
    const [grade, setGrade] = useState('');
    const [tcolor, setTcolor] = useState('green');
    const [show, setShow] = useState(true); //보이면 true, 안보이면 false

    //radio click 이벤트
    const radioChangeColor = (e) => {
        setTcolor(e.target.value);
    }

    //이름 변경시 바로 적용 이벤트
    const changeName = (e) => {
        setName(e.target.value);
    }

    //점수 변경시 바로 적용 이벤트, 단 숫자가 아닐 경우 경고 후 종료
    const changeScore = (e) => {
        if(isNaN(e.target.value)){
            alert("숫자만 입력하세요.");
            e.target.value = '';    //숫자가 아닐 경우 입력창 비우기
            return;
        }

        const newScore = Number(e.target.value);
        if(newScore > 101) {
            alert("100점 이하만 입력하세요.");
            e.target.value = '';    //숫자가 아닐 경우 입력창 비우기
            return;
        }

        setScore(Number(e.target.value));
    }

    //등급 별 출력 이벤트
    const changeGrade = (e) => {
        if(score >= 90){
            setGrade("참잘했어요")
        }else if(score >= 70){
            setGrade("잘했어요")
        }else{
            setGrade("노력하세요")
        }
    }

    return (
        <div>
            <h5
                style={{
                    border: '3px solid gray',
                    backgroundColor: '#add836'
                }}>
                ThreeComponent 실습
            </h5>

            <h6>글자색을 선택하세요</h6>

            <div style={{
                    marginBottom: '30px'
                }}>
                <label>
                    <input
                        type='radio'
                        name='tcolor'
                        defaultValue={'red'}
                        onClick={radioChangeColor}/>빨강
                </label>
                <label>
                    <input
                        type='radio'
                        name='tcolor'
                        defaultValue={'green'}
                        defaultChecked="defaultChecked"
                        onClick={radioChangeColor}/>초록
                </label>
                <label>
                    <input
                        type='radio'
                        name='tcolor'
                        defaultValue={'pink'}
                        onClick={radioChangeColor}/>핑크
                </label>
                <label>
                    <input
                        type='radio'
                        name='tcolor'
                        defaultValue={'black'}
                        onClick={radioChangeColor}/>검정
                </label>
            </div>

            <div
                className='input-group'
                style={{
                    marginTop: '30px',
                    fontSize: '20px',
                    width: '450px',
                    margin: '0 auto'
                }}>
                <b>이름 : </b>
                &nbsp;
                <input type='text' className='form-control' onChange={changeName}/>
                
                &nbsp;&nbsp;
                
                <b>점수 : </b>
                &nbsp;
                <input type='text' className='form-control' onChange={changeScore}/>

                &nbsp;&nbsp;

                <button type='button' className='btn btn-outline-danger btn-sm' onClick={changeGrade}>등급계산</button>
            </div>

            {/* 백틱안에는 달러, 중괄호 안에는 그냥쓰면 변수로 인식 */}
            <div
                style={{
                    marginTop: '30px',
                    fontSize: '20px',
                    width: '300px',
                    textAlign: 'left',
                    margin: '0 auto',
                    color: tcolor
                }}>
                이름 : {name}<br/>
                점수 : {score}<br/>
                등급 : {grade}<br/>
            </div>
                <hr/>

            <h5 style={{marginTop:'50px'}}>사진 보였다 / 숨겼다 하기</h5>
            <label style={{marginLeft:'10px'}}>
                <input type='checkbox' defaultChecked onClick={(e)=>{
                    // alert(e.target.checked);
                    setShow(e.target.checked);  //체크박스 체크여부에 따라 show값 변경
                }}/>
                &nbsp;
                사진보이게 하기
            </label>
            {
                show &&                         //show가 true일 경우에만 보이게 함
                <img alt='' src={us2} width={300} border="10"/>
            }
            
        </div>
    );
}

export default ThreeComponent;