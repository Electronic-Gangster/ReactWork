import React from 'react';

function SixRowItem({ele}) {
    return (
        <div style={{margin:'0 auto', width:"400px", height:"70px",border:"3px solid gray"}} className=''>
            <b>이 름 : {ele.irum}</b>
            <b style={{marginLeft:'10px'}}>혈액형 : {ele.blood}</b>
            <b style={{marginLeft:'10px'}}>연락처 : {ele.hp}</b>
        </div>
    );
}

export default SixRowItem;