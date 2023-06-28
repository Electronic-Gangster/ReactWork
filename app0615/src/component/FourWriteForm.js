import React from 'react';
import {useState} from 'react';
import Axios from 'axios';

function FourWriteForm({getList}) {
    
    const [data,setData] = useState({
        num:0,
        irum:"noname",
        address:"noaddress",
        birthday:"no birthday"
    });
    
    const [photo,setPhoto] = useState('');

    const photoUrl="https://kr.object.ncloudstorage.com/bit701-bucket-101/react/";

    //저장버튼 이벤트
    const saveButtonEvent=()=>{
        let url="/info/insert";
        Axios.post(url,data)
        .then(res=>{
            setData(res.data);
            getList();
        })
    }

    //사진변경 버튼 이벤트
    const changePhotoEvent=(e)=>{
       let url="/info/photo";
       const imageFile=new FormData();
       imageFile.append("upload",e.target.files[0]);
       imageFile.append("num",data.num);

       Axios({
        method:"post",
        url:url,
        data:imageFile,
        headers:{"Content-Type":"multipart/form-data"}
       }).then(res=>{
        setPhoto(res.data); //반환된 사진이름을 photo에 넣는다.
        getList(); //전체 데이터를 가져오는 함수 호출
       });    //반환된 버켓에 저장된 이름을 photo에 넣는다.
    }

    return (
        <div>
            <h4 style={{marginLeft:"10px"}}>Info 데이터 입력</h4>
            <div className='input-group' style={{width:'600px', marginLeft:'10px'}}>
                <b style={{marginLeft:"10px"}}>이름</b>&nbsp;
                <input type='text' className='form-control' onChange={(e)=>{
                    setData({
                        ...data,
                        irum:e.target.value
                    })
                }} style={{width:'100px'}} value={data.irum}/>&nbsp;&nbsp;

                <b style={{marginLeft:"10px"}}>주소</b>&nbsp;
                <input type='text' className='form-control' onChange={(e)=>{
                    setData({
                        ...data,
                        address:e.target.value
                    })
                }} style={{width:'100px'}} value={data.address}/>&nbsp;&nbsp;

                <b style={{marginLeft:"10px"}}>생일</b>&nbsp;
                <input type='date' className='form-control' onChange={(e)=>{
                    setData({
                        ...data,
                        birthday:e.target.value
                    })
                }} style={{width:'200px'}} value={data.birthday}/>&nbsp;&nbsp;

                <button type='button' className='btn btn-sm btn-outline-info bb' onClick={saveButtonEvent}>저장</button>
            </div>
                <br/><br/>
            <h3 className='alert alert-danger'>
                값 확인 : {data.num}/{data.irum}/{data.address}/{data.birthday}
            </h3>
            
            <br/><br/>
            
            <h4 className='bb' style={{marginLeft:'10px'}}>사진은 데이터를 먼저 저장 후 변경하세요.</h4>
            <input type='file' className='btn-outline-danger' onChange={changePhotoEvent}/>
            
            <br/>
            
            <img alt='' style={{width:'300px', border:'2px solid gray'}} src={photoUrl+photo}/>
            
            <br/><br/>
            <button type='button' className='btn-outline-danger' style={{width:'100px', height:'100px'}}onClick={()=>{
                setPhoto('');
                setData({num:0,irum:'',address:'',birthday:''});
            }}>초기화 인 더 하우스</button>
        </div>
    );
}

export default FourWriteForm;