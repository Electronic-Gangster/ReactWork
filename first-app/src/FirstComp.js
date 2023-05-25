import React,{Component} from "react";
import img1 from './image/4.png';
import img2 from './image/1.png';
import img3 from './image/13.jpg';

// 1. class로 컴포넌트 생성하기.
class FisrtComp extends Component
{
    render()
    {
        return(
            <div>
                <h2 style={{color:'green', border:'2px solid orange', backgroundColor:'pink'}}>
                    1번 컴포넌트 입니다.
                </h2>
                <h6>src의 이미지 나타내기</h6>
                    <img src={img1} alt="이미지1번"style={{width:'300px'}}/>
                    <img src={img2} alt="이미지2번"style={{width:'288.5px'}}/>
                
                {/* public의 이미지는 상대주소로 */}
                <h6>public의 이미지 나타내기</h6>
                    <img alt="이미지2번" src="./13.jpg" style={{width:'100px'}}/>
            </div>
        )
    }
}

//default로 export할 경우, import시에 이름을 마음대로 정할 수 있다.
//export default는 파일 내에서만 한번만 가능하다.
//export default FisrtComp;

//이렇게 export 한 경우 import 할 때 반드시 같은 이름으로만 가능하다.
export {FisrtComp}