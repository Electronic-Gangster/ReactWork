import React, { useState } from 'react';
import FiveWriteForm from '/FiveWriteForm';
import FiveRowList from '/FiveRowList';
// 추가
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
  
  function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

function FiveComponent(props) {
    const [dataList,setDataList]=useState(
        [
            {writer:"이효리",subject:"안녕하세요",content:"반가워요!",photo:"bell2.gif",today:new Date()},
            {writer:"유재석",subject:"Hello",content:"재미잇는 리액트!",photo:"tree5.gif",today:new Date()}
        ]
    );

   
    const [selectData,setSelectData]=useState(
        {
            writer:'',
            subject:'',
            content:'',
            photo:''
        });

    //추가
    
    const [open, setOpen] = React.useState(false);

     //행단위 클릭시 row를 보내면 data로 받아서 행데이타 selectData 에 넣는다
    const handleClickOpen = (data) => {
        setOpen(true);

        setSelectData(data);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //게시글 추가 이벤트
    const addBoard=(item)=>{
        setDataList(dataList.concat({
            ...item,
            today:new Date()
        }));
    }
    return (
        <div>
            <h2 className='alert alert-info'>Five Component-간단 게시판</h2>
            <FiveWriteForm addBoard={addBoard}/>
            <hr/>
            <table className='table table-bordered' style={{width:'700px',marginLeft:'50px'}}>
                <thead>
                    <tr style={{backgroundColor:'orange'}}>
                        <th style={{width:'60px'}}>번호</th>
                        <th style={{width:'300px'}}>제목</th>
                        <th style={{width:'100px'}}>작성자</th>
                        <th style={{width:'100px'}}>작성일</th>                        
                    </tr>
                </thead>
                <tbody>
                {
                    dataList.map((item,idx)=>(<FiveRowList key={idx} row={item} idx={idx}
                         handleClickOpen={handleClickOpen}/>))
                }
                </tbody>
            </table>


             {/* 다이얼로그 */}
             <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{width:'400px'}}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
             <b style={{fontFamily:'Single Day'}}>작성자 : {selectData.writer}</b><br/>
             <b style={{fontFamily:'Single Day'}}>제 목 : {selectData.subject}</b>
        </BootstrapDialogTitle>
        <DialogContent dividers>
            <Typography gutterBottom>
            <b style={{fontFamily:'Nanum Pen Script',fontSize:'20px'}}>
                {selectData.today.toLocaleString('ko-KR')}
            </b>
          </Typography>
          <Typography gutterBottom>
            <pre style={{fontFamily:'Nanum Pen Script',fontSize:'20px',fontWeight:'bold',
                color:'white',backgroundColor:'black'}}>
                {selectData.content}
            </pre>
          </Typography>
          <Typography gutterBottom>
            <img alt='' src={require(`../xmas/${selectData.photo}`)} style={{maxWidth:'300px'}}/>
          </Typography>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
        </div>
    );
}

export default FiveComponent;