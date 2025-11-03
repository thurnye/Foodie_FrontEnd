import React, { useMemo, useState } from 'react';
import {
  Box,
  Avatar,
  Grow,
  Typography,
  TextField,
  Button,
  FormHelperText,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import { CiTextAlignLeft } from 'react-icons/ci';
import { FaRegImage, FaTrash, FaUnsplash } from 'react-icons/fa6';
import { RiVideoFill } from 'react-icons/ri';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import Dropzone from 'react-dropzone';
import parser from 'html-react-parser';

import { LiaCameraRetroSolid } from 'react-icons/lia';
import SortableList, { SortableItemData } from '../../../../SortableList';
import { convertToBase64, getRandomNumber } from '../../../../../../app/utils/app.utils';
import ImageLayout from '../../../../../../app/components/Layouts/ImageLayout';
import Unsplash from '../../../../../../app/services/app.Unsplash.service';
import TextEditor from '../../../../../../app/components/TextEditor';
import VideoPlayer from '../../../../../../app/components/VideoPlayer';

// Types
interface AboutItem {
  type: 'text' | 'image' | 'video'| 'title';
  value: string | string[];
  isUnsplash?: boolean;
  isMultiple?: boolean;
}

interface AboutForm {
  about: AboutItem[];
}

interface AboutProps {
  setAbout: (about: AboutItem[]) => void;
  about: AboutItem[];
  setActiveSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ setAbout, about, setActiveSection }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<AboutForm>({
    defaultValues: useMemo(() => ({ about }), [about]),
  });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'about',
  });

  const [checked, setChecked] = useState(false);
  const [openUnsplash, setOpenUnsplash] = useState(false);
  const [unsplashImages, setUnsplashImages] = useState<string[]>([]);

  const onSubmit = (data: AboutForm) => {
    setAbout(data.about);
    setActiveSection('');
  };

  const Controls = () => (
    <>
      <Avatar
        sx={{ bgcolor: 'red[500]', cursor: 'pointer', mt: { xs: 2, md: 4 } }}
        onClick={() => setChecked(!checked)}
      >
        +
      </Avatar>
      <Grow in={checked}>
        <Box sx={{ mt: 2, cursor: 'pointer' }}>
          <Avatar
            onClick={() => {
              append({ type: 'text', value: '' });
              setChecked(false);
            }}
          >
            <CiTextAlignLeft />
          </Avatar>
        </Box>
      </Grow>

      <Grow in={checked}>
        <Box sx={{ mt: 2, cursor: 'pointer' }}>
          <Avatar
            onClick={() => {
              append({
                type: 'image',
                value: '',
                isUnsplash: false,
                isMultiple: true,
              });
              setChecked(false);
            }}
          >
            <FaRegImage />
          </Avatar>
        </Box>
      </Grow>

      <Grow in={checked}>
        <Box sx={{ mt: 2, cursor: 'pointer' }}>
          <Avatar
            onClick={() => {
              append({
                type: 'image',
                value: '',
                isUnsplash: true,
                isMultiple: true,
              });
              setOpenUnsplash(true);
              setChecked(false);
            }}
          >
            <FaUnsplash />
          </Avatar>
        </Box>
      </Grow>

      <Grow in={checked}>
        <Box sx={{ mt: 2, cursor: 'pointer' }}>
          <Avatar
            onClick={() => {
              append({ type: 'video', value: '' });
              setChecked(false);
            }}
          >
            <RiVideoFill />
          </Avatar>
        </Box>
      </Grow>
    </>
  );

  const items: SortableItemData[] = fields.map((item, index) => ({
    id: getRandomNumber().toString(),
    content: (
      <Box
        key={item.id}
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 3,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {/* IMAGE INPUT */}
          {item.type === 'image' && (
            <Controller
              name={`about.${index}.value`}
              control={control}
              rules={{ required: 'Image is required' }}
              render={({ field }) => (
                <Box sx={{ maxWidth: 650, m: 'auto' }}>
                  {!item.isUnsplash ? (
                    <Dropzone
                      multiple={item.isMultiple}
                      onDrop={async (acceptedFiles) => {
                        if (acceptedFiles.length > 9) {
                          alert('You can select up to 9 files.');
                          return;
                        }
                        const base64Images = await Promise.all(
                          acceptedFiles.map(async (file) =>
                            convertToBase64(file)
                          )
                        );
                        field.onChange(base64Images);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div
                          {...getRootProps()}
                        //   className={styles.dropZoneContainer}
                        >
                          <input {...getInputProps()} />
                          {!field.value || (Array.isArray(field.value) && field.value.length === 0) ? (
                            <Card
                              sx={{
                                maxWidth: 650,
                                mt: 3,
                                border: 0,
                                boxShadow: 'none',
                              }}
                            >
                              <CardContent>
                                <Box sx={{ textAlign: 'center' }}>
                                  <Typography variant='h3'>
                                    <LiaCameraRetroSolid />
                                  </Typography>
                                  <Typography sx={{ color: '#05A8F2' }}>
                                    Add Image
                                  </Typography>
                                  <Typography
                                    variant='caption'
                                    color='text.secondary'
                                  >
                                    Choose a beautiful image that represents
                                    your recipe.
                                  </Typography>
                                </Box>
                              </CardContent>
                            </Card>
                          ) : (
                            <Card sx={{ mt: 3, border: 0, boxShadow: 'none' }}>
                              <CardContent>
                                <ImageLayout
                                  isMultiple={item.isMultiple}
                                  imageList={field.value as string[]}
                                />
                              </CardContent>
                            </Card>
                          )}
                        </div>
                      )}
                    </Dropzone>
                  ) : (
                    <>
                      <Unsplash
                        open={openUnsplash}
                        setOpen={setOpenUnsplash}
                        setSelectedImages={(images: any) => {
                          field.onChange(images);
                          setUnsplashImages(images);
                        }}
                        selectedImages={unsplashImages}
                        multi={true}
                      />
                      {field.value && Array.isArray(field.value) && field.value.length > 0 && (
                        <Card sx={{ mt: 3, border: 0, boxShadow: 'none' }}>
                          <CardContent>
                            <ImageLayout
                              isMultiple={item.isMultiple}
                              imageList={field.value as string[]}
                            />
                          </CardContent>
                        </Card>
                      )}
                    </>
                  )}
                  {errors.about?.[index]?.value && (
                    <FormHelperText sx={{ color: '#ff604f' }}>
                      {errors.about[index].value?.message}
                    </FormHelperText>
                  )}
                </Box>
              )}
            />
          )}

          {/* TEXT INPUT */}
          {item.type === 'text' && (
            <Controller
              name={`about.${index}.value`}
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <Box sx={{ width: '100%', height: 500, mt: 3 }}>
                  <TextEditor
                    getContents={(htmlValue: string) =>
                      field.onChange(htmlValue)
                    }
                    defaultValue={field.value as string}
                  />
                  {errors.about?.[index]?.value && (
                    <FormHelperText sx={{ color: '#ff604f' }}>
                      {errors.about[index].value?.message}
                    </FormHelperText>
                  )}
                </Box>
              )}
            />
          )}

          {/* VIDEO INPUT */}
          {item.type === 'video' && (
            <Controller
              name={`about.${index}.value`}
              control={control}
              rules={{ required: 'Video link is required' }}
              render={({ field }) => (
                <Box sx={{ maxWidth: 650, m: 'auto' }}>
                  <TextField
                    sx={{ mt: 3 }}
                    fullWidth
                    multiline
                    rows={4}
                    {...field}
                    label='Video link'
                    size='small'
                  />
                  <FormHelperText>
                    paste the video link
                  </FormHelperText>
                  {field.value && (
                    <Card sx={{ mt: 3, border: 0, boxShadow: 'none' }}>
                      <CardContent>
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                          {/* {parser(field.value as string)} */}
                          <VideoPlayer link={field.value as string}/>
                        </Box>
                      </CardContent>
                    </Card>
                  )}
                </Box>
              )}
            />
          )}
        </Box>

        <IconButton
          aria-label='delete'
          onClick={() => remove(index)}
          sx={{ width: 27 }}
        >
          <FaTrash color='#a3a2a28a' />
        </IconButton>
      </Box>
    ),
  }));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'flex-end',
        alignItems: { xs: 'flex-start', md: 'flex-end' },
      }}
    >
      <Box sx={{ width: 70, display: { xs: 'none', md: 'block' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {Controls()}
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SortableList move={move} items={items} />
        </form>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>{Controls()}</Box>

        {fields.length > 0 && (
          <>
            <hr />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Button onClick={handleSubmit(onSubmit)}>
                {about?.length > 0 ? 'Update' : 'Add'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default About;
