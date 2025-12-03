import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grow from '@mui/material/Grow';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import CustomizedButton from '../../../app/components/CustomizedButton';
import { IRecipeQueryParams } from '../types/recipe.types';
import { categories, tags } from '../../../shared/data/shared.recipe.optionsData';

// ---------- Styled Accordion ----------
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
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

// ---------- Constants ----------
// const cats: string[] = [
//   'Popular',
//   'Pizza',
//   'Meat',
//   'Lunch',
//   'Greens',
//   'Desserts',
//   'Snacks',
//   'Waffles',
//   'Breakfast',
//   'Cakes',
//   'Fast To Make',
//   'Grains',
//   'Pies',
//   'Sweets',
//   'Dinner',
// ];

// const tags: string[] = [
//   '10 ingredients or less',
//   '15 minutes or less',
//   '60 minutes or less',
//   'Appetizers',
//   'Bacon',
//   'Bake',
//   'Basil',
//   'BBQ',
// ];

interface FilterFormData {
  categories: string[];
  tags: string[];
}

interface RecipeFilterProps {
  getFilter: React.Dispatch<React.SetStateAction<IRecipeQueryParams>>;
}

const defaultValues: FilterFormData = {
  categories: [],
  tags: [],
};

// ---------- Component ----------
const RecipeFilter: React.FC<RecipeFilterProps> = ({ getFilter }) => {
  // const categories = cats.sort();
  const [showMore, setShowMore] = useState<string>('');
  const [expanded, setExpanded] = useState<string[]>([]);
  const { register, handleSubmit, reset } = useForm<FilterFormData>({
    defaultValues,
  });

  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [checkedTags, setCheckedTags] = useState<string[]>([]);

  const handleChange = (panel: string) => {
    setExpanded((prev) =>
      prev.includes(panel) ? prev.filter((p) => p !== panel) : [...prev, panel]
    );
  };

  const onSubmit: SubmitHandler<FilterFormData> = (data) => {
    const query: Record<string, unknown> = {};
    const { categories, tags } = data;

    if (categories.length > 0) query.categories = categories;
    if (tags.length > 0) query.tags = tags;

    if (Object.keys(query).length > 0) {
      getFilter((prev: IRecipeQueryParams) => ({
        ...prev,
        ...query,
        page: 1, // reset page when filters change
        limit: 12,
      }));
    }

    console.log('RecipeFilter::', { ...query, isFilter: true });
  };

  const handleReset = () => {
    reset(defaultValues);
    setCheckedCategories([]);
    setCheckedTags([]);
    getFilter(() => ({
      page: 1,
      limit: 12,
      sortBy: 'createdAt',
      sortOrder: 'desc',
    }));
  };

  const toggleCheckedCategory = (category: string) => {
    setCheckedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleCheckedTag = (tag: string) => {
    setCheckedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filterForm = (
    type: 'Categories' | 'Tags',
    options: string[],
    checkedItems: string[],
    toggleChecked: (value: string) => void
  ) => (
    <Accordion
      expanded={expanded.includes(type)}
      onChange={() => handleChange(type)}
    >
      <AccordionSummary
        aria-controls={`${type}-content`}
        id={`${type}-header`}
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
                  {...register(type.toLowerCase() as keyof FilterFormData, {
                    required: false,
                  })}
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
            options.slice(10).map((el, i) => (
              <Grow
                key={el}
                in={showMore === type}
                style={{ transformOrigin: '0 0 0' }}
                {...(showMore === type ? { timeout: 30 * (i + 1) } : {})}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      {...register(type.toLowerCase() as keyof FilterFormData, {
                        required: false,
                      })}
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
    <div>
      <Typography variant='h6'>Filter Recipes:</Typography>
      <Typography variant='caption' color='text.secondary'>
        Check multiple boxes below to narrow recipe search results
      </Typography>

      {/* Reset Filter Button */}
      <Box sx={{ mt: 3, mb: -1, textAlign: 'end' }}>
        <CustomizedButton
          variant='text'
          label='Reset Filter'
          disableElevation
          onClick={handleReset}
          disabled={checkedCategories.length === 0 && checkedTags.length === 0}
          sx={{
            fontSize: 13,
            borderRadius: 0,
            height: 30,
            textTransform: 'none',
          }}
        />
      </Box>

      {/* Form Section */}
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
                checkedCategories.length === 0 && checkedTags.length === 0
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

export default RecipeFilter;
