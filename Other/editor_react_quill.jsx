import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'], // text styles
  ['blockquote', 'code-block'], // blocks
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }], // indentation
  [{ align: [] }],
  [{ color: [] }, { background: [] }], // colors
  ['link', 'image', 'video'], // links and media
  ['clean'], // remove formatting
];

const modules = {
  toolbar: {
    container: toolbarOptions,
    handlers: {
      'code-block': () => {
        const range = this.quill.getSelection();
        this.quill.format('code-block', true);
        if (range) {
          this.quill.setSelection(range.index + 1, range.length);
        }
      },
      'horizontal-line': () => {
        const range = this.quill.getSelection();
        this.quill.insertEmbed(range.index, 'hr', null, 'user');
        this.quill.setSelection(range.index + 2, 0);
      },
      'insert-table': () => {
        const range = this.quill.getSelection();
        this.quill.insertTable(3, 3);
        this.quill.setSelection(range.index + 4, 0);
      },
      'insert-tag': () => {
        const range = this.quill.getSelection();
        this.quill.insertText(range.index, 'tag');
        this.quill.setSelection(range.index + 4, 0);
      },
      'delete-backward': (range, context) => {
        const currentIndex = range.index;
        const previousCharIndex = currentIndex - 1;
        const previousChar = context.lines.current[previousCharIndex];
        const nextChar = context.lines.current[currentIndex];
        if (previousChar === '"' && nextChar === '"') {
          context.quill.deleteText(previousCharIndex, 2, 'user');
          context.quill.setSelection(previousCharIndex, 0, 'user');
        } else {
          context.quill.deleteText(currentIndex, 1, 'user');
        }
      },
    },
  },
};

const EditorReactQuill = () => {
  const [contents, setContents] = useState('');

  const handleChange = (value) => {
    setContents(value);
    console.log(contents);
  }

  return (
    <div>
      <ReactQuill theme="snow" modules={modules} onChange={handleChange} />
    </div>
  );
};

export default EditorReactQuill;
