import React from 'react';

// //방법 1. props로 전달받은 이벤트를 통해서 값 변경을 할 수 있다.
// function SevenChildApp(props) {
//     return (
        
//         <div>
//             <h5 className='alert alert-danger' style={{border:'3px solid pink', marginBottom:'10px'}}>내 이름은 {props.name},
//             &nbsp;{props.age}세 통령이죠.
//             &nbsp;
//                 <button type='button' className='btn btn-outline-info btn-sm'onClick={()=>props.onIncre()}>증가</button>
//             </h5>
//         </div>
//     );
// }



// //방법 2. 변수가 많을 경우, 간단하게 구조분해 할당을 통해서 변수를 선언하고 사용할 수 있다.
// function SevenChildApp(props) {

//     const {name,age,onIncre} = props; //구조분해 할당, 받고 싶은 데이터만 입력하면 된다.

//     return (
        
//         <div>
//             <h5 className='alert alert-danger' style={{border:'3px solid pink', marginBottom:'10px'}}>내 이름은 {name},
//             &nbsp;{age}세 통령이죠.
//             &nbsp;
//                 <button type='button' className='btn btn-outline-info btn-sm'onClick={onIncre}>증가</button>
//             </h5>
//         </div>
//     );
// }


//방법 3. 직접 받는 방법, props 영역에 받고 싶은 데이터를 직접 입력하여 사용한다.
function SevenChildApp({name,age,onIncre}) {

    return (
        
        <div>
            <h5 className='alert alert-danger' style={{border:'3px solid pink', marginBottom:'10px'}}>내 이름은 {name},
            &nbsp;{age}세 통령이죠.
            &nbsp;
                <button type='button' className='btn btn-outline-info btn-sm'onClick={onIncre}>증가</button>
            </h5>
        </div>
    );
}

export default SevenChildApp;