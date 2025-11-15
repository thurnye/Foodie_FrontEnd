import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
  Collapse,
  Divider,
} from '@mui/material';
import {
  MenuBook,
  Add,
  ExpandMore,
  ExpandLess,
  DragIndicator,
  Edit,
  Restaurant,
  Notes,
} from '@mui/icons-material';
import { IBook } from '../types/book.types';

interface EditorSidebarProps {
  cookbookTitle: string;
  recipes: IBook[] | string[];
  selectedRecipeId: string | null;
  onRecipeSelect: (recipeId: string) => void;
  onAddRecipe: () => void;
  onEditInfo: () => void;
  isGenerating?: boolean;
}

const EditorSidebar: React.FC<EditorSidebarProps> = ({
  cookbookTitle,
  recipes,
  selectedRecipeId,
  onRecipeSelect,
  onAddRecipe,
  onEditInfo,
  isGenerating = false,
}) => {
  const [frontMatterOpen, setFrontMatterOpen] = React.useState(true);
  const [bodyMatterOpen, setBodyMatterOpen] = React.useState(true);
  const [backMatterOpen, setBackMatterOpen] = React.useState(true);

  return (
    <Box
      sx={{
        width: 280,
        height: '100%',
        backgroundColor: '#1e1e1e',
        color: '#e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #2d2d2d',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #2d2d2d',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MenuBook sx={{ color: '#3b82f6' }} />
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
            {cookbookTitle || 'My Cookbook'}
          </Typography>
        </Box>
        <IconButton
          size="small"
          onClick={onAddRecipe}
          disabled={isGenerating}
          sx={{
            color: isGenerating ? '#6b7280' : '#3b82f6',
            '&:hover': { backgroundColor: '#2d2d2d' },
            '&.Mui-disabled': { color: '#6b7280' }
          }}
          title={isGenerating ? 'Cannot add recipes while generating' : 'Add recipes'}
        >
          <Add />
        </IconButton>
      </Box>

      {/* Navigation */}
      <List sx={{ flex: 1, overflow: 'auto', py: 0 }}>
        {/* Front Matter */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setFrontMatterOpen(!frontMatterOpen)}
            sx={{
              py: 1.5,
              '&:hover': { backgroundColor: '#2d2d2d' },
            }}
          >
            <ListItemText
              primary="Front matter"
              primaryTypographyProps={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#9ca3af',
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  onEditInfo();
                }}
                sx={{ color: '#9ca3af', p: 0.5 }}
              >
                <Edit sx={{ fontSize: 16 }} />
              </IconButton>
              {frontMatterOpen ? (
                <ExpandLess sx={{ fontSize: 20 }} />
              ) : (
                <ExpandMore sx={{ fontSize: 20 }} />
              )}
            </Box>
          </ListItemButton>
        </ListItem>

        <Collapse in={frontMatterOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                py: 1,
                '&:hover': { backgroundColor: '#2d2d2d' },
              }}
              onClick={() => onRecipeSelect('cover')}
            >
              <ListItemText
                primary="Cover & Title"
                primaryTypographyProps={{ fontSize: '0.875rem' }}
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                pl: 4,
                py: 1,
                '&:hover': { backgroundColor: '#2d2d2d' },
              }}
              onClick={() => onRecipeSelect('intro')}
            >
              <ListItemText
                primary="Introduction"
                primaryTypographyProps={{ fontSize: '0.875rem' }}
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                pl: 4,
                py: 1,
                '&:hover': { backgroundColor: '#2d2d2d' },
              }}
              onClick={() => onRecipeSelect('toc')}
            >
              <ListItemText
                primary="Table of contents"
                primaryTypographyProps={{ fontSize: '0.875rem' }}
              />
            </ListItemButton>
          </List>
        </Collapse>

        <Divider sx={{ borderColor: '#2d2d2d', my: 1 }} />

        {/* Body Matter - Recipes */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setBodyMatterOpen(!bodyMatterOpen)}
            sx={{
              py: 1.5,
              '&:hover': { backgroundColor: '#2d2d2d' },
            }}
          >
            <ListItemText
              primary="Body matter"
              primaryTypographyProps={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#9ca3af',
              }}
            />
            {bodyMatterOpen ? (
              <ExpandLess sx={{ fontSize: 20 }} />
            ) : (
              <ExpandMore sx={{ fontSize: 20 }} />
            )}
          </ListItemButton>
        </ListItem>

        <Collapse in={bodyMatterOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {recipes.map((book, index) => {
              const bookObj = typeof book === 'string' ? null : book;
              const bookId = typeof book === 'string' ? book : book._id;
              const recipeName =
                bookObj?.recipe?.basicInfo?.recipeName || `Recipe ${index + 1}`;

              return (
                <ListItemButton
                  key={bookId}
                  selected={selectedRecipeId === bookId}
                  sx={{
                    pl: 4,
                    py: 1,
                    '&:hover': { backgroundColor: '#2d2d2d' },
                    '&.Mui-selected': {
                      backgroundColor: '#2563eb',
                      '&:hover': { backgroundColor: '#1d4ed8' },
                    },
                  }}
                  onClick={() => onRecipeSelect(bookId)}
                >
                  <DragIndicator
                    sx={{ fontSize: 16, mr: 1, color: '#6b7280', cursor: 'grab' }}
                  />
                  <Typography sx={{ fontSize: '0.875rem', mr: 1 }}>
                    {index + 1}
                  </Typography>
                  <ListItemText
                    primary={recipeName}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      sx: {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      },
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>

        <Divider sx={{ borderColor: '#2d2d2d', my: 1 }} />

        {/* Back Matter */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setBackMatterOpen(!backMatterOpen)}
            sx={{
              py: 1.5,
              '&:hover': { backgroundColor: '#2d2d2d' },
            }}
          >
            <ListItemText
              primary="Back matter"
              primaryTypographyProps={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#9ca3af',
              }}
            />
            {backMatterOpen ? (
              <ExpandLess sx={{ fontSize: 20 }} />
            ) : (
              <ExpandMore sx={{ fontSize: 20 }} />
            )}
          </ListItemButton>
        </ListItem>

        <Collapse in={backMatterOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                py: 1,
                '&:hover': { backgroundColor: '#2d2d2d' },
              }}
              onClick={() => onRecipeSelect('notes')}
            >
              <ListItemText
                primary="Notes"
                primaryTypographyProps={{ fontSize: '0.875rem' }}
              />
            </ListItemButton>
            <ListItemButton
              sx={{
                pl: 4,
                py: 1,
                '&:hover': { backgroundColor: '#2d2d2d' },
              }}
              onClick={() => onRecipeSelect('back-cover')}
            >
              <ListItemText
                primary="Back Cover"
                primaryTypographyProps={{ fontSize: '0.875rem' }}
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      {/* Footer */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid #2d2d2d',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Restaurant sx={{ fontSize: 18, color: '#6b7280' }} />
        <Typography sx={{ fontSize: '0.75rem', color: '#6b7280' }}>
          {recipes.length} of {recipes.length} recipes
        </Typography>
      </Box>
    </Box>
  );
};

export default EditorSidebar;
