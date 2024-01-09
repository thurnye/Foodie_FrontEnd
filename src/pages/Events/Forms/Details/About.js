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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dropdown from 'react-bootstrap/Dropdown';
import { elGR } from '@mui/x-data-grid';
import ImageLayout from './ImageLayout';

const options = [
  'Standard',
  'Masonry',
//   'Quilted'
];


const About = ({setAbout, about, setActiveSection}) => {
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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [imageLayout, setImageLayout] = React.useState('Standard');
    const open = Boolean(anchorEl);
    const [layoutAnchorEl, setLayoutAnchorEl] = React.useState(null);
    const openLayoutOptions = Boolean(layoutAnchorEl);


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
                                                <Box sx={{ maxWidth: {sm: 350, md: 650}, m:'auto' }}>
                                                    <Dropzone
                                                    multiple={item.isMultiple}
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
                                                    }}
                                                    >
                                                    {({ getRootProps, getInputProps }) => (
                                                        <div 
                                                        {...getRootProps()} 
                                                        className={`${styles.dropZoneContainer} ${ errors.thumbnail ? styles.isError : ''}`}
                                                        >
                                                        <input {...getInputProps()} />
                                                        {!field.value ? (
                                                        <Card sx={{ maxWidth: {sm: 350, md: 650}, mt: 3}}>
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
                                                        ) : (<>
                                                            {item.isMultiple ? <>
                                                            <Card>
                                                                <CardContent>
                                                                    {<ImageLayout layout={imageLayout} imageList={field.value}/>}
                                                                </CardContent>
                                                            </Card>
                                                            </> : 

                                                            <Card sx={{maxWidth: {sm: 350, md: 650}, mt: 3}}>
                                                                <CardContent>
                                                                    <img src={field.value} className="card-img" alt="event_banner" />
                                                                </CardContent>
                                                            </Card>}
                                                        </>
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

                                    <Box sx={{display: 'inline-flex'}}>
                                        {item.isMultiple && 
                                            <Box>              
                                                <Dropdown>
                                                    <Dropdown.Toggle  id="dropdown-basic" style={{background: 'none', border: 'none', color: '#2626268a'}}>
                                                        {imageLayout}
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        {options.map((el =>  <MenuItem key={getRandomInt()} onClick={() => {setImageLayout(el)}}>{el}</MenuItem>))}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Box>
                                        }

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
                        <Box>
                        <Button
                            variant="outlined" 
                            startIcon={<FaRegImage />} sx={{mb: {xs: 2, sm: 0}}}
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(event) => setAnchorEl(event.currentTarget)}
                        >
                            Add Image
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                            'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={()=>{
                                append({ type: "image", value: "", isMultiple: false })
                                setAnchorEl(null)
                            }}>Single</MenuItem>

                            {/* <MenuItem onClick={()=>{
                                append({ type: "image", value: "", isMultiple: true , layout: imageLayout})
                                setAnchorEl(null)
                            }}>Multiple </MenuItem> */}
                        </Menu>
                        </Box>
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
