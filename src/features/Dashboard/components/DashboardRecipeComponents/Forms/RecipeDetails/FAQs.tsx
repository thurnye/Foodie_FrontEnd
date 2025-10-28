import React, { useMemo } from 'react';
import { Box, TextField, Button, FormHelperText, IconButton } from '@mui/material';
import { CiTextAlignLeft } from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa6';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import SortableList, { SortableItemData } from '../../../../SortableList';
import { getRandomNumber } from '../../../../../../app/utils/app.utils';
import { IFAQ } from '../../../../../Recipe/types/recipe.types';

// Types

interface FAQsProps {
  setFaqs: (faqs: IFAQ[]) => void;
  faqs: IFAQ[];
  setActiveSection: (section: string) => void;
}

interface FAQsForm {
  faqs: IFAQ[];
}

const FAQs: React.FC<FAQsProps> = ({ setFaqs, faqs, setActiveSection }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FAQsForm>({ defaultValues: useMemo(() => ({ faqs }), [faqs]) });

  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'faqs',
  });

  const onSubmit = (data: FAQsForm) => {
    setFaqs(data.faqs);
    setActiveSection('');
  };

  const items: SortableItemData[] = fields.map((item, index) => ({
    id: getRandomNumber().toString(),
    content: (
      <Box
        key={item.id}
        sx={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 3,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {/* Question */}
          <Controller
            name={`faqs.${index}.ques`}
            control={control}
            rules={{ required: 'A question is required for this section' }}
            render={({ field }) => (
              <Box sx={{ maxWidth: 650, m: 'auto' }}>
                <TextField
                  sx={{ mt: 3 }}
                  fullWidth
                  {...field}
                  label="Question"
                  id={`faqs-${index}-ques`}
                  size="small"
                />
                {watch('faqs').length > 0 && errors.faqs?.[index]?.ques && (
                  <FormHelperText sx={{ color: '#ff604f' }}>
                    {errors.faqs[index].ques?.message}
                  </FormHelperText>
                )}
              </Box>
            )}
          />

          {/* Answer */}
          <Controller
            name={`faqs.${index}.ans`}
            control={control}
            rules={{ required: 'An answer is required for this section' }}
            render={({ field }) => (
              <Box sx={{ maxWidth: 650, m: 'auto' }}>
                <TextField
                  sx={{ mt: 3 }}
                  fullWidth
                  multiline
                  rows={4}
                  {...field}
                  label="Answer"
                  id={`faqs-${index}-ans`}
                  size="small"
                />
                {watch('faqs').length > 0 && errors.faqs?.[index]?.ans && (
                  <FormHelperText sx={{ color: '#ff604f' }}>
                    {errors.faqs[index].ans?.message}
                  </FormHelperText>
                )}
              </Box>
            )}
          />
        </Box>

        <IconButton aria-label="delete" onClick={() => remove(index)} sx={{ width: 27 }}>
          <FaTrash color="#a3a2a28a" />
        </IconButton>
      </Box>
    ),
  }));

  return (
    <Box>
      <Box sx={{ m: 'auto', width: '100%' }}>
        <SortableList move={move} items={items} />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: { xs: 'center', sm: 'space-between' },
            alignItems: 'center',
          }}
        >
          <Button
            variant="outlined"
            startIcon={<CiTextAlignLeft />}
            sx={{ mb: { xs: 2, sm: 0 } }}
            onClick={() => append({ ques: '', ans: '' })}
          >
            Add Question
          </Button>
        </Box>

        {fields.length > 0 && (
          <>
            <hr />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Button onClick={handleSubmit(onSubmit)}>
                {faqs?.length > 0 ? 'Update' : 'Add'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default FAQs;
