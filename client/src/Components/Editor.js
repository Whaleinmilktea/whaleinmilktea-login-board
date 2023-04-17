import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const SubmitForm = styled.form``;
const SubmitBtn = styled.button``;

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    [{ font: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    ['code', 'code-block'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
  'background',
  'font',
  'align',
  'script',
  'code',
  'code-block',
];

function QuillEditor() {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // form submit 이벤트의 기본 동작 방지
    console.log(content); // 현재 content 값을 콘솔에 출력
  };

  return (
    <div className="quill-editor">
      <SubmitForm onSubmit={handleSubmit}>
        <ReactQuill
          value={content}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          theme="snow"
        />
        {/* 버튼의 타입을 지정 */}
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </SubmitForm>
    </div>
  );
}

export default QuillEditor;
