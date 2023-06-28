import React from 'react';

function SevenChildApp2({name,dynasty,photo}) {
    return (
        <div>
            <div className='' style={{border:'1px solid black',margin:'0 auto', width:'300px', height:'250px'}}>
                <h5 className='so'>이름 : {name}</h5>
                <h5 className='so2'>순서 : {dynasty}</h5>
                <img src={photo} alt='' width='100px' className='fr'/>
            </div>
        </div>
    );
}

export default SevenChildApp2;