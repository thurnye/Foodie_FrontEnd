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
import { convertToBase64, getRandomInt } from '../../../../util/commons';
import { Card, CardContent, FormHelperText, IconButton } from '@mui/material';
import {LiaCameraRetroSolid} from 'react-icons/lia';
import { FaTrash } from "react-icons/fa6";
import SortableList from '../SortableContainer/SortableList';
import parser from 'html-react-parser';



const About = ({setAbout, about, setActiveSection}) => {

    console.log(about)

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
      } = useForm({ defaultValues: about});

    const { fields, append, remove , move} = useFieldArray({
        control,
        name: 'about',
    });


    const onSubmit = (data) => {
        setAbout(data);
        setActiveSection("")
    }



    return (
        <Box>
            <Box sx={{m: 'auto', width: '100%'}}>
                <form onSubmit={onSubmit}>
                    <SortableList
                    move={move}
                        items={fields.map((item, index) => ({
                            id: getRandomInt().toString(),
                            content: (
                                <Box key={item.id}
                                    sx={{position: 'relative', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', pb: 3}}
                                >
                                    <Box sx={{flexGrow: 1 }}>
                                        {item.type === 'image' && 
                                            <Controller
                                                name={`about[${index}].value`}
                                                control={control}
                                                defaultValue={item.value}
                                                rules={{
                                                    ...(item.type === 'image' && { required:  'Image is required' }),
                                                }}
                                                render={({ field }) => (
                                                <Box sx={{maxHeight: {sm: 350, md: 650}, maxWidth: {sm: 350, md: 650}, m:'auto' }}>
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
                                                        <Card sx={{maxHeight: {sm: 350, md: 650}, maxWidth: {sm: 350, md: 650}, mt: 3}}>
                                                        <CardContent className={`card-body ${styles.DropZoneCard} `}>
                                                            <Box sx={{textAlign: 'center', }}>
                                                                <Typography variant="h3" gutterBottom sx={{mb:1}}>
                                                                    <LiaCameraRetroSolid/>
                                                                </Typography>
                                                                <Typography  gutterBottom sx={{mb:1, color: '#05A8F2'}}>
                                                                    Add Image
                                                                </Typography>
                                                                <Typography variant="caption" color="text.secondary" sx={{}}>
                                                                    Choose a beautiful image that perfectly captures your event.
                                                                </Typography>
                                                            </Box>
                                                        </CardContent>
                                                        </Card>
                                                        ) : (
                                                            <Card sx={{maxHeight: {sm: 350, md: 650}, maxWidth: {sm: 350, md: 650}, mt: 3}}>
                                                                <CardContent>
                                                                    <img src={field.value} className="card-img" alt="event_banner" />
                                                                </CardContent>
                                                            </Card>
                                                        )}
                                                        </div>
                                                    )}
                                                    </Dropzone>
                                                    {watch("about").length > 0 && errors.about?.[index]?.value && (
                                                        <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                            {errors.about[index].value.message}
                                                        </FormHelperText>
                                                    )}
                                                </Box>
                                                )}
                                            />
                                        }
                                        {item.type === 'text' &&
                                            <Controller
                                                name={`about[${index}].value`}
                                                control={control}
                                                defaultValue={item.value}
                                                rules={{
                                                    ...(item.type === 'text' && { required:  'This field is required' }),
                                                }}
                                                render={({ field }) => (
                                                    <Box sx={{ width: '100%', m: 'auto'}}>
                                                        <CompTextEditor
                                                            setEditorData={(htmlValue) => field.onChange(htmlValue)}
                                                            show={true}
                                                            placeholder=""
                                                            content={field.value}
                                                            style={{width: '100%', margin: 'auto',
                                                         marginTop: '24px'}}
                                                        />
                                                        {watch("about").length > 0 && errors.about?.[index]?.value && (
                                                            <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                                {errors.about[index].value.message}
                                                            </FormHelperText>
                                                        )}
                                                    </Box>
                                                )}
                                            />
                                        }

                                        {item.type === 'video' && 
                                            <Controller
                                                name={`about[${index}].value`}
                                                control={control}
                                                defaultValue={item.value}
                                                rules={{
                                                    ...(item.type === 'video' && { required:  'Video link is required' }),
                                                }}
                                                render={({ field }) => (
                                                    <Box sx={{ maxWidth: 650, m: 'auto'}}>
                                                        
                                                        <TextField
                                                            sx={{mt:3}}
                                                            fullWidth
                                                            rows={4}
                                                            {...field}
                                                            label="Embedded Video link"
                                                            id={`aboutEvent[${index}].value`}
                                                            size="small"
                                                            multiline
                                                            // value={'<iframe width="100%" height="315" src="https://www.youtube.com/embed/_PfAYdYN_D0?si=vXTFMTxyp9awGarv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'}
                                                            />
                                                            <FormHelperText id="component-error-text">
                                                                please change the width from the embedded element to '100%' if present*
                                                            </FormHelperText>
                                                        {field.value  &&
                                                            <Card sx={{mt: 3, width: '100%'}}>
                                                                <CardContent className={`card-body ${styles.DropZoneCard} `}>
                                                                    <Box sx={{textAlign: 'center', width: '100%' }}>
                                                                        {parser(field.value)}
                                                                    </Box>
                                                                </CardContent>
                                                            </Card>
                                                        }
                                                        
                                                        {watch("about").length > 0 && errors.about?.[index]?.value && (
                                                            <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                                {errors.about[index].value.message}
                                                            </FormHelperText>
                                                        )}
                                                    </Box>
                                                )}
                                            />
                                        }

                                    </Box>

                                    <Box>
                                        <IconButton aria-label="delete"  onClick={() => remove(index)} sx={{width: 27}}>
                                            <FaTrash color="#a3a2a28a"/>
                                        </IconButton>
                                    </Box>
                                </Box>
                            ),
                        }))}
                        onSortEnd={({ oldIndex, newIndex }) => move(oldIndex, newIndex)}
                    />
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
                </form>
                {fields.length > 0 && <>
                    <hr></hr>
                    <Box sx={{display: 'flex', justifyContent:'flex-end', alignItems: 'center'}}>
                        <Button onClick={handleSubmit(onSubmit)}>
                            {about?.about?.length > 0 ? 'Update' : 'Add'}
                        </Button>
                    </Box>
                </>}
            </Box>
        </Box>
    );
}

export default About;
