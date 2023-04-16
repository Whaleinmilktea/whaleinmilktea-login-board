import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // 스타일링을 위한 CSS 임포트

// Quill 에디터에 코드 블록 및 인라인 코드 기능을 활성화하기 위해 모듈을 설정합니다.
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    ['code', 'code-block'], // 코드 블록 및 인라인 코드를 위한 기능 추가
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
  'code-block', // 코드 블록 및 인라인 코드를 위한 포맷 추가
];

function QuillEditor() {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div className="quill-editor">
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        theme="snow" // snow 테마 사용
      />
    </div>
  );
}

export default QuillEditor;
