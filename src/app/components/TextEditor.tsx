import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import type { Editor as TinyMCEEditor } from 'tinymce';

// Define component props
interface ITextEditorProps {
  getContents: (content: string) => void;
  defaultValue?: string;
}

//  TinyMCE API key
const apiKey = '3qjuzznxv7sdmqriojmkxuz5wtx9m02n4b29csbvacw3ky76';

const TextEditor: React.FC<ITextEditorProps> = ({ getContents, defaultValue = '' }) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const handleChange = (content: string) => {
    getContents(content);
  };

  return (
    <>
      <Editor
        apiKey={apiKey}
        onInit={(_, editor) => {
          editorRef.current = editor;
        }}
        initialValue={defaultValue}
        init={{
          height: '100%',
          menubar: true,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'preview',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: `
            body {
              font-family:Helvetica,Arial,sans-serif;
              font-size:14px;
            }`,
        }}
        onEditorChange={handleChange}
      />
    </>
  );
};

export default TextEditor;