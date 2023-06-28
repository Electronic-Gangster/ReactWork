import React from 'react';
import "../App.css";
import {Delete, DeleteForever} from '@material-ui/icons';
import Swal from 'sweetalert2';


function OneArrayList(props) {

    const {idx, row, onDelete} = props;
    
    return (
        <div className='rowstyle'>
            <b>{row.irum}</b>
            <span className='day'>{
                    row
                        .today
                        .toLocaleDateString('ko-KR')
                }
                &nbsp;
                <Delete
                    style={{
                        cursor: 'pointer'
                    }} onClick={()=>onDelete(idx)}/>

                    {/* 삭제할까요 물어본 후 예 클릭시 삭제하기 confirm 대신 sweetalert2 사용하기 */}

                    <DeleteForever style={{cursor:'pointer'}} onClick={()=>{
                        Swal.fire({
                            // title: '삭제할까요?',
                            // text: "삭제하시겠습니까?",
                            // icon: 'warning',
                            html:'삭제확인<br/>해당 방명록을 삭제할까요?<br/> 삭제하려면 예를 클릭하세요.',
                            showCancelButton: true,
                            confirmButtonColor: '#d33',
                            cancelButtonColor: '#3085d6',
                            confirmButtonText: '예',
                            cancelButtonText: '아니오'
                        }).then((result)=>{
                            if(result.isConfirmed){
                                //삭제 함수 호출
                                onDelete(idx);
                                Swal.fire("삭제했습니다.")
                            }else{
                                Swal.fire("취소했습니다.");
                            }
                        })
                    }}/>
            </span>
            <br/><br/>
            <h5>
                <b>{row.message}</b>
            </h5>
        </div>
    );
}

export default OneArrayList;