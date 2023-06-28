import React from 'react';

function FiveRowList(props) {

    const {row, idx} = props;

    return (
        <tr>
            <td align='center' className=''>{idx+1}</td>
            <td align='center' style={{cursor:'pointer'}}  onClick={()=>props.handleClickOpen(row)}>
                {row.subject}
            </td>
            <td align='center' >
                {row.writer}
            </td>
            <td align='center'>
                {row.today.toLocaleDateString('ko-KR')}
            </td>
        </tr>
    );
}

export default FiveRowList;