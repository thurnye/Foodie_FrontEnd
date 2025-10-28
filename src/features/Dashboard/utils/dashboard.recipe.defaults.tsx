import { IFormStep } from "../types/dashboard_recipe.types";


// Steps array
export const formSteps: IFormStep[] = [
  { label: 'Basic Info', isDisabled: false },
  { label: 'Details', isDisabled: false },
  { label: 'Nutritional Facts', isDisabled: false },
  { label: 'Directions', isDisabled: false },
  { label: 'Preview', isDisabled: false },
];

// nutrients measurement units

export const measurementUnits = [
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