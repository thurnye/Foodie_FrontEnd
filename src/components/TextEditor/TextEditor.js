import React, { useRef } from 'react';
import styles from './TextEditor.module.scss';
import { Editor } from '@tinymce/tinymce-react';
// import parser from 'html-react-parser';
// import ASCButton from '../ASCButton/ASCButton';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';

const apiKey="3qjuzznxv7sdmqriojmkxuz5wtx9m02n4b29csbvacw3ky76";

const TextEditor = ({getContents, defaultValue}) => {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      getContents(editorRef.current.getContent());
    }
  };

  return(
  <>
    <Editor
        apiKey={apiKey}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={defaultValue}
        init={{
          height: '100%',
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: `
            body { 
              font-family:Helvetica,Arial,sans-serif; 
              font-size:14px,  
            }`
        }}
        onChange={() => getContents(editorRef.current.getContent())}
      />
      {/* <Box sx={{mt: 3, width: '100%', textAlign: 'end'}}>
        
        <ASCButton
          fullWidth={false}
          variant="contained" 
          label={"Save"} 
          backgroundColor={'#375EA2'}
          hoverBackgroundColor={'#375EA2'}
          onClick={log}
          height={'initial'}
          width={'initial'}
        />

      </Box> */}
      {/* {parser(editorRef?.current?.getContent())} */}
  </>
)};

export default TextEditor;
