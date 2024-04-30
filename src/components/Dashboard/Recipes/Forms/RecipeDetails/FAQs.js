import React, {useMemo} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CiTextAlignLeft } from "react-icons/ci";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { getRandomInt } from '../../../../../util/commons';
import { FormHelperText, IconButton } from '@mui/material';
import { FaTrash } from "react-icons/fa6";
import SortableList from '../../../Events/Forms/SortableContainer/SortableList';


const FAQs = ({setFaqs, faqs, setActiveSection}) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({ defaultValues: useMemo(() => ({faqs}), [faqs])});

    const { fields, append, remove , move} = useFieldArray({
        control,
        name: 'faqs',
    });


    const onSubmit = (data) => {
        setFaqs(data.faqs)
        setActiveSection("")
    }

    
    


    return (
        <Box>
            <Box sx={{m: 'auto', width: '100%'}}>
                {/* <form onSubmit={onSubmit}> */}
                    <SortableList
                        move={move}
                        items={fields.map((item, index) => ({
                            id: getRandomInt().toString(),
                            content: (
                                <Box key={item.id}
                                    sx={{position: 'relative', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', pb: 3}}
                                >
                                    <Box sx={{flexGrow: 1 }}>

                                            <Controller
                                                name={`faqs[${index}].ques`}
                                                control={control}
                                                defaultValue={item.value}
                                                rules={{
                                                    required:  'A question is required for this section' ,
                                                }}
                                                render={({ field }) => (
                                                    <Box sx={{ maxWidth: 650, m: 'auto'}}>
                                                        <TextField
                                                            sx={{mt:3}}
                                                            fullWidth
                                                            {...field}
                                                            label="Question"
                                                            id={`faqs[${index}].ques`}
                                                            size="small"
                                                            />
                                                        {watch("faqs").length > 0 && errors.faqs?.[index]?.ques && (
                                                            <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                                {errors.faqs[index].ques.message}
                                                            </FormHelperText>
                                                        )}
                                                    </Box>
                                                )}
                                            />
                                            <Controller
                                                name={`faqs[${index}].ans`}
                                                control={control}
                                                defaultValue={item.value}
                                                rules={{
                                                    required:  'An answer is required for this section' ,
                                                }}
                                                render={({ field }) => (
                                                    <Box sx={{ maxWidth: 650, m: 'auto'}}>
                                                        <TextField
                                                            sx={{mt:3}}
                                                            fullWidth
                                                            rows={4}
                                                            {...field}
                                                            label="Answer"
                                                            id={`faqs[${index}].ans`}
                                                            size="small"
                                                            multiline
                                                            />
                                                            
                                                        
                                                        {watch("faqs").length > 0 && errors.faqs?.[index]?.ans && (
                                                            <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                                {errors.faqs[index].ans.message}
                                                            </FormHelperText>
                                                        )}
                                                    </Box>
                                                )}
                                            />

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
                        width: '100%',
                        display: 'flex', 
                        flexDirection: {xs: 'column', sm: 'row'},
                        justifyContent: {xs: 'center', sm: 'space-between'},
                        alignItems: 'center'
                        }}>
                        <Button variant="outlined" startIcon={<CiTextAlignLeft />} sx={{mb: {xs: 2, sm: 0}}} onClick={() => append({ ques: "", ans: "" })}>
                            Add Question
                        </Button>
                    </Box>
                {/* </form> */}
                {fields.length > 0 && <>
                    <hr></hr>
                    <Box sx={{display: 'flex', justifyContent:'flex-end', alignItems: 'center'}}>
                        <Button onClick={handleSubmit(onSubmit)}>{faqs?.faqs?.length > 0 ? 'Update' : 'Add'}</Button>
                    </Box>
                </>}
            </Box>
        </Box>
    );
}

export default FAQs;
