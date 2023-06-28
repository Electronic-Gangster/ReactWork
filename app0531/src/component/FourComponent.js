import React, { useRef, useEffect,useState } from 'react';
import {Editor} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';

function FourComponent(props) {

    const [content,setContent] = useState('');

    const toastRef=useRef();

    useEffect(()=>{
        toastRef.current?.getInstance().setHTML("");
    },[])

    //버튼 이벤트
    const buttonEvent=()=>{
        let s = toastRef.current?.getInstance().getHTML();
        setContent(s);
        alert(s.length);
    }
    
    return (
        <div>
            <Editor
                ref={toastRef}
                placeholder="내용을 입력해주세요."
                previewStyle="vertical" // 미리보기 스타일 지정
                height="500px" // 에디터 창 높이
                initialEditType="wysiwyg" // 편집기 타입 설정
                toolbarItems={[
                    // 툴바 옵션 설정
                    ['heading', 'bold', 'italic', 'strike'],
                    ['hr', 'quote'],
                    ['ul', 'ol', 'task', 'indent', 'outdent'],
                    ['table', 'image', 'link'],
                    ['code', 'codeblock']
                ]}
            ></Editor>
            <br/>
            <button type='button' onClick={buttonEvent}>에디터 읽기</button>
            <hr/>
            {content}
        </div>
    );
}

export default FourComponent;