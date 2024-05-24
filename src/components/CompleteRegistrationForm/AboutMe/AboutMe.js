import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, Button } from '@mui/material';
import { MdOutlineEdit } from 'react-icons/md';
import AboutMeForm from './AboutMeForm';
import parser from 'html-react-parser';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import EastIcon from '@mui/icons-material/East';
import { convertToBase64, getRandomInt } from '../../../util/commons';
import FileUpload from '../../FileUpload/FileUpload';
import ImageLayout from '../../ImageLayout/ImageLayout';
import Unsplash from '../../Unsplash/Unsplash';

const avatarPlaceholder =
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw4fHxyZWNpcGV8ZW58MHx8fHwxNzEzNzUxNDU4fDA&ixlib=rb-4.0.3&q=80&w=400';

const AboutMe = ({ setData, defaultValues }) => {
  const [isError, setIsError] = useState(false);
  const [about, setAbout] = useState(defaultValues?.aboutMe);
  const [activeSection, setActiveSection] = useState('');
  const [isHovered, setIsHovered] = useState('');
  const [avatar, setAvatar] = useState(
    defaultValues?.avatar ? defaultValues?.avatar : avatarPlaceholder
  );
  const [openUnsplash, setOpenUnsplash] = React.useState(false);

  const getEditIcons = (section) => (
    <Box sx={{ maxWidth: '100%', flexGrow: 1, position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 6,
          right: 6,
          height: '100%',
          backgroundColor: '#E9EDFC',
          zIndex: 1,
          color: '#3559E3',
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
            <MdOutlineEdit color='#3559E3' />
          </Typography>
        </Card>
      </Box>
    </Box>
  );

  const handleSubmitAbout = (data) => {
    if (about?.length === 0) {
      setIsError(true);
      return;
    }
    setIsError(false);
    setAbout(data);

    const details = {
      avatar,
      aboutMe: data,
    };
    setData(details);
  };

  return (
    <Container>
      {/* About */}
      <Box sx={{ mb: 2 }}>
        {activeSection !== 'aboutForm' && (
          <Box
            sx={{}}
            onClick={() => about?.length === 0 && setActiveSection('aboutForm')}
          >
            <Card
              onMouseEnter={() => setIsHovered('aboutForm')}
              onMouseLeave={() => setIsHovered('')}
            >
              {isHovered === 'aboutForm' && getEditIcons('aboutForm')}
              <CardContent>
                <Typography variant='h5' gutterBottom sx={{ mb: 3 }}>
                  <i>About Me</i>
                </Typography>
                {isError && (
                  <>
                    <Typography
                      variant='caption'
                      gutterBottom
                      sx={{ mb: 3, color: 'salmon' }}
                    >
                      *this section is required
                    </Typography>
                  </>
                )}
                {about?.length === 0 ? (
                  <>
                    <Typography variant='body2' gutterBottom>
                      Use this section to provide more details about yourself.
                      You can include things to know, inspiration,
                      options-anything that will help people know more about
                      you.
                    </Typography>
                  </>
                ) : (
                  <>
                    <Box
                      component='img'
                      sx={{
                        display: 'block',
                        maxWidth: '100%',
                        overflow: 'hidden',
                        margin: 'auto',
                      }}
                      src={avatar}
                      alt={'recipe avatar'}
                    />
                    {about?.map((el, i) => {
                      return (
                        <Box sx={{ width: '100%', my: 2 }} key={getRandomInt()}>
                          {el.type === 'text' && <Box>{parser(el.value)}</Box>}

                          {el.type === 'image' && (
                            <Box sx={{ maxWidth: 650, m: 'auto' }}>
                              <Box sx={{ mb: 3 }}>
                                <Card sx={{ boxShadow: 'none', border: 0 }}>
                                  <CardContent>
                                    <ImageLayout
                                      isMultiple={el.isMultiple}
                                      imageList={el.value}
                                    />
                                  </CardContent>
                                </Card>
                              </Box>
                            </Box>
                          )}

                          {el.type === 'video' && (
                            <Box sx={{ maxWidth: 650, m: 'auto' }}>
                              <Box sx={{ mb: 3 }}>{parser(el.value)}</Box>
                            </Box>
                          )}
                        </Box>
                      );
                    })}
                  </>
                )}
              </CardContent>
            </Card>
          </Box>
        )}
        {activeSection === 'aboutForm' && (
          <Box sx={{}}>
            <Card>
              <CardContent>
                <Typography variant='h5' gutterBottom sx={{ mb: 3 }}>
                  About this Recipe
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant='caption' color='text.secondary'>
                    <i>It's all bout the recipe here...</i>
                  </Typography>
                </Box>

                <Box sx={{ mb: 2, position: 'relative' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: { xs: 'center', md: 'flex-end' },
                      alignItems: 'center',
                    }}
                  >
                    <Card
                      sx={{
                        maxWidth: 345,
                        border:
                          isError && avatar === avatarPlaceholder
                            ? '1px solid salmon'
                            : 'initial',
                      }}
                    >
                      <Box sx={{ position: 'relative' }}>
                        <CardMedia
                          component='img'
                          height='100%'
                          image={avatar}
                          alt={'image avatar'}
                          auto='format'
                          fit='crop'
                          sx={{
                            width: '100%',
                            objectFit: 'contain',
                            p: 2,
                          }}
                        />
                        {avatar === avatarPlaceholder && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 8,
                              left: 8,
                              width: 'calc(100% - 16px)',
                              height: 'calc(100% - 16px)',
                              backgroundColor: '#23222280',
                              zIndex: 1,
                            }}
                          ></Box>
                        )}
                      </Box>

                      <CardActions>
                        <Box sx={{ maxWidth: { sm: 350, md: 650 }, px: 2 }}>
                          <Stack spacing={2} direction='row'>
                            <FileUpload
                              multiple={false}
                              getFile={async (files) => {
                                console.log('FILES:::', files);
                                const imgavatar = await convertToBase64(files);
                                setAvatar(imgavatar);
                              }}
                            />
                            <Unsplash
                              multi={false}
                              open={openUnsplash}
                              setOpen={setOpenUnsplash}
                              setSelectedImages={(images) => {
                                setAvatar(images[0]);
                              }}
                              selectedImages={[avatar]}
                              showButton={true}
                            />
                            {avatar && (
                              <Card
                                sx={{
                                  maxWidth: { sm: 350, md: 650 },
                                  mt: 3,
                                  border: 0,
                                  boxShadow: 'none',
                                }}
                              >
                                <CardContent></CardContent>
                              </Card>
                            )}
                          </Stack>
                        </Box>
                      </CardActions>
                    </Card>
                  </Box>
                  <AboutMeForm
                    setAbout={handleSubmitAbout}
                    about={about}
                    setActiveSection={setActiveSection}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
      </Box>

      {/* <Box sx={{mt: 10, width: '100%', textAlign: 'end'}}>
                <Button variant="text" endIcon={<EastIcon/>} onClick={()=>handleSubmitAbout()}>
                    Continue
                </Button>
            </Box> */}
    </Container>
  );
};

export default AboutMe;
