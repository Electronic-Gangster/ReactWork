import React, { useState } from 'react';


function FiveWriteForm(props) {
  // 입력 할 때 같이 자동으로 들어가도록 상태변수를 선언
  const [writer, setWriter] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState('flogirl.gif');

  // 게시글 등록 이벤트
  const buttonAddEvent = () => {
    // 부모에게 전달받은 함수 호출
    props.addBoard({ writer, subject, content, photo });
  }

  return (
    <div>
      작성자 : <input type='text' onChange={(e) => setWriter(e.target.value)} /><br></br>
      제 목 : <input type='text' onChange={(e) => setSubject(e.target.value)} /><br></br>
      사 진 :
      <select className='' style={{ width: '170px' }} onChange={(e) => setPhoto(e.target.value)}>
        <option value={'flogirl.gif'}>꽃을 든 소녀</option>
        <option value={'asman.gif'}>스노우맨</option>
        <option value={'a7.gif'}>곰돌이</option>
        <option value={'house5.gif'}>대저택</option>
        <option value={'candle1.gif'}>촛불</option>
      </select><br />
      <textarea style={{ width: '400px', height: '130px' }} onChange={(e) => setContent(e.target.value)}></textarea><br />
      <button type='button' onClick={buttonAddEvent}>게시글 등록</button>
    </div>
  );
}

export default FiveWriteForm;
