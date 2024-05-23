import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, Button } from '@mui/material';
import { MdOutlineEdit } from "react-icons/md";
import About from './About';
import FAQs from './FAQs';
import parser from 'html-react-parser';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdExpandMore } from "react-icons/md";
import { convertToBase64, getRandomInt } from '../../../../../util/commons';
import Container from '@mui/material/Container'
import FileUpload from '../../../../FileUpload/FileUpload';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import UnSplash from '../../../../Unsplash/Unsplash'
import EastIcon from '@mui/icons-material/East';
import ImageLayout from '../../../../ImageLayout/ImageLayout';


const thumbnailPlaceholder = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw4fHxyZWNpcGV8ZW58MHx8fHwxNzEzNzUxNDU4fDA&ixlib=rb-4.0.3&q=80&w=400'

const RecipeDetailsForm = ({setData, defaultValues}) => {
    const [isError, setIsError] = useState(false);
    const [about, setAbout] = useState(defaultValues.about)
    const [faqs, setFaqs] = useState(defaultValues.faqs)
    const [activeSection, setActiveSection] = useState("")
    const [isHovered, setIsHovered] = useState("");
    const [thumbnail, setThumbnail] = useState(defaultValues.thumbnail ? defaultValues.thumbnail : thumbnailPlaceholder);
    const [openUnsplash, setOpenUnsplash] = React.useState(false);

    const getEditIcons = (section) => <Box sx={{ maxWidth: '100%', flexGrow: 1, position: 'relative' }}>
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
        <Card sx={{ width: 25, height: 25, borderRadius: '50%', textAlign: 'center', background:'inherit' }} onClick={() => setActiveSection(section)}>
        <Typography>
            <MdOutlineEdit color='#3559E3'/>
        </Typography>
        </Card>
    </Box>
    </Box>

    const onSubmit = () => {

        console.log("ABOUT::", about)
        console.log("thumbnail::", thumbnail)
        if(about.length === 0){
            setIsError(true)
            return;
        }
        setIsError(false)
        
        const details = {
            thumbnail,
            about,
            faqs
        }
        console.log(details)
        setData(details);
    };

    return (
        <Container>
            {/* About */}
            <Box sx={{mb: 2}}>
                {activeSection !== 'aboutForm' &&
                <Box sx={{ }} onClick={() => about?.length === 0 && setActiveSection('aboutForm')}>
                    <Card 
                        onMouseEnter={() => setIsHovered('aboutForm')}
                        onMouseLeave={() => setIsHovered("")}
                    >
                        {isHovered === 'aboutForm' && getEditIcons('aboutForm')}
                        <CardContent>
                            <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                About this Recipe
                            </Typography>
                            {isError &&<>
                                <Typography variant="caption" gutterBottom sx={{mb:3, color:'salmon'}}>
                                    *recipe details is required
                                </Typography>
                                </>
                            }
                            {about?.length === 0 ? <>
                                <Typography variant="body2" gutterBottom>
                                    Use this section to provide more details about your recipe. You can include things to know, inspiration, options-anything that will help people know what to expect.
                                </Typography>
                            </> : <>
                                <Box
                                    component="img"
                                    sx={{
                                    display: 'block',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    margin: 'auto'
                                    }}
                                    src={thumbnail}
                                    alt={'recipe thumbnail'}
                                    
                                />
                                    {about?.map((el, i) => {
                                        return <Box sx={{width: '100%', my: 2}} key={getRandomInt()}>
                                            
                                            {el.type === 'text' && <Box>
                                                {parser(el.value)}
                                            </Box>}

                                            {el.type === 'image' &&  <Box sx={{ maxWidth: 650, m: 'auto'}}>
                                                    <Box sx={{mb:3}}>
                                                            <Card sx={{boxShadow: 'none', border:0}}>
                                                                <CardContent>
                                                                    <ImageLayout isMultiple={el.isMultiple} imageList={el.value}/>
                                                                </CardContent>
                                                            </Card>
                                                        </Box>
                                            </Box>}

                                            {el.type === 'video' && <Box sx={{ maxWidth: 650, m: 'auto'}}>
                                                <Box sx={{mb:3}}>
                                                    {parser(el.value)}
                                                </Box>
                                            </Box>}
                                        </Box>
                                    })}
                                </>
                                }
                        </CardContent>
                    </Card>
                </Box>
                }
                {activeSection === 'aboutForm' && 
                    <Box sx={{}}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                    About this Recipe
                                </Typography>
                                <Box sx={{mb:3}}>
                                    <Typography variant="caption" color="text.secondary">
                                       <i>It's all bout the recipe here...</i>
                                    </Typography>

                                </Box>

                                <Box sx={{mb:2,  position: 'relative'}}>

                                <Box sx={{display: 'flex', justifyContent: {xs: 'center', md:'flex-end'}, alignItems: 'center'}}>
                                    <Card sx={{ maxWidth: 345, border: isError && thumbnail === thumbnailPlaceholder ? '1px solid salmon' : 'initial'}}>
                                        <Box sx={{position: 'relative'}}>
                                            <CardMedia
                                                component="img"
                                                height="100%"
                                                image={thumbnail}
                                                alt={'image thumbnail'}
                                                auto='format'
                                                fit='crop'
                                                sx={{
                                                width: '100%', objectFit: 'contain', p: 2
                                                }}
                                            />
                                           {thumbnail === thumbnailPlaceholder && <Box sx={{
                                            position: 'absolute',
                                            top: 8,
                                            left: 8,
                                            width: 'calc(100% - 16px)',
                                            height: 'calc(100% - 16px)',
                                            backgroundColor: '#23222280', 
                                            zIndex: 1,
                                           }}>
                                            </Box>}
                                        </Box>

                                        <CardActions>
                                            <Box sx={{ maxWidth: {sm: 350, md: 650}, px: 2}}>
                                                <Stack spacing={2} direction="row">
                                                    <FileUpload 
                                                    multiple={false}
                                                    getFile={async (files) => {
                                                        console.log('FILES:::' , files) 
                                                        const imgThumbnail = await convertToBase64(files)                                                       
                                                        setThumbnail(imgThumbnail)
                                                    }}/>
                                                    <UnSplash
                                                        multi={false} 
                                                        open={openUnsplash} 
                                                        setOpen={setOpenUnsplash} 
                                                        setSelectedImages={(images) => {
                                                            setThumbnail(images[0])
                                                        }}
                                                        selectedImages={[thumbnail]}
                                                        showButton={true}
                                                    />
                                                    {thumbnail &&  <Card sx={{
                                                        maxWidth: { sm: 350, md: 650 },
                                                        mt: 3, 
                                                        border: 0, 
                                                        boxShadow: 'none'
                                                        }}>
                                                        <CardContent>
                                                        </CardContent>
                                                    </Card>}

                                                </Stack>
                                            </Box>
                                        
                                        </CardActions>
                                    </Card>
                                </Box>
                                    <About 
                                        setAbout={setAbout} 
                                        about={about}
                                        setActiveSection={setActiveSection}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                }
            </Box>

            {/* FAQ*/}
            <Box sx={{mb: 2}}>
                {activeSection !== 'faqForm' &&
                <Box sx={{ }} onClick={() => faqs?.length === 0 && setActiveSection('faqForm')}>
                    <Card 
                        onMouseEnter={() => setIsHovered('faqForm')}
                        onMouseLeave={() => setIsHovered("")}
                    >
                        {isHovered === 'faqForm' && getEditIcons('faqForm')}
                        <CardContent>
                        {faqs?.length === 0 ? <>
                            <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                Add more sections to your Recipe page
                            </Typography>
                            
                            <Typography variant="body2" gutterBottom>
                                Make your recipe stand out even more. These sections help viewers find information and answers their questions.
                            </Typography>

                                </> : <>
                                    <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                        Frequently Asked Questions
                                    </Typography>
                                    {faqs?.map((el) => <Accordion sx={{ maxWidth: 650, mb: 1}} key={getRandomInt()}>
                                        <AccordionSummary
                                            expandIcon={<MdExpandMore />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>{el.ques}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{background: '#F8F7FA', m: 2}}>
                                            <Typography sx={{ pt: 2, pb: 2}}>
                                            {el.ans}
                                            </Typography>
                                        </AccordionDetails>
                                        </Accordion>)}
                                </>}
                            
                        </CardContent>
                    </Card>
                </Box>
                }
                {activeSection === 'faqForm' && 
                    <Box sx={{}}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" gutterBottom sx={{mb:3}}>
                                    FAQ
                                </Typography>
                                <Box sx={{mb:3}}>
                                    <Typography variant="caption" color="text.secondary">
                                        Answer questions your attendees may have about the event, like parking, accessibility, refunds, and other informations.
                                    </Typography>
                                </Box>

                                <Box sx={{mb:2}}>
                                    <FAQs 
                                        setFaqs={setFaqs} 
                                        faqs={faqs}
                                        setActiveSection={setActiveSection}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                }
            </Box>

            <Box sx={{mt: 10, width: '100%', textAlign: 'end'}}>
                <Button variant="text" endIcon={<EastIcon/>} onClick={()=>onSubmit()}>
                    Continue
                </Button>
            </Box>
        </Container>
    );
}

export default RecipeDetailsForm;
