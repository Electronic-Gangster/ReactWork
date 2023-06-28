import React from 'react';
import { useParams } from 'react-router-dom';

function Food(props) {

    const {food1, food2} = useParams();

    return (
        <div>
            <h3 className='alert alert-info'>Food Page 입니다.</h3>
            <img alt='' src={food1} width={200}/>
            <hr/>
            {
                food1==null&&food2==null?<h3>저는 오늘 점심식사를 먹지 않겠습니다.</h3>
                :food2==null&&food1!=null?
                <div>
                    <h4>오늘의 점심 메뉴 1가지</h4>
                    <img alt='' src={require(`../image/${food1}.gif`)} width={200}/>
                </div>:
                <div>
                    <h4>오늘의 점심 메뉴 2가지</h4>
                    <img alt='' src={require(`../image/${food1}.gif`)} width={200}/>
                    <img alt='' src={require(`../image/${food2}.gif`)} width={200}/>
                </div>
            }
        </div>
    );
}

export default Food;