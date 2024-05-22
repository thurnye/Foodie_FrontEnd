import React, {useMemo, useEffect, useState} from 'react';
import styles from './RecipeDirections.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CiTextAlignLeft } from "react-icons/ci";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { getRandomInt, convertToBase64 } from '../../../../../util/commons';
import { FormHelperText, IconButton } from '@mui/material';
import { FaTrash } from "react-icons/fa6";
import SortableList from '../../../Events/Forms/SortableContainer/SortableList';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FaUnsplash } from "react-icons/fa";
import UnSplash from '../../../../Unsplash/Unsplash'
import Avatar from '@mui/material/Avatar';
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FaRegImage } from "react-icons/fa6";
import { RiVideoFill } from "react-icons/ri";
import Dropzone from 'react-dropzone';
import {LiaCameraRetroSolid} from 'react-icons/lia';
import parser from 'html-react-parser';
import { RiDeleteBin2Line } from "react-icons/ri";
import ImageLayout from '../../../../ImageLayout/ImageLayout';



const DirectionsForm = ({setData, directions, 
    open, setOpen
}) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
        setValue
    } = useForm({
        defaultValues: useMemo(() => ({ directions }
        ), [directions])
    });
    

    const { fields, append, remove , move} = useFieldArray({
        control,
        name: 'directions',
    });
    const [checked, setChecked] = React.useState({
        index: 0,
        open: false
    });
    const [openUnsplash, setOpenUnsplash] = React.useState(false);
    const [unsplashImages, setUnsplashImages] = React.useState([]);

    const handleAppend = () => {
        append({ step: [{ type: 'title', value: ""}] })
    }
    



    const addButton = () => (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', sm: fields.length === 0 ? 'flex-end' : 'space-between' },
                alignItems: 'center'
            }}
        >
            <Button
                variant="text"
                startIcon={<CiTextAlignLeft />}
                sx={{ mb: { xs: 2, sm: 0 }, textTransform: 'none' }}
                onClick={handleAppend}
            >
                Add directions
            </Button>
        </Box>
    );

    useMemo(() => {
        if(directions.length === 0){
            append({ step: [{ type: 'title', value: ""}] })
        }
    },[])

    useEffect(() => {
        if (fields.length === 0){
            setOpen('')
        }
    }, [fields, setOpen])


    const addField = (index, field) => {
        // check to for errors in the step array
        const stepErrors = errors.directions?.[index]?.step || [];
        const hasStepErrors = stepErrors.some(error => !!error);
    
        if (!hasStepErrors) {
    
            const updatedFields = [...fields]; 
            if (updatedFields[index]) {
                console.log("FIELDS SECT::", field)
                // Check if fields[index] exists
                if (!updatedFields[index].step) {
                    updatedFields[index].step = []; 
                }
                updatedFields[index].step.push(field); 
                setData(updatedFields); 
            }
        } 

        console.log('FIELDS::', fields)
        setChecked((prevState) => ({...prevState, open: !prevState.open})); 
    };
    

    const onSubmit = (data) => {
        console.log('DATA:::', data)
        console.log('DATA-FIELDS:::', fields)
        setData(data.directions)
        setOpen('')
        
    }

    const Controls = (index) => <>
        <Avatar sx={{ bgcolor: 'red[500]', cursor: 'pointer', mr: 2,  }} aria-label="add" onClick={() => setChecked((prevState) => ({...prevState, index, open: true}))}> + </Avatar>

        {/* Text */}
        <Grow in={checked.index === index && checked.open} sx={{MediaStreamTrack: 2, cursor: 'pointer', mr: 2}}>
            <Avatar sx={{ }} aria-label="recipe" onClick={() => {
            addField(index, { type: "text", value: "" })
            }}>
                <CiTextAlignLeft />
            </Avatar>
        </Grow>

        {/* Upload Images */}
        <Grow
        sx={{mr: 2, cursor: 'pointer' }}
        in={checked.index === index && checked.open}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked.open ? { timeout: 1500 } : {})}

        >
            <Avatar 
            sx={{ }} 
            aria-label="recipe"
            onClick={() => {
                addField(index, { type: "image", value: "", isUnsplash:false, isMultiple: true}) 
                }}
            >
                <FaRegImage />
            </Avatar>
        </Grow>


        {/* Splash Images */}
        <Grow
        sx={{mr: 2, cursor: 'pointer', }}
        in={checked.index === index && checked.open}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked.open ? { timeout: 1500 } : {})}

        >
            <Avatar 
            sx={{ }} 
            aria-label="recipe"
            onClick={() => {
                setOpenUnsplash(true)
                addField(index, { type: "image", value: [], isUnsplash:true, isMultiple: true })
                }}
            >
                <FaUnsplash />
            </Avatar>
        </Grow>

        {/* Video */}
        <Grow
        sx={{mr: 2, cursor: 'pointer', }}
        in={checked.index === index && checked.open}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked.open ? { timeout: 2500 } : {})}
        >
            <Avatar sx={{ }} aria-label="recipe"onClick={() => {
            addField(index, { type: "video", value: "" })
            }}>
                <RiVideoFill />
            </Avatar>
        </Grow>
    </>

    const getDeleteIcons = (index, subIndex) =>
    <Box
        sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        color: '#3559E3'
        }}
    >
        <Card sx={{ width: 25, height: 25, borderRadius: '50%', textAlign: 'center', background:'inherit' }}  onClick={() => {
                const updatedFields = [...fields];
                updatedFields[index].step.splice(subIndex, 1);
                setValue(`directions[${index}].step`, updatedFields[index].step);
                setChecked((prevState) => ({...prevState, open: !prevState.open})) 
            }}>
        <Typography>
            <RiDeleteBin2Line color='salmon'/>
        </Typography>
        </Card>
    </Box>

    return (
        <Box>
            <Box sx={{m: 'auto', width: '100%'}}>
                <SortableList
                    move={move}
                    items={fields.map((item, index) => ({
                        id: getRandomInt().toString(),
                        content: (
                            <Box key={item.id}
                                sx={{position: 'relative', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', pb: 3}}
                            >
                                <Container>
                                    <Box sx={{flexGrow: 1 }}>
                                        <Typography variant="body2" gutterBottom sx={{mt:3}}>STEP {index + 1}</Typography>
                                    <Container>
                                        {item.step.map((el, i) => <Box key={getRandomInt()}>

                                            {/* Title */}
                                            {el.type === "title" && 
                                                <Box sx={{mt: 3}}>
                                                    <Controller
                                                        name={`directions[${index}].step[${0}].value`}
                                                        control={control}
                                                        defaultValue={item.value}
                                                        rules={{
                                                            required:  'step title is required for this section' ,
                                                        }}
                                                        render={({ field }) => (
                                                            <Box sx={{}}>
                                                                <TextField
                                                                    sx={{mt:3}}
                                                                    fullWidth
                                                                    {...field}
                                                                    label="Title"
                                                                    id={`directions[${index}].step[${0}].type`}
                                                                    size="small"
                                                                    />
                                                                {watch("directions").length > 0 && errors.directions?.[index]?.step[0]?.value && (
                                                                    <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                                        {errors.directions[index].step[0].value.message}
                                                                    </FormHelperText>
                                                                )}
                                                            </Box>
                                                        )}
                                                    />
                                                </Box>
                                            }
                                                {/* text */}
                                                {el.type === 'text' &&
                                                    <Box sx={{mt: 3, p: 3, background: '#f0f0f0'}}>
                                                        {getDeleteIcons(index, i)}
                                                        <Controller
                                                            name={`directions[${index}].step[${i}].value`}
                                                            control={control}
                                                            defaultValue={el.value}
                                                            rules={{
                                                            required:  'This field is required' 
                                                            }}
                                                            type="text"
                                                            render={({ field }) => (
                                                                <Box sx={{ width: '100%', m: 'auto', mt: 3}}>
                                                                        <TextField
                                                                            sx={{mt:3, background: 'white'}}
                                                                            fullWidth
                                                                            {...field}
                                                                            id={`directions[${index}].step[${i}].value`}
                                                                            size="small"
                                                                            multiline
                                                                            rows={14}
                                                                        />
                                                                    {watch("directions").length > 0 && errors.directions?.[index]?.step[i].value && (
                                                                        <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                                            {errors.directions[index].step[i].value.message}
                                                                        </FormHelperText>
                                                                    )}
                                                                </Box>
                                                            )}
                                                        />
                                                    </Box>
                                                }

                                                {/* video */}
                                                {el.type === 'video' && 
                                                    <Box sx={{mt: 3, p: 3, background: '#f0f0f0'}}>
                                                        {getDeleteIcons(index, i)}
                                                        <Controller
                                                            name={`directions[${index}].step[${i}].value`}
                                                            control={control}
                                                            defaultValue={item.value}
                                                            rules={{
                                                                required:  'This field is required' 
                                                            }}
                                                            render={({ field }) => (
                                                                <Box sx={{ maxWidth: 650, m: 'auto'}}>
                                                                    
                                                                    <TextField
                                                                        sx={{mt:3}}
                                                                        fullWidth
                                                                        rows={4}
                                                                        {...field}
                                                                        label="Video link"
                                                                        id={`directionsEvent[${index}].step[${i}].value`}
                                                                        size="small"
                                                                        multiline
                                                                        />
                                                                        <FormHelperText id="component-error-text">
                                                                            copy and paste the youtube video link
                                                                        </FormHelperText>
                                                                    {field.value  &&
                                                                        <Card sx={{mt: 3, width: '100%', border: 0, boxShadow: 'none'}}>
                                                                            <CardContent className={`card-body ${styles.DropZoneCard} `}>
                                                                                <Box sx={{textAlign: 'center', width: '100%' }}>
                                                                                    {parser(field.value)}
                                                                                </Box>
                                                                            </CardContent>
                                                                        </Card>
                                                                    }
                                                                    
                                                                    {watch("directions").length > 0 && errors.directions?.[index]?.value && (
                                                                        <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                                            {errors.directions[index].value.message}
                                                                        </FormHelperText>
                                                                    )}
                                                                </Box>
                                                            )}
                                                        />
                                                    </Box>
                                                }

                                                {/* Images */}
                                                {el.type === 'image' && 
                                                    <Box sx={{mt: 3, p: 3, background: '#f0f0f0'}}>
                                                        {getDeleteIcons(index, i)}
                                                        <Controller
                                                            name={`directions[${index}].step[${i}].value`}
                                                            control={control}
                                                            defaultValue={el.value}
                                                            rules={{
                                                                required:  'This field is required'
                                                            }}
                                                            render={({ field }) => (
                                                            <Box sx={{ maxWidth: {sm: 350, md: 650}, m:'auto' }}>
                                                                {!el.isUnsplash && <>
                                                                    <Dropzone
                                                                    multiple={true}
                                                                    onDrop={async (acceptedFiles) => {
                                                                        if (acceptedFiles.length > 9) {
                                                                            alert(`You can select up to ${9} files.`);
                                                                            return;
                                                                        }
                                                                        // Handle file upload and set the thumbnail value
                                                                        // field.onChange(await convertToBase64(acceptedFiles[0]));
                                                                        const base64Promises = acceptedFiles.map(async (file) => {
                                                                            return convertToBase64(file);
                                                                        });
                                                                    
                                                                        const base64Images = await Promise.all(base64Promises);
                                                                    
                                                                        // Set the thumbnail values for each file
                                                                        field.onChange(base64Images);
                                                                        // field.onChange({ type: "image", value: base64Images, isUnsplash:false, isMultiple: true });
                                                                    }}
                                                                    >
                                                                    {({ getRootProps, getInputProps }) => (
                                                                        <div 
                                                                        {...getRootProps()} 
                                                                        className={`${styles.dropZoneContainer} ${ errors.thumbnail ? styles.isError : ''}`}
                                                                        >
                                                                        <input {...getInputProps()} />
                                                                        {!field.value ? (
                                                                        <Card sx={{ maxWidth: {sm: 350, md: 650}, mt: 3, border: 0, boxShadow: 'none'}}>
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
                                                                        ) :
                                                                            <Card sx={{
                                                                                maxWidth: item.isMultiple ? 'unset' : { sm: 350, md: 650 },
                                                                                mt: 3,
                                                                                border: 0, 
                                                                                boxShadow: 'none'
                                                                                }}>
                                                                                <CardContent>
                                                                                    <ImageLayout isMultiple={item.isMultiple} imageList={field.value}/>
                                                                                </CardContent>
                                                                            </Card>
                                                                        }
                                                                        </div>
                                                                    )}
                                                                    </Dropzone>
                                                                    {watch("directions").length > 0 && errors.directions?.[index]?.value && (
                                                                        <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                                            {errors.directions[index].value.message}
                                                                        </FormHelperText>
                                                                    )}
                                                                    </>
                                                                }

                                                                {el.isUnsplash && <>
                                                                    <UnSplash 
                                                                        open={openUnsplash} 
                                                                        setOpen={setOpenUnsplash} 
                                                                        setSelectedImages={(images) => {
                                                                            // field.onChange({
                                                                            //     type: "image",
                                                                            //     value: images,
                                                                            //     isUnsplash: true,
                                                                            //     isMultiple: true
                                                                            // });
                                                                            field.onChange(images);
                                                                            setUnsplashImages(images)
                                                                        }}
                                                                        selectedImages={unsplashImages}
                                                                        multi={true}
                                                                    />
                                                                    {field.value &&  <Card sx={{
                                                                        maxWidth: item.isMultiple ? 'unset' : { sm: 350, md: 650 },
                                                                        mt: 3, 
                                                                        border: 0, 
                                                                        boxShadow: 'none'
                                                                        }}>
                                                                        <CardContent>
                                                                            <ImageLayout isMultiple={item.isMultiple} imageList={field.value}/>
                                                                        </CardContent>
                                                                    </Card>}
                                                                
                                                                </>}
                                                            </Box>
                                                            )}
                                                        />
                                                    </Box>
                                                }
                                        </Box>)}
                                    </Container>

                                    <Box 
                                    sx={{
                                        display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mt: 3
                                    }}
                                    >
                                        {Controls(index)}
                                    </Box>   

                                    </Box>
                                </Container>


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
                {fields.length > 0 && <>
                    {addButton()}
                    <hr></hr>
                    <Box sx={{display: 'flex', justifyContent:'flex-end', alignItems: 'center'}}>
                        <Button onClick={handleSubmit(onSubmit)}>{directions?.directions?.length > 0 ? 'Update' : 'Add'}</Button>
                    </Box>
                </>}
            </Box>
        </Box>
    );
}

export default DirectionsForm;

