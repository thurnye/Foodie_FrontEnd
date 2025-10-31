import React, { useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import type { Editor as TinyMCEEditor } from 'tinymce';

// Define component props
interface ITextEditorProps {
  getContents: (content: string) => void;
  defaultValue?: string;
  height?: string | number;
  placeholder?: string;
}

//  TinyMCE API key
const apiKey = '3qjuzznxv7sdmqriojmkxuz5wtx9m02n4b29csbvacw3ky76';

const TextEditor: React.FC<ITextEditorProps> = ({
  getContents,
  defaultValue = '',
  height = '100%',
  placeholder = 'Start typing...'
}) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const handleChange = (content: string) => {
    getContents(content);
  };

  console.log('TextEditor rendering with defaultValue:', defaultValue?.substring(0, 100));

  return (
    <>
      <Editor
        apiKey={apiKey}
        onInit={(_, editor) => {
          editorRef.current = editor;
          console.log('TinyMCE initialized with content:', editor.getContent()?.substring(0, 100));
        }}
        initialValue={defaultValue}
        init={{
          height: height,
          menubar: 'file edit view insert format tools',
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
            'emoticons',
            'codesample',
          ],
          toolbar:
            'undo redo | blocks fontfamily fontsize | ' +
            'bold italic underline strikethrough forecolor backcolor | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist checklist outdent indent | ' +
            'image media link table | ' +
            'code preview fullscreen | ' +
            'removeformat help',

          // Undo/Redo configuration
          custom_undo_redo_levels: 50, // Increase undo levels from default 10

          // Keyboard shortcuts (Ctrl/Cmd+Z for undo, Ctrl/Cmd+Y or Ctrl/Cmd+Shift+Z for redo)
          // These are enabled by default, just documenting

          // Image upload and handling
          image_advtab: true,
          image_uploadtab: true,
          image_caption: true,
          image_description: true,
          image_title: true,
          automatic_uploads: true,
          file_picker_types: 'image',

          // Support for image URLs from different sources
          image_list: [],

          // Allow images from external URLs
          file_picker_callback: (callback, value, meta) => {
            if (meta.filetype === 'image') {
              // Create input element for file selection
              const input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');

              input.onchange = (e) => {
                const target = e.target as HTMLInputElement;
                const file = target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    const base64 = e.target?.result as string;
                    callback(base64, {
                      alt: file.name,
                      title: file.name,
                    });
                  };
                  reader.readAsDataURL(file);
                }
              };

              input.click();
            }
          },

          // Allow pasting images
          paste_data_images: true,

          // Image dimensions
          image_dimensions: true,

          // Enhanced list support
          lists_indent_on_tab: true,

          // Content styling
          content_style: `
            body {
              font-family: Helvetica, Arial, sans-serif;
              font-size: 14px;
              background-color: #252525;
              color: #e0e0e0;
              padding: 20px;
            }
            img {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
            }
            a {
              color: #3b82f6;
            }
            ul, ol {
              padding-left: 24px;
              margin: 12px 0;
            }
            li {
              margin: 6px 0;
            }
            table {
              border-collapse: collapse;
              width: 100%;
              margin: 12px 0;
            }
            table td, table th {
              border: 1px solid #3a3a3a;
              padding: 8px;
            }
            code {
              background-color: #1e1e1e;
              padding: 2px 6px;
              border-radius: 4px;
              font-family: monospace;
            }
          `,

          // Skin for dark mode
          skin: 'oxide-dark',
          content_css: 'dark',

          // Placeholder
          placeholder: placeholder,
        }}
        onEditorChange={handleChange}
      />
    </>
  );
};

export default TextEditor;
