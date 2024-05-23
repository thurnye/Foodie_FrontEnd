import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {  FormContainer, Input, ReactSelectInput } from '../../../../Forms/FormContainer/FormContainer';
import Container from '@mui/material/Container';
import {useMetaDataHook} from '../../../../metaData';
import Grid from '@mui/material/Grid';
import EastIcon from '@mui/icons-material/East';

export default function BasicRecipeForm({setData, defaultValues}) {
    const metaData = useMetaDataHook();
    const {tagsOptions, categoryOptions, servingOptions, durationOptions, levelOptions} = metaData;

    const onSubmit = data => {
        if(data){
            console.log({data})
            setData({...data});
        }
    };

  return (
    <Container>
        <FormContainer onSubmit={onSubmit} defaultValues={defaultValues}>
            {/* BASIC RECIPE INFO */}
            <Box sx={{width: '100%', my: 5}}>
                <div>
                    <Typography sx={{ fontSize: 14, mb: 2 }} color="text.secondary" gutterBottom>
                        Highlight the basic information about your recipe
                    </Typography>
                        <Box>
                            <Typography sx={{ fontSize: 14, }} gutterBottom>
                                Recipe Name
                            </Typography>
                            <Input 
                                type="text"
                                name="recipeName"
                                placeholder="Be clear and descriptive"
                                isRequired={true} 
                                errorMessage='Recipe Name is required!!'
                            />
                        </Box>

                        {/* Category */}
                        <Divider sx={{my: 2}}/>
                        <Box>
                            <Typography sx={{ fontSize: 14, }} gutterBottom>
                                Categories
                            </Typography>
                            <ReactSelectInput 
                                name="categories" 
                                options={categoryOptions} 
                                label="Categories" 
                                placeholder={'Choose Categories'} 
                                isMulti={true}
                                isRequired={true}
                                errorMessage='Categories is required!!'
                            />
                        </Box>

                        <Divider sx={{my: 2}}/>

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {/* Serving */}
                                <Grid item xs={2} sm={4} md={4}>
                                    <Typography sx={{ fontSize: 14, }} gutterBottom>
                                    Serving
                                    </Typography>
                                    <ReactSelectInput 
                                        name="serving" 
                                        options={servingOptions} 
                                        label="Serving" 
                                        placeholder={'Choose Serving'} 
                                        isMulti={false}
                                        isRequired={true}
                                        errorMessage='Serving is required!!'
                                    />
                                </Grid>
                                {/* Duration */}
                                <Grid item xs={2} sm={4} md={4}>
                                    <Typography sx={{ fontSize: 14, }} gutterBottom>
                                    Duration
                                    </Typography>
                                    <ReactSelectInput 
                                        name="duration" 
                                        options={durationOptions} 
                                        label="Duration" 
                                        placeholder={'Choose Duration'} 
                                        isMulti={false}
                                        isRequired={true}
                                        errorMessage='Duration is required!!'
                                    />
                                    
                                </Grid>
                                {/* Level */}
                                <Grid item xs={4} sm={8} md={4}>
                                    <Typography sx={{ fontSize: 14, }} gutterBottom>
                                    Level
                                    </Typography>
                                    <ReactSelectInput 
                                        name="level" 
                                        options={levelOptions} 
                                        label="Level" 
                                        placeholder={'Choose Level'} 
                                        isMulti={false}
                                        isRequired={true}
                                        errorMessage='Level is required!!'
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        {/* Tag */}
                        <Divider sx={{my: 2}}/>
                        <Box>
                            <Typography sx={{ fontSize: 14, }} gutterBottom>
                                Choose Tags
                            </Typography>
                            <ReactSelectInput 
                                name="tags" 
                                options={tagsOptions} 
                                label=" Choose Tags" 
                                placeholder={'Choose Tags'} 
                                isMulti={true}
                                isRequired={true}
                                errorMessage='Tags is required!!'
                            />
                        </Box>
                </div>
            </Box>

            <Box sx={{mt: 10, width: '100%', textAlign: 'end'}}>
                <Button variant="text" endIcon={<EastIcon/>} type="submit">
                    Continue
                </Button>
            </Box>
        </FormContainer>
    </Container>
  )
}
