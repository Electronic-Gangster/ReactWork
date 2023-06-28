import noImg from '../kk.gif'
import React, { useRef, useState } from 'react';
import '../App.css';
import {CameraAltOutlined, DeleteForeverOutlined, Edit } from '@mui/icons-material';
import Axios  from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function FourRowList({item,getList}) {

    const [updateData,setUpdateData] = useState({
        num: item.num,
        irum: item.irum,
        address: item.address,
        birthday: item.birthday
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    //수정 버튼 이벤트
    const handleUpdate = () => {
        setOpen(false);

        Axios.post("/info/update",updateData)
        .then(res=>{
            //수정 후 목록 다시 출력
            getList();
        })
      };

    //const photoUrl="https://kr.object.ncloudstorage.com/bit701-bucket-101/react/";
    
    //.env 파일에 저장된 변수를 사용하는 방법 (앞에 process.env. 를 붙인다)
    const photoUrl=process.env.REACT_APP_PHOTO_URL;

    const fileRef=useRef(null);

    //1. 사진변경 버튼 이벤트
    const changePhotoEvent=(e)=>{
        let url="/info/photo";
        const imageFile=new FormData();
        imageFile.append("upload",e.target.files[0]);
        imageFile.append("num",item.num);
 
        Axios({
         method:'post',
         url:url,
         data:imageFile,
         headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{          
          //목록 다시 출력
          getList();
        });//반환된 버켓에 저장된 이름을 photo 에 넣는다
     }
     
    //2. 사진삭제 버튼 이벤트
    const deleteEvent=()=>{
        let b=window.confirm("삭제하려면 [확인] 을 눌러주세요");
        if(!b)
            return;

        const url=`/info/delete/${item.num}`;
        Axios.delete(url)
        .then(res=>{
            getList();
        })
     }

    return (
        <div className='rowstyle'>
            <img alt='' src={item.photo === null ? noImg : photoUrl + item.photo} />
            <br/>
            이름 : {item.irum}<br/>
            주소 : {item.address}<br/>
            생일 : {item.birthday}<br/>
            가입일 : {item.gaipday}

             <input type='file' onChange={changePhotoEvent} style={{display:'none'}}
            ref={fileRef}/>

            <span style={{color:'red'}}>                
                <CameraAltOutlined style={{fontSize:'17px',marginLeft:'10px',cursor:'pointer'}}
                onClick={()=>{
                    fileRef.current.click();
                }}/>
                <DeleteForeverOutlined style={{fontSize:'20px',marginLeft:'5px',cursor:'pointer'}}
                onClick={deleteEvent}/>

                <Edit style={{fontSize:'20px',marginLeft:'5px',cursor:'pointer'}} onClick={handleClickOpen}/>
            </span>

            {/* 수정 다이얼로그 */}
                    <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">

                <DialogTitle id="alert-dialog-title">
                    {"정보 수정"}
                </DialogTitle>
                
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <input type='text' value={updateData.irum} onChange={(e)=>setUpdateData({
                            ...updateData,
                            irum:e.target.value
                        })}/><br/>
                        <input type='text' value={updateData.address} onChange={(e)=>setUpdateData({
                            ...updateData,
                            address:e.target.value
                        })}/><br/>
                        <input type='date' value={updateData.birthday} onChange={(e)=>setUpdateData({
                            ...updateData,
                            birthday:e.target.value
                        })}/>
                    </DialogContentText>
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button onClick={handleUpdate} autoFocus="autoFocus">
                        데이터 수정
                    </Button>
                </DialogActions>
            
            </Dialog>
        </div>
    );
}

export default FourRowList;