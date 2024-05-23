import React from 'react'
import { Bookmark, Heart, Printer} from 'react-feather';
import Box from '@mui/material/Box';
import CustomizedButton from '../CustomizedButton/CustomizedButton';


export default function FavBookMarkPrintRecipe() {



    return (
        <Box sx={{
            display: "flex",
            justifyContent: 'flex-start'
        }}>
            <CustomizedButton 
                variant="text" 
                label={'Favorite'} 
                backgroundColor={'#f7f7f7'} 
                startIcon={<Heart/>}
                disableElevation
                onClick={() => ''}
                sx={{fontWeight: 500, mr:2, px:3, py: 1}}
            />
            <CustomizedButton 
                variant="text" 
                label={'Print'} 
                backgroundColor={'#f7f7f7'} 
                startIcon={<Printer/>}
                disableElevation
                onClick={() => ''}
                sx={{fontWeight: 500, mr:2, px:3, py: 1}}
            />
            <CustomizedButton 
                variant="text" 
                label={'BookMark'} 
                backgroundColor={'#f7f7f7'} 
                startIcon={<Bookmark/>}
                disableElevation
                onClick={() => ''}
                sx={{fontWeight: 500, mr:2, px:3, py: 1}}
            />
        </Box>
    )
}
