import React from 'react';

function EightArrayApp(props) {

    const {idx, row, onDelete}=props;
    
    return (
        
            <tr>
                <td>{idx+1}</td>
                <td>{row.name}</td>
                <td>{row.blood}형</td>
                <td>{row.addr}</td>
                <td>
                    <button type='button' onClick={()=>{
                        onDelete(idx);
                    }}>삭제</button>
                </td>
            </tr>
        
    );
}

export default EightArrayApp;