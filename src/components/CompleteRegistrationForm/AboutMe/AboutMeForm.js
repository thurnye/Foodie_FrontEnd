import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CiTextAlignLeft } from 'react-icons/ci';
import { FaRegImage } from 'react-icons/fa6';
import { RiVideoFill } from 'react-icons/ri';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import styles from './AboutMeForm.module.css';
import Dropzone from 'react-dropzone';
import { Card, CardContent, FormHelperText, IconButton } from '@mui/material';
import { LiaCameraRetroSolid } from 'react-icons/lia';
import { FaTrash } from 'react-icons/fa6';
import parser from 'html-react-parser';
import Avatar from '@mui/material/Avatar';
import Grow from '@mui/material/Grow';
import { FaUnsplash } from 'react-icons/fa';
import SortableList from '../../Dashboard/Events/Forms/SortableContainer/SortableList';
import { convertToBase64, getRandomInt } from '../../../util/commons';
import ImageLayout from '../../ImageLayout/ImageLayout';
import Unsplash from '../../Unsplash/Unsplash';
import TextEditor from '../../TextEditor/TextEditor';

const AboutMeForm = ({ setAbout, about, setActiveSection }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: useMemo(() => ({ about }), [about]) });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'about',
  });
  const [checked, setChecked] = React.useState(false);
  const [openUnsplash, setOpenUnsplash] = React.useState(false);
  const [unsplashImages, setUnsplashImages] = React.useState([]);

  const onSubmit = (data) => {
    console.log(data.about, unsplashImages);
    setAbout(data.about);
    setActiveSection('');
  };

  const Controls = () => (
    <>
      <Avatar
        sx={{
          bgcolor: 'red[500]',
          cursor: 'pointer',
          mt: { xs: 2, md: 4 },
          mr: { xs: 2, md: 'initial' },
        }}
        aria-label='add'
        onClick={() => setChecked(!checked)}
      >
        {' '}
        +{' '}
      </Avatar>
      {/* Text */}
      <Grow
        in={checked}
        sx={{ mt: 2, cursor: 'pointer', mr: { xs: 2, md: 'initial' } }}
      >
        <Avatar
          sx={{}}
          aria-label='recipe'
          onClick={() => {
            append({ type: 'text', value: '' });
            setChecked(!checked);
          }}
        >
          <CiTextAlignLeft />
        </Avatar>
      </Grow>

      {/* Upload Images */}
      <Grow
        sx={{ mt: 2, cursor: 'pointer', mr: { xs: 2, md: 'initial' } }}
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1500 } : {})}
      >
        <Avatar
          sx={{}}
          aria-label='recipe'
          onClick={() => {
            append({
              type: 'image',
              value: '',
              isUnsplash: false,
              isMultiple: true,
            });
            setChecked(!checked);
          }}
        >
          <FaRegImage />
        </Avatar>
      </Grow>

      {/* Splash Images */}
      <Grow
        sx={{ mt: 2, cursor: 'pointer', mr: { xs: 2, md: 'initial' } }}
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1500 } : {})}
      >
        <Avatar
          sx={{}}
          aria-label='recipe'
          onClick={() => {
            append({
              type: 'image',
              value: '',
              isUnsplash: true,
              isMultiple: true,
            });
            setOpenUnsplash(true);
            setChecked(!checked);
          }}
        >
          <FaUnsplash />
        </Avatar>
      </Grow>

      {/* Video */}
      <Grow
        sx={{ mt: 2, cursor: 'pointer', mr: { xs: 2, md: 'initial' } }}
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 2500 } : {})}
      >
        <Avatar
          sx={{}}
          aria-label='recipe'
          onClick={() => {
            append({ type: 'video', value: '' });
            setChecked(!checked);
          }}
        >
          <RiVideoFill />
        </Avatar>
      </Grow>
    </>
  );

  console.log(about);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { xs: 'flex-start', md: 'flex-end' },
        alignItems: { xs: 'flex-start', md: 'flex-end' },
      }}
    >
      <Box sx={{ width: 70, display: { xs: 'none', md: 'block' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {Controls()}
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ m: 'auto', width: '100%' }}>
          <form onSubmit={onSubmit}>
            <SortableList
              move={move}
              items={fields.map((item, index) => ({
                id: getRandomInt().toString(),
                content: (
                  <Box
                    key={item.id}
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      pb: 3,
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      {item.type === 'image' && (
                        <Controller
                          name={`about[${index}].value`}
                          control={control}
                          defaultValue={item.value}
                          rules={{
                            ...(item.type === 'image' && {
                              required: 'Image is required',
                            }),
                          }}
                          render={({ field }) => (
                            <Box
                              sx={{ maxWidth: { sm: 350, md: 650 }, m: 'auto' }}
                            >
                              {!item.isUnsplash && (
                                <>
                                  <Dropzone
                                    multiple={item.isMultiple}
                                    onDrop={async (acceptedFiles) => {
                                      if (acceptedFiles.length > 9) {
                                        alert(
                                          `You can select up to ${9} files.`
                                        );
                                        return;
                                      }
                                      // Handle file upload and set the thumbnail value
                                      const base64Promises = acceptedFiles.map(
                                        async (file) => {
                                          return convertToBase64(file);
                                        }
                                      );
                                      const base64Images = await Promise.all(
                                        base64Promises
                                      );
                                      // Set the thumbnail values for each file
                                      field.onChange(base64Images);
                                    }}
                                  >
                                    {({ getRootProps, getInputProps }) => (
                                      <div
                                        {...getRootProps()}
                                        className={`${
                                          styles.dropZoneContainer
                                        } ${
                                          errors.thumbnail ? styles.isError : ''
                                        }`}
                                      >
                                        <input {...getInputProps()} />
                                        {!field.value ? (
                                          <Card
                                            sx={{
                                              maxWidth: { sm: 350, md: 650 },
                                              mt: 3,
                                              border: 0,
                                              boxShadow: 'none',
                                            }}
                                          >
                                            <CardContent
                                              className={`card-body ${styles.DropZoneCard} `}
                                            >
                                              <Box sx={{ textAlign: 'center' }}>
                                                <Typography
                                                  variant='h3'
                                                  gutterBottom
                                                  sx={{ mb: 1 }}
                                                >
                                                  <LiaCameraRetroSolid />
                                                </Typography>
                                                <Typography
                                                  gutterBottom
                                                  sx={{
                                                    mb: 1,
                                                    color: '#05A8F2',
                                                  }}
                                                >
                                                  Add Image
                                                </Typography>
                                                <Typography
                                                  variant='caption'
                                                  color='text.secondary'
                                                  sx={{}}
                                                >
                                                  Choose a beautiful image that
                                                  perfectly captures your event.
                                                </Typography>
                                              </Box>
                                            </CardContent>
                                          </Card>
                                        ) : (
                                          <Card
                                            sx={{
                                              maxWidth: item.isMultiple
                                                ? 'unset'
                                                : { sm: 350, md: 650 },
                                              mt: 3,
                                              border: 0,
                                              boxShadow: 'none',
                                            }}
                                          >
                                            <CardContent>
                                              <ImageLayout
                                                isMultiple={item.isMultiple}
                                                imageList={field.value}
                                              />
                                            </CardContent>
                                          </Card>
                                        )}
                                      </div>
                                    )}
                                  </Dropzone>
                                  {watch('about').length > 0 &&
                                    errors.about?.[index]?.value && (
                                      <FormHelperText
                                        id='component-error-text'
                                        sx={{ color: '#ff604f' }}
                                      >
                                        {errors.about[index].value.message}
                                      </FormHelperText>
                                    )}
                                </>
                              )}

                              {item.isUnsplash && (
                                <>
                                  <Unsplash
                                    open={openUnsplash}
                                    setOpen={setOpenUnsplash}
                                    setSelectedImages={(images) => {
                                      field.onChange(images);
                                      setUnsplashImages(images);
                                    }}
                                    selectedImages={unsplashImages}
                                    multi={true}
                                  />
                                  {field.value && (
                                    <Card
                                      sx={{
                                        maxWidth: item.isMultiple
                                          ? 'unset'
                                          : { sm: 350, md: 650 },
                                        mt: 3,
                                        border: 0,
                                        boxShadow: 'none',
                                      }}
                                    >
                                      <CardContent>
                                        <ImageLayout
                                          isMultiple={item.isMultiple}
                                          imageList={field.value}
                                        />
                                      </CardContent>
                                    </Card>
                                  )}
                                </>
                              )}
                            </Box>
                          )}
                        />
                      )}
                      {item.type === 'text' && (
                        <Controller
                          name={`about[${index}].value`}
                          control={control}
                          defaultValue={item.value}
                          rules={{
                            ...(item.type === 'text' && {
                              required: 'This field is required',
                            }),
                          }}
                          render={({ field }) => (
                            <Box
                              sx={{
                                width: '100%',
                                m: 'auto',
                                height: 500,
                                mt: 3,
                              }}
                            >
                              <TextEditor
                                getContents={(htmlValue) =>
                                  field.onChange(htmlValue)
                                }
                                show={true}
                                defaultValue={field.value}
                              />
                              {watch('about').length > 0 &&
                                errors.about?.[index]?.value && (
                                  <FormHelperText
                                    id='component-error-text'
                                    sx={{ color: '#ff604f' }}
                                  >
                                    {errors.about[index].value.message}
                                  </FormHelperText>
                                )}
                            </Box>
                          )}
                        />
                      )}

                      {item.type === 'video' && (
                        <Controller
                          name={`about[${index}].value`}
                          control={control}
                          defaultValue={item.value}
                          rules={{
                            ...(item.type === 'video' && {
                              required: 'Video link is required',
                            }),
                          }}
                          render={({ field }) => (
                            <Box sx={{ maxWidth: 650, m: 'auto' }}>
                              <TextField
                                sx={{ mt: 3 }}
                                fullWidth
                                rows={4}
                                {...field}
                                label='Embedded Video link'
                                id={`aboutEvent[${index}].value`}
                                size='small'
                                multiline
                              />
                              <FormHelperText id='component-error-text'>
                                please change the width from the embedded
                                element to '100%' if present*
                              </FormHelperText>
                              {field.value && (
                                <Card
                                  sx={{
                                    mt: 3,
                                    width: '100%',
                                    border: 0,
                                    boxShadow: 'none',
                                  }}
                                >
                                  <CardContent
                                    className={`card-body ${styles.DropZoneCard} `}
                                  >
                                    <Box
                                      sx={{
                                        textAlign: 'center',
                                        width: '100%',
                                      }}
                                    >
                                      {parser(field.value)}
                                    </Box>
                                  </CardContent>
                                </Card>
                              )}

                              {watch('about').length > 0 &&
                                errors.about?.[index]?.value && (
                                  <FormHelperText
                                    id='component-error-text'
                                    sx={{ color: '#ff604f' }}
                                  >
                                    {errors.about[index].value.message}
                                  </FormHelperText>
                                )}
                            </Box>
                          )}
                        />
                      )}
                    </Box>

                    <Box sx={{ display: 'inline-flex' }}>
                      <IconButton
                        aria-label='delete'
                        onClick={() => remove(index)}
                        sx={{ width: 27 }}
                      >
                        <FaTrash color='#a3a2a28a' />
                      </IconButton>
                    </Box>
                  </Box>
                ),
              }))}
              onSortEnd={({ oldIndex, newIndex }) => move(oldIndex, newIndex)}
            />
          </form>
          {/* Small Screen */}
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
                justifyContent: 'flex-start',
                alignItems: 'center',
              },
            }}
          >
            {Controls()}
          </Box>
          {fields.length > 0 && (
            <>
              <hr></hr>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                {about?.length > 0 && (
                  <Button onClick={() => setActiveSection('')} color='error'>
                    Cancel
                  </Button>
                )}
                <Button onClick={handleSubmit(onSubmit)}>
                  {about?.length > 0 ? 'Update' : 'Add'}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMeForm;
