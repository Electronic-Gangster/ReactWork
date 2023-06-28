import React from 'react';
import posting from '../data/PostingData.json';

function TwoComponent(props) {

    const deal=posting.deal;

    return (
        <div>
            <h2 className='alert alert-danger'>TwoComponent - PostingData.json 데이터 출력</h2>
            {
                deal.map((data,idx)=>
                <div style={{float:'left', marginLeft:'10px'}} className=''>
                    <figure>
                        <img alt='' src={data.img} style={{border:'1px solid black', width:'300px'}}/>
                        <figcaption>
                            <div style={{color:'gray'}}>{data.company}</div>
                            <div style={{color:'#000'}}>{data.title}</div>
                            <b style={{color:'cyan'}}>{data.sale}</b>
                            <b style={{marginLeft:'10px'}}>{data.price}</b>
                        </figcaption>
                    </figure>
                </div>)
            }
        </div>
    );
}

export default TwoComponent;