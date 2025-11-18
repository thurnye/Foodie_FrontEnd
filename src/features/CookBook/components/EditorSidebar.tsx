import React, { useState } from 'react';
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
  MenuItem,
  Menu,
} from '@mui/material';
import {
  MenuBook,
  Add,
  ExpandMore,
  ExpandLess,
  DragIndicator,
  Edit,
  Restaurant,
  MoreVert,
} from '@mui/icons-material';
import { IBook } from '../types/book.types';

interface EditorSidebarProps {
  cookbookTitle: string;
  recipes: IBook[] | string[];
  selectedRecipeId: string | null;
  onRecipeSelect: (recipeId: string) => void;
  onAddRecipe: () => void;
  onEditInfo: () => void;
  onAddExtraPage?: (pageType: 'blank' | 'template', section: 'front' | 'back', templateType?: string) => void;
  extraPages?: Array<{ id: string; title: string; type: 'blank' | 'template'; templateType?: string; section?: 'front' | 'back' }>;
  isGenerating?: boolean;
}

const EditorSidebar: React.FC<EditorSidebarProps> = ({
  cookbookTitle,
  recipes,
  selectedRecipeId,
  onRecipeSelect,
  onAddRecipe,
  onEditInfo,
  onAddExtraPage,
  extraPages = [],
  isGenerating = false,
}) => {
  const [frontMatterOpen, setFrontMatterOpen] = React.useState(true);
  const [bodyMatterOpen, setBodyMatterOpen] = React.useState(true);
  const [backMatterOpen, setBackMatterOpen] = React.useState(true);
  const [frontMenuAnchor, setFrontMenuAnchor] = useState<null | HTMLElement>(null);
  const [backMenuAnchor, setBackMenuAnchor] = useState<null | HTMLElement>(null);
  const [templateMenuAnchor, setTemplateMenuAnchor] = useState<null | HTMLElement>(null);
  const [currentSection, setCurrentSection] = useState<'front' | 'back'>('front');

  const handleAddBlankPage = (section: 'front' | 'back') => {
    if (onAddExtraPage) {
      onAddExtraPage('blank', section);
    }
    if (section === 'front') {
      setFrontMenuAnchor(null);
    } else {
      setBackMenuAnchor(null);
    }
  };

  const handleOpenTemplateMenu = (section: 'front' | 'back', event: React.MouseEvent<HTMLElement>) => {
    setCurrentSection(section);
    setTemplateMenuAnchor(event.currentTarget);
    if (section === 'front') {
      setFrontMenuAnchor(null);
    } else {
      setBackMenuAnchor(null);
    }
  };

  const handleSelectTemplate = (templateType: string) => {
    if (onAddExtraPage) {
      onAddExtraPage('template', currentSection, templateType);
    }
    setTemplateMenuAnchor(null);
  };

  const frontExtraPages = extraPages.filter(page => page.section === 'front' || !page.section);
  const backExtraPages = extraPages.filter(page => page.section === 'back');

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
          <Typography
            variant='h6'
            sx={{ fontWeight: 600, fontSize: '0.95rem' }}
          >
            {cookbookTitle || 'My Cookbook'}
          </Typography>
        </Box>
        <IconButton
          size='small'
          onClick={onAddRecipe}
          disabled={isGenerating}
          sx={{
            color: isGenerating ? '#6b7280' : '#3b82f6',
            '&:hover': { backgroundColor: '#2d2d2d' },
            '&.Mui-disabled': { color: '#6b7280' },
          }}
          title={
            isGenerating ? 'Cannot add recipes while generating' : 'Add recipes'
          }
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
              primary='Front matter'
              primaryTypographyProps={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#9ca3af',
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                size='small'
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

        <Collapse in={frontMatterOpen} timeout='auto' unmountOnExit>
         <Box
            sx={{
              pl: 4,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                variant='h6'
                sx={{ fontWeight: 600, fontSize: '0.95rem' }}
              >
                Add Additional Front Page
              </Typography>
            </Box>
            <IconButton
              size='small'
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                setFrontMenuAnchor(event.currentTarget)
              }
              disabled={isGenerating}
              sx={{
                color: isGenerating ? '#6b7280' : '#3b82f6',
                '&:hover': { backgroundColor: '#2d2d2d' },
                '&.Mui-disabled': { color: '#6b7280' },
              }}
              title={
                isGenerating
                  ? 'Cannot add additional page while generating'
                  : 'Add Additional Page'
              }
            >
              <MoreVert />
            </IconButton>
          </Box>

          <List component='div' disablePadding>
            {/* Default front matter pages */}
            <ListItemButton
              selected={selectedRecipeId === 'cover'}
              sx={{
                pl: 4,
                py: 1,
                '&:hover': { backgroundColor: '#2d2d2d' },
                '&.Mui-selected': {
                  backgroundColor: '#2d2d2d',
                  '&:hover': { backgroundColor: '#2d2d2d' },
                },
              }}
              onClick={() => onRecipeSelect('cover')}
            >
              <ListItemText
                primary='Cover & Title'
                primaryTypographyProps={{ fontSize: '0.875rem' }}
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedRecipeId === 'intro'}
              sx={{
                pl: 4,
                py: 1,
                '&:hover': { backgroundColor: '#2d2d2d' },
                '&.Mui-selected': {
                  backgroundColor: '#2d2d2d',
                  '&:hover': { backgroundColor: '#2d2d2d' },
                },
              }}
              onClick={() => onRecipeSelect('intro')}
            >
              <ListItemText
                primary='Introduction'
                primaryTypographyProps={{ fontSize: '0.875rem' }}
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedRecipeId === 'toc'}
              sx={{
                pl: 4,
                py: 1,
                '&:hover': { backgroundColor: '#2d2d2d' },
                '&.Mui-selected': {
                  backgroundColor: '#2d2d2d',
                  '&:hover': { backgroundColor: '#2d2d2d' },
                },
              }}
              onClick={() => onRecipeSelect('toc')}
            >
              <ListItemText
                primary='Table of contents'
                primaryTypographyProps={{ fontSize: '0.875rem' }}
              />
            </ListItemButton>

            {/* Extra front matter pages */}
            {frontExtraPages.map((page) => (
              <ListItemButton
                key={page.id}
                selected={selectedRecipeId === page.id}
                sx={{
                  pl: 4,
                  py: 1,
                  '&:hover': { backgroundColor: '#2d2d2d' },
                  '&.Mui-selected': {
                    backgroundColor: '#2d2d2d',
                    '&:hover': { backgroundColor: '#2d2d2d' },
                  },
                }}
                onClick={() => onRecipeSelect(page.id)}
              >
                <ListItemText
                  primary={page.title}
                  primaryTypographyProps={{ fontSize: '0.875rem' }}
                />
              </ListItemButton>
            ))}
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
              primary='Body matter'
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

        <Collapse in={bodyMatterOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {recipes.map((book, index) => {
              const bookObj = typeof book === 'string' ? null : book;
              const bookId = typeof book === 'string' ? book : book._id;

              // Debug: Log book structure
              if (index === 0 && bookObj) {
                console.log('📖 Book structure:', {
                  hasRecipe: !!(bookObj as any).recipe,
                  recipeLength: (bookObj as any).recipe?.length,
                  firstRecipe: (bookObj as any).recipe?.[0],
                  bookObj: bookObj
                });
              }

              // Get recipe name - support new schema with recipe array
              let recipeName = `Recipe ${index + 1}`;

              if ((bookObj as any)?.recipe && Array.isArray((bookObj as any).recipe)) {
                // New schema: recipe array contains recipe pages
                const recipeData = (bookObj as any).recipe[0];

                if (recipeData?.basicInfo?.recipeName) {
                  recipeName = recipeData.basicInfo.recipeName;
                }
              }

              return (
                <ListItemButton
                  key={bookId}
                  selected={selectedRecipeId === bookId}
                  sx={{
                    pl: 4,
                    py: 1,
                    '&:hover': { backgroundColor: '#2d2d2d' },
                    '&.Mui-selected': {
                      backgroundColor: '#2d2d2d',
                      '&:hover': { backgroundColor: '#2d2d2d' },
                    },
                  }}
                  onClick={() => onRecipeSelect(bookId)}
                >
                  <DragIndicator
                    sx={{
                      fontSize: 16,
                      mr: 1,
                      color: '#6b7280',
                      cursor: 'grab',
                    }}
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
              primary='Back matter'
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

        <Collapse in={backMatterOpen} timeout='auto' unmountOnExit>
          <Box
            sx={{
              pl: 4,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                variant='h6'
                sx={{ fontWeight: 600, fontSize: '0.95rem' }}
              >
                Add Additional Back Page
              </Typography>
            </Box>
            <IconButton
              size='small'
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                setBackMenuAnchor(event.currentTarget)
              }
              disabled={isGenerating}
              sx={{
                color: isGenerating ? '#6b7280' : '#3b82f6',
                '&:hover': { backgroundColor: '#2d2d2d' },
                '&.Mui-disabled': { color: '#6b7280' },
              }}
              title={
                isGenerating
                  ? 'Cannot add additional page while generating'
                  : 'Add Additional Page'
              }
            >
              <MoreVert />
            </IconButton>
          </Box>

          <List component='div' disablePadding>
            {/* Extra back matter pages */}
            {backExtraPages.map((page) => (
              <ListItemButton
                key={page.id}
                selected={selectedRecipeId === page.id}
                sx={{
                  pl: 4,
                  py: 1,
                  '&:hover': { backgroundColor: '#2d2d2d' },
                  '&.Mui-selected': {
                    backgroundColor: '#2d2d2d',
                    '&:hover': { backgroundColor: '#2d2d2d' },
                  },
                }}
                onClick={() => onRecipeSelect(page.id)}
              >
                <ListItemText
                  primary={page.title}
                  primaryTypographyProps={{ fontSize: '0.875rem' }}
                />
              </ListItemButton>
            ))}

            {/* Default back matter pages */}
            <ListItemButton
              selected={selectedRecipeId === 'back-cover'}
              sx={{
                pl: 4,
                py: 1,
                '&:hover': { backgroundColor: '#2d2d2d' },
                '&.Mui-selected': {
                  backgroundColor: '#2d2d2d',
                  '&:hover': { backgroundColor: '#2d2d2d' },
                },
              }}
              onClick={() => onRecipeSelect('back-cover')}
            >
              <ListItemText
                primary='Back Cover'
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

      {/* Front Matter Menu */}
      <Menu
        anchorEl={frontMenuAnchor}
        open={Boolean(frontMenuAnchor)}
        onClose={() => setFrontMenuAnchor(null)}
        PaperProps={{
          sx: {
            backgroundColor: '#252525',
            color: '#e0e0e0',
          },
        }}
      >
        <MenuItem onClick={() => handleAddBlankPage('front')}>Blank Page</MenuItem>
        <MenuItem onClick={(e) => handleOpenTemplateMenu('front', e)}>
          Select From Template
        </MenuItem>
      </Menu>

      {/* Back Matter Menu */}
      <Menu
        anchorEl={backMenuAnchor}
        open={Boolean(backMenuAnchor)}
        onClose={() => setBackMenuAnchor(null)}
        PaperProps={{
          sx: {
            backgroundColor: '#252525',
            color: '#e0e0e0',
          },
        }}
      >
        <MenuItem onClick={() => handleAddBlankPage('back')}>Blank Page</MenuItem>
        <MenuItem onClick={(e) => handleOpenTemplateMenu('back', e)}>
          Select From Template
        </MenuItem>
      </Menu>

      {/* Template Selection Menu */}
      <Menu
        anchorEl={templateMenuAnchor}
        open={Boolean(templateMenuAnchor)}
        onClose={() => setTemplateMenuAnchor(null)}
        PaperProps={{
          sx: {
            backgroundColor: '#252525',
            color: '#e0e0e0',
          },
        }}
      >
        <MenuItem onClick={() => handleSelectTemplate('weekly-planner')}>
          Weekly Planner
        </MenuItem>
        <MenuItem onClick={() => handleSelectTemplate('note-page')}>
          Note Page
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default EditorSidebar;
