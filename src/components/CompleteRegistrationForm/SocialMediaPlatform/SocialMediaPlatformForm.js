import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Button } from '@mui/material';
import { MdOutlineEdit } from "react-icons/md";
import Container from '@mui/material/Container'
import EastIcon from '@mui/icons-material/East';
import SocialMediaPlatformCreate from './SocialMediaPlatformCreate'
import PlatformTable from './PlatformTable';


const SocialMediaPlatformForm = ({setData, defaultValues}) => {
    const [platform, setPlatforms] = useState(defaultValues)
    const [open, setOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const [isError, setIsError] = useState(false);

    const getEditIcons = () => <Box sx={{ maxWidth: '100%', flexGrow: 1, position: 'relative' }}>
    <Box
        sx={{
        position: 'absolute',
        top: 6,
        right: 6,
        height: '100%',
        backgroundColor: '#E9EDFC',
        zIndex: 1,
        color: '#3559E3'
        }}
    >
        <Card sx={{ width: 25, height: 25, borderRadius: '50%', textAlign: 'center', background:'inherit' }} onClick={() => setOpen(true)}>
        <Typography>
            <MdOutlineEdit color='#3559E3'/>
        </Typography>
        </Card>
    </Box>
    </Box>

    const handlePlatformData = (data) => {
        if(data.length === 0){
            setIsError(true);
            return;
        }
        setPlatforms(data)
        setData(data);
    };

    console.log({platform})

    return (
        <Container>
            <Box sx={{mb: 2}}>
                {!open &&
                <Box sx={{ }} onClick={() => platform?.length === 0 && setOpen(true)}>
                    <Card 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {isHovered  && getEditIcons()}
                        <CardContent>
                            
                        {platform?.length === 0 ? <Box>
                           
                            
                           <Card 
                            sx={{ width: '100%',display: 'flex', justifyContent: 'center',  alignItems: 'center', border: 'none', boxShadow: 'none' }}
                            >
                               <CardContent>
                                   <Typography variant="h5" component="div" color="text.secondary">
                                       No Social Platform Added!.
                                   </Typography>
                                   <Typography variant="caption" component="div"   color="text.secondary" sx={{textAlign: 'center'}}>
                                       click to add platform
                                   </Typography>
                                   {isError && 
                                        <Typography variant="caption"  component="div" gutterBottom sx={{mb:3, color:'salmon', textAlign:'center'}}>
                                            *platform are needed!
                                        </Typography>
                                    }   
                               </CardContent>
                           </Card>
                       </Box>
                        : 
                            <Box>
                                <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                   Social Platforms
                                </Typography>
                                <PlatformTable data={platform}/>
                            </Box>
                                    
                        }  
                        </CardContent>
                    </Card>
                </Box>
                 } 
                {open  && 
                    <Box sx={{}}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                    Add platform Here!
                                </Typography>
                                {isError && 
                                    <Typography variant="caption" gutterBottom sx={{mb:3, color:'salmon'}}>
                                        *platform are needed!
                                    </Typography>
                                }
                                <Box sx={{mb:3}}>
                                    <Typography variant="caption" color="text.secondary">
                                       let your followers also connect with you in other platforms
                                    </Typography>
                                </Box>

                                <Box sx={{mb:2}}>
                                    <SocialMediaPlatformCreate 
                                        setData={handlePlatformData} 
                                        platform={platform}
                                        setOpen={setOpen}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                }
            </Box>
        </Container>
    );
}

export default SocialMediaPlatformForm;
