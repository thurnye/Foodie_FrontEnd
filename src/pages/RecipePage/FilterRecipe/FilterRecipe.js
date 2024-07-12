import React, { useState } from 'react';
import styles from './FilterRecipe.module.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grow from '@mui/material/Grow';
import CustomizedButton from '../../../components/CustomizedButton/CustomizedButton';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const cats = [
  'Popular',
  'Pizza',
  'Meat',
  'Lunch',
  'Greens',
  'Desserts',
  'Snacks',
  'Waffles',
  'Breakfast',
  'Cakes',
  'Fast To Make',
  'Grains',
  'Pies',
  'Sweets',
  'Dinner',
];

const tags = [
  '10 ingredients or less',
  '15 minutes or less',
  '60 minutes or less',
  'Appetizers',
  'Bacon',
  'Bake',
  'Basil',
  'BBQ',
];

const defaultValues = {
  categories: [],
  tags: [],
};

const FilterRecipe = ({ getFilter }) => {
  const categories = cats.sort();
  const [showMore, setShowMore] = useState('');
  const [expanded, setExpanded] = useState([]);
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  // State to manage checked checkboxes
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [checkedTags, setCheckedTags] = useState([]);

  const handleChange = (panel) => {
    if (expanded.includes(panel)) {
      setExpanded(expanded.filter((i) => i !== panel));
    } else {
      setExpanded([...expanded, panel]);
    }
  };

  const onSubmit = (data) => {
    const query = {};
    const { categories, tags } = data;
    if (categories.length > 0) {
      query.categories = categories;
    }
    if (tags.length > 0) {
      query.tags = tags;
    }
    if (Object.keys(query).length > 0) {
      getFilter({ ...query, isFilter: true });
    }
  };

  const handleReset = () => {
    reset(defaultValues); // Reset the form values to the default values
    setCheckedCategories([]); // Reset checked categories
    setCheckedTags([]); // Reset checked tags
    getFilter({ isFilter: false }); // Optionally, reset the filter state in your parent component
  };

  const toggleCheckedCategory = (category) => {
    const currentIndex = checkedCategories.indexOf(category);
    const newCheckedCategories = [...checkedCategories];

    if (currentIndex === -1) {
      newCheckedCategories.push(category);
    } else {
      newCheckedCategories.splice(currentIndex, 1);
    }

    setCheckedCategories(newCheckedCategories);
  };

  const toggleCheckedTag = (tag) => {
    const currentIndex = checkedTags.indexOf(tag);
    const newCheckedTags = [...checkedTags];

    if (currentIndex === -1) {
      newCheckedTags.push(tag);
    } else {
      newCheckedTags.splice(currentIndex, 1);
    }

    setCheckedTags(newCheckedTags);
  };

  const filterForm = (type, options, checkedItems, toggleChecked) => (
    <Accordion
      expanded={expanded.includes(type)}
      onChange={() => handleChange(type)}
    >
      <AccordionSummary
        aria-controls='panel1d-content'
        id='panel1d-header'
        sx={{ p: 0 }}
      >
        <Typography variant='h6' sx={{ mb: 1 }}>
          Filter by {type}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {options.slice(0, 10).map((el) => (
            <FormControlLabel
              key={el}
              control={
                <Checkbox
                  {...register(type.toLowerCase(), { required: false })}
                  value={el}
                  checked={checkedItems.includes(el)}
                  onChange={() => toggleChecked(el)}
                />
              }
              label={el}
              sx={{ mb: -1 }}
            />
          ))}

          {showMore === type &&
            options.slice(10, options.length).map((el, i) => (
              <Grow
                key={el}
                in={showMore === type}
                style={{ transformOrigin: '0 0 0' }}
                {...(showMore === type ? { timeout: 1000 * (i + 2) } : {})}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      {...register(type.toLowerCase(), { required: false })}
                      value={el}
                      checked={checkedItems.includes(el)}
                      onChange={() => toggleChecked(el)}
                    />
                  }
                  label={el}
                  sx={{ mb: -1 }}
                />
              </Grow>
            ))}

          {options.length > 10 && (
            <CustomizedButton
              variant='text'
              label={showMore === type ? 'Show Less-' : 'Show More+'}
              disableElevation
              onClick={() => setShowMore(type === showMore ? '' : type)}
              sx={{
                fontSize: 13,
                borderRadius: 0,
                height: 40,
                textTransform: 'none',
                width: 100,
              }}
            />
          )}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );

  return (
    <div className={styles.FilterRecipe}>
      <Typography variant='h6'>Filter Recipes:</Typography>
      <Typography variant='caption' color='text.secondary'>
        Check multiple boxes below to narrow recipe search results
      </Typography>
      <Box sx={{ mt: 3, mb: -1, textAlign: 'end' }}>
        <CustomizedButton
          variant='text'
          label='Reset Filter'
          disableElevation
          onClick={handleReset}
          disabled={
            checkedCategories.length > 0 || checkedTags.length > 0
              ? false
              : true
          }
          sx={{
            fontSize: 13,
            borderRadius: 0,
            height: 30,
            textTransform: 'none',
          }}
        />
      </Box>
      <Box>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          {filterForm(
            'Categories',
            categories,
            checkedCategories,
            toggleCheckedCategory
          )}
          {filterForm('Tags', tags, checkedTags, toggleCheckedTag)}
          <Box>
            <CustomizedButton
              variant='contained'
              label='Filter'
              disableElevation
              type='submit'
              disabled={
                checkedCategories.length > 0 || checkedTags.length > 0
                  ? false
                  : true
              }
              sx={{
                fontSize: 13,
                borderRadius: 0,
                height: 40,
                textTransform: 'none',
                width: 100,
                mt: 2,
              }}
            />
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default FilterRecipe;
