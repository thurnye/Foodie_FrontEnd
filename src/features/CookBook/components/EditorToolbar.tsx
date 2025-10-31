import React from 'react';
import { Box, IconButton, Divider, Tooltip } from '@mui/material';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatStrikethrough,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  Code,
  Link,
  Image,
  Title,
  TextFields,
} from '@mui/icons-material';

interface EditorToolbarProps {
  onFormat?: (format: string) => void;
}

const EditorToolbar: React.FC<EditorToolbarProps> = ({ onFormat }) => {
  const handleFormat = (format: string) => {
    if (onFormat) {
      onFormat(format);
    }
  };

  const toolbarButtons = [
    { icon: <Title />, label: 'Heading', action: 'heading' },
    { icon: <TextFields />, label: 'Text', action: 'text' },
    { divider: true },
    { icon: <FormatBold />, label: 'Bold (Ctrl+B)', action: 'bold' },
    { icon: <FormatItalic />, label: 'Italic (Ctrl+I)', action: 'italic' },
    { icon: <FormatUnderlined />, label: 'Underline (Ctrl+U)', action: 'underline' },
    { icon: <FormatStrikethrough />, label: 'Strikethrough', action: 'strikethrough' },
    { divider: true },
    { icon: <FormatListBulleted />, label: 'Bullet List', action: 'bullet-list' },
    { icon: <FormatListNumbered />, label: 'Numbered List', action: 'numbered-list' },
    { icon: <FormatQuote />, label: 'Quote', action: 'quote' },
    { divider: true },
    { icon: <Link />, label: 'Insert Link', action: 'link' },
    { icon: <Image />, label: 'Insert Image', action: 'image' },
    { icon: <Code />, label: 'Code Block', action: 'code' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        px: 2,
        py: 1,
        backgroundColor: '#252525',
        borderBottom: '1px solid #3a3a3a',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      {toolbarButtons.map((button, index) => {
        if (button.divider) {
          return (
            <Divider
              key={`divider-${index}`}
              orientation="vertical"
              flexItem
              sx={{ mx: 0.5, borderColor: '#3a3a3a' }}
            />
          );
        }

        return (
          <Tooltip key={button.action} title={button.label} arrow>
            <IconButton
              size="small"
              onClick={() => button.action && handleFormat(button.action)}
              sx={{
                color: '#e0e0e0',
                '&:hover': {
                  backgroundColor: '#3a3a3a',
                },
                borderRadius: 1,
              }}
            >
              {button.icon}
            </IconButton>
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default EditorToolbar;
