import { IValueLabel } from '../../Recipe/types/recipe.types';
import {
  categories,
  durations,
  levels,
  servings,
  tags,
} from '../../../shared/data/shared.recipe.optionsData';

export interface NutrientOption {
  name: string;
  unit: string;
}

export interface MetaData {
  tagsOptions: IValueLabel[];
  categoryOptions: IValueLabel[];
  durationOptions: IValueLabel[];
  servingOptions: IValueLabel[];
  levelOptions: IValueLabel[];
  nutrientsOptions: NutrientOption[];
}

export const useMetaDataHook = (): MetaData => {
  const metaDatas: MetaData = {
    tagsOptions: tags.map((el) => ({ value: el, label: el })),

    categoryOptions: categories.map((el) => ({ value: el, label: el })),

    durationOptions: durations.map((el) => ({ value: el, label: el })),

    servingOptions: servings.map((el) => ({
      value: el.trim(),
      label: el.trim(),
    })),

    levelOptions: levels.map((el) => ({
      value: el,
      label: el,
    })),

    nutrientsOptions: [
      { name: 'calories', unit: 'g' },
      { name: 'satFat', unit: 'g' },
      { name: 'carbs', unit: 'g' },
      { name: 'protein', unit: 'g' },
      { name: 'cholesterol', unit: 'mg' },
      { name: 'sodium', unit: 'mg' },
      { name: 'sugar', unit: 'g' },
      { name: 'fibers', unit: 'g' },
    ],
  };

  return metaDatas;
};
