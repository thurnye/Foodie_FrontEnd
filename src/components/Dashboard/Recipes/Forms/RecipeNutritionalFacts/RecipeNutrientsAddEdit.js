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
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const measurementUnits = [
    { label: 'Grams (g)', value: 'g' },
    { label: 'Milligrams (mg)', value: 'mg' },
    { label: 'Micrograms (mcg)', value: 'mcg' },
    { label: 'Kilocalories (kcal)', value: 'kcal' },
    { label: 'Calories (cal)', value: 'cal' },
    { label: 'Percent (%)', value: '%' },
    { label: 'Milliliters (ml)', value: 'ml' },
    { label: 'Liters (l)', value: 'l' },
    { label: 'Teaspoons (tsp)', value: 'tsp' },
    { label: 'Tablespoons (tbsp)', value: 'tbsp' },
    { label: 'Cups', value: 'cups' },
    { label: 'Ounces (oz)', value: 'oz' },
    { label: 'Fluid Ounces (fl oz)', value: 'fl oz' },
    { label: 'Pints (pt)', value: 'pt' },
    { label: 'Quarts (qt)', value: 'qt' },
    { label: 'Gallons (gal)', value: 'gal' },
    { label: 'Pieces', value: 'pieces' },
];

const RecipeNutrientsAddEdit = ({setData, nutrients, setOpen}) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({ defaultValues: useMemo(() => ({nutrients}), [nutrients])});

    const { fields, append, remove , move} = useFieldArray({
        control,
        name: 'nutrients',
    });


    const onSubmit = (data) => {
        console.log(data)
        setData(data.nutrients)
        setOpen(false)
    }


    const addButton = () => <Box sx={{
        width: '100%',
        display: 'flex', 
        flexDirection: {xs: 'column', sm: 'row'},
        justifyContent: {xs: 'center', sm: fields.length === 0 ? 'flex-end' :'space-between'},
        alignItems: 'center'
        }}>
        <Button variant="text" startIcon={<CiTextAlignLeft />} sx={{mb: {xs: 2, sm: 0}, textTransform: 'none'}} onClick={() => append({ name: "", amount: "", unit: "" })}>
            Add nutrients
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
                                    <Grid item xs={4} sm={8} md={4}>
                                        <Controller
                                            name={`nutrients[${index}].name`}
                                            control={control}
                                            defaultValue={item.value}
                                            rules={{
                                                required:  'Nutrient is required for this section' ,
                                            }}
                                            render={({ field }) => (
                                                <Box sx={{}}>
                                                    <TextField
                                                        sx={{mt:3}}
                                                        fullWidth
                                                        {...field}
                                                        label="Nutrient"
                                                        id={`nutrients[${index}].name`}
                                                        size="small"
                                                        />
                                                    {watch("nutrients").length > 0 && errors.nutrients?.[index]?.name && (
                                                        <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                            {errors.nutrients[index].name.message}
                                                        </FormHelperText>
                                                    )}
                                                </Box>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4}>
                                        <Controller
                                            name={`nutrients[${index}].amount`}
                                            control={control}
                                            defaultValue={item.value}
                                            rules={{
                                                required:  'An amount is required for the nutrient' ,
                                            }}
                                            render={({ field }) => (
                                                <Box>
                                                    <TextField
                                                        sx={{mt:3}}
                                                        fullWidth
                                                        {...field}
                                                        label="Amount"
                                                        type="number"
                                                        id={`nutrients[${index}].amount`}
                                                        size="small"
                                                        />
                                                    {watch("nutrients").length > 0 && errors.nutrients?.[index]?.amount && (
                                                        <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                            {errors.nutrients[index].amount.message}
                                                        </FormHelperText>
                                                    )}
                                                </Box>
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={2} sm={4} md={4}>
                                        <Controller
                                            name={`nutrients[${index}].unit`}
                                            control={control}
                                            defaultValue={item.value ?? 'g'}
                                            rules={{
                                                required:  'Unit measurement is required!' ,
                                            }}
                                            render={({ field }) => (
                                                <Box>
                                                    <FormControl fullWidth>
                                                        <Select 
                                                        {...field} 
                                                        variant="outlined" 
                                                        fullWidth 
                                                        id={`nutrients[${index}].unit`}
                                                        sx={{
                                                            height: 40,
                                                            mt: 3
                                                        }}>
                                                        {measurementUnits.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                            </MenuItem>
                                                        ))}
                                                        </Select>
                                                    </FormControl>
                                                    {watch("nutrients").length > 0 && errors.nutrients?.[index]?.unit && (
                                                        <FormHelperText id="component-error-text" sx={{ color: '#ff604f' }}>
                                                            {errors.nutrients[index].unit.message}
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
                        <Button onClick={handleSubmit(onSubmit)}>{nutrients?.nutrients?.length > 0 ? 'Update' : 'Add'}</Button>
                    </Box>
                </>}
            </Box>
        </Box>
    );
}

export default RecipeNutrientsAddEdit;
