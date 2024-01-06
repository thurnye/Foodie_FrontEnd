import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CiTextAlignLeft } from "react-icons/ci";
import { FaRegImage } from "react-icons/fa6";
import { RiVideoFill } from "react-icons/ri";
import CompTextEditor from '../../../../components/CompTextEditor/CompTextEditor';
import { useForm, Controller, useFieldArray } from "react-hook-form";
import styles from './Details.module.css'
import Dropzone from 'react-dropzone';
import { convertToBase64 } from '../../../../util/commons';
import { Card, CardContent, FormHelperText, IconButton } from '@mui/material';
import {LiaCameraRetroSolid} from 'react-icons/lia';
import { FaTrash } from "react-icons/fa6";

const About = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
      } = useForm();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'myForm',
    });


    const onSubmit = (data) => {
    console.log('Form data:', data);
    };
    console.log(errors)
      


    return (
        <Box>
            <Box sx={{m: 'auto', width: '100%'}}>
            <form onSubmit={onSubmit}>
                {fields.map((item, index) => (
                    <div key={item.id}>
                        {item.type === 'image' && 
                            <Controller
                                name={`myForm[${index}].value`}
                                control={control}
                                defaultValue={item.value}
                                rules={{
                                    ...(item.type === 'image' && { required:  'Image is required' }),
                                  }}
                                render={({ field }) => (
                                <Box sx={{maxHeight: 350, maxWidth: 350, mt: 3}}>
                                    <Dropzone
                                    multiple={false}
                                    onDrop={async (acceptedFiles) => {
                                        // Handle file upload and set the thumbnail value
                                        field.onChange(await convertToBase64(acceptedFiles[0]));
                                    }}
                                    >
                                    {({ getRootProps, getInputProps }) => (
                                        <div 
                                        {...getRootProps()} 
                                        className={`${styles.dropZoneContainer} ${ errors.thumbnail ? styles.isError : ''}`}
                                        >
                                        <input {...getInputProps()} />
                                        {!field.value ? (
                                           <Card sx={{maxHeight: 350, maxWidth: 350, mt: 3}}>
                                           <CardContent className={`card-body ${styles.DropZoneCard} `}>
                                               <Box sx={{textAlign: 'center', }}>
                                                   <Typography variant="h3" gutterBottom sx={{mb:1}}>
                                                       <LiaCameraRetroSolid/>
                                                   </Typography>
                                                   <Typography  gutterBottom sx={{mb:1, color: '#05A8F2'}}>
                                                       ADD AN EVENT IMAGE
                                                   </Typography>
                                                   <Typography variant="caption" color="text.secondary" sx={{}}>
                                                       Choose a beautiful image that perfectly captures your event.
                                                   </Typography>
                                               </Box>
                                           </CardContent>
                                           </Card>
                                        ) : (
                                            <Card sx={{maxHeight: 350, maxWidth: 350, mt: 3}}>
                                                <CardContent>
                                                    <img src={field.value} className="card-img" alt="event_banner" />
                                                </CardContent>
                                            </Card>
                                        )}
                                        </div>
                                    )}
                                    </Dropzone>
                                    {watch("myForm").length > 0 && errors.myForm?.[index]?.value && (
                                        <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                            {errors.myForm[index].value.message}
                                        </FormHelperText>
                                    )}
                                </Box>
                                )}
                            />
                        }
                        {item.type === 'text' &&
                            <Controller
                                name={`myForm[${index}].value`}
                                control={control}
                                defaultValue={item.value}
                                rules={{
                                    ...(item.type === 'text' && { required:  'This field is required' }),
                                  }}
                                render={({ field }) => (
                                    <Box sx={{mt: 3}}>
                                        <CompTextEditor
                                            setEditorData={(htmlValue) => field.onChange(htmlValue)}
                                            show={true}
                                            placeholder=""
                                            content={field.value}
                                            className={`form-control ${ errors.eventDescription ? styles.isError : ''}`}
                                        />
                                        {watch("myForm").length > 0 && errors.myForm?.[index]?.value && (
                                            <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                {errors.myForm[index].value.message}
                                            </FormHelperText>
                                        )}
                                    </Box>
                                )}
                            />
                        }

                        {item.type === 'video' && 
                            <Controller
                                name={`myForm[${index}].value`}
                                control={control}
                                defaultValue={item.value}
                                rules={{
                                    ...(item.type === 'video' && { required:  'Video link is required' }),
                                  }}
                                render={({ field }) => (
                                    <Box sx={{mt: 3}}>
                                        <TextField
                                            fullWidth
                                            {...field}
                                            label="Video link"
                                            id={`aboutEvent[${index}].value`}
                                            defaultValue={field.value}
                                            size="small"
                                            />
                                        {field.value && 
                                            <Card sx={{maxHeight: 350, maxWidth: 350, mt: 3}}>
                                                <CardContent className={`card-body ${styles.DropZoneCard} `}>
                                                    <Box sx={{textAlign: 'center', }}>
                                                        <Typography variant="h3" gutterBottom sx={{mb:1}}>
                                                            <LiaCameraRetroSolid/>
                                                        </Typography>
                                                        <Typography  gutterBottom sx={{mb:1, color: '#05A8F2'}}>
                                                            ADD AN EVENT IMAGE
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary" sx={{}}>
                                                            Choose a beautiful image that perfectly captures your event.
                                                        </Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        }
                                        
                                        {watch("myForm").length > 0 && errors.myForm?.[index]?.value && (
                                            <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                {errors.myForm[index].value.message}
                                            </FormHelperText>
                                        )}
                                    </Box>
                                )}
                            />
                        }

                        <Box>
                        <IconButton aria-label="delete" color="text.secondary" onClick={() => remove(index)}>
                            <FaTrash/>
                        </IconButton>
                        </Box>
                    </div>
                ))}
                <Box sx={{
                    display: 'flex', 
                    flexDirection: {xs: 'column', sm: 'row'},
                    justifyContent: {xs: 'center', sm: 'space-between'},
                    alignItems: 'center'
                    }}>
                    <Button variant="outlined" startIcon={<CiTextAlignLeft />} sx={{mb: {xs: 2, sm: 0}}} onClick={() => append({ type: "text", value: "" })}>
                        Add Text
                    </Button>
                    <Button variant="outlined" startIcon={<FaRegImage />} sx={{mb: {xs: 2, sm: 0}}} onClick={() => append({ type: "image", value: "" })}>
                        Add Image
                    </Button>
                    <Button variant="outlined" startIcon={<RiVideoFill />} sx={{}} onClick={() => append({ type: "video", value: "" })}>
                        Add Video
                    </Button>
                </Box>
                <hr></hr>
                {<Box sx={{display: 'flex', justifyContent:'flex-end', alignItems: 'center'}}>
                    <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
                </Box>}
            </form>
            
            </Box>
        </Box>
    );
}

export default About;
