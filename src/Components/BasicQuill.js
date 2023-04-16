import { useState, useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      [{ script: 'sub' }, { script: 'super' }],
      ['code-block', 'inline-code'], // 코드 블록 및 인라인 코드 블록 버튼 추가
      ['clean'],
    ],
    syntax: true, // syntax 모듈 활성화
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    'header',
    'font',
    'size',
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
    'video',
    'code-block', // 코드 블록 포맷 추가
    'inline-code', // 인라인 코드 블록 포맷 추가
  ];

  const handleChange = useCallback((value) => {
    setContent(value);
  }, []);

  return (
    <ReactQuill
      value={content}
      onChange={handleChange}
      modules={modules} // modules 추가
      formats={formats} // formats 추가
    />
  );
}

export default Editor;
