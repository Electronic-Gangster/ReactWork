import React from 'react';
import './MyStyle.css';

function ThirdCmp(props) {
    const style1={
        fontFamily:'궁서체',
        fontSize:'30px',
        color: 'purple',
        border:'2px solid red',
        backgroundColor:'#66ccaa'
    }

    const style2={
        textAlign:'center',
        border: '10px solid blue',
        width: '200px',
        height: '150px'
    }

    let myName="문재인"
    let myAddr="서울시 마포구"

    return (
        <div>
            <h6 style={style1}>3번 컴포넌트</h6>
            <h5>지정된 변수를 출력하는 방법</h5>
            <div style={style2}>
                {/* 위 두변 수 값은 출력만 가능하다, 변경은 안됨 */}
                이름 : {myName} <br/>
                주소 : {myAddr}
            </div>
        </div>
    );
}

export default ThirdCmp;