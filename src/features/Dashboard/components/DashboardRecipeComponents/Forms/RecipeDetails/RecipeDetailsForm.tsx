import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  CardActions,
  Stack,
} from '@mui/material';
import { MdOutlineEdit, MdExpandMore } from 'react-icons/md';
import EastIcon from '@mui/icons-material/East';
import parser from 'html-react-parser';
import About from './About';
import FAQs from './FAQs';
import { convertToBase64 } from '../../../../../../app/utils/app.utils';
import Unsplash from '../../../../../../app/services/app.Unsplash.service';
import ImageLayout from '../../../../../../app/components/Layouts/ImageLayout';
import FileUpload from '../../../../../../app/components/FileUpload';
import { IContentBlock, IFAQ, IRecipeDetails } from '../../../../../Recipe/types/recipe.types';


// Define the structure of props and sub-data
export interface AboutSection {
  type: 'text' | 'image' | 'video';
  value: string | string[];
  isMultiple?: boolean;
}




interface RecipeDetailsFormProps {
  setData: (data: IRecipeDetails) => void;
  defaultValues: IRecipeDetails;
}

// Placeholder image constant
const thumbnailPlaceholder =
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw4fHxyZWNpcGV8ZW58MHx8fHwxNzEzNzUxNDU4fDA&ixlib=rb-4.0.3&q=80&w=400';

const RecipeDetailsForm: React.FC<RecipeDetailsFormProps> = ({ setData, defaultValues }) => {
  const [isError, setIsError] = useState(false);
  const [about, setAbout] = useState<IContentBlock[]>(defaultValues.about ?? []);
  const [faqs, setFaqs] = useState<IFAQ[]>(defaultValues.faqs ?? []);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isHovered, setIsHovered] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<string>(
    defaultValues.thumbnail || thumbnailPlaceholder
  );
  const [openUnsplash, setOpenUnsplash] = useState<boolean>(false);

  // Helper for the edit icons
  const getEditIcons = (section: string) => (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 6,
          right: 6,
          backgroundColor: '#E9EDFC',
          color: '#3559E3',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        <Card
          sx={{
            width: 25,
            height: 25,
            borderRadius: '50%',
            textAlign: 'center',
            background: 'inherit',
          }}
          onClick={() => setActiveSection(section)}
        >
          <Typography>
            <MdOutlineEdit color="#3559E3" />
          </Typography>
        </Card>
      </Box>
    </Box>
  );

  // Submit handler
  const onSubmit = () => {
    if (about.length === 0) {
      setIsError(true);
      return;
    }
    setIsError(false);

    const details: IRecipeDetails = {
      thumbnail,
      about,
      faqs,
    };
    setData(details);
  };

  return (
    <Container>
      {/* --- ABOUT SECTION --- */}
      <Box sx={{ mb: 2 }}>
        {activeSection !== 'aboutForm' && (
          <Box onClick={() => about.length === 0 && setActiveSection('aboutForm')}>
            <Card
              onMouseEnter={() => setIsHovered('aboutForm')}
              onMouseLeave={() => setIsHovered('')}
            >
              {isHovered === 'aboutForm' && getEditIcons('aboutForm')}
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                  About this Recipe
                </Typography>
                {isError && (
                  <Typography variant="caption" sx={{ mb: 3, color: 'salmon' }}>
                    *Recipe details are required
                  </Typography>
                )}
                {about.length === 0 ? (
                  <Typography variant="body2" gutterBottom>
                    Use this section to provide more details about your recipe. You can include
                    things to know, inspiration, or anything that helps users understand the recipe.
                  </Typography>
                ) : (
                  <>
                    <Box
                      component="img"
                      sx={{
                        display: 'block',
                        maxWidth: '100%',
                        margin: 'auto',
                      }}
                      src={thumbnail}
                      alt="recipe thumbnail"
                    />
                    {about.map((el, i) => (
                      <Box sx={{ width: '100%', my: 2 }} key={`about_${i}`}>
                        {el.type === 'text' && <Box>{parser(el.value as string)}</Box>}
                        {el.type === 'image' && (
                          <Box sx={{ maxWidth: 650, m: 'auto', mb: 3 }}>
                            <Card sx={{ boxShadow: 'none', border: 0 }}>
                              <CardContent>
                                <ImageLayout
                                  isMultiple={el.isMultiple}
                                  imageList={el.value as string[]}
                                />
                              </CardContent>
                            </Card>
                          </Box>
                        )}
                        {el.type === 'video' && (
                          <Box sx={{ maxWidth: 650, m: 'auto', mb: 3 }}>
                            {parser(el.value as string)}
                          </Box>
                        )}
                      </Box>
                    ))}
                  </>
                )}
              </CardContent>
            </Card>
          </Box>
        )}

        {/* ABOUT FORM EDIT */}
        {activeSection === 'aboutForm' && (
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                About this Recipe
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ mb: 3 }}>
                <i>It’s all about the recipe here...</i>
              </Typography>

              {/* THUMBNAIL UPLOAD */}
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
                <Card
                  sx={{
                    maxWidth: 345,
                    border: isError && thumbnail === thumbnailPlaceholder ? '1px solid salmon' : 0,
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      image={thumbnail}
                      alt="thumbnail"
                      sx={{ width: '100%', objectFit: 'contain', p: 2 }}
                    />
                    {thumbnail === thumbnailPlaceholder && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 8,
                          left: 8,
                          width: 'calc(100% - 16px)',
                          height: 'calc(100% - 16px)',
                          backgroundColor: '#23222280',
                        }}
                      />
                    )}
                  </Box>
                  <CardActions>
                    <Stack spacing={2} direction="row" sx={{ px: 2 }}>
                      <FileUpload
                        multiple={false}
                        getFile={async (file) => {
                          if (file) {
                            const imgThumbnail = await convertToBase64(file);
                            setThumbnail(imgThumbnail as string);
                          }
                        }}
                      />
                      <Unsplash
                        multi={false}
                        open={openUnsplash}
                        setOpen={setOpenUnsplash}
                        setSelectedImages={(images: React.SetStateAction<string[]>) => {
                          // images may be a string[] or a SetStateAction (function), normalize to string[]
                          const imgs: string[] =
                            typeof images === 'function' ? (images as (prev: string[]) => string[])([]) : (images || []);
                          setThumbnail((imgs[0] ?? thumbnailPlaceholder) as string);
                        }}
                        selectedImages={[thumbnail]}
                        showButton={true}
                      />
                    </Stack>
                  </CardActions>
                </Card>
              </Box>

              <About setAbout={setAbout} about={about} setActiveSection={setActiveSection} />
            </CardContent>
          </Card>
        )}
      </Box>

      {/* --- FAQ SECTION --- */}
      <Box sx={{ mb: 2 }}>
        {activeSection !== 'faqForm' && (
          <Box onClick={() => faqs.length === 0 && setActiveSection('faqForm')}>
            <Card
              onMouseEnter={() => setIsHovered('faqForm')}
              onMouseLeave={() => setIsHovered('')}
            >
              {isHovered === 'faqForm' && getEditIcons('faqForm')}
              <CardContent>
                {faqs.length === 0 ? (
                  <>
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                      Add more sections to your Recipe page
                    </Typography>
                    <Typography variant="body2">
                      Make your recipe stand out even more. Add FAQs to help readers understand
                      important details.
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                      Frequently Asked Questions
                    </Typography>
                    {faqs.map((el, i) => (
                      <Accordion sx={{ maxWidth: 650, mb: 1 }} key={`faq_${i}`}>
                        <AccordionSummary expandIcon={<MdExpandMore />}>
                          <Typography>{el.ques}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ background: '#F8F7FA', m: 2 }}>
                          <Typography sx={{ pt: 2, pb: 2 }}>{el.ans}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </>
                )}
              </CardContent>
            </Card>
          </Box>
        )}

        {/* FAQ FORM EDIT */}
        {activeSection === 'faqForm' && (
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                FAQ
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ mb: 3 }}>
                Answer questions people might have about this recipe.
              </Typography>

              <FAQs setFaqs={setFaqs} faqs={faqs} setActiveSection={setActiveSection} />
            </CardContent>
          </Card>
        )}
      </Box>

      {/* CONTINUE BUTTON */}
      <Box sx={{ mt: 10, textAlign: 'end' }}>
        <Button variant="text" endIcon={<EastIcon />} onClick={onSubmit}>
          Continue
        </Button>
      </Box>
    </Container>
  );
};

export default RecipeDetailsForm;
