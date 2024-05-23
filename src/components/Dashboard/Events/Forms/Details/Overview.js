import React from 'react';
import Box from '@mui/material/Box';
import { FormContainer, Input,} from '../../../../Forms/FormContainer/FormContainer';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


const OverView = ({setSummary, summary, setActiveSection}) => {

    const onSubmit = data => {
        setSummary(data?.summary)
        setActiveSection("")
    };

    return (
        <Box>
            <FormContainer onSubmit={onSubmit}>
                <Box>
                    <Typography variant="body1" gutterBottom>
                        Summary
                    </Typography>

                    <Typography variant="caption" color="text.secondary" gutterBottom>
                        Grab people's attention with a short description about your event. Attendees will see this at the top of your event page.(140 characters max)
                    </Typography>

                    <Box sx={{mt:1}}>
                        <Input 
                            type="text"
                            defaultValue={summary}
                            name="summary" 
                            label="Summary"
                            placeholder="Be clear and descriptive"
                            isRequired={true} 
                            errorMessage='Summary is required!'
                        />
                    </Box>
                </Box>
                <hr></hr>
                <Box sx={{display: 'flex', justifyContent:'flex-end', alignItems: 'center'}}>
                    <Button type='submit'>{summary ? 'Update' : 'Add'}</Button>
                </Box>
            </FormContainer>
            
        </Box>
    );
}

export default OverView;
