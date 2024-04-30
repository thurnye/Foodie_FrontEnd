export const useMetaDataHook = () => {
    const metaDatas = {
        tagsOptions:[
        '10 ingredients or less', '15 minutes or less', '60 minutes or less', 'appetizer', 'Autumn', 'bacon', 'bake', 'basil', 'bbb', 'BBQ', 'Carbs', 'cheese', 'Dairy-free', 'Dessert', 'Dip', 'Easy', 'Fall', 'Fast-Food', 'Gluten', 'Gluten-Free', 'Italian cuisine', 'Latin-inspired', 'Lunch', 'Meat', 'Mexican-inspired', 'Milk', 'No-bake', 'Nut-free', 'Oil', 'Oil-free', 'Olive Oil', 'One bowl', 'Pasta', 'Protein', 'Raw', 'Recipes', 'Refined sugar-free', 'Sauce', 'Snacks', 'Soup','Soy-free', 'Spring', 'Summer', 'Tips and Tricks', 'Thai', 'Trans Fat', 'Vegan', 'Vegetables', 'Veggies'
        ].map((el) => ({value: el,label: el})),
        categoryOptions : ['Popular', 'Pizza', 'Meat', 'Lunch', 'Greens', 'Desserts', 'Snacks', 'Waffles', 'Breakfast', 'Cakes', 'Fast To Make', 'Grains', 'Pies', 'Sweets', 'Dinner'
        ].map((el) => ({value: el,label: el})),
        durationOptions : [
            '5 Minutes',
            '10 Minutes',
            '15 Minutes',
            '30 Minutes',
            '45 Minutes',
            '60 Minutes',
            '60+ Minutes'
        ].map((el) => ({value: el,label: el})),
        servingOptions : [
            1,
            5,
            10,
            '10+'
        ].map((el) => ({value: el,label: el})),
        levelOptions : [
            'Easy', 'Medium', 'Hard'
        ].map((el) => ({value: el,label: el})),
        nutrientsOptions: [
            {name: 'calories',unit: 'g'},
            {name: 'satFat',unit: 'g'},
            {name: 'carbs',unit: 'g'},
            {name: 'protein',unit: 'g'},
            {name: 'cholesterol',unit: 'mg'},
            {name: 'sodium',unit: 'mg'},
            {name: 'sugar',unit: 'g'},
            {name: 'fibers',unit: 'g'}
        ]
    }

    return metaDatas
}
