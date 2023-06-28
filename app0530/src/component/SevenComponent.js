import React from 'react';
import '../App.css';
import SevenChildApp from './SevenChildApp';
import SevenChildApp2 from './SevenChildApp2';

// 부모, 자식간 통신하기!(데이터 주고 받기)
// 1. 부모 컴포넌트에서 자식 컴포넌트로 props를 통해서 값이나, 이벤트를 전달할 수 있다.
// 2. 자식 컴포넌트에서는 부모 컴포넌트의 값을 props로 받아서 출력은 가능하지만, 값을 직접 변경하는것은 불가능하다.
// 3. 만약, 부득이하게 변경을 해야할 경우. props로 전달받은 이벤트를 통해서 값 변경을 할 수 있다.
// 4. 자식 컴포넌트로 보낼 props는 부모만이 정할 수 있으며, 자식 컴포넌트에서는 읽기만 가능하다.(이벤트 말고, 값만!)

function SevenComponent(props) {

    const [count, setCount] = React.useState(0);

    const countIncre=()=>setCount(count+1);

    return (
        <div>
             <h2 className='alert alert-warning'>SevenComponent - 부모자식간 통신</h2>
             <h2 className='alert alert-success scale'>방문횟수 : {count}</h2>
             <SevenChildApp name={'윤석열'} age={62} onIncre={countIncre}/>
             <SevenChildApp name={'문재인'} age={71} onIncre={countIncre}/>
             <SevenChildApp name={'박근혜'} age={73} onIncre={countIncre}/>
             
             <hr/>
             
             <SevenChildApp2 name="이성계" dynasty="1대" photo={require("../image/1.png")} />
             <SevenChildApp2 name="이방과" dynasty="2대" photo={require("../image/2.png")} />
             <SevenChildApp2 name="이방원" dynasty="3대" photo={require("../image/3.png")} />

        </div>
    );
}

export default SevenComponent;