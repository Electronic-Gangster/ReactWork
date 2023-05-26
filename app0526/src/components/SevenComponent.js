import React, {useState} from 'react';
import '../App.css';
function SevenComponent(props) {
    const [array, setArray] = useState([
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "navy",
        "purple"
    ])
    return (
        <div className='App-'>
            <h5
                style={{
                    border: '3px solid gray',
                    backgroundColor: '#add836'
                }}>
                SevenComponent 실습
            </h5>
            <div>
                <div>
                    <h5>색상을 추가해 보세요(색상을 더블클릭하면 삭제됩니다.)</h5>
                    <input
                        type='text'
                        placeholder='색상을 입력해 주세요.'
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                //리엑트는 배열에 추가시 push 말고 concat을 사용한다.
                                setArray(array.concat(e.target.value));
                                e.target.value = '';
                            }
                        }}/>
                        <br/>
                        <input type='color'
                        onBlur={(e)=>{
                            //리엑트는 배열에 추가시 push 말고 concat을 사용한다.
                            setArray(array.concat(e.target.value));
                        }}/>
                </div>

                {/* 데이터 배열 출력 */}
                {
                    array.map((color, idx) => (
                        <div
                            style={{
                                display: 'flex',
                                marginLeft: '300px',
                                marginBottom: '15px'
                            }}>
                            <div
                                key={idx}
                                style={{
                                    backgroundColor: color
                                }}
                                className='circle' onDoubleClick={()=>{
                                    alert(color + '을 삭제합니다.');
                                    setArray([
                                        ...array.slice(0,idx),
                                        ...array.slice(idx+1,array.length)
                                    ])
                                }}>{idx + 1}</div>
                            <span
                                style={{
                                    fontSize: '20px'
                                }}>{color}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SevenComponent;