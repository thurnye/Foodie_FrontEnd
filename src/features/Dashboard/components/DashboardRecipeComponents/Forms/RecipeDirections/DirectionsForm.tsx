import React, { useMemo, useEffect, useState } from 'react';
import {
  Box, TextField, Button, FormHelperText, IconButton,
  Avatar, Grow, Card, CardContent, Typography, Container,
} from '@mui/material';
import { CiTextAlignLeft } from 'react-icons/ci';
import { FaTrash, FaRegImage, FaUnsplash } from 'react-icons/fa6';
import { RiVideoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { LiaCameraRetroSolid } from 'react-icons/lia';
import Dropzone from 'react-dropzone';
import parser from 'html-react-parser';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { IContentBlock, IMethod } from '../../../../../Recipe/types/recipe.types';
import SortableList from '../../../../SortableList';
import { convertToBase64, getRandomNumber } from '../../../../../../app/utils/app.utils';
import ImageLayout from '../../../../../../app/components/Layouts/ImageLayout';
import Unsplash from '../../../../../../app/services/app.Unsplash.service';

interface Props {
  setData: (data: IMethod[]) => void;
  directions: IMethod[];
  open: boolean;
  setOpen: (section: string) => void;
}

const DirectionsForm: React.FC<Props> = ({ setData, directions, open, setOpen }) => {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm<{ directions: IMethod[] }>({
    defaultValues: useMemo(() => ({ directions }), [directions]),
  });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'directions',
  });

  const [checked, setChecked] = useState<{ index: number; open: boolean }>({ index: 0, open: false });
  const [openUnsplash, setOpenUnsplash] = useState(false);
  const [unsplashImages, setUnsplashImages] = useState<string[]>([]);

  // Add first direction by default
  useEffect(() => {
    if (directions.length === 0 && fields.length === 0) {
      append({ step: [{ type: 'title', value: '' }] });
    }
  }, [directions.length, fields.length, append]);

  // Auto close if all removed
  useEffect(() => {
    if (fields.length === 0 && directions.length > 0) {
      setOpen('');
    }
  }, [fields.length, directions.length, setOpen]);

  const addField = (index: number, field: IContentBlock) => {
    const updatedFields = [...fields];
    if (!updatedFields[index].step) updatedFields[index].step = [];
    updatedFields[index].step.push(field);
    setValue(`directions.${index}.step`, updatedFields[index].step);
    setChecked((prev) => ({ ...prev, open: false }));
  };

  const handleAppend = () => append({ step: [{ type: 'title', value: '' }] });

  const onSubmit = (data: { directions: IMethod[] }) => {
    setData(data.directions);
    setOpen('');
  };

  const getDeleteIcons = (index: number, subIndex: number) => (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', color: '#3559E3' }}>
      <Card
        sx={{ width: 25, height: 25, borderRadius: '50%', textAlign: 'center', background: 'inherit' }}
        onClick={() => {
          const updated = [...fields];
          updated[index].step.splice(subIndex, 1);
          setValue(`directions.${index}.step`, updated[index].step);
        }}
      >
        <Typography>
          <RiDeleteBin2Line color="salmon" />
        </Typography>
      </Card>
    </Box>
  );

  const Controls = (index: number) => (
    <>
      <Avatar sx={{ cursor: 'pointer', mr: 2 }} onClick={() => setChecked({ index, open: true })}>+</Avatar>
      <Grow in={checked.index === index && checked.open}>
        <Box sx={{ mr: 2 }}>
          <Avatar onClick={() => addField(index, { type: 'text', value: '' })}><CiTextAlignLeft /></Avatar>
        </Box>
      </Grow>
      <Grow in={checked.index === index && checked.open}>
        <Box sx={{ mr: 2 }}>
          <Avatar onClick={() => addField(index, { type: 'image', value: '', isUnsplash: false, isMultiple: true })}><FaRegImage /></Avatar>
        </Box>
      </Grow>
      <Grow in={checked.index === index && checked.open}>
        <Box sx={{ mr: 2 }}>
          <Avatar onClick={() => { setOpenUnsplash(true); addField(index, { type: 'image', value: [], isUnsplash: true, isMultiple: true }); }}>
            <FaUnsplash />
          </Avatar>
        </Box>
      </Grow>
      <Grow in={checked.index === index && checked.open}>
        <Box>
          <Avatar onClick={() => addField(index, { type: 'video', value: '' })}><RiVideoFill /></Avatar>
        </Box>
      </Grow>
    </>
  );

  return (
    <Box>
      <SortableList
        move={move}
        items={fields.map((item, index) => ({
          id: getRandomNumber().toString(),
          content: (
            <Container key={item.id}>
              <Typography variant="body2" sx={{ mt: 3 }}>STEP {index + 1}</Typography>
              {item.step.map((el:IContentBlock, i:number) => (
                <Box key={`${index}-${i}`} sx={{ mt: 3, p: 3, background: '#f9f9f9', borderRadius: 2 }}>
                  {getDeleteIcons(index, i)}
                  {el.type === 'title' && (
                    <Controller
                      name={`directions.${index}.step.${i}.value`}
                      control={control}
                      defaultValue={el.value}
                      rules={{ required: 'Step title is required' }}
                      render={({ field }) => (
                        <TextField {...field} fullWidth size="small" label="Title" sx={{ mt: 2 }} />
                      )}
                    />
                  )}
                  {el.type === 'text' && (
                    <Controller
                      name={`directions.${index}.step.${i}.value`}
                      control={control}
                      defaultValue={el.value}
                      render={({ field }) => (
                        <TextField {...field} fullWidth size="small" label="Description" multiline rows={6} sx={{ mt: 2 }} />
                      )}
                    />
                  )}
                  {el.type === 'video' && (
                    <Controller
                      name={`directions.${index}.step.${i}.value`}
                      control={control}
                      defaultValue={el.value}
                      render={({ field }) => (
                        <>
                          <TextField {...field} fullWidth size="small" label="Video Link" sx={{ mt: 2 }} />
                          {field.value && <Box sx={{ mt: 2 }}>{parser(field.value)}</Box>}
                        </>
                      )}
                    />
                  )}
                  {el.type === 'image' && (
                    <Controller
                      name={`directions.${index}.step.${i}.value`}
                      control={control}
                      defaultValue={el.value}
                      render={({ field }) => (
                        <>
                          {!el.isUnsplash ? (
                            <Dropzone multiple onDrop={async (files) => {
                              const images = await Promise.all(files.map(convertToBase64));
                              field.onChange(images);
                            }}>
                              {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()} >
                                  <input {...getInputProps()} />
                                  {!field.value || (Array.isArray(field.value) && field.value.length === 0) ? (
                                    <Box sx={{ textAlign: 'center', py: 4 }}>
                                      <LiaCameraRetroSolid size={32} />
                                      <Typography>Add Image</Typography>
                                    </Box>
                                  ) : <ImageLayout isMultiple imageList={field.value as string[]} />}
                                </div>
                              )}
                            </Dropzone>
                          ) : (
                            <>
                              <Unsplash open={openUnsplash} setOpen={setOpenUnsplash}
                                setSelectedImages={(imgs) => { field.onChange(imgs); setUnsplashImages(imgs); }}
                                selectedImages={unsplashImages} multi
                              />
                              {field.value && Array.isArray(field.value) && field.value.length > 0 && <ImageLayout isMultiple imageList={field.value as string[]} />}
                            </>
                          )}
                        </>
                      )}
                    />
                  )}
                </Box>
              ))}
              <Box sx={{ mt: 2 }}>{Controls(index)}</Box>
              <IconButton onClick={() => remove(index)}><FaTrash color="#a3a2a28a" /></IconButton>
            </Container>
          ),
        }))}
        // onSortEnd={({ oldIndex, newIndex }) => move(oldIndex, newIndex)}
      />
      {fields.length > 0 && (
        <>
          <Box sx={{ mt: 3 }}>
            <Button startIcon={<CiTextAlignLeft />} onClick={handleAppend}>Add Step</Button>
          </Box>
          <hr />
          <Box sx={{ textAlign: 'end', mt: 2 }}>
            <Button onClick={handleSubmit(onSubmit)}>Save Directions</Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default DirectionsForm;
