import React, {useEffect, useMemo} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CiTextAlignLeft } from "react-icons/ci";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { getRandomInt } from '../../../../../util/commons';
import { FormHelperText, IconButton } from '@mui/material';
import { FaTrash } from "react-icons/fa6";
import SortableList from '../../../Events/Forms/SortableContainer/SortableList';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const ingredientType = [
    { label: 'Main', value: 'main' },
    { label: 'Dressing', value: 'dressing' },
];

const IngredientsAndDressingForm = ({setData, ingredients, setOpen}) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } =  useForm({
        defaultValues: useMemo(() => (
            ingredients.length > 0 ? { ingredients } : { ingredients: [{ name: "",  type: "" }] }
        ), [ingredients])
    });

    const { fields, append, remove , move} = useFieldArray({
        control,
        name: 'ingredients',
    });


    const onSubmit = (data) => {
        console.log(data)
        setData(data.ingredients)
        setOpen('')
    }

    useEffect(() => {
        if (fields.length === 0){
            setOpen('')
        }
    }, [fields, setOpen])


    const addButton = () => <Box sx={{
        width: '100%',
        display: 'flex', 
        flexDirection: {xs: 'column', sm: 'row'},
        justifyContent: {xs: 'center', sm: fields.length === 0 ? 'flex-end' :'space-between'},
        alignItems: 'center'
        }}>
        <Button variant="text" startIcon={<CiTextAlignLeft />} sx={{mb: {xs: 2, sm: 0}, textTransform: 'none'}} onClick={() => append({ name: "",type: "" })}>
            Add ingredients
        </Button>
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
                                <Box sx={{flexGrow: 1 }}>

                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={2} sm={4} md={6}>
                                        <Controller
                                            name={`ingredients[${index}].name`}
                                            control={control}
                                            defaultValue={item.value}
                                            rules={{
                                                required:  'Ingredient Name is required for this section' ,
                                            }}
                                            render={({ field }) => (
                                                <Box sx={{}}>
                                                    <TextField
                                                        sx={{mt:3}}
                                                        fullWidth
                                                        {...field}
                                                        label="Ingredient Name"
                                                        id={`ingredients[${index}].name`}
                                                        size="small"
                                                        />
                                                    {watch("ingredients").length > 0 && errors.ingredients?.[index]?.name && (
                                                        <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                            {errors.ingredients[index].name.message}
                                                        </FormHelperText>
                                                    )}
                                                </Box>
                                            )}
                                        />
                                    </Grid>
                                    
                                    <Grid item xs={2} sm={4} md={6}>
                                        <Controller
                                            name={`ingredients[${index}].type`}
                                            control={control}
                                            defaultValue={item.value ?? 'g'}
                                            rules={{
                                                required:  'Ingredient type is required!' ,
                                            }}
                                            render={({ field }) => (
                                                <Box>
                                                    <FormControl fullWidth>
                                                        <Select 
                                                        {...field} 
                                                        variant="outlined" 
                                                        fullWidth 
                                                        id={`ingredients[${index}].type`}
                                                        sx={{
                                                            height: 40,
                                                            mt: 3
                                                        }}>
                                                        {ingredientType.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                            </MenuItem>
                                                        ))}
                                                        </Select>
                                                    </FormControl>
                                                    {watch("ingredients").length > 0 && errors.ingredients?.[index]?.type && (
                                                        <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                            {errors.ingredients[index].type.message}
                                                        </FormHelperText>
                                                    )}
                                                </Box>
                                            )}
                                        />
                                    </Grid>
                                </Grid>

                                        

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
                {addButton()}
                {fields.length > 0 && <>
                    <hr></hr>
                    <Box sx={{display: 'flex', justifyContent:'flex-end', alignItems: 'center'}}>
                        <Button onClick={handleSubmit(onSubmit)}>{ingredients?.ingredients?.length > 0 ? 'Update' : 'Add'}</Button>
                    </Box>
                </>}
            </Box>
        </Box>
    );
}

export default IngredientsAndDressingForm;
