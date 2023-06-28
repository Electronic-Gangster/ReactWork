import React, {useState} from 'react';
import '../App.css';

function SixComponent(props) {
    
    const [inputArray,setInputArray] = useState([]); //배열 선언

    const [data, setData] = useState({   //4개의 input 태그에 입력한 데이터를 저장할 객체
        name: '윤석열',
        age: 62,
        hp: '010-1111-1111',
        addr: '서울시 서초구'
    });

    const changeData=(e)=>{             //4개의 input 태그 입력시 호출되는 함수
        // console.log(e.target.name);     //name 속성의 value를 출력
        // console.log(e.target.value);    //입력한 value를 출력
        const {name,value}=e.target;       //비구조 할당

        setData({                          
            ...data,                       //기존의 데이터를 복사
            [name]:value                   //name에 해당하는 value만 변경
        })
        console.log(data);                 //콘솔에서 확인해 보면, 나머지 데이터는 살아있다!
    }

    const addButton=()=>{                       //추가 버튼을 눌렀을 때 호출되는 함수
        setInputArray(inputArray.concat(data)); //배열에 추가
    }

    const initButton=()=>{              //초기화 버튼을 눌렀을 때 호출되는 함수
        setData({                       //원하는 초기값을 주면 된다.
            name: '',
            age: '',
            hp: '',
            addr: ''
        })
    }

    const deleteButton=(idx)=>{         //삭제 버튼을 눌렀을 때 호출되는 함수
        setInputArray(inputArray.filter((item,index)=>index!==idx)); //배열에서 해당 인덱스의 데이터를 제거
    }


    return (
        <div>
             <h2 className='alert alert-success wave'>SixComponent - 한번에 묶어서 배열에 추가하기</h2>
             <table className='table table-bordered' style={{width:'300px', margin:'0 auto'}}>
                <caption align="top">데이터 입력</caption>
                <tbody>
                    <tr>
                        <th width="100">이름</th>
                        <td>
                            <input type='text' name='name' className='form-control' onChange={changeData} value={data.name}/>
                        </td>
                    </tr>
                    <tr>
                        <th width="100">나이</th>
                        <td>
                            <input type='text' name='age' className='form-control' onChange={changeData} value={data.age}/>
                        </td>
                    </tr>
                    <tr>
                        <th width="100">휴대폰</th>
                        <td>
                            <input type='text' name='hp' className='form-control' onChange={changeData} value={data.hp}/>
                        </td>
                    </tr>
                    <tr>
                        <th width="100">주소</th>
                        <td>
                            <input type='text' name='addr' className='form-control' onChange={changeData} value={data.addr}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} align='center'>
                            <button type='button' className='btn btn-sm btn-outline-success' onClick={addButton}>데이터 추가</button>
                            &nbsp;&nbsp;
                            <button type='button' className='btn btn-sm btn-outline-danger' onClick={initButton}>입력 데이터 초기화</button>
                        </td>
                    </tr>
                </tbody>
             </table>
             
             <hr/>

             <table className='table table-bordered' style={{width:'550px', margin:'0 auto'}}>
                <caption align="top">데이터 출력</caption>
                <thead>
                    <tr>
                        <th width="50">번호</th>
                        <th width="100">이름</th>
                        <th width="80">나이</th>
                        <th width="150">휴대폰</th>
                        <th width="150">주소</th>
                        <th width="100">삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inputArray.map((item,idx)=>(
                            <tr key={idx}>
                                <td>{idx+1}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.hp}</td>
                                <td>{item.addr}</td>
                                <td>
                                    <button type='button' onClick={()=>{
                                        deleteButton(idx);
                                    }}>삭제</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
             </table>
        </div>
    );
}

export default SixComponent;