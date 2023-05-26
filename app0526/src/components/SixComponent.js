import React from 'react';
import'../App.css';

function SixComponent(props) {
    const array1=["red", "blue", "green", "yellow", "pink", "purple", "orange", "gray", "black", "white"]

    const array2=[{"usphoto":"11.png", "usname":"조지워싱턴", "president":"1대"},
    {"usphoto":"2.png", "usname":"존 애덤스", "president":"2대"},
    {"usphoto":"3.png", "usname":"토마스 제퍼슨", "president":"3대"},
    {"usphoto":"4.png", "usname":"제임스 메디슨", "president":"4대"},
    {"usphoto":"5.png", "usname":"제임스 먼로", "president":"5대"},
    ];

    return (
        <div>
            <h5 style={{border:'3px solid gray', backgroundColor:'#add836'}}>
                SixComponent 실습
            </h5>

            <div>
                <h5>array1 배열 요소를 순서대로 출력하기</h5>
                {
                    array1.map((color,idx)=>
                    (<div key={idx} style={{backgroundColor:color}} className='circle App-logo'>{idx+1}</div>))
                }
            </div>
            <br/>
            <br/>
            <br/>    
            <hr/>

            <div>
                <h5>array2 배열 요소를 순서대로 출력하기</h5>
                {
                    array2.map((item,idx)=>(
                        <figure className='photo App-logo'>
                            <img alt='' src={require(`../image/${item.usphoto}`)}/>
                            <figcaption>
                                <br/>
                                <h5><b>{item.usname}</b></h5>
                                <h5><b>{item.president}</b></h5>
                            </figcaption>
                        </figure>
                    ))
                }
            </div>


        </div>
    );
}

export default SixComponent;