exports.realisticRecipes = [
  {
    basicInfo: {
      recipeName: 'Smoked Tofu Salad with Spicy Peanut Sauce',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Vegan', value: 'Vegan' },
        { label: 'High Protein', value: 'High Protein' },
        { label: 'Healthy Lunch', value: 'Healthy Lunch' },
        { label: 'Peanut Sauce', value: 'Peanut Sauce' },
        { label: 'Quick Meals', value: 'Quick Meals' },
      ],
      categories: [
        { label: 'Salads', value: 'Salads' },
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Vegan', value: 'Vegan' },
      ],
    },

    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1612197527762-6b8c35d7bfa0?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Refreshing, Protein-Packed Vegan Salad with Bold Flavor',
        },
        {
          type: 'text',
          value:
            'Smoked tofu salad with spicy peanut sauce is a bright, crunchy, and deeply satisfying vegan meal that doesn’t compromise on flavor or nutrition. The smoky tofu adds depth and protein, while the crisp vegetables keep it light and refreshing. The real magic happens with the creamy peanut dressing—it’s savory, slightly sweet, and just spicy enough to wake up your taste buds. In less than 30 minutes, you’ll have a balanced meal that’s both nourishing and energizing. Perfect for weekday lunches, quick dinners, or a wholesome post-workout meal, this salad proves healthy food can be genuinely exciting.',
        },
        {
          type: 'text',
          value:
            'To achieve the best flavor, make sure to pan-sear or air-fry the tofu until golden brown—it creates a light crust that soaks up the peanut sauce beautifully. Don’t skip the fresh herbs either; cilantro and mint give this dish its signature freshness. For a complete meal, serve the salad with brown rice or rice noodles, or enjoy it as-is for a lighter plate. The peanut dressing can also double as a dipping sauce or marinade, making this recipe a versatile addition to your kitchen rotation.',
        },
        {
          type: 'text',
          value:
            'This salad is ideal for meal prep as the vegetables stay crisp for hours and the sauce keeps well for up to five days. Just store them separately to preserve texture. The combination of crunch, creaminess, and subtle spice makes it appealing even to non-vegan eaters. Once you try it, it might just become your go-to quick healthy bowl.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1611075579954-193677c3b7d5?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=4SG4O7G9bWs',
        },
      ],
      faqs: [
        {
          ques: 'Can I bake the tofu instead of pan-searing?',
          ans: 'Yes. Bake at 400°F (200°C) for about 20 minutes, flipping halfway, until lightly crisped. This works great if you prefer oil-free cooking.',
        },
        {
          ques: 'How can I make the sauce nut-free?',
          ans: 'You can substitute sunflower seed butter or tahini instead of peanut butter. The flavor will be slightly different but still creamy and delicious.',
        },
        {
          ques: 'What vegetables work best for this salad?',
          ans: 'Fresh, crunchy vegetables like bell peppers, cucumbers, carrots, and cabbage work beautifully. You can also add edamame or shredded lettuce for volume.',
        },
      ],
    },

    directions: {
      ingredients: [
        { name: '200g smoked tofu, pressed and cubed', type: 'main' },
        {
          name: '3 cups mixed greens (spinach, arugula, or lettuce)',
          type: 'main',
        },
        { name: '1 medium carrot, julienned', type: 'main' },
        { name: '½ cucumber, sliced thinly', type: 'main' },
        { name: '½ red bell pepper, thinly sliced', type: 'main' },
        { name: '¼ cup fresh cilantro or mint leaves', type: 'main' },
        { name: '1 tablespoon sesame oil', type: 'main' },
        { name: '2 tablespoons chopped peanuts (for garnish)', type: 'main' },

        { name: '2 tablespoons natural peanut butter', type: 'dressing' },
        { name: '1 tablespoon soy sauce or tamari', type: 'dressing' },
        { name: '1 tablespoon lime juice', type: 'dressing' },
        { name: '1 teaspoon maple syrup or honey', type: 'dressing' },
        {
          name: '½ teaspoon chili flakes or 1 teaspoon sriracha',
          type: 'dressing',
        },
        { name: '1 tablespoon warm water (to thin sauce)', type: 'dressing' },
        { name: '½ teaspoon grated ginger', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            {
              type: 'title',
              value: 'Step 1: Sear the Tofu',
            },
            {
              type: 'text',
              value:
                'Pat the tofu dry and cut into bite-sized cubes. Heat sesame oil in a non-stick skillet over medium heat. Add tofu and cook for 6–8 minutes, turning occasionally, until golden and crisp on all sides. Remove from heat and set aside to cool slightly.',
            },
            {
              type: 'image',
              value:
                'https://images.unsplash.com/photo-1587650635594-7c805cd0efb7?auto=format&fit=crop&w=900&q=80',
              isUnsplash: true,
            },
          ],
        },
        {
          step: [
            {
              type: 'title',
              value: 'Step 2: Prepare the Peanut Sauce',
            },
            {
              type: 'text',
              value:
                'In a small mixing bowl, combine peanut butter, soy sauce, lime juice, maple syrup, chili flakes, and grated ginger. Whisk together until smooth. Add warm water a little at a time until you get a creamy, pourable consistency. Taste and adjust spice or sweetness to your preference.',
            },
          ],
        },
        {
          step: [
            {
              type: 'title',
              value: 'Step 3: Assemble the Salad',
            },
            {
              type: 'text',
              value:
                'In a large salad bowl, toss together the mixed greens, carrots, cucumber, and red bell pepper. Add the tofu cubes and drizzle the peanut sauce over the top. Gently toss to coat evenly.',
            },
          ],
        },
        {
          step: [
            {
              type: 'title',
              value: 'Step 4: Garnish and Serve',
            },
            {
              type: 'text',
              value:
                'Top the salad with fresh cilantro or mint and a sprinkle of chopped peanuts. Serve immediately, or refrigerate for up to 2 hours before eating. The flavors intensify as it sits, making it even more delicious.',
            },
          ],
        },
      ],
    },

    nutritionalFacts: [
      { name: 'Calories', amount: '370', unit: 'kcal' },
      { name: 'Protein', amount: '22', unit: 'g' },
      { name: 'Total Fat', amount: '23', unit: 'g' },
      { name: 'Saturated Fat', amount: '3', unit: 'g' },
      { name: 'Carbohydrates', amount: '19', unit: 'g' },
      { name: 'Fiber', amount: '5', unit: 'g' },
      { name: 'Sugar', amount: '6', unit: 'g' },
      { name: 'Sodium', amount: '530', unit: 'mg' },
      { name: 'Calcium', amount: '150', unit: 'mg' },
      { name: 'Iron', amount: '3.5', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_002_antioxidant_powered_smoothies',
    basicInfo: {
      recipeName: '5 Antioxidant-Powered Smoothie Recipes',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '5', value: '5' },
      tags: [
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Antioxidant', value: 'Antioxidant' },
        { label: 'Smoothies', value: 'Smoothies' },
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Breakfast', value: 'Breakfast' },
      ],
      categories: [
        { label: 'Drinks', value: 'Drinks' },
        { label: 'Smoothies', value: 'Smoothies' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },

    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1617196036439-8b36e4b229cc?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Burst of Color, Flavor, and Wellness in Every Glass',
        },
        {
          type: 'text',
          value:
            'These 5 antioxidant-powered smoothie recipes are designed to flood your body with vitamins, minerals, and natural plant-based compounds that fight oxidative stress and support overall vitality. Each smoothie blends vibrant fruits, leafy greens, and nourishing ingredients to help boost immunity, improve skin health, and promote energy. Whether you’re starting your morning, recovering after a workout, or looking for a midday refresh, these smoothies will keep you fueled and radiant. From berries to beets, they combine flavor and function in every sip — simple, refreshing, and irresistibly good for you.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1590080875832-7d1d89d2e8a9?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'You don’t need any fancy equipment — a basic blender will do. Use fresh or frozen fruit depending on the season and what’s available. Adjust the liquid to get your preferred thickness and sweetness. You can enhance these smoothies by adding chia seeds, protein powder, or nut butters for extra nutrition. Each blend is balanced for taste and nutrients, so you’ll enjoy delicious results every time.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=bdVYQqNYoTg',
        },
        {
          type: 'text',
          value:
            'These smoothies are crafted for flexibility. Ingredients are listed per serving but can easily be doubled or tripled for family batches or weekly prep. For best freshness, drink them right after blending, but they can be refrigerated for up to 24 hours. Shake or stir before sipping. Each smoothie is colorful, refreshing, and loaded with antioxidants to keep your day glowing.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use water instead of milk or juice?',
          ans: 'Yes. Water or coconut water makes a lighter smoothie, while milk or yogurt gives it a creamier texture.',
        },
        {
          ques: 'Are frozen fruits okay to use?',
          ans: 'Absolutely. Frozen fruits are just as nutritious and make your smoothie extra cold and thick.',
        },
        {
          ques: 'Can I prep smoothies in advance?',
          ans: 'You can portion ingredients into freezer bags for quick blending later, or refrigerate prepared smoothies for up to 24 hours.',
        },
      ],
    },

    directions: {
      ingredients: [
        // Berry Boost Smoothie
        {
          name: '1 cup mixed berries (strawberries, blueberries, raspberries)',
          type: 'main',
        },
        { name: '½ banana', type: 'main' },
        { name: '½ cup unsweetened almond milk', type: 'main' },
        { name: '1 teaspoon honey or agave syrup', type: 'main' },
        { name: '½ teaspoon chia seeds', type: 'main' },

        // Green Glow Smoothie
        { name: '1 cup spinach leaves', type: 'main' },
        { name: '½ avocado', type: 'main' },
        { name: '1 kiwi, peeled', type: 'main' },
        { name: '½ apple', type: 'main' },
        { name: '½ cup coconut water', type: 'main' },

        // Golden Turmeric Smoothie
        { name: '1 small mango, diced', type: 'main' },
        { name: '½ teaspoon turmeric powder', type: 'main' },
        { name: '1 small carrot, chopped', type: 'main' },
        { name: '½ cup orange juice', type: 'main' },
        { name: '¼ teaspoon black pepper', type: 'main' },

        // Beet Berry Recharge Smoothie
        { name: '½ small beet, cooked and chopped', type: 'main' },
        { name: '½ cup frozen strawberries', type: 'main' },
        { name: '½ cup almond milk', type: 'main' },
        { name: '1 teaspoon honey or maple syrup', type: 'main' },

        // Cocoa Blueberry Power Smoothie
        { name: '¾ cup blueberries', type: 'main' },
        { name: '1 tablespoon cocoa powder', type: 'main' },
        { name: '½ banana', type: 'main' },
        { name: '½ cup oat milk', type: 'main' },
        { name: '1 teaspoon flaxseed meal', type: 'main' },
      ],

      methods: [
        {
          step: [
            {
              type: 'title',
              value: 'Step 1: Choose Your Smoothie Base',
            },
            {
              type: 'text',
              value:
                'Pick one of the five smoothie combinations: Berry Boost, Green Glow, Golden Turmeric, Beet Berry Recharge, or Cocoa Blueberry Power. Each offers unique antioxidants and flavor benefits, so pick based on what your body and taste buds crave.',
            },
          ],
        },
        {
          step: [
            {
              type: 'title',
              value: 'Step 2: Blend Until Smooth',
            },
            {
              type: 'text',
              value:
                'Add all chosen ingredients to a blender. Start at low speed, then increase to high. Blend for 45–60 seconds until creamy and uniform. Add more liquid if too thick or a few ice cubes for extra chill.',
            },
            {
              type: 'image',
              value:
                'https://images.unsplash.com/photo-1584270354949-1e1e1d556dc5?auto=format&fit=crop&w=900&q=80',
              isUnsplash: true,
            },
          ],
        },
        {
          step: [
            {
              type: 'title',
              value: 'Step 3: Adjust and Serve',
            },
            {
              type: 'text',
              value:
                'Taste and tweak to perfection. If you want it sweeter, add a bit of honey; if thicker, toss in frozen fruit. Pour into a chilled glass or smoothie jar. Enjoy right away to capture all the antioxidant benefits.',
            },
          ],
        },
      ],
    },

    nutritionalFacts: [
      { name: 'Calories', amount: '180', unit: 'kcal' },
      { name: 'Protein', amount: '3.5', unit: 'g' },
      { name: 'Total Fat', amount: '3', unit: 'g' },
      { name: 'Carbohydrates', amount: '38', unit: 'g' },
      { name: 'Fiber', amount: '5', unit: 'g' },
      { name: 'Sugar', amount: '26', unit: 'g' },
      { name: 'Vitamin C', amount: '60', unit: 'mg' },
      { name: 'Iron', amount: '1.2', unit: 'mg' },
      { name: 'Calcium', amount: '80', unit: 'mg' },
      { name: 'Potassium', amount: '450', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_003_grilled_sweet_potatoes',
    basicInfo: {
      recipeName: 'Grilled Sweet Potatoes',
      duration: { label: '35 Minutes', value: '35' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Side Dish', value: 'Side Dish' },
        { label: 'Grilled', value: 'Grilled' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Summer', value: 'Summer' },
      ],
      categories: [
        { label: 'Sides', value: 'Sides' },
        { label: 'Vegetables', value: 'Vegetables' },
        { label: 'Grill Recipes', value: 'Grill Recipes' },
      ],
    },

    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1627483267087-1f3e9b49e897?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Perfectly Charred, Naturally Sweet, and Smoky',
        },
        {
          type: 'text',
          value:
            'Grilled sweet potatoes are the ultimate blend of sweet and smoky, with a caramelized exterior and a soft, creamy center. They’re incredibly simple to prepare yet deliver rich flavor and vibrant color to any summer meal. When seasoned with olive oil, garlic, and a touch of smoked paprika, these orange-hued slices become an irresistible side dish that pairs beautifully with grilled meats, salads, or plant-based mains. Whether cooked on an outdoor grill or an indoor grill pan, the result is consistently delicious—sweet, tender, and just a little crisp around the edges.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1603048297172-c72571a509ba?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'For best results, slice the sweet potatoes evenly so they cook uniformly. A quick parboil helps ensure the centers are tender before hitting the grill, while brushing with oil prevents sticking and promotes those perfect char marks. You can serve them warm with a drizzle of honey or tahini for sweetness, or with lime and chili flakes for a spicy kick.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=36Xe0FukvYk',
        },
        {
          type: 'text',
          value:
            'These grilled sweet potatoes can be made ahead and reheated quickly. They’re great for picnics, BBQs, or meal prep—delicious hot or at room temperature. The natural sugars in the potatoes caramelize beautifully, enhancing their flavor while keeping their nutrients intact. Once you try them, you’ll see why they’re a staple at every good summer cookout.',
        },
      ],
      faqs: [
        {
          ques: 'Do I need to peel the sweet potatoes?',
          ans: 'No. The skin adds texture and nutrients, but you can peel them if you prefer a softer bite.',
        },
        {
          ques: 'Can I make these without a grill?',
          ans: 'Yes. Use a grill pan or roast them in the oven at 425°F (220°C) until slightly crisp and caramelized.',
        },
        {
          ques: 'How do I prevent the potatoes from sticking to the grill?',
          ans: 'Lightly brush both the potatoes and the grill grates with oil before grilling.',
        },
      ],
    },

    directions: {
      ingredients: [
        {
          name: '2 large sweet potatoes, scrubbed and sliced into ½-inch rounds',
          type: 'main',
        },
        { name: '2 tablespoons olive oil', type: 'main' },
        { name: '1 teaspoon smoked paprika', type: 'main' },
        { name: '½ teaspoon garlic powder', type: 'main' },
        { name: '½ teaspoon salt', type: 'main' },
        { name: '¼ teaspoon black pepper', type: 'main' },
        {
          name: 'Fresh parsley or cilantro, chopped (for garnish)',
          type: 'main',
        },
      ],
      methods: [
        {
          step: [
            {
              type: 'title',
              value: 'Step 1: Parboil the Sweet Potatoes',
            },
            {
              type: 'text',
              value:
                'Place sliced sweet potatoes in a pot of salted boiling water and cook for 5–6 minutes until just tender but not falling apart. Drain and let them cool slightly.',
            },
          ],
        },
        {
          step: [
            {
              type: 'title',
              value: 'Step 2: Season the Slices',
            },
            {
              type: 'text',
              value:
                'In a large bowl, toss the parboiled slices with olive oil, smoked paprika, garlic powder, salt, and black pepper. Make sure each piece is evenly coated.',
            },
          ],
        },
        {
          step: [
            {
              type: 'title',
              value: 'Step 3: Grill to Perfection',
            },
            {
              type: 'text',
              value:
                'Preheat the grill to medium heat (about 375°F/190°C). Place the sweet potato slices directly on the grates. Grill for 3–4 minutes per side until golden brown with visible grill marks.',
            },
            {
              type: 'image',
              value:
                'https://images.unsplash.com/photo-1613058086514-7d9d72a1b0f5?auto=format&fit=crop&w=900&q=80',
              isUnsplash: true,
            },
          ],
        },
        {
          step: [
            {
              type: 'title',
              value: 'Step 4: Serve and Garnish',
            },
            {
              type: 'text',
              value:
                'Transfer to a plate and sprinkle with fresh herbs. Optionally, drizzle with lime juice, tahini, or a touch of honey for added flavor. Serve warm as a side dish or light appetizer.',
            },
          ],
        },
      ],
    },

    nutritionalFacts: [
      { name: 'Calories', amount: '180', unit: 'kcal' },
      { name: 'Protein', amount: '3', unit: 'g' },
      { name: 'Total Fat', amount: '7', unit: 'g' },
      { name: 'Saturated Fat', amount: '1', unit: 'g' },
      { name: 'Carbohydrates', amount: '28', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
      { name: 'Sugar', amount: '8', unit: 'g' },
      { name: 'Sodium', amount: '290', unit: 'mg' },
      { name: 'Vitamin A', amount: '9500', unit: 'IU' },
      { name: 'Potassium', amount: '480', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_004_stuffed_avocado_veggies_fruit',
    basicInfo: {
      recipeName: 'Stuffed Avocado with Vegetables and Fruit',
      duration: { label: '15 Minutes', value: '15' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Quick Meals', value: 'Quick Meals' },
        { label: 'Salads', value: 'Salads' },
        { label: 'Gluten-Free', value: 'Gluten-Free' },
      ],
      categories: [
        { label: 'Salads', value: 'Salads' },
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Lunch', value: 'Lunch' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Colorful, Nutrient-Packed Avocado Bowl of Freshness',
        },
        {
          type: 'text',
          value:
            'This stuffed avocado recipe combines creamy avocado halves with a refreshing mix of vegetables and fruit for a quick, nutritious, and visually beautiful meal. Each serving bursts with flavor from sweet mango, crunchy cucumber, juicy cherry tomatoes, and tangy lime. The creamy avocado base balances all the freshness perfectly while delivering healthy fats and fiber. Whether you’re making a light lunch, snack, or side, this recipe is ideal for summer or post-workout refueling. The combination of textures and colors makes every bite satisfying and energizing, keeping your body fueled and your taste buds happy.',
        },
        {
          type: 'text',
          value:
            'For an added layer of crunch, sprinkle roasted nuts or seeds on top. You can also drizzle balsamic glaze or honey-lime dressing for extra zest. It’s versatile enough to customize—swap mango for strawberries or add grilled tofu or shrimp for protein.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1576181213400-5e9c9c5c26f3?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=9XwqzZtO8yE',
        },
        {
          type: 'text',
          value:
            'Stuffed avocados are best served fresh, but you can prepare the filling in advance and assemble right before serving. The vibrant flavors make this a perfect dish for picnics, brunch, or quick weekday meals.',
        },
      ],
      faqs: [
        {
          ques: 'Can I prepare the avocado ahead of time?',
          ans: 'Prepare just before serving to prevent browning. You can brush the avocado flesh with lime juice to slow oxidation.',
        },
        {
          ques: 'What fruits work best?',
          ans: 'Mango, pineapple, strawberries, and pomegranate all work beautifully.',
        },
        {
          ques: 'Is it keto-friendly?',
          ans: 'Yes! Just skip high-sugar fruits like mango if following a strict keto plan.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 ripe avocados, halved and pitted', type: 'main' },
        { name: '½ cup diced mango', type: 'main' },
        { name: '½ cup cherry tomatoes, halved', type: 'main' },
        { name: '¼ cup diced cucumber', type: 'main' },
        { name: '1 tablespoon chopped red onion', type: 'main' },
        { name: '1 tablespoon chopped cilantro', type: 'main' },
        { name: '1 tablespoon lime juice', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Prepare the Filling' },
            {
              type: 'text',
              value:
                'In a bowl, combine mango, tomatoes, cucumber, onion, and cilantro. Add lime juice, salt, and pepper. Toss gently to mix well.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Stuff the Avocados' },
            {
              type: 'text',
              value:
                'Scoop a small portion from each avocado half to make space for the filling. Spoon the vegetable-fruit mix generously into the center of each half.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Garnish and Serve' },
            {
              type: 'text',
              value:
                'Top with extra herbs, nuts, or dressing of choice. Serve immediately while avocados are fresh and vibrant.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '290', unit: 'kcal' },
      { name: 'Protein', amount: '4', unit: 'g' },
      { name: 'Total Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '18', unit: 'g' },
      { name: 'Fiber', amount: '9', unit: 'g' },
      { name: 'Sugar', amount: '7', unit: 'g' },
      { name: 'Sodium', amount: '160', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_005_mediterranean_tuna_salad',
    basicInfo: {
      recipeName: 'Mediterranean Tuna Salad with Fresh Herbs',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Protein', value: 'Protein' },
        { label: 'Salads', value: 'Salads' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Mediterranean', value: 'Mediterranean' },
        { label: 'Low Carb', value: 'Low Carb' },
      ],
      categories: [
        { label: 'Salads', value: 'Salads' },
        { label: 'Fish', value: 'Fish' },
        { label: 'Lunch', value: 'Lunch' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1582456595446-c4ef8e3e1f70?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Bright, Fresh, and Protein-Rich Mediterranean Classic',
        },
        {
          type: 'text',
          value:
            'This Mediterranean tuna salad is a flavorful blend of flaky tuna, crisp vegetables, fresh herbs, and zesty olive oil dressing. It’s packed with protein and heart-healthy fats, making it both satisfying and light. The combination of tomatoes, cucumber, red onion, parsley, and lemon gives it a vibrant, refreshing taste that feels like summer in every bite. It’s perfect for quick lunches, picnics, or as a make-ahead meal prep option. With minimal effort, you can enjoy a delicious, balanced salad that fits seamlessly into a healthy lifestyle.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=J9L_pH4VY7M',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1617196036439-8b36e4b229cc?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'You can enjoy this salad on its own, serve it in lettuce cups, or spoon it over toast. For a heartier version, add chickpeas or boiled eggs. Store in the refrigerator for up to two days for best freshness.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use fresh tuna instead of canned?',
          ans: 'Yes. Just sear or grill fresh tuna, flake it, and cool before mixing with vegetables.',
        },
        {
          ques: 'Which herbs are best?',
          ans: 'Parsley, dill, and mint work wonderfully for this salad.',
        },
        {
          ques: 'Can I skip olive oil?',
          ans: 'You can use Greek yogurt or tahini for a creamy dressing alternative.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 cans tuna in olive oil, drained', type: 'main' },
        { name: '1 cup diced cucumber', type: 'main' },
        { name: '1 cup halved cherry tomatoes', type: 'main' },
        { name: '¼ cup chopped red onion', type: 'main' },
        { name: '¼ cup chopped parsley', type: 'main' },
        { name: '2 tablespoons lemon juice', type: 'main' },
        { name: '2 tablespoons olive oil', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Prepare Vegetables' },
            {
              type: 'text',
              value:
                'Dice cucumber, halve tomatoes, and finely chop the onion and parsley. Add to a large bowl.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Add Tuna and Seasoning' },
            {
              type: 'text',
              value:
                'Add drained tuna to the vegetables. Drizzle with olive oil and lemon juice, then season with salt and pepper.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Toss and Serve' },
            {
              type: 'text',
              value:
                'Gently toss everything together until evenly coated. Chill for 10 minutes before serving to let flavors blend.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '290', unit: 'kcal' },
      { name: 'Protein', amount: '28', unit: 'g' },
      { name: 'Fat', amount: '18', unit: 'g' },
      { name: 'Carbohydrates', amount: '6', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Sodium', amount: '340', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_006_overnight_oatmeal_fig_breakfast',
    basicInfo: {
      recipeName: 'Overnight Oatmeal and Fig for Breakfast Weight Loss',
      duration: { label: '8 Hours (Overnight)', value: '480' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '1', value: '1' },
      tags: [
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Fiber', value: 'Fiber' },
        { label: 'Low Sugar', value: 'Low Sugar' },
        { label: 'Weight Loss', value: 'Weight Loss' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Oats', value: 'Oats' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1605475126514-3a44d9e37cf5?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Creamy, High-Fiber Breakfast for Lasting Energy',
        },
        {
          type: 'text',
          value:
            'This overnight oatmeal with figs is a perfect way to start your morning full and energized. It combines rolled oats, chia seeds, almond milk, and ripe figs for a creamy, naturally sweet breakfast that promotes digestion and supports healthy weight management. The slow-release carbohydrates keep you satisfied for hours, while figs add natural sweetness and fiber without added sugar. Preparing it the night before means you wake up to a ready-to-eat meal that’s both nutritious and delicious, ideal for busy mornings or post-workout recovery.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1572441710534-680cda34e3f0?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=nJe8xuj1YY4',
        },
        {
          type: 'text',
          value:
            'You can customize it with toppings like nuts, cinnamon, or a drizzle of honey for extra flavor. It’s meal-prep friendly, travels well, and is one of the easiest healthy breakfasts you’ll ever make.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use instant oats?',
          ans: 'Yes, but the texture will be softer. Rolled oats provide a better bite.',
        },
        {
          ques: 'How long can I store overnight oats?',
          ans: 'Up to 3 days in the fridge in a sealed jar.',
        },
        {
          ques: 'Can I replace figs?',
          ans: 'Absolutely! Try dates, berries, or sliced apples instead.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '½ cup rolled oats', type: 'main' },
        { name: '1 tablespoon chia seeds', type: 'main' },
        { name: '1 cup unsweetened almond milk', type: 'main' },
        { name: '1 fresh fig, sliced', type: 'main' },
        { name: '½ teaspoon cinnamon', type: 'main' },
        { name: '1 teaspoon honey or maple syrup (optional)', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Combine Ingredients' },
            {
              type: 'text',
              value:
                'In a jar or bowl, mix oats, chia seeds, almond milk, and cinnamon. Stir well to combine.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Chill Overnight' },
            {
              type: 'text',
              value:
                'Cover and refrigerate overnight (at least 6–8 hours) until thick and creamy.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Add Toppings and Serve' },
            {
              type: 'text',
              value:
                'In the morning, top with sliced figs and a drizzle of honey if desired. Stir before eating.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '290', unit: 'kcal' },
      { name: 'Protein', amount: '7', unit: 'g' },
      { name: 'Total Fat', amount: '9', unit: 'g' },
      { name: 'Carbohydrates', amount: '45', unit: 'g' },
      { name: 'Fiber', amount: '8', unit: 'g' },
    ],
  },
  {
    _id: 'recp_007_hungarian_beef_goulash',
    basicInfo: {
      recipeName: 'The Best Hungarian Beef Goulash Recipe',
      duration: { label: '2 Hours 30 Minutes', value: '150' },
      level: { label: 'Hard', value: 'Hard' },
      serving: { label: '6', value: '6' },
      tags: [
        { label: 'Beef', value: 'Beef' },
        { label: 'Stew', value: 'Stew' },
        { label: 'Traditional', value: 'Traditional' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Comfort Food', value: 'Comfort Food' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Meat', value: 'Meat' },
        { label: 'European', value: 'European' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1629386654614-96b57f1f18fc?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Rich, Hearty Hungarian Classic with Deep Flavor',
        },
        {
          type: 'text',
          value:
            'Hungarian beef goulash is a warm, aromatic stew that has been loved for centuries. Made with tender chunks of beef, onions, paprika, and bell peppers simmered in a rich broth, it delivers deep savory flavor and comforting texture. Traditionally served with egg noodles, potatoes, or bread, this dish is ideal for cold evenings or family gatherings. The slow cooking ensures melt-in-your-mouth beef and a sauce bursting with smoky paprika and subtle sweetness from the vegetables.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1618219761425-3a6ce4855864?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=7Wm4vM2M6BY',
        },
        {
          type: 'text',
          value:
            'This goulash is best made in a heavy pot or Dutch oven to develop full flavor. Serve with sour cream and a sprinkle of fresh parsley for a true Hungarian touch.',
        },
      ],
      faqs: [
        {
          ques: 'Can I make this in a slow cooker?',
          ans: 'Yes. Brown the beef first, then cook on low for 6–8 hours.',
        },
        {
          ques: 'What’s the best cut of beef?',
          ans: 'Use chuck roast or stewing beef for tender results.',
        },
        {
          ques: 'Is it spicy?',
          ans: 'It’s mildly spiced from paprika but not hot unless you add chili flakes.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 lbs beef chuck, cut into cubes', type: 'main' },
        { name: '2 tablespoons olive oil', type: 'main' },
        { name: '2 onions, chopped', type: 'main' },
        { name: '2 tablespoons Hungarian sweet paprika', type: 'main' },
        { name: '2 bell peppers, chopped', type: 'main' },
        { name: '3 cloves garlic, minced', type: 'main' },
        { name: '2 tablespoons tomato paste', type: 'main' },
        { name: '3 cups beef broth', type: 'main' },
        { name: '1 teaspoon caraway seeds', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Brown the Beef' },
            {
              type: 'text',
              value:
                'Heat oil in a large pot over medium-high heat. Add beef and sear until browned on all sides. Remove and set aside.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Build the Base' },
            {
              type: 'text',
              value:
                'In the same pot, sauté onions and garlic until soft. Stir in paprika and tomato paste, cooking for 1 minute to release flavor.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Simmer the Goulash' },
            {
              type: 'text',
              value:
                'Return beef to the pot. Add peppers, broth, caraway seeds, salt, and pepper. Simmer covered on low heat for 2 hours, stirring occasionally until beef is tender.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '420', unit: 'kcal' },
      { name: 'Protein', amount: '36', unit: 'g' },
      { name: 'Total Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '12', unit: 'g' },
      { name: 'Sodium', amount: '620', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_008_avocado_toast_spinach_eggs_tomatoes',
    basicInfo: {
      recipeName: 'Avocado Toast with Spinach, Eggs and Tomatoes',
      duration: { label: '15 Minutes', value: '15' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Protein', value: 'Protein' },
        { label: 'Quick Meals', value: 'Quick Meals' },
        { label: 'Vegetarian', value: 'Vegetarian' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Brunch', value: 'Brunch' },
        { label: 'Vegetarian', value: 'Vegetarian' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1584270354949-1e1e1d556dc5?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'The Perfect Morning Bite: Creamy, Crunchy, and Balanced',
        },
        {
          type: 'text',
          value:
            'Avocado toast with spinach, eggs, and tomatoes is the ultimate healthy breakfast—fast, flavorful, and full of nutrients. It layers creamy mashed avocado over toasted whole-grain bread, topped with lightly sautéed spinach, fresh cherry tomatoes, and perfectly cooked eggs. The result is a balance of creamy, tangy, and savory flavors with a satisfying crunch. This dish provides healthy fats, protein, and fiber to keep you full and energized throughout the morning, all in under 15 minutes.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=VnZ4AF7WJjA',
        },
        {
          type: 'text',
          value:
            'You can prepare the eggs fried, poached, or scrambled depending on preference. A drizzle of olive oil or sprinkle of chili flakes adds an extra layer of flavor.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1605450733414-41c53e2d6c5b?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
      ],
      faqs: [
        {
          ques: 'Can I make this vegan?',
          ans: 'Yes, replace eggs with tofu scramble or grilled mushrooms.',
        },
        {
          ques: 'What type of bread works best?',
          ans: 'Whole-grain or sourdough bread provides the best texture and flavor.',
        },
        {
          ques: 'Can I prep the ingredients ahead?',
          ans: 'Yes, keep the avocado unmashed and slice it just before serving to prevent browning.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 slices whole-grain bread, toasted', type: 'main' },
        { name: '1 ripe avocado', type: 'main' },
        { name: '1 cup baby spinach', type: 'main' },
        { name: '4 cherry tomatoes, sliced', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '1 teaspoon olive oil', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Cook the Spinach and Eggs' },
            {
              type: 'text',
              value:
                'In a small skillet, heat olive oil over medium heat. Add spinach and sauté for 1–2 minutes until wilted. Remove and set aside. In the same pan, fry or poach eggs to your liking.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Prepare the Toast' },
            {
              type: 'text',
              value:
                'Mash avocado in a bowl with salt and pepper. Spread evenly on toasted bread slices.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Assemble and Serve' },
            {
              type: 'text',
              value:
                'Top with sautéed spinach, tomato slices, and eggs. Garnish with chili flakes or herbs if desired. Serve warm.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '330', unit: 'kcal' },
      { name: 'Protein', amount: '13', unit: 'g' },
      { name: 'Total Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '20', unit: 'g' },
      { name: 'Fiber', amount: '6', unit: 'g' },
      { name: 'Sodium', amount: '300', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_009_fudge_waffles_icecream_chocolate_sauce',
    basicInfo: {
      recipeName: 'Fudge Waffles with Ice Cream and Chocolate Sauce',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Brunch', value: 'Brunch' },
        { label: 'Sweet Treat', value: 'Sweet Treat' },
        { label: 'Waffles', value: 'Waffles' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Waffles', value: 'Waffles' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1606851092933-16b8014cb37c?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Rich, Decadent, and Perfectly Crispy on the Outside',
        },
        {
          type: 'text',
          value:
            'Fudge waffles with ice cream and chocolate sauce are the ultimate indulgent breakfast or dessert. These waffles are crisp on the outside, soft and fudgy inside, and loaded with chocolate flavor. Topped with a scoop of vanilla ice cream and drizzled with warm chocolate sauce, they create a perfect harmony of hot and cold, sweet and creamy. Ideal for weekend brunch or special celebrations, they look impressive but are surprisingly easy to make. The batter uses simple pantry staples like cocoa powder, melted chocolate, and buttermilk to deliver a deep, rich taste that chocolate lovers will adore.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=PuTT6vgnE5Q',
        },
        {
          type: 'text',
          value:
            'You can use a standard or Belgian waffle maker for this recipe. Serve with whipped cream, nuts, or fresh berries to elevate the presentation.',
        },
      ],
      faqs: [
        {
          ques: 'Can I make the waffles ahead?',
          ans: 'Yes. Store cooked waffles in the fridge for 2 days or freeze up to a month. Reheat in a toaster or oven before serving.',
        },
        {
          ques: 'What ice cream flavor works best?',
          ans: 'Vanilla, coffee, or hazelnut ice cream complement the chocolate perfectly.',
        },
        {
          ques: 'Can I make it gluten-free?',
          ans: 'Yes, use a 1:1 gluten-free flour blend.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 ½ cups all-purpose flour', type: 'main' },
        { name: '¼ cup cocoa powder', type: 'main' },
        { name: '1 teaspoon baking powder', type: 'main' },
        { name: '¼ teaspoon salt', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '1 ¼ cups buttermilk', type: 'main' },
        { name: '¼ cup melted butter', type: 'main' },
        { name: '½ cup melted dark chocolate', type: 'main' },
        { name: '¼ cup sugar', type: 'main' },
        {
          name: 'Vanilla ice cream and chocolate sauce (for topping)',
          type: 'main',
        },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Mix Dry Ingredients' },
            {
              type: 'text',
              value:
                'In a large bowl, whisk together flour, cocoa powder, baking powder, and salt.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Add Wet Ingredients' },
            {
              type: 'text',
              value:
                'In another bowl, beat eggs, sugar, buttermilk, butter, and melted chocolate. Combine with dry ingredients until smooth.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Cook the Waffles' },
            {
              type: 'text',
              value:
                'Preheat your waffle maker and lightly grease it. Pour the batter and cook until crisp. Serve warm with ice cream and chocolate sauce.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '420', unit: 'kcal' },
      { name: 'Protein', amount: '9', unit: 'g' },
      { name: 'Fat', amount: '21', unit: 'g' },
      { name: 'Carbohydrates', amount: '48', unit: 'g' },
      { name: 'Sugar', amount: '24', unit: 'g' },
    ],
  },
  {
    _id: 'recp_010_slow_cooker_apple_cinnamon_oatmeal_pot',
    basicInfo: {
      recipeName: 'Slow Cooker Apple Cinnamon Oatmeal Pot',
      duration: { label: '6 Hours', value: '360' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Oatmeal', value: 'Oatmeal' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Slow Cooker', value: 'Slow Cooker' },
        { label: 'Meal Prep', value: 'Meal Prep' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Slow Cooker', value: 'Slow Cooker' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1603190287605-e36f5e2b7b80?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value:
            'Warm, Comforting, and Naturally Sweetened Breakfast Perfection',
        },
        {
          type: 'text',
          value:
            'This slow cooker apple cinnamon oatmeal pot is an effortless, cozy breakfast that cooks while you sleep. Rolled oats simmer overnight with diced apples, cinnamon, and a touch of maple syrup, filling your kitchen with an inviting aroma. The slow cooking process turns the oats perfectly creamy and infuses them with natural sweetness from the apples. It’s a comforting, high-fiber, heart-healthy meal that’s ready as soon as you wake up. Simply ladle into bowls, add your favorite toppings, and start the day nourished and warm.',
        },
        {
          type: 'text',
          value:
            'You can prepare this recipe using steel-cut oats for a chewier texture or rolled oats for a softer consistency. The result is deliciously spiced oatmeal that feels indulgent yet completely wholesome.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=FwD70XSmZpY',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1516685018646-549d8e6d21db?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
      ],
      faqs: [
        {
          ques: 'Can I use non-dairy milk?',
          ans: 'Yes, almond or oat milk work perfectly in this recipe.',
        },
        {
          ques: 'Can I cook it faster?',
          ans: 'Yes, cook on high for about 2.5–3 hours instead of low for 6 hours.',
        },
        {
          ques: 'How long does it keep?',
          ans: 'Store leftovers in the fridge for up to 4 days.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 ½ cups rolled oats', type: 'main' },
        { name: '3 cups almond milk or milk of choice', type: 'main' },
        { name: '2 apples, diced', type: 'main' },
        { name: '1 teaspoon ground cinnamon', type: 'main' },
        { name: '2 tablespoons maple syrup', type: 'main' },
        { name: '1 teaspoon vanilla extract', type: 'main' },
        { name: 'Pinch of salt', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Combine Ingredients' },
            {
              type: 'text',
              value:
                'Add all ingredients to a slow cooker and stir well to combine.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Cook Overnight' },
            {
              type: 'text',
              value:
                'Cover and cook on low heat for 6 hours or until oats are tender and creamy.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Serve Warm' },
            {
              type: 'text',
              value:
                'Stir before serving. Top with extra apple slices, nuts, or a drizzle of maple syrup.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '280', unit: 'kcal' },
      { name: 'Protein', amount: '8', unit: 'g' },
      { name: 'Fat', amount: '7', unit: 'g' },
      { name: 'Carbohydrates', amount: '48', unit: 'g' },
      { name: 'Fiber', amount: '7', unit: 'g' },
    ],
  },
  {
    _id: 'recp_011_fluffy_buttermilk_pancakes_triple_berry_sauce',
    basicInfo: {
      recipeName: 'The Best Fluffy Buttermilk Pancakes with Triple Berry Sauce',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Pancakes', value: 'Pancakes' },
        { label: 'Berries', value: 'Berries' },
        { label: 'Sweet', value: 'Sweet' },
        { label: 'Brunch', value: 'Brunch' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Brunch', value: 'Brunch' },
        { label: 'Desserts', value: 'Desserts' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1600185365483-26d7c7d72b90?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Soft, Airy Pancakes with a Burst of Juicy Berry Flavor',
        },
        {
          type: 'text',
          value:
            'These fluffy buttermilk pancakes with triple berry sauce are the ultimate comfort breakfast. Light, airy, and perfectly golden, they melt in your mouth with every bite. The tangy buttermilk gives them extra tenderness while a rich homemade berry sauce adds vibrant sweetness and color. Made with blueberries, raspberries, and strawberries simmered in honey and lemon, this topping elevates simple pancakes into something unforgettable. Perfect for weekends, brunch gatherings, or even breakfast-for-dinner nights, these pancakes are easy to make and guaranteed to please everyone at the table.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=HY09Zb9MC9Y',
        },
        {
          type: 'text',
          value:
            'For best results, let the batter rest for 10 minutes before cooking. This helps the baking powder activate, making your pancakes rise higher and stay fluffy. Serve warm with a dollop of whipped cream or Greek yogurt for balance.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1617196036439-8b36e4b229cc?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
      ],
      faqs: [
        {
          ques: 'Can I use milk instead of buttermilk?',
          ans: 'Yes. Add 1 tablespoon of lemon juice or vinegar to a cup of milk and let it sit for 10 minutes.',
        },
        {
          ques: 'Can I make the berry sauce ahead?',
          ans: 'Yes, refrigerate it for up to 4 days and reheat gently before serving.',
        },
        {
          ques: 'Can I freeze the pancakes?',
          ans: 'Yes, cool completely, freeze on parchment paper, and toast when ready to eat.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 ½ cups all-purpose flour', type: 'main' },
        { name: '2 tablespoons sugar', type: 'main' },
        { name: '1 teaspoon baking soda', type: 'main' },
        { name: '1 ½ teaspoons baking powder', type: 'main' },
        { name: '¼ teaspoon salt', type: 'main' },
        { name: '1 cup buttermilk', type: 'main' },
        { name: '1 egg', type: 'main' },
        { name: '2 tablespoons melted butter', type: 'main' },
        { name: '1 teaspoon vanilla extract', type: 'main' },
        {
          name: '1 cup mixed berries (blueberries, raspberries, strawberries)',
          type: 'main',
        },
        { name: '1 tablespoon honey', type: 'main' },
        { name: '1 teaspoon lemon juice', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Make the Berry Sauce' },
            {
              type: 'text',
              value:
                'In a small saucepan, simmer berries, honey, and lemon juice for 5–7 minutes until thickened. Set aside to cool slightly.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Prepare the Pancake Batter' },
            {
              type: 'text',
              value:
                'In a bowl, whisk flour, sugar, baking soda, baking powder, and salt. Add buttermilk, egg, melted butter, and vanilla. Mix until smooth but don’t overmix.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Cook the Pancakes' },
            {
              type: 'text',
              value:
                'Heat a lightly greased skillet over medium heat. Pour ¼ cup batter for each pancake and cook until bubbles form, then flip and cook until golden. Serve warm with berry sauce on top.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '360', unit: 'kcal' },
      { name: 'Protein', amount: '9', unit: 'g' },
      { name: 'Fat', amount: '13', unit: 'g' },
      { name: 'Carbohydrates', amount: '50', unit: 'g' },
      { name: 'Sugar', amount: '16', unit: 'g' },
    ],
  },
  {
    _id: 'recp_012_mothers_day_breakfast_brunch',
    basicInfo: {
      recipeName: "40 Mother's Day Breakfast and Brunch Recipes",
      duration: { label: 'Varies', value: '0' },
      level: { label: 'All Levels', value: 'All Levels' },
      serving: { label: '40', value: '40' },
      tags: [
        { label: 'Brunch', value: 'Brunch' },
        { label: 'Celebration', value: 'Celebration' },
        { label: 'Mother’s Day', value: 'Mother’s Day' },
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Family', value: 'Family' },
      ],
      categories: [
        { label: 'Collections', value: 'Collections' },
        { label: 'Brunch', value: 'Brunch' },
        { label: 'Celebration', value: 'Celebration' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1529694157871-63d3d0f0e4f5?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Heartfelt Collection to Make Mom’s Morning Extra Special',
        },
        {
          type: 'text',
          value:
            'Celebrate Mother’s Day with 40 thoughtful breakfast and brunch recipes designed to surprise and delight. From delicate pastries and fresh fruit bowls to savory quiches and elegant parfaits, this collection covers every taste and skill level. Whether you’re cooking for a crowd or just for Mom, you’ll find easy-to-follow recipes that turn breakfast into a beautiful memory. Each dish is chosen to balance color, texture, and aroma—so your table looks as good as it tastes.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=dqVwWwefONI',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1616627455719-e16d25a48d9a?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'This collection includes everything from fluffy pancakes, breakfast casseroles, fruit smoothies, and egg dishes to creative desserts like lemon loaf and strawberry shortcake. Perfect for an at-home brunch spread or outdoor garden breakfast.',
        },
      ],
      faqs: [
        {
          ques: 'Can I prepare these ahead?',
          ans: 'Yes, many recipes can be prepped the night before for easy assembly in the morning.',
        },
        {
          ques: 'Do these recipes include vegan options?',
          ans: 'Yes, the collection includes several vegan and gluten-free ideas.',
        },
        {
          ques: 'How should I plan a full brunch menu?',
          ans: 'Include one egg dish, one sweet dish, one fresh fruit option, and one beverage to keep it balanced.',
        },
      ],
    },
    directions: {
      ingredients: [
        {
          name: 'Variety of ingredients per recipe (see collection)',
          type: 'main',
        },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Choose Recipes' },
            {
              type: 'text',
              value:
                'Select from 40 curated breakfast and brunch dishes based on time and ingredients available.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Prepare in Advance' },
            {
              type: 'text',
              value:
                'Many recipes like casseroles, pancakes, and muffins can be prepped the night before.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Present Beautifully' },
            {
              type: 'text',
              value:
                'Serve dishes on a decorated table with flowers, fresh juice, and coffee for a perfect Mother’s Day surprise.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: 'Varies', unit: 'kcal' },
      { name: 'Protein', amount: 'Varies', unit: 'g' },
    ],
  },
  {
    _id: 'recp_013_peanut_butter_pancakes',
    basicInfo: {
      recipeName: 'Peanut Butter Pancakes',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Pancakes', value: 'Pancakes' },
        { label: 'Protein', value: 'Protein' },
        { label: 'Quick Meals', value: 'Quick Meals' },
        { label: 'Nut Butter', value: 'Nut Butter' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Brunch', value: 'Brunch' },
        { label: 'Desserts', value: 'Desserts' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1575855410818-35f7a9a09c13?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Soft, Nutty Pancakes with a Hint of Sweetness',
        },
        {
          type: 'text',
          value:
            'Peanut butter pancakes are a delicious twist on the breakfast classic. Fluffy and rich, they’re made with creamy peanut butter folded right into the batter for an extra boost of protein and nutty flavor. Perfect with sliced bananas, maple syrup, or even a drizzle of melted peanut butter on top, these pancakes are both satisfying and energizing. They come together in minutes and make a great post-workout meal or weekend breakfast for peanut lovers.',
        },
        {
          type: 'text',
          value:
            'You can make them even healthier by using whole wheat flour or oat flour, and adding a sprinkle of chopped peanuts for crunch.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=Zp_w5wAd8_E',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1617196036439-8b36e4b229cc?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
      ],
      faqs: [
        {
          ques: 'Can I use crunchy peanut butter?',
          ans: 'Yes, but the texture will be slightly denser.',
        },
        {
          ques: 'Can I make them dairy-free?',
          ans: 'Yes, use almond milk and coconut oil instead of butter and milk.',
        },
        {
          ques: 'How do I store leftovers?',
          ans: 'Keep in an airtight container in the fridge for up to 3 days, reheat before serving.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup all-purpose flour', type: 'main' },
        { name: '2 tablespoons sugar', type: 'main' },
        { name: '1 teaspoon baking powder', type: 'main' },
        { name: '¼ teaspoon salt', type: 'main' },
        { name: '1 egg', type: 'main' },
        { name: '¾ cup milk', type: 'main' },
        { name: '2 tablespoons creamy peanut butter', type: 'main' },
        { name: '1 tablespoon melted butter', type: 'main' },
        { name: '1 teaspoon vanilla extract', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Mix Dry Ingredients' },
            {
              type: 'text',
              value:
                'In a bowl, whisk flour, sugar, baking powder, and salt together.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Add Wet Ingredients' },
            {
              type: 'text',
              value:
                'In another bowl, whisk egg, milk, peanut butter, butter, and vanilla until smooth. Combine wet and dry ingredients gently.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Cook and Serve' },
            {
              type: 'text',
              value:
                'Heat a skillet with butter over medium heat. Pour batter in rounds and cook until bubbles form. Flip and cook another minute. Serve warm with maple syrup or sliced bananas.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '340', unit: 'kcal' },
      { name: 'Protein', amount: '11', unit: 'g' },
      { name: 'Fat', amount: '15', unit: 'g' },
      { name: 'Carbohydrates', amount: '38', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
    ],
  },
  {
    _id: 'recp_014_traditional_french_breakfast_croissant_coffee',
    basicInfo: {
      recipeName: 'Traditional French Breakfast Croissant and Coffee',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'French', value: 'French' },
        { label: 'Coffee', value: 'Coffee' },
        { label: 'Pastry', value: 'Pastry' },
        { label: 'Brunch', value: 'Brunch' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Pastries', value: 'Pastries' },
        { label: 'Beverages', value: 'Beverages' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Simple, Elegant Start to a Parisian Morning',
        },
        {
          type: 'text',
          value:
            'A traditional French breakfast is all about simplicity, quality, and balance. Buttery croissants paired with freshly brewed coffee embody everything that makes French mornings charming and timeless. The flaky layers of a warm croissant, enjoyed alongside a rich café au lait or espresso, create a luxurious experience that’s easy to replicate at home. Whether you’re dining on your balcony or preparing for a busy day, this light meal gives energy without heaviness. With a few good ingredients and attention to detail, you can bring a bit of Paris to your table.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1565958011705-44e211c4d37b?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Use freshly baked croissants or warm store-bought ones in the oven for 5 minutes to restore their flakiness. Pair with strong black coffee or a frothy café au lait for authenticity.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=pvxCvj8QCU4',
        },
      ],
      faqs: [
        {
          ques: 'Can I add jam or butter?',
          ans: 'Yes, strawberry jam or salted butter are common French additions.',
        },
        {
          ques: 'What’s the best coffee type?',
          ans: 'A dark roast espresso or café crème pairs perfectly with croissants.',
        },
        {
          ques: 'Can I use pain au chocolat instead?',
          ans: 'Absolutely. It’s a chocolate-filled cousin of the croissant and equally authentic.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 fresh croissants', type: 'main' },
        { name: '1 cup brewed espresso or café au lait', type: 'main' },
        { name: '1 tablespoon butter or jam (optional)', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Warm the Croissants' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). Place croissants on a tray and heat for 5 minutes until lightly crisp and aromatic.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Brew the Coffee' },
            {
              type: 'text',
              value:
                'Prepare espresso or café au lait. For café au lait, combine equal parts strong coffee and steamed milk.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Serve Parisian Style' },
            {
              type: 'text',
              value:
                'Serve croissants warm with butter or jam. Pour coffee into small cups and enjoy a classic French morning.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '380', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '36', unit: 'g' },
    ],
  },
  {
    _id: 'recp_015_cinnamon_french_toast_creamcheese_berry_syrup',
    basicInfo: {
      recipeName:
        'Cinnamon French Toast with Cream Cheese Glaze and Berry Syrup',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Sweet', value: 'Sweet' },
        { label: 'French Toast', value: 'French Toast' },
        { label: 'Berries', value: 'Berries' },
        { label: 'Brunch', value: 'Brunch' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Brunch', value: 'Brunch' },
        { label: 'Desserts', value: 'Desserts' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1570197571499-166b36435e09?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Thick, Custardy Bread with Luscious Toppings',
        },
        {
          type: 'text',
          value:
            'Cinnamon French toast with cream cheese glaze and berry syrup takes a breakfast classic to the next level. Thick slices of bread soak up a cinnamon-vanilla custard before being golden-fried and topped with smooth cream cheese glaze and fresh berry syrup. The result is a balance of sweetness, tang, and warmth that’s perfect for lazy weekends or special brunches. It looks gourmet but comes together easily in under 30 minutes, making it ideal for impressing guests or treating yourself to something extraordinary.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=5gxtEQHPm9g',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1613145993482-29d6ef9d443b?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Use thick brioche or challah bread for the best texture. The glaze combines cream cheese, powdered sugar, and milk for smooth richness, while the berry syrup adds bright acidity.',
        },
      ],
      faqs: [
        {
          ques: 'Can I make the glaze ahead?',
          ans: 'Yes. Store it in the fridge for up to 3 days and reheat gently before drizzling.',
        },
        {
          ques: 'What berries are best?',
          ans: 'Blueberries, raspberries, and strawberries make a great mix.',
        },
        {
          ques: 'Can I bake instead of pan-fry?',
          ans: 'Yes, bake at 375°F for 15–20 minutes, flipping halfway.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '6 slices brioche bread', type: 'main' },
        { name: '3 eggs', type: 'main' },
        { name: '½ cup milk', type: 'main' },
        { name: '1 teaspoon cinnamon', type: 'main' },
        { name: '1 teaspoon vanilla extract', type: 'main' },
        { name: '1 tablespoon butter', type: 'main' },
        { name: '½ cup cream cheese', type: 'dressing' },
        { name: '¼ cup powdered sugar', type: 'dressing' },
        { name: '1 tablespoon milk', type: 'dressing' },
        { name: '1 cup mixed berries', type: 'dressing' },
        { name: '1 tablespoon honey', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Prepare Custard Mix' },
            {
              type: 'text',
              value:
                'Whisk eggs, milk, cinnamon, and vanilla in a shallow dish. Dip each slice of bread until soaked but not soggy.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Cook the Toast' },
            {
              type: 'text',
              value:
                'Melt butter in a skillet over medium heat. Cook each slice for 2–3 minutes per side until golden brown.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Make the Toppings' },
            {
              type: 'text',
              value:
                'Blend cream cheese, powdered sugar, and milk until smooth. Simmer berries with honey for 5 minutes to make syrup. Drizzle both over toast before serving.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '420', unit: 'kcal' },
      { name: 'Protein', amount: '11', unit: 'g' },
      { name: 'Fat', amount: '20', unit: 'g' },
      { name: 'Carbohydrates', amount: '48', unit: 'g' },
    ],
  },
  {
    _id: 'recp_016_chocolate_banana_pancakes',
    basicInfo: {
      recipeName: 'Chocolate Banana Pancakes',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Pancakes', value: 'Pancakes' },
        { label: 'Banana', value: 'Banana' },
        { label: 'Brunch', value: 'Brunch' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Brunch', value: 'Brunch' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1592916543180-5f9c6a83c1a5?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Fluffy, Chocolatey Pancakes with Naturally Sweet Bananas',
        },
        {
          type: 'text',
          value:
            'These chocolate banana pancakes are soft, moist, and rich with natural sweetness from ripe bananas and cocoa powder. They’re the perfect indulgence that still feels wholesome—ideal for breakfast or dessert. Each bite combines the creamy texture of mashed banana with deep chocolate flavor and a hint of vanilla. You can top them with sliced bananas, chocolate chips, or maple syrup for a restaurant-quality dish that’s easy to make at home. Whether for a cozy weekend or a special brunch, this recipe guarantees melt-in-your-mouth goodness in every stack.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1608897013039-6d12c44a8d66?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Use overripe bananas for maximum sweetness and mash them smoothly before mixing. For extra fluffiness, avoid overmixing the batter once wet and dry ingredients are combined.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=Y0Fc5w1hGQ4',
        },
      ],
      faqs: [
        {
          ques: 'Can I make it vegan?',
          ans: 'Yes. Replace milk with almond milk and egg with a flaxseed egg (1 tbsp flaxseed + 3 tbsp water).',
        },
        {
          ques: 'Can I add protein powder?',
          ans: 'Yes, add 1 scoop of chocolate or vanilla protein powder and reduce flour slightly.',
        },
        {
          ques: 'How to store leftovers?',
          ans: 'Refrigerate in an airtight container for up to 3 days or freeze for up to a month.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup all-purpose flour', type: 'main' },
        { name: '2 tablespoons cocoa powder', type: 'main' },
        { name: '1 tablespoon sugar', type: 'main' },
        { name: '1 teaspoon baking powder', type: 'main' },
        { name: '1 ripe banana, mashed', type: 'main' },
        { name: '¾ cup milk', type: 'main' },
        { name: '1 egg', type: 'main' },
        { name: '1 tablespoon melted butter', type: 'main' },
        { name: '½ teaspoon vanilla extract', type: 'main' },
        { name: 'Pinch of salt', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Mix Dry Ingredients' },
            {
              type: 'text',
              value:
                'Whisk flour, cocoa powder, baking powder, sugar, and salt in a bowl.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Add Wet Ingredients' },
            {
              type: 'text',
              value:
                'In another bowl, combine mashed banana, milk, egg, butter, and vanilla. Mix until smooth. Add to dry ingredients and stir until just combined.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Cook and Serve' },
            {
              type: 'text',
              value:
                'Heat a non-stick skillet and lightly grease. Pour ¼ cup of batter per pancake. Cook until bubbles form, flip, and cook 1 more minute. Serve warm with banana slices and syrup.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '310', unit: 'kcal' },
      { name: 'Protein', amount: '8', unit: 'g' },
      { name: 'Fat', amount: '10', unit: 'g' },
      { name: 'Carbohydrates', amount: '45', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
    ],
  },
  {
    _id: 'recp_017_one_pot_pasta_primavera',
    basicInfo: {
      recipeName: 'One-Pot Pasta Primavera',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Pasta', value: 'Pasta' },
        { label: 'One-Pot', value: 'One-Pot' },
        { label: 'Healthy', value: 'Healthy' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Italian', value: 'Italian' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Light, Colorful, and Comforting Pasta Made in One Pot',
        },
        {
          type: 'text',
          value:
            'One-pot pasta primavera is a simple yet elegant vegetarian dish bursting with fresh vegetables and delicate flavors. This recipe combines tender pasta, zucchini, bell peppers, cherry tomatoes, and spinach, all cooked together in one pot with garlic and olive oil. The starchy pasta water creates a silky sauce that coats every strand, making it light yet creamy. It’s quick, wholesome, and perfect for weeknights when you want something satisfying without the cleanup. Add a sprinkle of Parmesan and lemon zest for a restaurant-quality finish.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1608759277869-3fbbc25e7af4?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=g5eRf8RtA_E',
        },
        {
          type: 'text',
          value:
            'You can easily customize the vegetables based on the season—add asparagus in spring or mushrooms in fall. Use whole-wheat pasta for extra fiber.',
        },
      ],
      faqs: [
        {
          ques: 'Can I add protein?',
          ans: 'Yes, grilled chicken, shrimp, or tofu work perfectly.',
        },
        {
          ques: 'What pasta shape is best?',
          ans: 'Penne or linguine hold the sauce best without overcooking.',
        },
        {
          ques: 'Can I make it dairy-free?',
          ans: 'Yes, skip the Parmesan or use nutritional yeast.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '200g penne pasta', type: 'main' },
        { name: '2 tablespoons olive oil', type: 'main' },
        { name: '2 garlic cloves, minced', type: 'main' },
        { name: '1 zucchini, sliced', type: 'main' },
        { name: '1 bell pepper, chopped', type: 'main' },
        { name: '1 cup cherry tomatoes, halved', type: 'main' },
        { name: '1 cup baby spinach', type: 'main' },
        { name: '2 cups vegetable broth', type: 'main' },
        { name: '1 teaspoon salt', type: 'main' },
        { name: '¼ teaspoon black pepper', type: 'main' },
        { name: '2 tablespoons grated Parmesan (optional)', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Sauté Vegetables' },
            {
              type: 'text',
              value:
                'Heat olive oil in a large pot. Add garlic, zucchini, and bell pepper. Sauté for 3 minutes until slightly softened.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Add Pasta and Broth' },
            {
              type: 'text',
              value:
                'Add pasta, broth, tomatoes, salt, and pepper. Bring to a boil, then simmer uncovered for 10–12 minutes until pasta is al dente and liquid thickens.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Finish and Serve' },
            {
              type: 'text',
              value:
                'Stir in spinach until wilted. Sprinkle Parmesan and lemon zest. Serve hot.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '350', unit: 'kcal' },
      { name: 'Protein', amount: '12', unit: 'g' },
      { name: 'Fat', amount: '10', unit: 'g' },
      { name: 'Carbohydrates', amount: '55', unit: 'g' },
      { name: 'Fiber', amount: '5', unit: 'g' },
    ],
  },
  {
    _id: 'recp_018_carrot_walnut_cake',
    basicInfo: {
      recipeName: 'Carrot and Walnut Cake',
      duration: { label: '1 Hour', value: '60' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '8', value: '8' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Cake', value: 'Cake' },
        { label: 'Baking', value: 'Baking' },
        { label: 'Vegetables', value: 'Vegetables' },
        { label: 'Nuts', value: 'Nuts' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Baking', value: 'Baking' },
        { label: 'Cakes', value: 'Cakes' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1609943247279-1b864c8f7c5d?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Moist, Spiced Cake with Crunchy Walnuts and Creamy Frosting',
        },
        {
          type: 'text',
          value:
            'Carrot and walnut cake is a moist, spiced dessert loved for its balance of texture and flavor. Grated carrots keep it soft and rich, while crushed walnuts add crunch and nuttiness. Infused with cinnamon and nutmeg, it delivers cozy warmth in every bite. Topped with cream cheese frosting, it’s a timeless treat that works for birthdays, tea time, or holidays. Easy to bake and incredibly satisfying, it’s a classic that never goes out of style.',
        },
        {
          type: 'text',
          value:
            'You can use pecans instead of walnuts and whole wheat flour for a healthier version. The cake stores well and tastes even better the next day.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1626266060158-bc5a79ef7d35?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=tuZCOZK5DAE',
        },
      ],
      faqs: [
        {
          ques: 'Can I skip the frosting?',
          ans: 'Yes, but the cream cheese frosting enhances the flavor beautifully.',
        },
        {
          ques: 'How long does it last?',
          ans: 'Store covered in the fridge for up to 5 days.',
        },
        {
          ques: 'Can I freeze it?',
          ans: 'Yes, wrap tightly and freeze for up to 2 months.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 cups grated carrots', type: 'main' },
        { name: '1 ½ cups all-purpose flour', type: 'main' },
        { name: '1 teaspoon baking soda', type: 'main' },
        { name: '1 teaspoon cinnamon', type: 'main' },
        { name: '½ teaspoon nutmeg', type: 'main' },
        { name: '½ cup chopped walnuts', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '¾ cup sugar', type: 'main' },
        { name: '½ cup vegetable oil', type: 'main' },
        { name: '½ cup cream cheese frosting', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Prepare Batter' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). Whisk eggs, sugar, and oil together. Add flour, baking soda, cinnamon, and nutmeg. Fold in carrots and walnuts.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Bake the Cake' },
            {
              type: 'text',
              value:
                'Pour batter into a greased 9-inch pan. Bake for 35–40 minutes or until a toothpick comes out clean. Cool completely.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Frost and Serve' },
            {
              type: 'text',
              value:
                'Spread cream cheese frosting evenly over the cooled cake. Sprinkle with extra walnuts and slice to serve.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '380', unit: 'kcal' },
      { name: 'Protein', amount: '7', unit: 'g' },
      { name: 'Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '40', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
    ],
  },
  {
    _id: 'recp_019_quick_easy_chocolate_cake_with_berries',
    basicInfo: {
      recipeName:
        'Quick & Easy Chocolate Cake with Berries from Scratch Recipe',
      duration: { label: '40 Minutes', value: '40' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '8', value: '8' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Berries', value: 'Berries' },
        { label: 'Baking', value: 'Baking' },
        { label: 'Quick Recipes', value: 'Quick Recipes' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1605475126514-3a44d9e37cf5?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Moist, Fudgy Cake Bursting with Fresh Berry Flavor',
        },
        {
          type: 'text',
          value:
            'This quick and easy chocolate cake with berries is the ultimate homemade dessert that looks impressive yet comes together effortlessly. The batter is made from scratch with pantry staples—flour, cocoa powder, sugar, and oil—baked into a moist, fluffy cake with deep chocolate flavor. Fresh berries add natural sweetness and a pop of color that balances the richness. Perfect for birthdays, family gatherings, or weekend treats, it’s a foolproof cake that’s both elegant and comforting. Top with whipped cream or a dusting of powdered sugar for a bakery-worthy finish in under an hour.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=NZtjvH8uRGs',
        },
        {
          type: 'text',
          value:
            'You can use any mix of berries—strawberries, raspberries, or blueberries work beautifully. Serve slightly warm for the best flavor and texture.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use cocoa drink mix?',
          ans: 'No, use unsweetened cocoa powder for the right chocolate depth.',
        },
        {
          ques: 'Can I use frozen berries?',
          ans: 'Yes, just thaw and drain them first to avoid excess moisture.',
        },
        {
          ques: 'Can I make cupcakes from this batter?',
          ans: 'Yes, adjust baking time to 18–20 minutes.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 ½ cups all-purpose flour', type: 'main' },
        { name: '½ cup cocoa powder', type: 'main' },
        { name: '1 cup sugar', type: 'main' },
        { name: '1 teaspoon baking soda', type: 'main' },
        { name: '½ teaspoon salt', type: 'main' },
        { name: '1 cup water', type: 'main' },
        { name: '⅓ cup vegetable oil', type: 'main' },
        { name: '1 teaspoon vanilla extract', type: 'main' },
        { name: '1 cup mixed berries', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Mix Dry Ingredients' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). In a bowl, whisk flour, cocoa, sugar, baking soda, and salt together.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Add Wet Ingredients' },
            {
              type: 'text',
              value:
                'Stir in water, oil, and vanilla until smooth. Do not overmix. Pour into a greased 9-inch pan.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Bake and Serve' },
            {
              type: 'text',
              value:
                'Bake for 30 minutes or until a toothpick comes out clean. Cool slightly and top with fresh berries.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '290', unit: 'kcal' },
      { name: 'Protein', amount: '4', unit: 'g' },
      { name: 'Fat', amount: '12', unit: 'g' },
      { name: 'Carbohydrates', amount: '42', unit: 'g' },
      { name: 'Sugar', amount: '25', unit: 'g' },
    ],
  },
  {
    _id: 'recp_020_baked_chicken_legs_garlic_dijon',
    basicInfo: {
      recipeName: 'Baked Chicken Legs with Garlic and Dijon',
      duration: { label: '55 Minutes', value: '55' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Chicken', value: 'Chicken' },
        { label: 'Baked', value: 'Baked' },
        { label: 'Garlic', value: 'Garlic' },
        { label: 'Savory', value: 'Savory' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Meat', value: 'Meat' },
        { label: 'Main Course', value: 'Main Course' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Crispy-Skinned Chicken Legs with Bold, Tangy Flavor',
        },
        {
          type: 'text',
          value:
            'This baked chicken leg recipe combines garlic, Dijon mustard, and herbs to create juicy, flavorful meat with a perfectly crispy skin. It’s simple enough for weeknights yet impressive enough for guests. The Dijon and garlic marinade infuses every bite with savory depth while baking keeps the meat tender. Serve it with roasted vegetables or mashed potatoes for a hearty, balanced meal. You only need 10 minutes of prep before the oven does all the work—proof that elegant flavor doesn’t require hours in the kitchen.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1601050690597-7c2c9b6460f5?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=hhCkRfXTRzM',
        },
        {
          type: 'text',
          value:
            'For best results, marinate the chicken for 30 minutes to allow the flavors to fully penetrate before baking.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use chicken thighs?',
          ans: 'Yes, bone-in thighs work perfectly with the same timing.',
        },
        {
          ques: 'Can I replace Dijon with honey mustard?',
          ans: 'Yes, but reduce the honey or sugar in your side dishes to balance sweetness.',
        },
        {
          ques: 'Can I grill instead of bake?',
          ans: 'Absolutely—grill for about 25 minutes, turning occasionally.',
        },
      ],
    },
    directions: {
      ingredients: [
        {
          name: '4 chicken legs (drumsticks and thighs attached)',
          type: 'main',
        },
        { name: '3 tablespoons Dijon mustard', type: 'main' },
        { name: '2 tablespoons olive oil', type: 'main' },
        { name: '3 garlic cloves, minced', type: 'main' },
        { name: '1 teaspoon rosemary', type: 'main' },
        { name: '½ teaspoon black pepper', type: 'main' },
        { name: '½ teaspoon salt', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Prepare the Marinade' },
            {
              type: 'text',
              value:
                'In a bowl, mix Dijon mustard, olive oil, garlic, rosemary, salt, and pepper. Coat chicken evenly.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Bake the Chicken' },
            {
              type: 'text',
              value:
                'Place chicken on a lined baking tray and bake at 400°F (200°C) for 40–45 minutes until golden and cooked through.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Rest and Serve' },
            {
              type: 'text',
              value:
                'Let chicken rest 5 minutes before serving to retain juices. Pair with mashed potatoes or roasted veggies.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '380', unit: 'kcal' },
      { name: 'Protein', amount: '32', unit: 'g' },
      { name: 'Fat', amount: '26', unit: 'g' },
      { name: 'Carbohydrates', amount: '2', unit: 'g' },
    ],
  },
  {
    _id: 'recp_021_avocado_toast_valerianella_egg',
    basicInfo: {
      recipeName: 'Avocado Toast with Valerianella and Egg',
      duration: { label: '15 Minutes', value: '15' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Brunch', value: 'Brunch' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Avocado', value: 'Avocado' },
        { label: 'Protein', value: 'Protein' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Brunch', value: 'Brunch' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value:
            'Creamy Avocado Toast with Peppery Valerianella and Perfect Eggs',
        },
        {
          type: 'text',
          value:
            'This upgraded avocado toast pairs creamy mashed avocado with fresh valerianella (lamb’s lettuce) and a soft-boiled egg for a perfectly balanced breakfast. The greens add a peppery crunch, while the egg provides rich protein and creaminess. Light, satisfying, and beautifully layered, it’s a restaurant-style dish you can make in under 15 minutes. Seasoned with olive oil, lemon, and cracked pepper, each bite feels fresh yet comforting. Ideal for busy mornings, brunches, or a post-workout meal that’s full of good fats and nutrients.',
        },
        {
          type: 'text',
          value:
            'You can substitute valerianella with arugula or baby spinach if unavailable. Toast sourdough bread for a rustic flavor and sturdy base.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1604909053112-3b9b7c5688cf?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=yrI-bJhSuw8',
        },
      ],
      faqs: [
        {
          ques: 'Can I use poached eggs instead?',
          ans: 'Yes, poached or sunny-side-up eggs both work beautifully.',
        },
        {
          ques: 'How do I prevent soggy toast?',
          ans: 'Toast the bread until golden and add avocado right before serving.',
        },
        {
          ques: 'Is valerianella easy to find?',
          ans: 'Yes, it’s often labeled as lamb’s lettuce or corn salad in grocery stores.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 slices sourdough bread', type: 'main' },
        { name: '1 ripe avocado', type: 'main' },
        { name: '1 cup valerianella (lamb’s lettuce)', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '1 teaspoon olive oil', type: 'main' },
        { name: '1 teaspoon lemon juice', type: 'main' },
        { name: 'Salt and black pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Cook the Eggs' },
            {
              type: 'text',
              value:
                'Bring water to a boil and cook eggs for 6–7 minutes for soft-boiled or 9 minutes for firm yolks. Cool slightly and peel.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Prepare the Toast' },
            {
              type: 'text',
              value:
                'Toast the sourdough slices until crisp. Mash avocado with lemon juice, salt, and pepper, and spread evenly on toast.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Assemble and Serve' },
            {
              type: 'text',
              value:
                'Top with valerianella and sliced eggs. Drizzle with olive oil and add a sprinkle of cracked pepper before serving.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '340', unit: 'kcal' },
      { name: 'Protein', amount: '12', unit: 'g' },
      { name: 'Fat', amount: '24', unit: 'g' },
      { name: 'Carbohydrates', amount: '20', unit: 'g' },
      { name: 'Fiber', amount: '6', unit: 'g' },
    ],
  },
  {
    _id: 'recp_022_marshmallow_light_easy_cake',
    basicInfo: {
      recipeName: 'Marshmallow Light and Easy Cake',
      duration: { label: '35 Minutes', value: '35' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '6', value: '6' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Cake', value: 'Cake' },
        { label: 'Marshmallow', value: 'Marshmallow' },
        { label: 'Sweet', value: 'Sweet' },
        { label: 'Quick Bake', value: 'Quick Bake' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1599785209707-28c4dc7d8e3b?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Soft, Fluffy Cake with a Gooey Marshmallow Twist',
        },
        {
          type: 'text',
          value:
            'This marshmallow light and easy cake is the definition of comfort dessert. A soft vanilla sponge is baked with melted marshmallows folded into the batter, creating gooey ribbons throughout each slice. It’s sweet but not overwhelming, light in texture, and quick to prepare with no special tools required. The cake rises beautifully in the oven and has a lovely golden crust with a melt-in-your-mouth center. Perfect for birthdays, casual gatherings, or when you need something quick and delightful.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=LE6v2l7PkBk',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1618219761425-3a6ce4855864?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Serve with whipped cream, chocolate drizzle, or toasted marshmallows on top for extra indulgence.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use mini marshmallows?',
          ans: 'Yes, they melt evenly and are easier to fold into the batter.',
        },
        {
          ques: 'Can I make it chocolate-flavored?',
          ans: 'Yes, replace ¼ cup of flour with cocoa powder for a chocolate version.',
        },
        {
          ques: 'How do I store leftovers?',
          ans: 'Keep in an airtight container at room temperature for up to 2 days.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 ¼ cups all-purpose flour', type: 'main' },
        { name: '½ cup sugar', type: 'main' },
        { name: '1 teaspoon baking powder', type: 'main' },
        { name: '¼ teaspoon salt', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '½ cup milk', type: 'main' },
        { name: '¼ cup melted butter', type: 'main' },
        { name: '1 cup mini marshmallows', type: 'main' },
        { name: '1 teaspoon vanilla extract', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Prepare Batter' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). Whisk flour, sugar, baking powder, and salt in a bowl. Add eggs, milk, butter, and vanilla. Mix until smooth.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Add Marshmallows' },
            {
              type: 'text',
              value:
                'Fold marshmallows into the batter gently. Pour mixture into a greased 8-inch baking pan.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Bake and Serve' },
            {
              type: 'text',
              value:
                'Bake for 25–30 minutes until golden brown and spongy. Cool before slicing and serve plain or topped with whipped cream.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '280', unit: 'kcal' },
      { name: 'Protein', amount: '5', unit: 'g' },
      { name: 'Fat', amount: '10', unit: 'g' },
      { name: 'Carbohydrates', amount: '42', unit: 'g' },
      { name: 'Sugar', amount: '26', unit: 'g' },
    ],
  },
  {
    _id: 'recp_023_cupcakes_pistachio_pudding',
    basicInfo: {
      recipeName: 'Cupcakes with Pistachio Pudding',
      duration: { label: '45 Minutes', value: '45' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '12', value: '12' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Cupcakes', value: 'Cupcakes' },
        { label: 'Pistachio', value: 'Pistachio' },
        { label: 'Baking', value: 'Baking' },
        { label: 'Party', value: 'Party' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cupcakes', value: 'Cupcakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1621244463122-1a3b6c3e1877?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Delicate Cupcakes Filled with Creamy Pistachio Pudding',
        },
        {
          type: 'text',
          value:
            'These cupcakes with pistachio pudding are a delightful treat that combines soft vanilla sponge with a smooth pistachio cream center. The light green color and nutty flavor make them elegant enough for celebrations and fun enough for casual bakes. The cupcakes stay moist for days, and the pudding adds an irresistible creamy texture. Topped with whipped cream or crushed pistachios, they’re a show-stopping dessert that’s as beautiful as it is delicious.',
        },
        {
          type: 'text',
          value:
            'You can fill the cupcakes by cutting out the center or piping the pudding directly with a narrow nozzle for a neat finish.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1616690710400-379c9487a497?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=USMJMBEPzBw',
        },
      ],
      faqs: [
        {
          ques: 'Can I use store-bought pistachio pudding?',
          ans: 'Yes, it works perfectly and saves time.',
        },
        {
          ques: 'How do I store these cupcakes?',
          ans: 'Keep refrigerated if filled with pudding, and serve chilled or at room temperature.',
        },
        {
          ques: 'Can I add chocolate chips?',
          ans: 'Yes, they add great texture and flavor contrast.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 ½ cups all-purpose flour', type: 'main' },
        { name: '1 cup sugar', type: 'main' },
        { name: '1 teaspoon baking powder', type: 'main' },
        { name: '½ teaspoon salt', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '½ cup butter, melted', type: 'main' },
        { name: '¾ cup milk', type: 'main' },
        { name: '1 teaspoon vanilla extract', type: 'main' },
        { name: '1 package instant pistachio pudding mix', type: 'dressing' },
        {
          name: '2 tablespoons crushed pistachios (for topping)',
          type: 'dressing',
        },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Prepare Batter' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). Line a 12-cup muffin pan. Mix flour, sugar, baking powder, and salt. Add eggs, milk, butter, and vanilla; whisk until smooth.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Bake Cupcakes' },
            {
              type: 'text',
              value:
                'Pour batter evenly into liners. Bake for 18–20 minutes until golden and a toothpick comes out clean. Cool completely.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Fill and Garnish' },
            {
              type: 'text',
              value:
                'Prepare pistachio pudding as per package instructions. Fill cupcakes and top with whipped cream and crushed pistachios.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '310', unit: 'kcal' },
      { name: 'Protein', amount: '5', unit: 'g' },
      { name: 'Fat', amount: '14', unit: 'g' },
      { name: 'Carbohydrates', amount: '42', unit: 'g' },
      { name: 'Sugar', amount: '24', unit: 'g' },
    ],
  },
  {
    _id: 'recp_024_apple_tart_extra_buttery_flaky_crust',
    basicInfo: {
      recipeName: 'Apple Tart Recipe: Extra Buttery & Flaky Crust',
      duration: { label: '1 Hour', value: '60' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '8', value: '8' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Apple', value: 'Apple' },
        { label: 'Tart', value: 'Tart' },
        { label: 'Baking', value: 'Baking' },
        { label: 'Fall', value: 'Fall' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Baking', value: 'Baking' },
        { label: 'Pies', value: 'Pies' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1612198730916-0fdf2a6230e7?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value:
            'Classic French-Style Apple Tart with a Melt-in-Your-Mouth Crust',
        },
        {
          type: 'text',
          value:
            'This apple tart delivers a bakery-quality dessert with a buttery, flaky crust and caramelized apple slices that glisten like stained glass. The secret lies in using cold butter and minimal kneading to create tender layers in the pastry. Tart Granny Smith apples lend brightness while a touch of sugar and cinnamon adds warmth. Serve it slightly warm with a scoop of vanilla ice cream or whipped cream for a dessert that feels both rustic and refined. Perfect for holidays, cozy weekends, or any moment that deserves a little sweetness.',
        },
        {
          type: 'text',
          value:
            'Chill the dough before rolling—it keeps the crust from shrinking during baking. You can brush apricot jam on top for shine.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1601066523164-5b97f9d5fa0b?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=FqgoI5wb2t4',
        },
      ],
      faqs: [
        {
          ques: 'Can I use store-bought pastry?',
          ans: 'Yes, puff pastry works fine if you’re short on time.',
        },
        {
          ques: 'What apples are best?',
          ans: 'Granny Smith, Honeycrisp, or Golden Delicious hold shape well.',
        },
        {
          ques: 'How do I keep the crust crisp?',
          ans: 'Pre-bake (blind bake) the shell for 10 minutes before adding apples.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 ½ cups all-purpose flour', type: 'main' },
        { name: '½ cup cold butter, cubed', type: 'main' },
        { name: '3 tablespoons cold water', type: 'main' },
        { name: '4 apples, peeled & sliced', type: 'main' },
        { name: '2 tablespoons sugar', type: 'main' },
        { name: '½ teaspoon cinnamon', type: 'main' },
        { name: '1 tablespoon apricot jam', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Make the Crust' },
            {
              type: 'text',
              value:
                'Cut butter into flour using fingertips until coarse crumbs form. Add cold water and mix just until dough holds. Chill 30 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Prepare Apples' },
            {
              type: 'text',
              value:
                'Slice apples thinly and toss with sugar and cinnamon. Set aside.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Assemble & Bake' },
            {
              type: 'text',
              value:
                'Roll dough, place in tart pan, arrange apples neatly, and bake at 375°F (190°C) for 35–40 minutes until golden. Brush jam over top.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '310', unit: 'kcal' },
      { name: 'Protein', amount: '4', unit: 'g' },
      { name: 'Fat', amount: '16', unit: 'g' },
      { name: 'Carbohydrates', amount: '38', unit: 'g' },
      { name: 'Sugar', amount: '18', unit: 'g' },
    ],
  },
  {
    _id: 'recp_025_french_onion_soup_veggie_stock',
    basicInfo: {
      recipeName: 'French Onion Soup with Veggie Stock',
      duration: { label: '1 Hour 10 Minutes', value: '70' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Soup', value: 'Soup' },
        { label: 'French', value: 'French' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Comfort Food', value: 'Comfort Food' },
        { label: 'Dinner', value: 'Dinner' },
      ],
      categories: [
        { label: 'Soups', value: 'Soups' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Dinner', value: 'Dinner' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1609447832144-7f22ad5d22b4?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Rich, Caramelized Onion Soup Made Entirely Vegetarian',
        },
        {
          type: 'text',
          value:
            'This French onion soup uses a flavorful vegetable stock for a lighter yet deeply satisfying take on the classic. Onions are slowly caramelized until golden and sweet, then simmered in broth with a splash of white wine for complexity. Finished with toasted baguette slices and melted Gruyère cheese, it’s the ultimate comfort bowl. The slow cooking of onions is key—patience transforms their sharpness into velvety sweetness. Perfect for cozy dinners or cold evenings when you crave something rustic and heart-warming.',
        },
        {
          type: 'text',
          value:
            'You can substitute Gruyère with mozzarella or vegan cheese for a dairy-free version.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=wVv0s59aV9I',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1616509937464-4c47df8e7b48?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
      ],
      faqs: [
        {
          ques: 'Can I use beef stock instead?',
          ans: 'Yes, but the vegetable stock keeps it lighter and vegetarian.',
        },
        {
          ques: 'Can I freeze leftovers?',
          ans: 'Yes, freeze up to 2 months without the bread topping.',
        },
        {
          ques: 'What onions are best?',
          ans: 'Yellow or sweet onions give the best flavor.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '4 large yellow onions, thinly sliced', type: 'main' },
        { name: '2 tablespoons butter', type: 'main' },
        { name: '1 tablespoon olive oil', type: 'main' },
        { name: '6 cups vegetable stock', type: 'main' },
        { name: '½ cup white wine', type: 'main' },
        { name: '1 teaspoon thyme', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
        { name: '4 baguette slices', type: 'dressing' },
        { name: '½ cup shredded Gruyère cheese', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Caramelize Onions' },
            {
              type: 'text',
              value:
                'In a pot, melt butter with olive oil. Add onions and cook on low heat for 30–35 minutes until deep golden brown.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Add Liquids' },
            {
              type: 'text',
              value:
                'Deglaze with wine, scraping the pot, then add stock and thyme. Simmer uncovered for 25 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Serve and Broil' },
            {
              type: 'text',
              value:
                'Ladle soup into bowls, top with baguette and cheese, then broil until bubbling and golden.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '290', unit: 'kcal' },
      { name: 'Protein', amount: '10', unit: 'g' },
      { name: 'Fat', amount: '14', unit: 'g' },
      { name: 'Carbohydrates', amount: '32', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
    ],
  },
  {
    _id: 'recp_026_make_chicken_paella_under_an_hour',
    basicInfo: {
      recipeName: 'Make Chicken Paella in Under an Hour',
      duration: { label: '55 Minutes', value: '55' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Spanish', value: 'Spanish' },
        { label: 'Rice', value: 'Rice' },
        { label: 'Chicken', value: 'Chicken' },
        { label: 'One-Pot', value: 'One-Pot' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Main Course', value: 'Main Course' },
        { label: 'Spanish Cuisine', value: 'Spanish Cuisine' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1608136690552-11b46b9e84ea?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Authentic Spanish Chicken Paella in Less Than an Hour',
        },
        {
          type: 'text',
          value:
            'This quick chicken paella captures the essence of Spanish coastal cooking — colorful rice, tender chicken, and aromatic spices all in one pan. Traditionally cooked over open flame, this version adapts beautifully to the home kitchen. Saffron lends the signature golden hue and fragrance, while smoked paprika gives depth. The key is letting the rice absorb every bit of flavor without stirring, allowing a crispy layer (socarrat) to form at the bottom. Perfect for weeknight dinners that feel like a celebration.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1617196034785-2cb927d7c69d?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=nUL3FZQxG9o',
        },
        {
          type: 'text',
          value:
            'To achieve authentic texture, use short-grain rice like bomba or arborio and avoid covering the pan once simmering starts.',
        },
      ],
      faqs: [
        {
          ques: 'Can I add seafood?',
          ans: 'Yes, shrimp or mussels can be added during the last 10 minutes of cooking.',
        },
        {
          ques: 'What can I use instead of saffron?',
          ans: 'Turmeric gives color but not the same aroma; use sparingly as a substitute.',
        },
        {
          ques: 'Do I need a paella pan?',
          ans: 'A wide skillet works just as well for home versions.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 chicken thighs, boneless and cut in chunks', type: 'main' },
        { name: '1 cup short-grain rice', type: 'main' },
        { name: '2 tablespoons olive oil', type: 'main' },
        { name: '½ teaspoon saffron threads', type: 'main' },
        { name: '1 teaspoon smoked paprika', type: 'main' },
        { name: '2 garlic cloves, minced', type: 'main' },
        { name: '1 small onion, chopped', type: 'main' },
        { name: '1 bell pepper, chopped', type: 'main' },
        { name: '2 cups chicken broth', type: 'main' },
        { name: '½ cup frozen peas', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Sear the Chicken' },
            {
              type: 'text',
              value:
                'Heat olive oil in a wide pan over medium heat. Sear chicken pieces until browned on all sides. Remove and set aside.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Cook Vegetables' },
            {
              type: 'text',
              value:
                'In the same pan, sauté onion, garlic, and bell pepper for 5 minutes until softened. Add paprika and saffron; stir briefly.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Simmer the Paella' },
            {
              type: 'text',
              value:
                'Add rice and broth, return chicken, and season with salt and pepper. Simmer uncovered for 20–25 minutes until rice is tender and liquid absorbed. Add peas near the end and serve warm.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '420', unit: 'kcal' },
      { name: 'Protein', amount: '25', unit: 'g' },
      { name: 'Fat', amount: '18', unit: 'g' },
      { name: 'Carbohydrates', amount: '40', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
    ],
  },
  {
    _id: 'recp_027_avocado_toast_eggs_cucumber_radish',
    basicInfo: {
      recipeName: 'Avocado Toast with Eggs, Cucumber and Radish',
      duration: { label: '12 Minutes', value: '12' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Avocado', value: 'Avocado' },
        { label: 'Quick', value: 'Quick' },
        { label: 'Vegetarian', value: 'Vegetarian' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Brunch', value: 'Brunch' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1589307004173-3c95204da1b1?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Fresh and Crunchy Upgrade to Classic Avocado Toast',
        },
        {
          type: 'text',
          value:
            'This version of avocado toast adds crisp cucumber and radish slices for a refreshing crunch, while soft-boiled eggs bring richness and protein. Each bite balances creamy, cool, and earthy flavors—making it the perfect nutritious breakfast or light lunch. The combination of textures keeps it exciting, and it’s ready in minutes. A sprinkle of sea salt, chili flakes, and lemon juice brightens the flavor beautifully. It’s a meal that feels fancy but takes almost no effort.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1611078484374-fc1d2a1b2526?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=jqR9G4QDFnE',
        },
        {
          type: 'text',
          value:
            'Try using multi-grain or rye bread for extra fiber and a nutty base that complements the creamy toppings.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use fried eggs?',
          ans: 'Yes, fried or poached eggs both work perfectly.',
        },
        {
          ques: 'Can I add other toppings?',
          ans: 'Smoked salmon, sprouts, or feta cheese make great additions.',
        },
        {
          ques: 'Can I meal prep this?',
          ans: 'You can pre-slice the veggies but assemble just before serving to keep toast crisp.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 slices whole-grain bread', type: 'main' },
        { name: '1 ripe avocado', type: 'main' },
        { name: '2 soft-boiled eggs', type: 'main' },
        { name: '¼ cucumber, thinly sliced', type: 'main' },
        { name: '2 radishes, thinly sliced', type: 'main' },
        { name: '1 teaspoon lemon juice', type: 'main' },
        { name: 'Salt, pepper, and chili flakes to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Prep the Eggs and Veggies' },
            {
              type: 'text',
              value:
                'Soft-boil eggs for 7 minutes, cool, and peel. Thinly slice cucumber and radish.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Mash and Spread Avocado' },
            {
              type: 'text',
              value:
                'Mash avocado with lemon juice, salt, and pepper. Spread generously on toasted bread.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Assemble and Serve' },
            {
              type: 'text',
              value:
                'Top with cucumber, radish, and halved eggs. Sprinkle chili flakes and enjoy immediately.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '320', unit: 'kcal' },
      { name: 'Protein', amount: '13', unit: 'g' },
      { name: 'Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '18', unit: 'g' },
      { name: 'Fiber', amount: '5', unit: 'g' },
    ],
  },
  {
    _id: 'recp_028_deliciously_spicy_thai_chili_crab',
    basicInfo: {
      recipeName: 'Deliciously Spicy Thai Chili Crab Recipe',
      duration: { label: '40 Minutes', value: '40' },
      level: { label: 'Hard', value: 'Hard' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Seafood', value: 'Seafood' },
        { label: 'Spicy', value: 'Spicy' },
        { label: 'Thai', value: 'Thai' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Exotic', value: 'Exotic' },
      ],
      categories: [
        { label: 'Seafood', value: 'Seafood' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Asian Cuisine', value: 'Asian Cuisine' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1621293954908-907d2ad5dc7c?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Fiery, Saucy Crab Bursting with Thai Flavors',
        },
        {
          type: 'text',
          value:
            'Thai chili crab is a sensational seafood dish known for its bold, sweet, spicy, and tangy flavors. Fresh crab is stir-fried in a sauce made with garlic, chili paste, lime juice, and fish sauce, creating a glossy, aromatic coating. The result is messy, finger-licking perfection that captures the heart of Thai street food. Served with jasmine rice or steamed buns, it’s an impressive main course that turns any dinner into an unforgettable feast.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=w_Ew9tiQG7g',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1605902711622-cfb43c4437f5?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Use fresh crab whenever possible and adjust chili heat to your liking. A squeeze of lime before serving brightens the flavors.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use frozen crab?',
          ans: 'Yes, thaw completely and pat dry before cooking.',
        },
        {
          ques: 'Can I use other seafood?',
          ans: 'Shrimp or lobster tails also work beautifully with this sauce.',
        },
        {
          ques: 'How spicy is it?',
          ans: 'Moderate to hot. You can reduce chili paste if preferred.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 whole crabs, cleaned and cut', type: 'main' },
        { name: '3 tablespoons vegetable oil', type: 'main' },
        { name: '4 garlic cloves, minced', type: 'main' },
        { name: '2 tablespoons Thai chili paste', type: 'main' },
        { name: '1 tablespoon fish sauce', type: 'main' },
        { name: '1 tablespoon soy sauce', type: 'main' },
        { name: '1 tablespoon lime juice', type: 'main' },
        { name: '1 teaspoon sugar', type: 'main' },
        { name: '2 green onions, chopped', type: 'dressing' },
        { name: 'Cilantro leaves for garnish', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1: Prepare the Sauce' },
            {
              type: 'text',
              value:
                'Mix chili paste, fish sauce, soy sauce, lime juice, and sugar in a small bowl. Set aside.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2: Cook the Crab' },
            {
              type: 'text',
              value:
                'Heat oil in a large wok. Add garlic and cook until fragrant, about 30 seconds. Add crab and stir-fry for 3–4 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3: Add Sauce and Simmer' },
            {
              type: 'text',
              value:
                'Pour sauce over crab and toss well. Cover and cook 10–12 minutes until sauce thickens and crab is fully coated. Garnish with onions and cilantro.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '390', unit: 'kcal' },
      { name: 'Protein', amount: '30', unit: 'g' },
      { name: 'Fat', amount: '20', unit: 'g' },
      { name: 'Carbohydrates', amount: '10', unit: 'g' },
      { name: 'Sodium', amount: '640', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_029_avocado_toast_spinach_egg',
    basicInfo: {
      recipeName: 'Avocado Toast with Spinach and Egg',
      duration: { label: '15 Minutes', value: '15' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Quick', value: 'Quick' },
        { label: 'Avocado', value: 'Avocado' },
        { label: 'Protein', value: 'Protein' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Brunch', value: 'Brunch' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1572448862529-7f0f15a62d16?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Wholesome Avocado Toast with Wilted Spinach and Soft Eggs',
        },
        {
          type: 'text',
          value:
            'This nourishing avocado toast combines creamy mashed avocado with lightly wilted spinach and soft-boiled eggs for a protein-packed breakfast that’s as satisfying as it is quick. The rich yolk mingles with buttery avocado while the greens add gentle earthiness. Seasoned with sea salt, cracked pepper, and a drizzle of olive oil, each bite tastes fresh and balanced. It’s ready in under 15 minutes and fuels you with healthy fats, fiber, and vitamins—ideal for busy mornings or post-workout meals.',
        },
        {
          type: 'text',
          value:
            'You can sauté spinach briefly in olive oil or steam it for 30 seconds to preserve nutrients. Top with chili flakes for heat.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1588167056543-65dfdfd51a2e?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=rxuO9pOX2sE',
        },
      ],
      faqs: [
        {
          ques: 'Can I use scrambled eggs?',
          ans: 'Yes, scrambled or poached eggs both work great.',
        },
        {
          ques: 'Can I meal prep it?',
          ans: 'Toast bread fresh but pre-cook eggs and mash avocado ahead.',
        },
        {
          ques: 'What bread works best?',
          ans: 'Whole-grain or sourdough hold toppings without sogginess.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 slices whole-grain bread', type: 'main' },
        { name: '1 ripe avocado', type: 'main' },
        { name: '1 cup baby spinach', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '1 tsp olive oil', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Cook the Eggs' },
            {
              type: 'text',
              value: 'Soft-boil or poach eggs for 6–7 minutes. Set aside.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Prepare Spinach' },
            {
              type: 'text',
              value:
                'Sauté spinach with olive oil for 30 seconds until wilted.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Assemble Toast' },
            {
              type: 'text',
              value:
                'Toast bread, spread mashed avocado, top with spinach and eggs. Season and serve.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '340', unit: 'kcal' },
      { name: 'Protein', amount: '14', unit: 'g' },
      { name: 'Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '20', unit: 'g' },
      { name: 'Fiber', amount: '6', unit: 'g' },
    ],
  },
  {
    _id: 'recp_030_creamy_potato_soup_almond_milk',
    basicInfo: {
      recipeName: 'Creamy Potato Soup with Almond Milk',
      duration: { label: '35 Minutes', value: '35' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Soup', value: 'Soup' },
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Comfort Food', value: 'Comfort Food' },
        { label: 'Gluten-Free', value: 'Gluten-Free' },
      ],
      categories: [
        { label: 'Soups', value: 'Soups' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Vegan', value: 'Vegan' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1629728054877-f75d7e0bdb7f?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Silky Dairy-Free Potato Soup Rich in Flavor',
        },
        {
          type: 'text',
          value:
            'This creamy potato soup gets its luxurious texture from almond milk instead of cream, making it lighter yet still satisfying. Garlic, onion, and a touch of thyme give depth, while the potatoes cook down into velvety smoothness. A quick blend transforms it into a restaurant-worthy comfort bowl without any dairy. Perfect for chilly days, it’s wholesome, budget-friendly, and nourishing. Serve with crusty bread or a drizzle of olive oil for the ultimate cozy meal.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1617196034564-b42f261f9bda?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=Z1Db0H7W1cE',
        },
        {
          type: 'text',
          value:
            'Use unsweetened almond milk to avoid altering flavor. Blend half the soup and keep some chunks for texture.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use other plant milks?',
          ans: 'Yes, oat or cashew milk works great.',
        },
        {
          ques: 'Can I freeze leftovers?',
          ans: 'Yes, cool fully and freeze up to 2 months.',
        },
        {
          ques: 'How do I thicken it more?',
          ans: 'Simmer uncovered to reduce liquid slightly.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '4 medium potatoes, diced', type: 'main' },
        { name: '1 onion, chopped', type: 'main' },
        { name: '2 garlic cloves, minced', type: 'main' },
        { name: '3 cups vegetable broth', type: 'main' },
        { name: '1 cup unsweetened almond milk', type: 'main' },
        { name: '1 tbsp olive oil', type: 'main' },
        { name: '1 tsp thyme', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Sauté Aromatics' },
            {
              type: 'text',
              value: 'Heat olive oil, cook onion and garlic until fragrant.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Simmer Soup' },
            {
              type: 'text',
              value:
                'Add potatoes, broth, thyme, salt, and pepper. Simmer 20 minutes until soft.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Blend and Serve' },
            {
              type: 'text',
              value:
                'Blend until creamy, stir in almond milk, heat 2 minutes more, and serve.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '210', unit: 'kcal' },
      { name: 'Protein', amount: '5', unit: 'g' },
      { name: 'Fat', amount: '6', unit: 'g' },
      { name: 'Carbohydrates', amount: '34', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
    ],
  },
  {
    _id: 'recp_031_easy_healthy_banana_oat_pancakes',
    basicInfo: {
      recipeName: 'Easy and Healthy Banana Oat Pancakes',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Oats', value: 'Oats' },
        { label: 'Banana', value: 'Banana' },
        { label: 'Gluten-Free', value: 'Gluten-Free' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Brunch', value: 'Brunch' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1587731511547-21d0f837e8d4?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Fluffy, Guilt-Free Pancakes with Just Oats and Bananas',
        },
        {
          type: 'text',
          value:
            'These banana oat pancakes are made with just a handful of wholesome ingredients—ripe bananas, oats, eggs, and a splash of milk—blended to perfection. They’re naturally sweet, high in fiber, and ideal for anyone looking for a quick healthy breakfast. The texture is tender and slightly nutty from the oats, and they cook up beautifully golden in minutes. Perfect for kids or adults alike, they deliver all the comfort of classic pancakes with none of the refined flour.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=vh4lBkh1NRo' },
        {
          type: 'text',
          value:
            'Top with berries or peanut butter for added protein and flavor. Use rolled oats, not instant.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1603048297490-bdfd3b15af4d?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
      ],
      faqs: [
        {
          ques: 'Can I make them vegan?',
          ans: 'Yes, replace eggs with flax eggs and milk with almond milk.',
        },
        {
          ques: 'Can I store leftovers?',
          ans: 'Keep in fridge for 3 days or freeze up to 1 month.',
        },
        {
          ques: 'Are they gluten-free?',
          ans: 'Yes, if you use certified gluten-free oats.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 ripe bananas', type: 'main' },
        { name: '1 cup rolled oats', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '¼ cup milk', type: 'main' },
        { name: '1 tsp baking powder', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Blend Batter' },
            { type: 'text', value: 'Blend all ingredients until smooth.' },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Cook Pancakes' },
            {
              type: 'text',
              value:
                'Pour batter onto hot non-stick pan, cook 2 minutes each side.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Serve' },
            {
              type: 'text',
              value: 'Stack, drizzle honey or maple syrup, and enjoy.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '310', unit: 'kcal' },
      { name: 'Protein', amount: '12', unit: 'g' },
      { name: 'Fat', amount: '8', unit: 'g' },
      { name: 'Carbohydrates', amount: '48', unit: 'g' },
      { name: 'Fiber', amount: '5', unit: 'g' },
    ],
  },
  {
    _id: 'recp_032_tasty_vegetable_masala_maggie_noodles',
    basicInfo: {
      recipeName: "Tasty Vegetable Masala Maggi Noodles",
      duration: { label: '15 Minutes', value: '15' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '1', value: '1' },
      tags: [
        { label: 'Snack', value: 'Snack' },
        { label: 'Quick', value: 'Quick' },
        { label: 'Indian', value: 'Indian' },
        { label: 'Spicy', value: 'Spicy' },
        { label: 'Vegetables', value: 'Vegetables' },
      ],
      categories: [
        { label: 'Snacks', value: 'Snacks' },
        { label: 'Quick Meals', value: 'Quick Meals' },
        { label: 'Indian', value: 'Indian' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1626166767197-178b4f01c93c?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Street-Style Masala Maggi Loaded with Veggies',
        },
        {
          type: 'text',
          value:
            'A quick fix for every craving—these masala noodles are bursting with flavor from sautéed onions, tomatoes, and Indian spices. Tossed with colorful vegetables, it’s a one-pan comfort dish ready in minutes. The noodles absorb all the masala goodness, creating a spicy, tangy bowl that feels indulgent yet quick. Great for late-night snacks, college meals, or quick lunches when time is short but taste matters.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=wJKwJ1OqLJw' },
        {
          type: 'text',
          value:
            'Add cheese for creaminess or chili flakes for extra heat. You can also use ramen or instant noodles.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1603886887186-86dfc3d6cf8c?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
      ],
      faqs: [
        {
          ques: 'Can I use other noodles?',
          ans: 'Yes, ramen or spaghetti also work.',
        },
        {
          ques: 'Can I make it vegan?',
          ans: 'Yes, ensure masala packets are plant-based.',
        },
        {
          ques: 'Best veggies to add?',
          ans: 'Carrots, capsicum, peas, and corn are great choices.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 packet Maggi noodles with masala', type: 'main' },
        { name: '½ onion, sliced', type: 'main' },
        { name: '½ tomato, chopped', type: 'main' },
        { name: '¼ cup mixed vegetables', type: 'main' },
        { name: '½ tsp garam masala', type: 'main' },
        { name: '½ tsp chili powder', type: 'main' },
        { name: '1 tbsp oil', type: 'main' },
        { name: '¾ cup water', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Cook Veggies' },
            {
              type: 'text',
              value: 'Heat oil, sauté onions and tomatoes until soft.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Add Masala' },
            {
              type: 'text',
              value: 'Add veggies, spices, and masala packet. Stir well.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Cook Noodles' },
            {
              type: 'text',
              value:
                'Add water and noodles, cook 2–3 mins until done. Serve hot.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '370', unit: 'kcal' },
      { name: 'Protein', amount: '8', unit: 'g' },
      { name: 'Fat', amount: '14', unit: 'g' },
      { name: 'Carbohydrates', amount: '50', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
    ],
  },
  {
    _id: 'recp_033_easy_sheet_pan_baked_eggs_veggies',
    basicInfo: {
      recipeName: 'Easy Sheet Pan Baked Eggs and Veggies',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Eggs', value: 'Eggs' },
        { label: 'Vegetables', value: 'Vegetables' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Sheet Pan', value: 'Sheet Pan' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Quick Meals', value: 'Quick Meals' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Colorful Veggie-Packed Breakfast Made on One Sheet',
        },
        {
          type: 'text',
          value:
            'This sheet pan recipe brings together baked eggs, colorful bell peppers, cherry tomatoes, and spinach for a quick and nutritious meal. Simply arrange everything on a pan, season, and bake—it’s effortless and ideal for meal prep or feeding a crowd. The eggs cook perfectly over the roasted vegetables, creating a vibrant dish full of flavor and texture. It’s healthy, simple, and looks beautiful right out of the oven.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1604908177274-2c50c768c8a3?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Use parchment for easy cleanup. You can add cheese or hot sauce before baking.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=RtLaU4yGxLk' },
      ],
      faqs: [
        {
          ques: 'Can I use other veggies?',
          ans: 'Yes, zucchini or mushrooms also roast beautifully.',
        },
        {
          ques: 'Can I meal prep this?',
          ans: 'Yes, store portions in fridge and reheat gently.',
        },
        {
          ques: 'Can I make yolks runny?',
          ans: 'Bake a few minutes less to keep yolks soft.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '4 eggs', type: 'main' },
        { name: '1 cup cherry tomatoes', type: 'main' },
        { name: '1 bell pepper, sliced', type: 'main' },
        { name: '1 cup spinach', type: 'main' },
        { name: '1 tbsp olive oil', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Prep Veggies' },
            {
              type: 'text',
              value: 'Spread veggies on pan, drizzle olive oil, season.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Bake Veggies' },
            {
              type: 'text',
              value: 'Bake at 400°F for 10 minutes until tender.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Add Eggs' },
            {
              type: 'text',
              value: 'Crack eggs on top, bake 6–8 more minutes. Serve hot.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '280', unit: 'kcal' },
      { name: 'Protein', amount: '14', unit: 'g' },
      { name: 'Fat', amount: '18', unit: 'g' },
      { name: 'Carbohydrates', amount: '12', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
    ],
  },
  {
    _id: 'recp_034_fast_margherita_pizza',
    basicInfo: {
      recipeName: 'How to Make Fast Margherita Pizza',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Pizza', value: 'Pizza' },
        { label: 'Italian', value: 'Italian' },
        { label: 'Quick', value: 'Quick' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Dinner', value: 'Dinner' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Italian', value: 'Italian' },
        { label: 'Fast To Make', value: 'Fast To Make' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1601924582975-7aa6d3a3dfc5?auto=format&fit=crop&w=900&q=80',
      about: [
        { type: 'title', value: 'Crispy Thin-Crust Pizza in Under 30 Minutes' },
        {
          type: 'text',
          value:
            'This quick Margherita pizza delivers classic Italian flavor with minimal effort. Using ready dough or pita bread, you can achieve a crisp crust layered with tangy tomato sauce, fresh mozzarella, and fragrant basil. The balance of sweetness, acidity, and richness makes every bite irresistible. Perfect for weeknight dinners or spontaneous pizza cravings—no fancy oven required!',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1601924569989-b7be3b5f1d4c?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Pre-bake crust for a few minutes before topping to keep it crisp. Add olive oil drizzle after baking for shine.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=dK2RQD1KBWc' },
      ],
      faqs: [
        {
          ques: 'Can I use naan bread?',
          ans: 'Yes, naan or tortilla makes a quick base.',
        },
        {
          ques: 'Can I skip mozzarella?',
          ans: 'Use any melting cheese like provolone or cheddar.',
        },
        {
          ques: 'Can I make it vegan?',
          ans: 'Yes, use vegan cheese and olive oil instead of dairy.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 ready pizza dough or flatbread', type: 'main' },
        { name: '½ cup tomato sauce', type: 'main' },
        { name: '1 cup mozzarella slices', type: 'main' },
        { name: 'Fresh basil leaves', type: 'main' },
        { name: '1 tbsp olive oil', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Prepare Base' },
            {
              type: 'text',
              value: 'Preheat oven to 450°F. Spread sauce over dough.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Add Toppings' },
            {
              type: 'text',
              value: 'Layer mozzarella and basil leaves evenly.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Bake and Serve' },
            {
              type: 'text',
              value:
                'Bake 8–10 minutes until cheese bubbles. Drizzle olive oil and serve hot.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '420', unit: 'kcal' },
      { name: 'Protein', amount: '17', unit: 'g' },
      { name: 'Fat', amount: '18', unit: 'g' },
      { name: 'Carbohydrates', amount: '46', unit: 'g' },
    ],
  },
  {
    _id: 'recp_035_broad_beans_tomato_garlic_mozzarella_bruschetta',
    basicInfo: {
      recipeName: "Broad Beans, Tomato, Garlic & Mozzarella Cheese Bruschetta",
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Appetizer', value: 'Appetizer' },
        { label: 'Italian', value: 'Italian' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Quick', value: 'Quick' },
        { label: 'Snack', value: 'Snack' },
      ],
      categories: [
        { label: 'Appetizers', value: 'Appetizers' },
        { label: 'Italian', value: 'Italian' },
        { label: 'Snacks', value: 'Snacks' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Crispy Bruschetta with Creamy Mozzarella and Garlic Tomatoes',
        },
        {
          type: 'text',
          value:
            'This bruschetta blends creamy mozzarella, sautéed broad beans, and juicy tomatoes over toasted baguette slices. Each bite bursts with Mediterranean flavor—garlic-infused olive oil, herbs, and melted cheese make it irresistible. It’s quick to prepare yet elegant enough for gatherings or light lunches.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1617196034598-b4b04f31d2b3?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=ObAJjbf6kV0' },
        {
          type: 'text',
          value:
            'Rub the toast with garlic for authentic aroma. Add balsamic glaze for a gourmet touch.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use other beans?',
          ans: 'Yes, edamame or peas can substitute broad beans.',
        },
        {
          ques: 'Which bread works best?',
          ans: 'Ciabatta or baguette give the best crunch.',
        },
        {
          ques: 'Can I serve it cold?',
          ans: 'Yes, it tastes great at room temperature too.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '8 baguette slices', type: 'main' },
        { name: '1 cup tomatoes, diced', type: 'main' },
        { name: '½ cup cooked broad beans', type: 'main' },
        { name: '1 clove garlic', type: 'main' },
        { name: '½ cup mozzarella, shredded', type: 'main' },
        { name: '1 tbsp olive oil', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Toast Bread' },
            {
              type: 'text',
              value: 'Brush slices with oil and toast until golden.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Prepare Topping' },
            {
              type: 'text',
              value: 'Sauté garlic, tomatoes, and broad beans 2–3 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Assemble' },
            {
              type: 'text',
              value: 'Top toasts with mixture and mozzarella; broil 1 minute.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '260', unit: 'kcal' },
      { name: 'Protein', amount: '9', unit: 'g' },
      { name: 'Fat', amount: '10', unit: 'g' },
      { name: 'Carbohydrates', amount: '31', unit: 'g' },
    ],
  },
  {
    _id: 'recp_036_coffee_croissants_perfect_combination',
    basicInfo: {
      recipeName: 'Coffee and Croissants, a Perfect Combination',
      duration: { label: '10 Minutes', value: '10' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '1', value: '1' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Coffee', value: 'Coffee' },
        { label: 'Pastry', value: 'Pastry' },
        { label: 'French', value: 'French' },
        { label: 'Quick', value: 'Quick' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Pastries', value: 'Pastries' },
        { label: 'Beverages', value: 'Beverages' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Simple French Morning Ritual You Can Recreate Anywhere',
        },
        {
          type: 'text',
          value:
            'A buttery croissant paired with hot, aromatic coffee defines the quintessential French breakfast. The crisp layers of pastry complement the smooth bitterness of espresso, creating a balance of richness and simplicity. Quick to assemble and universally comforting, it’s ideal for slow mornings or café-style moments at home.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1600718371519-5489d9b3e1aa?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=G5y3FvLU_mU' },
        {
          type: 'text',
          value:
            'Warm the croissant lightly before serving and pair with a dash of cream or milk in your coffee.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use instant coffee?',
          ans: 'Yes, though espresso gives richer flavor.',
        },
        {
          ques: 'What toppings go well?',
          ans: 'Jam, honey, or Nutella are classic choices.',
        },
        {
          ques: 'Best time to serve?',
          ans: 'Morning or brunch with fruit on the side.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 croissant', type: 'main' },
        { name: '1 cup brewed coffee', type: 'main' },
        { name: 'Butter or jam, optional', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Warm Pastry' },
            {
              type: 'text',
              value: 'Heat croissant in oven for 3 minutes until flaky.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Prepare Coffee' },
            { type: 'text', value: 'Brew strong coffee or espresso.' },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Serve' },
            {
              type: 'text',
              value: 'Enjoy warm with butter or jam alongside coffee.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '310', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Fat', amount: '18', unit: 'g' },
      { name: 'Carbohydrates', amount: '30', unit: 'g' },
    ],
  },
  {
    _id: 'recp_037_grab_go_quick_breakfasts',
    basicInfo: {
      recipeName: 'Grab and Go Quick Breakfast Recipes for You',
      duration: { label: '10 Minutes', value: '10' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '1', value: '1' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Quick', value: 'Quick' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'On-the-Go', value: 'On-the-Go' },
        { label: 'Smoothie', value: 'Smoothie' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Snacks', value: 'Snacks' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1612198730648-9c3f79909d8d?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Energy-Boosting Breakfast Ideas for Busy Mornings',
        },
        {
          type: 'text',
          value:
            'Start your day right with grab-and-go options like yogurt parfaits, overnight oats, and fruit smoothies. These quick recipes require minimal prep but deliver maximum nutrition. Perfect for commuters or students, each combination offers fiber, protein, and natural sweetness for sustained energy.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=Ff8cXDzrq_g' },
        {
          type: 'text',
          value:
            'Prepare multiple portions ahead in jars for the week and store in the fridge.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1613145993482-29d6ef9d443b?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
      ],
      faqs: [
        {
          ques: 'Can I freeze them?',
          ans: 'Yes, smoothies freeze well in airtight containers.',
        },
        {
          ques: 'Are these vegan?',
          ans: 'They can be—use plant-based yogurt or milk.',
        },
        {
          ques: 'How long do overnight oats last?',
          ans: 'Up to 4 days when refrigerated.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '½ cup rolled oats', type: 'main' },
        { name: '½ cup milk or yogurt', type: 'main' },
        { name: '½ banana, sliced', type: 'main' },
        { name: '1 tbsp chia seeds', type: 'main' },
        { name: '1 tsp honey', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Mix Ingredients' },
            {
              type: 'text',
              value: 'Combine oats, milk, chia, and honey in a jar.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Chill and Serve' },
            {
              type: 'text',
              value: 'Refrigerate overnight and top with fruit in the morning.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '280', unit: 'kcal' },
      { name: 'Protein', amount: '9', unit: 'g' },
      { name: 'Fat', amount: '6', unit: 'g' },
      { name: 'Carbohydrates', amount: '45', unit: 'g' },
    ],
  },
  {
    _id: 'recp_038_fresh_orange_juice_bits_limes',
    basicInfo: {
      recipeName: 'Freshly Squeezed Orange Juice with Bits and Limes',
      duration: { label: '5 Minutes', value: '5' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Beverage', value: 'Beverage' },
        { label: 'Juice', value: 'Juice' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Vitamin C', value: 'Vitamin C' },
        { label: 'Refreshing', value: 'Refreshing' },
      ],
      categories: [
        { label: 'Drinks', value: 'Drinks' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Quick', value: 'Quick' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1611080626919-1e43bba1488e?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Fresh, Tangy Citrus Juice Packed with Vitamin C',
        },
        {
          type: 'text',
          value:
            'This refreshing orange juice blends fresh oranges and lime for a perfect balance of sweetness and tang. Pulp bits add texture while lime enhances the citrusy aroma. Made in minutes, it’s hydrating, immune-boosting, and naturally delicious—better than any store-bought juice.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=ZhT5r4iQ9yY' },
        {
          type: 'text',
          value:
            'Serve chilled with ice cubes or mint leaves for an extra-refreshing twist.',
        },
      ],
      faqs: [
        {
          ques: 'Can I add sugar?',
          ans: 'Optional—honey or agave works better than refined sugar.',
        },
        {
          ques: 'Can I store it?',
          ans: 'Consume within 24 hours for best taste.',
        },
        {
          ques: 'Can I use bottled lime juice?',
          ans: 'Fresh lime gives a cleaner, more natural flavor.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '4 fresh oranges', type: 'main' },
        { name: '1 lime', type: 'main' },
        { name: '½ cup cold water', type: 'main' },
        { name: 'Ice cubes (optional)', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Juice Fruits' },
            { type: 'text', value: 'Squeeze oranges and lime into a jug.' },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Mix and Serve' },
            { type: 'text', value: 'Add water and stir well. Serve over ice.' },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '110', unit: 'kcal' },
      { name: 'Protein', amount: '2', unit: 'g' },
      { name: 'Fat', amount: '0', unit: 'g' },
      { name: 'Carbohydrates', amount: '26', unit: 'g' },
      { name: 'Vitamin C', amount: '90', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_039_green_veggies_flavoured_butter',
    basicInfo: {
      recipeName: 'Green Veggies with Flavoured Butter',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Vegetables', value: 'Vegetables' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Butter', value: 'Butter' },
        { label: 'Quick', value: 'Quick' },
        { label: 'Side Dish', value: 'Side Dish' },
      ],
      categories: [
        { label: 'Sides', value: 'Sides' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Lunch', value: 'Lunch' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1565958011705-44e211a5b0c3?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Bright, Buttery Green Veggies Bursting with Flavor',
        },
        {
          type: 'text',
          value:
            'These green veggies are tossed in homemade flavoured butter infused with garlic, lemon zest, and herbs, turning an ordinary side into something unforgettable. Perfectly blanched broccoli, beans, and peas retain their vibrant color and crunch, while the butter adds richness and depth. This quick recipe works for weeknight dinners or festive meals alike—balanced, fresh, and full of natural sweetness from the vegetables themselves. It’s a dish that proves simplicity can taste extraordinary.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1611078484325-0cc4c79d4eb6?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=4zjwUqfF-m8',
        },
        {
          type: 'text',
          value:
            'You can swap herbs for dill or parsley depending on the meal. Add crushed almonds for texture.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use frozen veggies?',
          ans: 'Yes, just blanch for half the time to keep crispness.',
        },
        { ques: 'Can I make it vegan?', ans: 'Use vegan butter or olive oil.' },
        {
          ques: 'Best veggies for this?',
          ans: 'Broccoli, beans, zucchini, or peas work perfectly.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup broccoli florets', type: 'main' },
        { name: '1 cup green beans', type: 'main' },
        { name: '½ cup peas', type: 'main' },
        { name: '2 tbsp butter', type: 'main' },
        { name: '1 clove garlic, minced', type: 'main' },
        { name: '1 tsp lemon zest', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Blanch Veggies' },
            {
              type: 'text',
              value: 'Boil vegetables 3–4 minutes, then plunge in ice water.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Make Flavoured Butter' },
            {
              type: 'text',
              value: 'Melt butter, add garlic, lemon zest, salt & pepper.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Toss and Serve' },
            {
              type: 'text',
              value: 'Coat veggies in butter mixture, toss gently, serve warm.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '180', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Fat', amount: '10', unit: 'g' },
      { name: 'Carbohydrates', amount: '18', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
    ],
  },
  {
    _id: 'recp_040_maggie_baked_flax_seed_granola',
    basicInfo: {
      recipeName: 'Maggie’s Baked Flax Seed Granola Recipe',
      duration: { label: '35 Minutes', value: '35' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '6', value: '6' },
      tags: [
        { label: 'Granola', value: 'Granola' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Baked', value: 'Baked' },
        { label: 'Vegan', value: 'Vegan' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Snacks', value: 'Snacks' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1570197788417-0e82375c9377?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Crispy, Nutty Granola Loaded with Flax and Oats',
        },
        {
          type: 'text',
          value:
            'This baked flax seed granola is crunchy, wholesome, and packed with fiber and omega-3s. Rolled oats, flax seeds, almonds, and honey roast together into golden clusters you can enjoy for breakfast or snacking. It’s lightly sweetened and incredibly satisfying with yogurt or milk. Easy to store and endlessly customizable—this is your go-to healthy granola base.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1589308078050-1ec7d8a8e2a3?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=RNUqrc2cdx4' },
        {
          type: 'text',
          value:
            'Store in airtight jar up to 2 weeks. Add coconut flakes or dried fruit after baking.',
        },
      ],
      faqs: [
        {
          ques: 'Can I make it sugar-free?',
          ans: 'Yes, use maple syrup or agave instead of honey.',
        },
        {
          ques: 'Can I add chocolate chips?',
          ans: 'Yes, add them after cooling so they don’t melt.',
        },
        {
          ques: 'Is it gluten-free?',
          ans: 'Use certified gluten-free oats to make it so.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 cups rolled oats', type: 'main' },
        { name: '½ cup flax seeds', type: 'main' },
        { name: '½ cup almonds chopped', type: 'main' },
        { name: '¼ cup honey or maple syrup', type: 'main' },
        { name: '2 tbsp coconut oil', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'main' },
        { name: 'Pinch of salt', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Mix Ingredients' },
            {
              type: 'text',
              value: 'Combine oats, flax, almonds, salt in bowl.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Add Wet Mix' },
            {
              type: 'text',
              value: 'Stir in honey, oil, and vanilla until evenly coated.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Bake' },
            {
              type: 'text',
              value:
                'Bake at 325°F for 25 minutes stirring once. Cool and store.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '260', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Fat', amount: '12', unit: 'g' },
      { name: 'Carbohydrates', amount: '30', unit: 'g' },
      { name: 'Fiber', amount: '5', unit: 'g' },
    ],
  },
  {
    _id: 'recp_041_mini_peach_puff_pastry_tarts_honey',
    basicInfo: {
      recipeName: 'Mini Peach Puff Pastry Tarts with Honey',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Pastry', value: 'Pastry' },
        { label: 'Peach', value: 'Peach' },
        { label: 'Baked', value: 'Baked' },
        { label: 'Honey', value: 'Honey' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Baked Goods', value: 'Baked Goods' },
        { label: 'Sweets', value: 'Sweets' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1627308595203-cc6f39eaeafe?auto=format&fit=crop&w=900&q=80',
      about: [
        { type: 'title', value: 'Golden Mini Peach Tarts Drizzled with Honey' },
        {
          type: 'text',
          value:
            'Flaky puff pastry meets juicy peaches and warm honey in these delightful mini tarts. Simple yet elegant, they bake up golden and crisp, making the perfect summer dessert. A touch of cinnamon adds warmth, and a drizzle of honey right before serving makes them shine. Serve warm with a scoop of vanilla ice cream for pure bliss.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1607957807339-3fbe2ecb3db0?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=h3Tj6Eipylk' },
        {
          type: 'text',
          value:
            'Use thawed store-bought pastry for speed. Replace peaches with nectarines or apples in off-season.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use frozen pastry?',
          ans: 'Yes, thaw it completely before use.',
        },
        {
          ques: 'Can I make ahead?',
          ans: 'Assemble and refrigerate up to 12 hours before baking.',
        },
        {
          ques: 'How to store?',
          ans: 'Keep leftovers in airtight container for 1 day; reheat before serving.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 sheet puff pastry', type: 'main' },
        { name: '2 ripe peaches sliced', type: 'main' },
        { name: '2 tbsp honey', type: 'main' },
        { name: '1 tsp cinnamon', type: 'main' },
        { name: '1 tbsp butter melted', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Prepare Pastry' },
            { type: 'text', value: 'Cut pastry into squares, score edges.' },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Add Toppings' },
            {
              type: 'text',
              value: 'Arrange peach slices, brush butter, sprinkle cinnamon.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Bake' },
            {
              type: 'text',
              value:
                'Bake at 400°F for 15 minutes until golden; drizzle honey.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '290', unit: 'kcal' },
      { name: 'Protein', amount: '4', unit: 'g' },
      { name: 'Fat', amount: '15', unit: 'g' },
      { name: 'Carbohydrates', amount: '35', unit: 'g' },
    ],
  },
  {
    _id: 'recp_042_peanut_butter_chocolate_chip_pancakes',
    basicInfo: {
      recipeName: 'Peanut Butter and Chocolate Chip Pancakes',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Pancakes', value: 'Pancakes' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Peanut Butter', value: 'Peanut Butter' },
        { label: 'Sweet', value: 'Sweet' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Sweets', value: 'Sweets' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1587731511547-21d0f837e8d4?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Fluffy Pancakes Loaded with Peanut Butter & Chocolate Chips',
        },
        {
          type: 'text',
          value:
            'These pancakes are a sweet indulgence that balances nutty peanut butter flavor with gooey chocolate chips. The batter is soft and rich, giving every bite a comforting sweetness. Perfect for weekend brunches or special mornings, they’re quick to make and taste like dessert for breakfast—without being too heavy.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1603048297490-bdfd3b15af4d?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=kxM5qj6L8Vc' },
        {
          type: 'text',
          value:
            'Top with sliced bananas or drizzle more peanut butter on top for a complete treat.',
        },
      ],
      faqs: [
        {
          ques: 'Can I make it dairy-free?',
          ans: 'Use almond milk and vegan chocolate chips.',
        },
        {
          ques: 'Can I freeze them?',
          ans: 'Yes, stack with parchment and freeze up to 1 month.',
        },
        {
          ques: 'Can I add protein powder?',
          ans: 'Yes, replace ¼ cup flour with protein powder.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup flour', type: 'main' },
        { name: '1 tbsp sugar', type: 'main' },
        { name: '1 tsp baking powder', type: 'main' },
        { name: '1 cup milk', type: 'main' },
        { name: '1 egg', type: 'main' },
        { name: '2 tbsp peanut butter', type: 'main' },
        { name: '¼ cup chocolate chips', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Mix Dry Ingredients' },
            { type: 'text', value: 'Combine flour, sugar, and baking powder.' },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Add Wet Ingredients' },
            {
              type: 'text',
              value: 'Add milk, egg, and peanut butter; whisk smooth.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Cook Pancakes' },
            {
              type: 'text',
              value:
                'Fold in chocolate chips, cook on medium heat 2 mins each side.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '420', unit: 'kcal' },
      { name: 'Protein', amount: '12', unit: 'g' },
      { name: 'Fat', amount: '16', unit: 'g' },
      { name: 'Carbohydrates', amount: '52', unit: 'g' },
    ],
  },
  {
    _id: 'recp_043_rustic_banana_oatmeal_berry_pancakes',
    basicInfo: {
      recipeName: 'Rustic Banana Oatmeal and Berry Pancakes',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Oats', value: 'Oats' },
        { label: 'Banana', value: 'Banana' },
        { label: 'Berries', value: 'Berries' },
        { label: 'Healthy', value: 'Healthy' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Brunch', value: 'Brunch' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Whole-Grain Pancakes Packed with Bananas and Berries',
        },
        {
          type: 'text',
          value:
            'Rustic banana oatmeal pancakes bring homemade comfort to the table—soft, hearty, and naturally sweet. Fresh bananas provide moisture while oats create a wholesome texture. Studded with mixed berries, these pancakes burst with color and flavor. Ideal for cozy mornings when you want something nourishing yet indulgent.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1622202144107-37db114d001e?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Serve with Greek yogurt and maple syrup for a balanced meal.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=IrQjM3vtu9Q' },
      ],
      faqs: [
        {
          ques: 'Can I use frozen berries?',
          ans: 'Yes, thaw and drain before adding.',
        },
        {
          ques: 'Can I use almond flour?',
          ans: 'Yes, replace ¼ cup oats with almond flour for extra richness.',
        },
        {
          ques: 'Storage tips?',
          ans: 'Store in fridge 3 days or freeze individually.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 ripe banana mashed', type: 'main' },
        { name: '1 cup rolled oats', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '¼ cup milk', type: 'main' },
        { name: '½ cup mixed berries', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Prepare Batter' },
            {
              type: 'text',
              value:
                'Blend oats, banana, eggs, milk, and vanilla until smooth.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Fold Berries' },
            { type: 'text', value: 'Add berries gently into the batter.' },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Cook and Serve' },
            {
              type: 'text',
              value:
                'Cook on medium heat 2 minutes per side; top with yogurt and syrup.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '340', unit: 'kcal' },
      { name: 'Protein', amount: '13', unit: 'g' },
      { name: 'Fat', amount: '9', unit: 'g' },
      { name: 'Carbohydrates', amount: '48', unit: 'g' },
    ],
  },
  {
    _id: 'recp_044_pumpkin_soup_cheese_cinnamon',
    basicInfo: {
      recipeName: 'Pumpkin Soup with Cheese and Cinnamon',
      duration: { label: '35 Minutes', value: '35' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Soup', value: 'Soup' },
        { label: 'Pumpkin', value: 'Pumpkin' },
        { label: 'Cheese', value: 'Cheese' },
        { label: 'Comfort Food', value: 'Comfort Food' },
        { label: 'Autumn', value: 'Autumn' },
      ],
      categories: [
        { label: 'Soups', value: 'Soups' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1601066521749-bdba1ba6dd36?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value:
            'Creamy Pumpkin Soup with a Hint of Cinnamon and Melted Cheese',
        },
        {
          type: 'text',
          value:
            'This cozy pumpkin soup blends roasted pumpkin with creamy cheese and a touch of cinnamon for warmth and depth. The result is velvety, slightly sweet, and savory comfort in every spoonful. Perfect for fall dinners, it’s hearty yet light, rich yet refreshing. Pair with a slice of crusty bread or toasted nuts for a balanced meal that celebrates seasonal flavor.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1606755962773-c64f3513bdb5?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=Q17bZ9MNADY' },
        {
          type: 'text',
          value:
            'Add a pinch of nutmeg for spice, or substitute cream cheese for a richer texture.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use canned pumpkin?',
          ans: 'Yes, just reduce simmer time by half.',
        },
        {
          ques: 'Can I make it vegan?',
          ans: 'Use coconut milk and skip cheese.',
        },
        {
          ques: 'Best cheese type?',
          ans: 'Cheddar, Gruyère, or cream cheese work great.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 cups pumpkin puree', type: 'main' },
        { name: '1 onion chopped', type: 'main' },
        { name: '2 garlic cloves minced', type: 'main' },
        { name: '3 cups vegetable broth', type: 'main' },
        { name: '½ cup shredded cheese', type: 'main' },
        { name: '½ tsp cinnamon', type: 'main' },
        { name: '1 tbsp olive oil', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Sauté Aromatics' },
            {
              type: 'text',
              value: 'Cook onion and garlic in oil until fragrant.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Simmer Soup' },
            {
              type: 'text',
              value:
                'Add pumpkin, broth, cinnamon, salt, and pepper. Simmer 20 mins.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Blend and Add Cheese' },
            {
              type: 'text',
              value:
                'Blend until smooth, stir in cheese until melted, and serve.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '230', unit: 'kcal' },
      { name: 'Protein', amount: '9', unit: 'g' },
      { name: 'Fat', amount: '10', unit: 'g' },
      { name: 'Carbohydrates', amount: '24', unit: 'g' },
    ],
  },
  {
    _id: 'recp_045_easy_ground_beef_bacon',
    basicInfo: {
      recipeName: 'Easy Ground Beef Recipes with Bacon',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Beef', value: 'Beef' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Bacon', value: 'Bacon' },
        { label: 'Savory', value: 'Savory' },
        { label: 'Protein', value: 'Protein' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Meat', value: 'Meat' },
        { label: 'Main Course', value: 'Main Course' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1601050690597-1d8c2efdc36d?auto=format&fit=crop&w=900&q=80',
      about: [
        { type: 'title', value: 'Juicy Ground Beef and Crispy Bacon Skillet' },
        {
          type: 'text',
          value:
            'This easy beef and bacon recipe brings together two comfort-food favorites—seasoned ground beef and smoky bacon—cooked to perfection in one pan. The result is juicy, flavorful, and hearty, ideal for busy weeknights. Serve it over rice, pasta, or inside a toasted bun for a satisfying meal packed with protein and savory flavor.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1606756790138-bc963eb0b180?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=xgEn1mRwAnQ' },
        {
          type: 'text',
          value:
            'Add chopped mushrooms or bell peppers for extra nutrition. Sprinkle shredded cheese before serving.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use turkey instead?',
          ans: 'Yes, ground turkey works well too.',
        },
        {
          ques: 'Can I meal prep this?',
          ans: 'Absolutely, it reheats great for up to 3 days.',
        },
        {
          ques: 'Can I add sauce?',
          ans: 'A splash of BBQ or Worcestershire sauce adds depth.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 lb ground beef', type: 'main' },
        { name: '4 strips bacon chopped', type: 'main' },
        { name: '1 onion diced', type: 'main' },
        { name: '2 garlic cloves minced', type: 'main' },
        { name: '1 tsp paprika', type: 'main' },
        { name: 'Salt and pepper to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Cook Bacon' },
            {
              type: 'text',
              value: 'Fry bacon until crisp, remove and reserve drippings.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Brown Beef' },
            {
              type: 'text',
              value: 'Cook beef in bacon fat with onion and garlic.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Combine and Serve' },
            {
              type: 'text',
              value:
                'Stir in bacon, season with paprika, salt, and pepper, and serve hot.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '480', unit: 'kcal' },
      { name: 'Protein', amount: '32', unit: 'g' },
      { name: 'Fat', amount: '36', unit: 'g' },
      { name: 'Carbohydrates', amount: '6', unit: 'g' },
    ],
  },
  {
    _id: 'recp_046_smashed_avocado_toast_egg',
    basicInfo: {
      recipeName: 'Smashed Avocado Toast with Egg',
      duration: { label: '12 Minutes', value: '12' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Avocado', value: 'Avocado' },
        { label: 'Eggs', value: 'Eggs' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Quick', value: 'Quick' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Snacks', value: 'Snacks' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1574362291129-d60956b4c7f9?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Crispy Toast Topped with Creamy Avocado and Fried Egg',
        },
        {
          type: 'text',
          value:
            'A quick breakfast staple that’s healthy and satisfying—smashed avocado spread over toasted bread and crowned with a perfectly fried or poached egg. A sprinkle of salt, pepper, and chili flakes adds flavor and balance. Simple, colorful, and full of good fats and protein for your day’s start.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1626091857121-0d631a7428c8?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=HhdZjeByxZI' },
        {
          type: 'text',
          value:
            'Add feta cheese or lemon juice for brightness. Serve immediately for best taste.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use sourdough bread?',
          ans: 'Yes, it adds crunch and flavor.',
        },
        {
          ques: 'How do I make eggs runny?',
          ans: 'Cook on medium for 3–4 minutes only.',
        },
        {
          ques: 'Add-ons?',
          ans: 'Cherry tomatoes or smoked salmon taste amazing.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 slices bread toasted', type: 'main' },
        { name: '1 ripe avocado mashed', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: 'Salt pepper and chili flakes to taste', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Toast Bread' },
            { type: 'text', value: 'Toast slices until golden.' },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Cook Eggs' },
            { type: 'text', value: 'Fry or poach eggs as preferred.' },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Assemble' },
            {
              type: 'text',
              value: 'Spread avocado on toast, top with eggs and seasoning.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '320', unit: 'kcal' },
      { name: 'Protein', amount: '14', unit: 'g' },
      { name: 'Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '18', unit: 'g' },
    ],
  },
  {
    _id: 'recp_047_poached_egg_avocado_toast_seasoning',
    basicInfo: {
      recipeName: 'Simple Poached Egg and Avocado Toast with Seasoning',
      duration: { label: '10 Minutes', value: '10' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '1', value: '1' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Eggs', value: 'Eggs' },
        { label: 'Avocado', value: 'Avocado' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Quick', value: 'Quick' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Brunch', value: 'Brunch' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Creamy Avocado Toast Topped with Poached Egg and Herbs',
        },
        {
          type: 'text',
          value:
            'This toast combines creamy avocado and silky poached egg for a healthy, delicious breakfast. Lightly seasoned with salt, black pepper, and chili flakes, it’s both filling and full of nutrients. Perfectly poached eggs give it a gourmet café touch with minimal effort at home.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1606755962924-58dbd43031b3?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=E5hXzqP2l1U' },
        {
          type: 'text',
          value:
            'For perfect poached eggs, swirl boiling water and drop egg gently.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use olive oil instead of butter?',
          ans: 'Yes, drizzle lightly before serving.',
        },
        {
          ques: 'Best bread?',
          ans: 'Sourdough or whole wheat add texture and flavor.',
        },
        {
          ques: 'Add-ons?',
          ans: 'Sprinkle sesame seeds or everything bagel seasoning.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 slice toasted bread', type: 'main' },
        { name: '1 ripe avocado mashed', type: 'main' },
        { name: '1 egg poached', type: 'main' },
        { name: 'Salt pepper and chili flakes', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Poach Egg' },
            {
              type: 'text',
              value: 'Simmer water, swirl, drop egg and cook 3 mins.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Prepare Toast' },
            {
              type: 'text',
              value: 'Mash avocado with seasoning and spread on toast.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Assemble' },
            {
              type: 'text',
              value:
                'Place poached egg on top, sprinkle extra seasoning, and serve warm.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '280', unit: 'kcal' },
      { name: 'Protein', amount: '12', unit: 'g' },
      { name: 'Fat', amount: '20', unit: 'g' },
      { name: 'Carbohydrates', amount: '14', unit: 'g' },
    ],
  },
  {
    _id: 'recp_048_tasty_croissant_tea_breakfast',
    basicInfo: {
      recipeName: 'Tasty Croissant and Tea for Perfect Breakfast',
      duration: { label: '10 Minutes', value: '10' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '1', value: '1' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Croissant', value: 'Croissant' },
        { label: 'Tea', value: 'Tea' },
        { label: 'Quick', value: 'Quick' },
        { label: 'French', value: 'French' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Drinks', value: 'Drinks' },
        { label: 'Pastries', value: 'Pastries' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1542444592-1e98d19fb0b4?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Classic French Start: Buttery Croissant with Hot Tea',
        },
        {
          type: 'text',
          value:
            'Begin your morning with this elegant pairing—flaky, buttery croissant and freshly brewed tea. It’s simple yet sophisticated, bringing café vibes to your home. The warm pastry layers melt in your mouth, while the tea refreshes and balances the richness. Whether you prefer black, green, or herbal, the harmony is timeless and comforting.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1516826435551-36eca61a26f2?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=FkqX08C3XXg' },
        {
          type: 'text',
          value:
            'Pair with jam or butter and enjoy in the morning sun for true Parisian charm.',
        },
      ],
      faqs: [
        {
          ques: 'Best tea pairing?',
          ans: 'Earl Grey or chamomile complements the buttery pastry.',
        },
        {
          ques: 'Can I warm the croissant?',
          ans: 'Yes, reheat at 300°F for 3 minutes to crisp up.',
        },
        { ques: 'Add sides?', ans: 'Try a fruit salad or yogurt for balance.' },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 croissant', type: 'main' },
        { name: '1 cup brewed tea', type: 'main' },
        { name: 'Butter or jam (optional)', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Heat Croissant' },
            {
              type: 'text',
              value: 'Warm croissant lightly in oven or toaster.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Brew Tea' },
            {
              type: 'text',
              value: 'Steep tea leaves or bag in hot water for 3–5 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Serve' },
            {
              type: 'text',
              value: 'Serve croissant with tea and enjoy a relaxed morning.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '310', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Fat', amount: '16', unit: 'g' },
      { name: 'Carbohydrates', amount: '35', unit: 'g' },
    ],
  },

  {
    _id: 'recp_049_bakery_style_double_chocolate_muffins',
    basicInfo: {
      recipeName: 'Bakery style double chocolate muffins',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '12', value: '12' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Baking', value: 'Baking' },
        { label: 'Cupcakes', value: 'Cupcakes' },
        { label: 'Snack', value: 'Snack' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Snacks', value: 'Snacks' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Rich, Bakery-Style Double Chocolate Muffins at Home',
        },
        {
          type: 'text',
          value:
            'These bakery style double chocolate muffins are tall, domed, and loaded with melty chocolate in every single bite. Cocoa powder gives the batter its deep flavor, while a generous handful of chocolate chips keeps the crumb moist and fudgy. A slightly thicker batter and high initial oven temperature help them rise with that classic muffin top you get from a café. They are sweet but not cloying, perfect with coffee, milk, or as an after dinner treat. Make a batch on the weekend and enjoy grab and go chocolate bliss all week long.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Do not overmix once the flour is added or the muffins will turn dense instead of tender and fluffy.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=sS1JGLU9b6s',
        },
      ],
      faqs: [
        {
          ques: 'Can I use milk instead of buttermilk?',
          ans: 'Yes, add 1 teaspoon lemon juice or vinegar to the milk and rest for 5 minutes.',
        },
        {
          ques: 'Can I freeze these muffins?',
          ans: 'Yes, freeze in an airtight bag for up to 2 months and reheat in the oven.',
        },
        {
          ques: 'Which chocolate chips are best?',
          ans: 'Semi sweet or dark chocolate chips work best to balance sweetness.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 3/4 cups all purpose flour', type: 'main' },
        { name: '1/2 cup unsweetened cocoa powder', type: 'main' },
        { name: '3/4 cup sugar', type: 'main' },
        { name: '2 tsp baking powder', type: 'main' },
        { name: '1/2 tsp baking soda', type: 'main' },
        { name: '1/2 tsp salt', type: 'main' },
        { name: '2 large eggs', type: 'main' },
        { name: '1 cup buttermilk', type: 'main' },
        { name: '1/3 cup vegetable oil', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'main' },
        { name: '1 cup chocolate chips', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Prepare the Batter' },
            {
              type: 'text',
              value:
                'Preheat oven to 400°F (200°C). Whisk flour, cocoa, sugar, baking powder, baking soda, and salt in a large bowl. In another bowl whisk eggs, buttermilk, oil, and vanilla. Pour wet into dry and stir gently until just combined.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Add the Chocolate Chips' },
            {
              type: 'text',
              value:
                'Fold chocolate chips into the batter, keeping a few aside for topping. Line a 12 cup muffin tin and divide batter evenly. Sprinkle remaining chips on top.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Bake and Cool' },
            {
              type: 'text',
              value:
                'Bake at 400°F (200°C) for 5 minutes, then reduce heat to 350°F (175°C) and bake 10 to 12 more minutes until a toothpick comes out with moist crumbs. Cool in the pan 5 minutes, then transfer to a rack.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '260', unit: 'kcal' },
      { name: 'Protein', amount: '5', unit: 'g' },
      { name: 'Fat', amount: '11', unit: 'g' },
      { name: 'Carbohydrates', amount: '36', unit: 'g' },
      { name: 'Sugar', amount: '20', unit: 'g' },
    ],
  },
  {
    _id: 'recp_050_easy_carrot_cheesecake',
    basicInfo: {
      recipeName: 'Easy Carrot Cheesecake recipe',
      duration: { label: '1 Hour 15 Minutes', value: '75' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '10', value: '10' },
      tags: [
        { label: 'Cheesecake', value: 'Cheesecake' },
        { label: 'Carrot Cake', value: 'Carrot Cake' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Baking', value: 'Baking' },
        { label: 'Party', value: 'Party' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa7?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'A Creamy Cheesecake Swirled with Spiced Carrot Cake',
        },
        {
          type: 'text',
          value:
            'This easy carrot cheesecake combines the best of two classic desserts in one gorgeous slice. A cinnamon graham crust supports a smooth vanilla cream cheese filling rippled with moist, spiced carrot cake batter. You get tangy richness from the cheesecake and warmth from nutmeg, cinnamon, and shredded carrot in every forkful. The batter comes together in a single bowl for each layer, and baking in a water bath keeps the texture silky with minimal cracks. Serve chilled with a dollop of cream or extra grated carrot for color and texture.',
        },
        {
          type: 'text',
          value:
            'Make sure cream cheese is fully softened for a lump free filling, and do not overbake or the cheesecake can become dry.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=vP10s9r5lJg',
        },
      ],
      faqs: [
        {
          ques: 'Do I need a water bath?',
          ans: 'It helps prevent cracks and keeps the texture creamy, so it is recommended.',
        },
        {
          ques: 'Can I make it ahead?',
          ans: 'Yes, chill overnight for best flavor and easier slicing.',
        },
        {
          ques: 'Can I skip nuts?',
          ans: 'Yes, simply omit them or replace with raisins if you like.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 1/2 cups graham cracker crumbs', type: 'main' },
        { name: '1/4 cup melted butter', type: 'main' },
        { name: '3 packages cream cheese softened (24 oz)', type: 'main' },
        { name: '3/4 cup sugar', type: 'main' },
        { name: '3 large eggs', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'main' },
        { name: '1 cup finely grated carrot', type: 'main' },
        { name: '1/2 cup flour', type: 'main' },
        { name: '1 tsp cinnamon', type: 'main' },
        { name: '1/4 tsp nutmeg', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Make the Crust' },
            {
              type: 'text',
              value:
                'Preheat oven to 325°F (160°C). Mix graham crumbs and melted butter. Press into a springform pan base and bake 8 minutes. Cool slightly.',
            },
          ],
        },
        {
          step: [
            {
              type: 'title',
              value: 'Step 2 – Prepare Cheesecake and Carrot Layers',
            },
            {
              type: 'text',
              value:
                'Beat cream cheese and sugar until smooth. Add eggs one at a time, then vanilla. Remove 1 cup of this mixture to a separate bowl and stir in grated carrot, flour, cinnamon, and nutmeg to create the carrot swirl.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Swirl, Bake, and Chill' },
            {
              type: 'text',
              value:
                'Pour plain cheesecake batter over crust. Spoon carrot mixture on top in dollops and swirl gently with a knife. Place pan in a larger pan with hot water halfway up the sides and bake 45 to 50 minutes until set but slightly jiggly. Cool completely, then chill at least 4 hours.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '380', unit: 'kcal' },
      { name: 'Protein', amount: '8', unit: 'g' },
      { name: 'Fat', amount: '26', unit: 'g' },
      { name: 'Carbohydrates', amount: '30', unit: 'g' },
    ],
  },
  {
    _id: 'recp_051_easy_raspberry_jelly',
    basicInfo: {
      recipeName: 'Easy raspberry jelly recipe',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '6', value: '6' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Jelly', value: 'Jelly' },
        { label: 'Raspberry', value: 'Raspberry' },
        { label: 'No Bake', value: 'No Bake' },
        { label: 'Gluten Free', value: 'Gluten Free' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Sweets', value: 'Sweets' },
        { label: 'No Bake', value: 'No Bake' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Bright and Wobbly Raspberry Jelly in Just a Few Steps',
        },
        {
          type: 'text',
          value:
            'This easy raspberry jelly is light, refreshing, and bursting with real berry flavor. Fresh or frozen raspberries simmer briefly with sugar, then are strained and set with gelatin for a smooth, jewel toned dessert. It looks elegant in glasses or molds but takes very little hands on time. Serve it plain, with whipped cream, or layered with yogurt for a pretty parfait. The texture is softly wobbly and melts on the tongue, making it a great finish to rich meals or summer dinners.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'For stronger flavor, do not water down the raspberry juice too much and taste the mixture before chilling.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=opFxr6p7wa0',
        },
      ],
      faqs: [
        {
          ques: 'Can I use frozen raspberries?',
          ans: 'Yes, thaw them first and use the juices in the jelly.',
        },
        {
          ques: 'Can I make it vegetarian?',
          ans: 'Replace gelatin with agar agar, adjusting quantity according to package directions.',
        },
        {
          ques: 'How long does it take to set?',
          ans: 'At least 4 hours in the fridge, or overnight for a firmer jelly.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 cups raspberries fresh or frozen', type: 'main' },
        { name: '1/2 cup sugar', type: 'main' },
        { name: '1 1/2 cups water', type: 'main' },
        { name: '2 tbsp lemon juice', type: 'main' },
        { name: '2 1/2 tsp powdered gelatin', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Cook the Raspberries' },
            {
              type: 'text',
              value:
                'In a saucepan combine raspberries, sugar, and 1 cup water. Simmer 5 to 7 minutes, gently smashing berries, then strain through a fine sieve to remove seeds.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Bloom the Gelatin' },
            {
              type: 'text',
              value:
                'Sprinkle gelatin over remaining 1/2 cup cold water and let stand 5 minutes to soften. Warm gently until dissolved, then stir into the warm raspberry juice along with lemon juice.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Chill and Serve' },
            {
              type: 'text',
              value:
                'Pour mixture into serving glasses or a mold. Refrigerate for at least 4 hours until fully set. Serve chilled.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '110', unit: 'kcal' },
      { name: 'Protein', amount: '2', unit: 'g' },
      { name: 'Fat', amount: '0', unit: 'g' },
      { name: 'Carbohydrates', amount: '26', unit: 'g' },
    ],
  },
  {
    _id: 'recp_052_pineapple_orange_cake',
    basicInfo: {
      recipeName: 'Pineapple orange cake recipe',
      duration: { label: '50 Minutes', value: '50' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '8', value: '8' },
      tags: [
        { label: 'Citrus', value: 'Citrus' },
        { label: 'Cake', value: 'Cake' },
        { label: 'Pineapple', value: 'Pineapple' },
        { label: 'Orange', value: 'Orange' },
        { label: 'Dessert', value: 'Dessert' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1541781130532-b1d7c11c52c8?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Moist Pineapple Orange Cake with Bright Tropical Flavor',
        },
        {
          type: 'text',
          value:
            'This pineapple orange cake is soft, moist, and filled with sunny citrus flavor. Crushed pineapple and fresh orange zest are folded into a simple vanilla batter, keeping the crumb tender and fragrant. A quick orange glaze poured over the warm cake seeps into every slice, adding extra moisture and shine. It is light enough for afternoon tea but special enough to serve for celebrations. The combination of tangy orange and sweet pineapple gives this cake a refreshing twist that tastes like vacation on a plate.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Use pineapple in juice not syrup, and do not drain it completely so the cake stays extra moist.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=1GvZ6kJq2-k',
        },
      ],
      faqs: [
        {
          ques: 'Can I use fresh pineapple?',
          ans: 'Yes, just chop it finely and include a bit of the juice.',
        },
        {
          ques: 'Can I bake it in a loaf pan?',
          ans: 'Yes, but increase baking time and test with a skewer for doneness.',
        },
        {
          ques: 'Can I skip the glaze?',
          ans: 'You can, but the glaze adds a lot of citrus flavor and moisture.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 1/2 cups all purpose flour', type: 'main' },
        { name: '1 tsp baking powder', type: 'main' },
        { name: '1/2 tsp baking soda', type: 'main' },
        { name: '1/4 tsp salt', type: 'main' },
        { name: '2/3 cup sugar', type: 'main' },
        { name: '1/3 cup vegetable oil', type: 'main' },
        { name: '2 large eggs', type: 'main' },
        { name: '1/2 cup crushed pineapple with juice', type: 'main' },
        { name: '1/3 cup orange juice', type: 'main' },
        { name: '1 tbsp orange zest', type: 'main' },
        { name: '1/2 cup powdered sugar', type: 'dressing' },
        { name: '2 tbsp orange juice for glaze', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Prepare the Batter' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). Grease an 8 inch round pan. Whisk flour, baking powder, baking soda, and salt. In another bowl beat sugar, oil, and eggs until pale. Stir in pineapple, orange juice, and zest. Fold in dry ingredients until just combined.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Bake the Cake' },
            {
              type: 'text',
              value:
                'Pour batter into the pan and smooth the top. Bake 30 to 35 minutes or until a toothpick comes out clean. Cool in the pan 10 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Glaze and Serve' },
            {
              type: 'text',
              value:
                'Whisk powdered sugar with orange juice to make a pourable glaze. Poke warm cake with a skewer and drizzle glaze over the top. Let cool fully before slicing.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '290', unit: 'kcal' },
      { name: 'Protein', amount: '4', unit: 'g' },
      { name: 'Fat', amount: '11', unit: 'g' },
      { name: 'Carbohydrates', amount: '44', unit: 'g' },
    ],
  },
  {
    _id: 'recp_053_tiramisu_cake_mascarpone',
    basicInfo: {
      recipeName: 'Tiramisu cake with mascarpone',
      duration: { label: '1 Hour', value: '60' },
      level: { label: 'Hard', value: 'Hard' },
      serving: { label: '12', value: '12' },
      tags: [
        { label: 'Tiramisu', value: 'Tiramisu' },
        { label: 'Italian', value: 'Italian' },
        { label: 'Coffee', value: 'Coffee' },
        { label: 'Mascarpone', value: 'Mascarpone' },
        { label: 'Dessert', value: 'Dessert' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Italian', value: 'Italian' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1599785209796-88630776a8a1?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Layered Tiramisu Cake with Espresso and Mascarpone Cream',
        },
        {
          type: 'text',
          value:
            'This tiramisu cake transforms the classic Italian dessert into a show stopping layer cake. Light sponge layers are soaked with strong espresso and a splash of coffee liqueur, then filled and frosted with silky mascarpone cream. A dusting of cocoa powder finishes the top for that unmistakable tiramisu look. The cake tastes best after chilling, when the coffee flavors deepen and the layers meld together. It is elegant enough for special occasions yet relies on straightforward techniques if you follow the steps carefully.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1508737027454-82c27c926d13?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Use cold espresso so it does not make the sponge soggy too quickly, and brush it on lightly in layers.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=sLzaQ3QMWis',
        },
      ],
      faqs: [
        {
          ques: 'Can I skip the alcohol?',
          ans: 'Yes, just use extra espresso or decaf coffee for soaking the cake.',
        },
        {
          ques: 'How long should it chill?',
          ans: 'Chill at least 4 hours, but overnight gives the best texture and flavor.',
        },
        {
          ques: 'Can I use cream cheese instead of mascarpone?',
          ans: 'You can, but the flavor will be slightly tangier and less traditional.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '4 large eggs separated', type: 'main' },
        { name: '3/4 cup sugar', type: 'main' },
        { name: '1 cup cake flour', type: 'main' },
        { name: '1/4 cup milk', type: 'main' },
        { name: '1/4 cup neutral oil', type: 'main' },
        { name: '1 cup strong espresso cooled', type: 'main' },
        { name: '2 tbsp coffee liqueur optional', type: 'main' },
        { name: '1 1/2 cups mascarpone cheese', type: 'main' },
        { name: '1 cup heavy cream', type: 'main' },
        { name: '1/2 cup powdered sugar', type: 'main' },
        { name: '2 tsp vanilla extract', type: 'main' },
        { name: '2 tbsp cocoa powder for dusting', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Bake the Sponge' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). Beat egg yolks with half the sugar until pale, then mix in milk and oil. Fold in flour. Beat egg whites with remaining sugar to soft peaks and fold gently into batter. Bake in two greased 8 inch pans for 18 to 20 minutes. Cool completely.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Make Mascarpone Cream' },
            {
              type: 'text',
              value:
                'Beat mascarpone with powdered sugar and vanilla until smooth. In another bowl whip cream to soft peaks, then fold into mascarpone to make a light, spreadable cream.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Assemble the Cake' },
            {
              type: 'text',
              value:
                'Mix espresso with coffee liqueur. Place first sponge layer on a plate and brush with coffee mixture. Spread a layer of mascarpone cream. Top with second sponge, soak again lightly, and cover top and sides with remaining cream. Dust with cocoa powder and chill several hours.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '410', unit: 'kcal' },
      { name: 'Protein', amount: '7', unit: 'g' },
      { name: 'Fat', amount: '26', unit: 'g' },
      { name: 'Carbohydrates', amount: '37', unit: 'g' },
    ],
  },
  {
    _id: 'recp_054_mary_berry_walnut_cake_cream_cheese_litchi',
    basicInfo: {
      recipeName: "Mary Berry's walnut cake with cream cheese and litchi",
      duration: { label: '1 Hour', value: '60' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '10', value: '10' },
      tags: [
        { label: 'Walnut', value: 'Walnut' },
        { label: 'Cake', value: 'Cake' },
        { label: 'Cream Cheese', value: 'Cream Cheese' },
        { label: 'Fruit', value: 'Fruit' },
        { label: 'Dessert', value: 'Dessert' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1614707267537-4db0c1fda36b?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Walnut Layer Cake with Cream Cheese and Juicy Litchi',
        },
        {
          type: 'text',
          value:
            'Inspired by classic British walnut cake, this version adds a modern twist with cream cheese frosting and sweet litchi pieces. The sponge layers are soft and slightly nutty from ground walnuts, while the tangy frosting balances the richness. Chopped litchi tucked between layers and on top brings a floral, juicy note that keeps every bite interesting. It is a beautiful centerpiece cake that feels both comforting and a little unexpected, perfect for afternoon tea or celebrations.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Drain canned litchi very well so extra liquid does not make the layers soggy.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=Ew43Qq9T9W4',
        },
      ],
      faqs: [
        {
          ques: 'Can I omit litchi?',
          ans: 'Yes, you can replace it with pears or leave the cake as a classic walnut version.',
        },
        {
          ques: 'Can I toast the walnuts?',
          ans: 'Lightly toasting the nuts before chopping will deepen their flavor.',
        },
        {
          ques: 'How should I store it?',
          ans: 'Keep in the fridge due to cream cheese frosting and bring to room temperature before serving.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup walnuts finely chopped', type: 'main' },
        { name: '1 1/2 cups self raising flour', type: 'main' },
        { name: '3/4 cup sugar', type: 'main' },
        { name: '3 large eggs', type: 'main' },
        { name: '1/2 cup butter softened', type: 'main' },
        { name: '1/3 cup milk', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'main' },
        { name: '8 oz cream cheese', type: 'main' },
        { name: '1/4 cup butter softened for frosting', type: 'main' },
        { name: '1 1/2 cups powdered sugar', type: 'main' },
        { name: '1 cup chopped litchi drained', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Make Walnut Sponge' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). Grease two 8 inch round pans. Beat butter and sugar until fluffy, then add eggs one at a time. Fold in flour, walnuts, milk, and vanilla until just combined. Divide between pans and bake 22 to 25 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Prepare Cream Cheese Frosting' },
            {
              type: 'text',
              value:
                'Beat cream cheese and butter until smooth. Add powdered sugar gradually and beat until thick and spreadable. Adjust with a spoon of milk if needed for consistency.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Assemble with Litchi' },
            {
              type: 'text',
              value:
                'Cool cakes completely. Place one layer on a plate, spread frosting, and sprinkle half the chopped litchi. Top with second layer and frost top and sides. Decorate with remaining litchi and extra walnuts.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '430', unit: 'kcal' },
      { name: 'Protein', amount: '7', unit: 'g' },
      { name: 'Fat', amount: '27', unit: 'g' },
      { name: 'Carbohydrates', amount: '40', unit: 'g' },
    ],
  },
  {
    _id: 'recp_055_double_chocolate_buttermilk_pound_cake_ava',
    basicInfo: {
      recipeName: 'Double-Chocolate buttermilk pound cake by Ava',
      duration: { label: '1 Hour 10 Minutes', value: '70' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '10', value: '10' },
      tags: [
        { label: 'Pound Cake', value: 'Pound Cake' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Buttermilk', value: 'Buttermilk' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Baking', value: 'Baking' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1551024739-78e9d60c45f8?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Rich Double-Chocolate Buttermilk Pound Cake',
        },
        {
          type: 'text',
          value:
            'This double chocolate buttermilk pound cake is dense in the best way, with a tight crumb and deep cocoa flavor that melts slowly on the tongue. Buttermilk keeps the loaf soft and moist, while both cocoa powder and chocolate chunks ensure intense chocolate satisfaction in every slice. It bakes up with a crackly top and keeps well for several days, making it perfect for gifting or slicing over the week. A simple glaze or dusting of powdered sugar is all it needs to look as good as it tastes.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1606890658311-c7c017ee3c3b?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Bring ingredients to room temperature for a smooth batter and avoid overbaking to keep the crumb tender.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=n2_BM1A1U6o',
        },
      ],
      faqs: [
        {
          ques: 'Can I bake this in a bundt pan?',
          ans: 'Yes, just watch the baking time and test with a skewer in the thickest part.',
        },
        {
          ques: 'Can I add nuts?',
          ans: 'Chopped pecans or walnuts are great folded into the batter with the chocolate chunks.',
        },
        {
          ques: 'How do I freeze it?',
          ans: 'Wrap slices tightly in plastic, then foil, and freeze up to 2 months.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup butter softened', type: 'main' },
        { name: '1 1/2 cups sugar', type: 'main' },
        { name: '4 large eggs', type: 'main' },
        { name: '2 cups all purpose flour', type: 'main' },
        { name: '1/2 cup cocoa powder', type: 'main' },
        { name: '1 tsp baking powder', type: 'main' },
        { name: '1/2 tsp salt', type: 'main' },
        { name: '3/4 cup buttermilk', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'main' },
        { name: '3/4 cup chocolate chunks', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Cream Butter and Sugar' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). Grease and flour a loaf or bundt pan. Beat butter and sugar until very light and fluffy, about 3 to 4 minutes. Add eggs one at a time, beating well after each.',
            },
          ],
        },
        {
          step: [
            {
              type: 'title',
              value: 'Step 2 – Add Dry Ingredients and Buttermilk',
            },
            {
              type: 'text',
              value:
                'Whisk flour, cocoa, baking powder, and salt. Add dry ingredients to the butter mixture in two additions alternating with buttermilk. Stir in vanilla and fold in chocolate chunks just until combined.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Bake Slowly' },
            {
              type: 'text',
              value:
                'Pour batter into the prepared pan and smooth the top. Bake 50 to 60 minutes, until a skewer comes out with moist crumbs. Cool 15 minutes in the pan, then turn out and cool fully.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '430', unit: 'kcal' },
      { name: 'Protein', amount: '7', unit: 'g' },
      { name: 'Fat', amount: '27', unit: 'g' },
      { name: 'Carbohydrates', amount: '43', unit: 'g' },
    ],
  },
  {
    _id: 'recp_056_intense_chocolate_cake_cream_cheese_frosting',
    basicInfo: {
      recipeName: 'Intense chocolate cake with cream cheese frosting',
      duration: { label: '55 Minutes', value: '55' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '12', value: '12' },
      tags: [
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Cake', value: 'Cake' },
        { label: 'Cream Cheese', value: 'Cream Cheese' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Layer Cake', value: 'Layer Cake' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1542826438-82f4c92cbd35?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Deep, Dark Chocolate Cake with Tangy Cream Cheese Frosting',
        },
        {
          type: 'text',
          value:
            'This intense chocolate cake is moist, tender, and unapologetically rich. Dark cocoa powder and hot coffee combine to deepen the chocolate flavor, while oil keeps the crumb soft for days. It is paired with a smooth cream cheese frosting that cuts through the richness with gentle tang. The result is a cake that feels luxurious but is surprisingly simple to bake in two round pans. It is perfect for birthdays, celebrations, or any time only real chocolate cake will do.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Use room temperature cream cheese and butter so the frosting blends smoothly without lumps.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=kUqYVJvJuw8',
        },
      ],
      faqs: [
        {
          ques: 'Do I have to use coffee?',
          ans: 'Coffee enhances chocolate flavor, but you can replace it with hot water if preferred.',
        },
        {
          ques: 'Can I make cupcakes instead?',
          ans: 'Yes, bake 16 to 18 minutes and frost once completely cool.',
        },
        {
          ques: 'How to store frosted cake?',
          ans: 'Refrigerate due to cream cheese and bring to room temperature before serving.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 3/4 cups all purpose flour', type: 'main' },
        { name: '3/4 cup dark cocoa powder', type: 'main' },
        { name: '2 cups sugar', type: 'main' },
        { name: '2 tsp baking soda', type: 'main' },
        { name: '1 tsp baking powder', type: 'main' },
        { name: '1 tsp salt', type: 'main' },
        { name: '2 large eggs', type: 'main' },
        { name: '1 cup buttermilk', type: 'main' },
        { name: '1/2 cup vegetable oil', type: 'main' },
        { name: '2 tsp vanilla extract', type: 'main' },
        { name: '1 cup hot coffee', type: 'main' },
        { name: '8 oz cream cheese', type: 'main' },
        { name: '1/2 cup butter softened', type: 'main' },
        { name: '3 cups powdered sugar', type: 'main' },
        { name: '1 tsp vanilla for frosting', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Mix the Cake Batter' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). Grease and line two 8 inch pans. Whisk flour, cocoa, sugar, baking soda, baking powder, and salt. Add eggs, buttermilk, oil, and vanilla. Beat until smooth, then stir in hot coffee; the batter will be thin.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Bake the Cakes' },
            {
              type: 'text',
              value:
                'Divide batter between pans and bake 28 to 32 minutes until a skewer comes out clean. Cool in pans 10 minutes, then remove and cool completely on a rack.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Frost with Cream Cheese' },
            {
              type: 'text',
              value:
                'Beat cream cheese and butter until smooth. Add powdered sugar and vanilla and beat until fluffy. Place one cake layer on a plate, spread frosting, add second layer, and cover top and sides with remaining frosting.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '460', unit: 'kcal' },
      { name: 'Protein', amount: '7', unit: 'g' },
      { name: 'Fat', amount: '24', unit: 'g' },
      { name: 'Carbohydrates', amount: '56', unit: 'g' },
    ],
  },
  {
    _id: 'recp_057_snowy_vanilla_cake_cream_cheese_buttercream',
    basicInfo: {
      recipeName: 'Snowy vanilla cake with cream cheese buttercream',
      duration: { label: '1 Hour', value: '60' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '12', value: '12' },
      tags: [
        { label: 'Vanilla', value: 'Vanilla' },
        { label: 'Cake', value: 'Cake' },
        { label: 'Cream Cheese', value: 'Cream Cheese' },
        { label: 'Buttercream', value: 'Buttercream' },
        { label: 'Dessert', value: 'Dessert' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Soft Vanilla Layer Cake with Snowy Cream Cheese Buttercream',
        },
        {
          type: 'text',
          value:
            'This snowy vanilla cake is light, tender, and delicately flavored with real vanilla. The layers bake up pale and soft, making a perfect canvas for a fluffy cream cheese buttercream that spreads like a cloud. The frosting is sweet but slightly tangy, so the cake never feels heavy. Decorate simply with white chocolate curls or coconut for a wintery look, or leave it smooth for a minimalist finish. It is an ideal all occasion cake, ready to be dressed up with berries or enjoyed plain with coffee.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1542826438-5ecdaaf4c056?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Do not overbake the layers; remove them as soon as the centers spring back lightly when touched.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=q1kHBRaIuVQ',
        },
      ],
      faqs: [
        {
          ques: 'Can I make this as cupcakes?',
          ans: 'Yes, fill liners two thirds full and bake 16 to 18 minutes.',
        },
        {
          ques: 'Can I color the frosting?',
          ans: 'Gel food coloring works best and keeps the buttercream texture smooth.',
        },
        {
          ques: 'What kind of vanilla should I use?',
          ans: 'Pure vanilla extract or vanilla bean paste gives the best flavor.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 1/4 cups cake flour', type: 'main' },
        { name: '2 tsp baking powder', type: 'main' },
        { name: '1/2 tsp salt', type: 'main' },
        { name: '1 1/2 cups sugar', type: 'main' },
        { name: '3/4 cup butter softened', type: 'main' },
        { name: '4 egg whites', type: 'main' },
        { name: '1 cup milk', type: 'main' },
        { name: '2 tsp vanilla extract', type: 'main' },
        { name: '8 oz cream cheese', type: 'main' },
        { name: '1/2 cup butter softened for frosting', type: 'main' },
        { name: '3 1/2 cups powdered sugar', type: 'main' },
        { name: '1 tsp vanilla for frosting', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Bake Vanilla Layers' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). Grease and line two 8 inch pans. Whisk flour, baking powder, and salt. Beat butter and sugar until light. Add egg whites gradually, then vanilla. Alternate adding dry ingredients and milk, mixing just until smooth. Divide into pans and bake 22 to 26 minutes.',
            },
          ],
        },
        {
          step: [
            {
              type: 'title',
              value: 'Step 2 – Prepare Cream Cheese Buttercream',
            },
            {
              type: 'text',
              value:
                'Beat cream cheese and butter together until creamy. Add powdered sugar gradually and beat until fluffy. Mix in vanilla. If needed, add a teaspoon of milk to loosen or a bit more sugar to thicken.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Assemble the Cake' },
            {
              type: 'text',
              value:
                'Cool layers completely. Place one layer on a stand, spread frosting, then place the second layer on top. Cover entire cake with a generous coat of frosting and decorate as desired.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '440', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Fat', amount: '24', unit: 'g' },
      { name: 'Carbohydrates', amount: '52', unit: 'g' },
    ],
  },
  {
    _id: 'recp_058_one_bowl_chocolate_cake',
    basicInfo: {
      recipeName: 'One Bowl chocolate cake recipe',
      duration: { label: '40 Minutes', value: '40' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '9', value: '9' },
      tags: [
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Cake', value: 'Cake' },
        { label: 'Easy', value: 'Easy' },
        { label: 'One Bowl', value: 'One Bowl' },
        { label: 'Dessert', value: 'Dessert' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Quick', value: 'Quick' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
      about: [
        {
          type: 'title',
          value: 'Simple One Bowl Chocolate Cake Anyone Can Bake',
        },
        {
          type: 'text',
          value:
            'This one bowl chocolate cake is the ultimate no fuss recipe. Everything is stirred together in a single bowl, so there are no complicated steps or extra dishes. Despite its simplicity, the cake bakes up moist, soft, and wonderfully chocolatey. Oil and cocoa give it a tender crumb, while hot water blooms the cocoa for deeper flavor. You can serve it plain, dusted with powdered sugar, or topped with your favorite frosting. It is perfect for last minute birthdays, potlucks, or whenever you crave homemade cake without a lot of work.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format&fit=crop&w=900&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Do not overmix once the flour is incorporated to avoid a tough cake texture.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=4-KXG9Wqf8M',
        },
      ],
      faqs: [
        {
          ques: 'Can I bake this in a round pan?',
          ans: 'Yes, use an 8 or 9 inch round pan and check a bit earlier.',
        },
        {
          ques: 'Can I add chocolate chips?',
          ans: 'Fold in up to 1/2 cup of chocolate chips or chopped chocolate at the end.',
        },
        {
          ques: 'Does it need frosting?',
          ans: 'It is delicious alone but works well with ganache, buttercream, or whipped cream.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 1/2 cups all purpose flour', type: 'main' },
        { name: '1 cup sugar', type: 'main' },
        { name: '1/3 cup cocoa powder', type: 'main' },
        { name: '1 tsp baking soda', type: 'main' },
        { name: '1/2 tsp salt', type: 'main' },
        { name: '1 cup warm water', type: 'main' },
        { name: '1/3 cup vegetable oil', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'main' },
        { name: '1 tsp vinegar', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Mix Dry Ingredients' },
            {
              type: 'text',
              value:
                'Preheat oven to 350°F (175°C). Grease an 8 inch square pan. In a large bowl whisk flour, sugar, cocoa, baking soda, and salt together.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Add Wet Ingredients' },
            {
              type: 'text',
              value:
                'Add warm water, oil, vanilla, and vinegar directly to the bowl. Stir with a spatula until the batter is smooth and no dry streaks remain.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Bake' },
            {
              type: 'text',
              value:
                'Pour batter into the prepared pan and bake 25 to 30 minutes until a toothpick inserted in the center comes out clean. Cool before slicing.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '260', unit: 'kcal' },
      { name: 'Protein', amount: '4', unit: 'g' },
      { name: 'Fat', amount: '10', unit: 'g' },
      { name: 'Carbohydrates', amount: '39', unit: 'g' },
    ],
  },

  {
    _id: 'recp_059_brownies_raspberry_sauce_ganache_regen',
    basicInfo: {
      recipeName: 'Brownies with raspberry sauce and chocolate ganache',
      duration: { label: '1 Hour 10 Minutes', value: '70' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '12', value: '12' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Brownies', value: 'Brownies' },
        { label: 'Raspberry', value: 'Raspberry' },
        { label: 'Ganache', value: 'Ganache' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1565958011705-44e211b20f05?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Fudgy Brownies, Bright Raspberry, and Silky Ganache',
        },
        {
          type: 'text',
          value:
            'These are ultra-fudgy brownies layered with glossy dark chocolate ganache and a vivid raspberry sauce. Butter and chopped chocolate create a dense, chewy crumb, while a small dose of cocoa deepens flavor. The tart berry sauce cuts through richness, and chilling the slab ensures clean bakery-style squares. Use good quality chocolate (60–70% cacao) and whisk gently—overmixing adds air and leads to cakier results. Bake just until the center is set with moist crumbs. Once cool, flood with warm ganache, ripple with raspberry, and refrigerate to set. The result: dramatic swirls, balanced sweetness, and a luxurious finish suited for dinners or gift boxes.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1612197527762-d0565efcbe6c?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Slice with a hot knife, wiping between cuts, for perfect edges.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=lv1DjxGZbXM' },
      ],
      faqs: [
        {
          ques: 'Can I use frozen raspberries?',
          ans: 'Yes. Thaw, cook, and strain; simmer a minute longer to thicken.',
        },
        {
          ques: 'How do I keep ganache shiny?',
          ans: 'Avoid boiling cream and stir gently from the center out.',
        },
        {
          ques: 'Make ahead?',
          ans: 'Keeps 4–5 days chilled; flavor improves on day two.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup (225 g) unsalted butter', type: 'main' },
        { name: '8 oz (225 g) dark chocolate, chopped', type: 'main' },
        { name: '1 1/2 cups (300 g) sugar', type: 'main' },
        { name: '3 large eggs', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'main' },
        { name: '3/4 cup (95 g) all-purpose flour', type: 'main' },
        { name: '1/4 cup (25 g) cocoa powder', type: 'main' },
        { name: '1/4 tsp fine salt', type: 'main' },
        { name: '1 cup (125 g) raspberries', type: 'dressing' },
        { name: '2 tbsp sugar (sauce)', type: 'dressing' },
        { name: '4 oz (115 g) semi-sweet chocolate', type: 'topping' },
        { name: '1/2 cup (120 ml) heavy cream', type: 'topping' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Bake Brownies' },
            {
              type: 'text',
              value:
                'Heat oven to 350°F/175°C. Line a 9×9 in pan. Melt butter with dark chocolate. Whisk in sugar, eggs, vanilla. Sift in flour, cocoa, and salt; fold just until combined. Bake 25–28 min to fudgy doneness; cool fully.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Raspberry Sauce' },
            {
              type: 'text',
              value:
                'Simmer raspberries with 2 tbsp sugar 3–5 min. Press through a sieve; chill.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Ganache & Finish' },
            {
              type: 'text',
              value:
                'Warm cream to steaming; pour over chopped semi-sweet chocolate, rest 1 min, stir smooth. Pour over brownies, swirl in raspberry sauce. Chill 1 hr before slicing.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '345', unit: 'kcal' },
      { name: 'Protein', amount: '5', unit: 'g' },
      { name: 'Total Fat', amount: '20', unit: 'g' },
      { name: 'Saturated Fat', amount: '12', unit: 'g' },
      { name: 'Carbohydrates', amount: '38', unit: 'g' },
      { name: 'Sugar', amount: '27', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
      { name: 'Sodium', amount: '85', unit: 'mg' },
      { name: 'Cholesterol', amount: '80', unit: 'mg' },
      { name: 'Potassium', amount: '230', unit: 'mg' },
      { name: 'Calcium', amount: '40', unit: 'mg' },
      { name: 'Iron', amount: '3.0', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_060_afghan_kidney_bean_curry_lubya_regen',
    basicInfo: {
      recipeName: 'Afghan kidney bean curry - lubya recipe',
      duration: { label: '40 Minutes', value: '40' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Curry', value: 'Curry' },
        { label: 'Afghan', value: 'Afghan' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'High Fiber', value: 'High Fiber' },
        { label: 'Gluten-Free', value: 'Gluten-Free' },
      ],
      categories: [
        { label: 'Main Course', value: 'Main Course' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'World Cuisine', value: 'World Cuisine' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1645129369670-278e1fa6a2d3?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Lubya: Tomato-Spiced Kidney Beans with Fragrant Herbs',
        },
        {
          type: 'text',
          value:
            'Lubya is a homestyle Afghan bean curry that’s simple to cook and deeply satisfying. Tender kidney beans simmer in a tomato-onion base perfumed with cumin, coriander, turmeric, and a hint of chili. A slow bubble thickens the sauce and helps the beans absorb spice. Finish with lemon and cilantro for brightness and serve with rice or naan. It’s naturally vegan, protein-rich, and budget-friendly. For speed, use canned beans; for extra depth, use cooked dried beans with some of their cooking liquid. Leftovers taste even better the next day, making it ideal for meal prep.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Bloom spices in oil to unlock aroma before adding tomatoes.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=qP3dzCQVtMI' },
      ],
      faqs: [
        {
          ques: 'Can I add potatoes?',
          ans: 'Yes—dice small and simmer until tender.',
        },
        {
          ques: 'How spicy is it?',
          ans: 'Mild by default; adjust chili to taste.',
        },
        {
          ques: 'Freezer friendly?',
          ans: 'Absolutely—up to 2 months; thaw overnight.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 tbsp neutral oil', type: 'main' },
        { name: '1 large onion, finely chopped', type: 'main' },
        { name: '3 garlic cloves, minced', type: 'main' },
        { name: '1 tsp ground cumin', type: 'main' },
        { name: '1 tsp ground coriander', type: 'main' },
        { name: '1/2 tsp turmeric', type: 'main' },
        { name: '1/2 tsp red chili powder', type: 'main' },
        { name: '1 tbsp tomato paste', type: 'main' },
        { name: '1 cup crushed tomatoes', type: 'main' },
        {
          name: '2 cups cooked kidney beans (or 2 cans, drained & rinsed)',
          type: 'main',
        },
        { name: '1/2–3/4 cup water', type: 'main' },
        { name: 'Salt & black pepper', type: 'main' },
        { name: 'Lemon juice & chopped cilantro', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Build the Base' },
            {
              type: 'text',
              value:
                'Sauté onion in oil until golden. Add garlic; cook 30 sec. Stir in cumin, coriander, turmeric, chili; cook 30 sec. Add tomato paste and crushed tomatoes; simmer 3–4 min.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Simmer Beans' },
            {
              type: 'text',
              value:
                'Add beans, water, salt, and pepper. Simmer uncovered 15–20 min, stirring, until saucy and glossy.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Finish' },
            {
              type: 'text',
              value:
                'Adjust seasoning, squeeze lemon, and garnish with cilantro. Serve hot.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '265', unit: 'kcal' },
      { name: 'Protein', amount: '12', unit: 'g' },
      { name: 'Total Fat', amount: '8', unit: 'g' },
      { name: 'Saturated Fat', amount: '1', unit: 'g' },
      { name: 'Carbohydrates', amount: '36', unit: 'g' },
      { name: 'Fiber', amount: '11', unit: 'g' },
      { name: 'Sugar', amount: '7', unit: 'g' },
      { name: 'Sodium', amount: '520', unit: 'mg' },
      { name: 'Potassium', amount: '900', unit: 'mg' },
      { name: 'Iron', amount: '3.6', unit: 'mg' },
      { name: 'Folate', amount: '90', unit: 'mcg' },
      { name: 'Calcium', amount: '75', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_061_brownies_walnuts_caramel_regen',
    basicInfo: {
      recipeName: 'Brownies with walnuts and caramel - easy to make',
      duration: { label: '55 Minutes', value: '55' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '10', value: '10' },
      tags: [
        { label: 'Brownies', value: 'Brownies' },
        { label: 'Caramel', value: 'Caramel' },
        { label: 'Walnuts', value: 'Walnuts' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Baking', value: 'Baking' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1618219740973-1d8d986ed9da?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Toasted Walnut Caramel Brownies with Sea Salt',
        },
        {
          type: 'text',
          value:
            'Dense, fudgy brownies meet buttery caramel and toasted walnuts for texture and contrast. The batter is rich but straightforward, and layering half the batter with caramel before topping keeps streaks of gooey sweetness inside. Toast the nuts to intensify their aroma, and finish with flaky salt to balance. Cool completely for clean slices, or chill slightly to firm the caramel. They’re impressive for potlucks and sturdy enough to ship if wrapped well.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1605479541951-ef7b22f0a1a3?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Warm store-bought caramel 10–15 seconds so it spreads without tearing batter.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=ggrRmbkHQjM' },
      ],
      faqs: [
        {
          ques: 'Nut substitute?',
          ans: 'Pecans or hazelnuts work well; or use seeds for nut-free.',
        },
        {
          ques: 'How to prevent overbaking?',
          ans: 'Remove when the center jiggles slightly and a tester has damp crumbs.',
        },
        {
          ques: 'Storage?',
          ans: 'Airtight at room temp 2 days or chilled 5 days.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup (225 g) butter', type: 'main' },
        { name: '7 oz (200 g) dark chocolate', type: 'main' },
        { name: '1 1/2 cups (300 g) sugar', type: 'main' },
        { name: '3 large eggs', type: 'main' },
        { name: '3/4 cup (95 g) flour', type: 'main' },
        { name: '1/4 cup (25 g) cocoa powder', type: 'main' },
        { name: '1/2 tsp salt', type: 'main' },
        { name: '1/2 cup (60 g) toasted walnuts, chopped', type: 'main' },
        { name: '1/2 cup (120 g) caramel sauce', type: 'topping' },
        { name: 'Flaky sea salt', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Batter' },
            {
              type: 'text',
              value:
                'Melt butter and chocolate. Whisk in sugar, eggs, then dry ingredients and salt; fold walnuts.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Layer' },
            {
              type: 'text',
              value:
                'Spread half batter in lined 8×8 in pan. Drizzle caramel, top with remaining batter; swirl once.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Bake' },
            {
              type: 'text',
              value:
                'Bake 30–35 min at 350°F/175°C. Sprinkle flaky salt. Cool fully before slicing.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '360', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Total Fat', amount: '22', unit: 'g' },
      { name: 'Saturated Fat', amount: '12', unit: 'g' },
      { name: 'Carbohydrates', amount: '38', unit: 'g' },
      { name: 'Sugar', amount: '28', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
      { name: 'Sodium', amount: '120', unit: 'mg' },
      { name: 'Cholesterol', amount: '85', unit: 'mg' },
      { name: 'Potassium', amount: '240', unit: 'mg' },
      { name: 'Calcium', amount: '45', unit: 'mg' },
      { name: 'Iron', amount: '3.1', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_062_easy_fruit_nut_cookies_regen',
    basicInfo: {
      recipeName: 'Easy fruit and nut cookies',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '16', value: '16' },
      tags: [
        { label: 'Cookies', value: 'Cookies' },
        { label: 'Dried Fruit', value: 'Dried Fruit' },
        { label: 'Nuts', value: 'Nuts' },
        { label: 'Snack', value: 'Snack' },
        { label: 'Tea Time', value: 'Tea Time' },
      ],
      categories: [
        { label: 'Snacks', value: 'Snacks' },
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1606756790183-28f0b6e4dd87?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Chewy-Crisp Cookies Packed with Fruit & Nuts',
        },
        {
          type: 'text',
          value:
            'These cookies balance crisp edges with a chewy, buttery center studded with raisins, apricots, and toasted nuts. Brown sugar adds caramel notes; a touch of honey keeps them moist for days. They mix by hand in minutes and bake quickly, making them a reliable last-minute tray bake. Customize the fruit and nuts you love, add orange zest for brightness, or a whisper of cinnamon for warmth. Chill the dough 15 minutes for thicker cookies, and don’t overbake—carryover heat sets the centers.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        { type: 'text', value: 'Portion with a #40 scoop for even baking.' },
        { type: 'video', value: 'https://www.youtube.com/watch?v=kGdZtX4A88s' },
      ],
      faqs: [
        {
          ques: 'Swap honey?',
          ans: 'Use maple syrup; reduce by 1 tsp to keep dough firm.',
        },
        {
          ques: 'Make ahead?',
          ans: 'Freeze scooped dough balls up to 2 months; bake from frozen +2 min.',
        },
        {
          ques: 'Best nut mix?',
          ans: 'Almonds + walnuts give great crunch and flavor.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1/2 cup (115 g) butter, softened', type: 'main' },
        { name: '1/2 cup (110 g) brown sugar', type: 'main' },
        { name: '2 tbsp honey', type: 'main' },
        { name: '1 large egg', type: 'main' },
        { name: '1 tsp vanilla', type: 'main' },
        { name: '1 cup (125 g) all-purpose flour', type: 'main' },
        { name: '1 tsp baking powder', type: 'main' },
        { name: '1/4 tsp salt', type: 'main' },
        { name: '1/2 cup mixed dried fruit, chopped', type: 'main' },
        { name: '1/2 cup toasted nuts, chopped', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Cream & Mix' },
            {
              type: 'text',
              value:
                'Beat butter, brown sugar, and honey until fluffy. Add egg and vanilla. Fold in flour, baking powder, salt, fruit, and nuts.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Scoop & Bake' },
            {
              type: 'text',
              value:
                'Scoop onto a lined tray. Bake at 350°F/175°C for 10–12 min until edges are golden.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Cool' },
            {
              type: 'text',
              value: 'Cool 5 min on tray, then move to rack to finish.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '205', unit: 'kcal' },
      { name: 'Protein', amount: '3', unit: 'g' },
      { name: 'Total Fat', amount: '9', unit: 'g' },
      { name: 'Saturated Fat', amount: '4', unit: 'g' },
      { name: 'Carbohydrates', amount: '29', unit: 'g' },
      { name: 'Sugar', amount: '15', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Sodium', amount: '70', unit: 'mg' },
      { name: 'Potassium', amount: '115', unit: 'mg' },
      { name: 'Calcium', amount: '24', unit: 'mg' },
      { name: 'Iron', amount: '1.0', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_063_chocolate_brownie_recipe_regen',
    basicInfo: {
      recipeName: 'Chocolate brownie recipe',
      duration: { label: '45 Minutes', value: '45' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '9', value: '9' },
      tags: [
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Brownies', value: 'Brownies' },
        { label: 'Quick', value: 'Quick' },
        { label: 'Comfort Food', value: 'Comfort Food' },
        { label: 'Baking', value: 'Baking' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Quick Bakes', value: 'Quick Bakes' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1599785209707-28fda74cf3e9?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'Simple, Fudgy, Crowd-Pleaser Brownies' },
        {
          type: 'text',
          value:
            'One bowl, classic results. Butter for flavor, cocoa for depth, and a whisper of espresso to make the chocolate pop (no coffee taste). Whisk by hand just until combined to keep the crumb dense and glossy. Spread into a lined pan, bake until the center barely sets, and cool completely for neat squares. Dress them up with a dusting of sugar or a scoop of vanilla ice cream. This is the reliable, go-to brownie you’ll bake on repeat.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1605479541951-ef7b22f0a1a3?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Stir in 1/2 cup chocolate chips for extra pockets of melt.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=DEb2l9Shj9A' },
      ],
      faqs: [
        {
          ques: 'Why espresso powder?',
          ans: 'It amplifies chocolate flavor subtly.',
        },
        {
          ques: 'Cakey vs fudgy?',
          ans: 'Add one more egg for cakier; reduce flour by 2 tbsp for fudgier.',
        },
        {
          ques: 'Storage?',
          ans: 'Airtight 3 days; refrigerate a week; freeze 2 months.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1/2 cup (115 g) butter', type: 'main' },
        { name: '1 cup (200 g) sugar', type: 'main' },
        { name: '2 large eggs', type: 'main' },
        { name: '1 tsp vanilla', type: 'main' },
        { name: '1/3 cup (35 g) cocoa powder', type: 'main' },
        { name: '1/2 cup (65 g) all-purpose flour', type: 'main' },
        { name: '1/4 tsp salt', type: 'main' },
        { name: '1/2 tsp instant espresso (optional)', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Mix & Bake' },
            {
              type: 'text',
              value:
                'Melt butter. Whisk in sugar, eggs, vanilla. Stir in cocoa, flour, salt, and espresso. Bake 22–26 min at 350°F/175°C in an 8 in pan.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '295', unit: 'kcal' },
      { name: 'Protein', amount: '4', unit: 'g' },
      { name: 'Total Fat', amount: '14', unit: 'g' },
      { name: 'Saturated Fat', amount: '8', unit: 'g' },
      { name: 'Carbohydrates', amount: '39', unit: 'g' },
      { name: 'Sugar', amount: '27', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Sodium', amount: '95', unit: 'mg' },
      { name: 'Potassium', amount: '150', unit: 'mg' },
      { name: 'Calcium', amount: '28', unit: 'mg' },
      { name: 'Iron', amount: '1.8', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_064_chocolate_icecream_nuts_blueberries_stick_regen',
    basicInfo: {
      recipeName: 'Chocolate ice cream with nuts and blueberries on stick',
      duration: { label: '4 Hours 30 Minutes', value: '270' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '8', value: '8' },
      tags: [
        { label: 'Ice Cream', value: 'Ice Cream' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Blueberries', value: 'Blueberries' },
        { label: 'Nuts', value: 'Nuts' },
        { label: 'Frozen Dessert', value: 'Frozen Dessert' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Frozen', value: 'Frozen' },
        { label: 'Snacks', value: 'Snacks' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1606756790255-dffb5192d9b4?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Creamy Chocolate Pops with Crunchy Nuts & Berries',
        },
        {
          type: 'text',
          value:
            'Silky chocolate popsicles studded with toasted nuts and juicy blueberries. A stovetop base of cream, milk, cocoa, and sugar chills quickly and sets without an ice-cream maker. Blueberries add tart bursts; nuts add crunch. Use silicone molds for an easy release and dip frozen bars in melted chocolate for a thin, snappy shell. They’re perfect for summer parties or make-ahead desserts and hold well in the freezer for two weeks.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Toast nuts lightly to keep them crunchy after freezing.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=IZrZ3gYpv1I' },
      ],
      faqs: [
        {
          ques: 'No dairy?',
          ans: 'Replace cream/milk with full-fat coconut milk; add a pinch of salt.',
        },
        {
          ques: 'Need a machine?',
          ans: 'No—just mix, pour, freeze 4–5 hours.',
        },
        {
          ques: 'Chocolate shell?',
          ans: 'Dip frozen bars in melted chocolate and set on parchment.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 cups heavy cream', type: 'main' },
        { name: '1 cup whole milk', type: 'main' },
        { name: '1/2 cup cocoa powder', type: 'main' },
        { name: '1/2 cup sugar', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'main' },
        { name: '1/2 cup mixed nuts, chopped', type: 'main' },
        { name: '1/2 cup blueberries', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Base' },
            {
              type: 'text',
              value:
                'Heat cream, milk, cocoa, and sugar just to dissolve; do not boil. Cool completely; stir in vanilla.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Fill' },
            {
              type: 'text',
              value:
                'Fold in nuts and blueberries. Pour into molds; insert sticks.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Freeze' },
            {
              type: 'text',
              value:
                'Freeze 4–5 hours until firm. Optional dip in melted chocolate.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '312', unit: 'kcal' },
      { name: 'Protein', amount: '5', unit: 'g' },
      { name: 'Total Fat', amount: '22', unit: 'g' },
      { name: 'Saturated Fat', amount: '12', unit: 'g' },
      { name: 'Carbohydrates', amount: '25', unit: 'g' },
      { name: 'Sugar', amount: '21', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
      { name: 'Sodium', amount: '65', unit: 'mg' },
      { name: 'Calcium', amount: '115', unit: 'mg' },
      { name: 'Potassium', amount: '300', unit: 'mg' },
      { name: 'Iron', amount: '1.2', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_065_fast_choco_cookies_no_egg_sugar_regen',
    basicInfo: {
      recipeName: 'Fast choco cookies without eggs and sugar',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '12', value: '12' },
      tags: [
        { label: 'Vegan', value: 'Vegan' },
        { label: 'No Sugar', value: 'No Sugar' },
        { label: 'Cookies', value: 'Cookies' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Healthy', value: 'Healthy' },
      ],
      categories: [
        { label: 'Snacks', value: 'Snacks' },
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1627308595151-bc78c9c8f9c8?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'Vegan, Refined-Sugar-Free Chocolate Cookies' },
        {
          type: 'text',
          value:
            'These quick cookies rely on ripe banana (or date paste) for sweetness and almond flour for a tender, naturally gluten-free crumb. Cocoa provides deep chocolate flavor; coconut oil binds and crisps the edges. Stir, scoop, and bake—no mixer or chill time required. They’re perfect for late-night cravings, kid-friendly, and flexible: add dark chocolate chips, chopped nuts, or a pinch of cinnamon. Keep an eye on the bake time—overbaking dries them out.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1614707267537-4db0c1fda36b?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Use very ripe bananas for better sweetness and binding.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=jPZX3zOV-1A' },
      ],
      faqs: [
        {
          ques: 'Banana substitute?',
          ans: 'Use 1/3 cup date paste or 1/4 cup maple syrup.',
        },
        {
          ques: 'Make them crispier?',
          ans: 'Flatten thinner and bake an extra 1–2 minutes.',
        },
        { ques: 'Storage?', ans: 'Airtight 5 days; freeze up to 2 months.' },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup almond flour', type: 'main' },
        { name: '2 tbsp cocoa powder', type: 'main' },
        { name: '1 large ripe banana, mashed', type: 'main' },
        { name: '2 tbsp melted coconut oil', type: 'main' },
        { name: '1 tsp vanilla', type: 'main' },
        { name: 'Pinch salt', type: 'dressing' },
        { name: 'Optional 1/4 cup dark chocolate chips', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Mix' },
            {
              type: 'text',
              value:
                'Stir banana, oil, and vanilla. Add almond flour, cocoa, and salt; fold chips if using.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Bake' },
            {
              type: 'text',
              value:
                'Scoop onto lined tray, flatten slightly. Bake 10–12 min at 350°F/175°C.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '158', unit: 'kcal' },
      { name: 'Protein', amount: '3', unit: 'g' },
      { name: 'Total Fat', amount: '10', unit: 'g' },
      { name: 'Saturated Fat', amount: '5', unit: 'g' },
      { name: 'Carbohydrates', amount: '15', unit: 'g' },
      { name: 'Sugar', amount: '6', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
      { name: 'Sodium', amount: '50', unit: 'mg' },
      { name: 'Potassium', amount: '180', unit: 'mg' },
      { name: 'Magnesium', amount: '25', unit: 'mg' },
      { name: 'Iron', amount: '0.9', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_066_french_apple_tart_pastry_cream',
    basicInfo: {
      recipeName: 'French apple tart with pastry cream',
      duration: { label: '1 Hour 30 Minutes', value: '90' },
      level: { label: 'Hard', value: 'Hard' },
      serving: { label: '8', value: '8' },
      tags: [
        { label: 'French', value: 'French' },
        { label: 'Tart', value: 'Tart' },
        { label: 'Apple', value: 'Apple' },
        { label: 'Pastry Cream', value: 'Pastry Cream' },
        { label: 'Baking', value: 'Baking' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Pies', value: 'Pies' },
        { label: 'Pastries', value: 'Pastries' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1461009209122-03f5f2f45f1d?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Classic Tarte aux Pommes with Vanilla Crème Pâtissière',
        },
        {
          type: 'text',
          value:
            'A crisp sweet-shortcrust shell, a silky vanilla pastry cream, and thin fans of apple glazed with apricot—this tart is elegance in slices. Blind-bake the shell for crispness, cook pastry cream until thick ribbons, and arrange very thin apple slices overlapped for even baking. A quick apricot glaze gives shine and gentle sweetness. Serve slightly warm or at room temperature. Use firm, tart apples like Granny Smith or Pink Lady so the slices hold shape.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1514511542415-6c2a3b66f1d9?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Chill assembled tart 15 min before baking to reduce shrinkage.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=6W5N1WQY3zQ' },
      ],
      faqs: [
        {
          ques: 'Prevent soggy base?',
          ans: 'Blind-bake fully and brush with a thin egg wash while hot.',
        },
        {
          ques: 'Dairy-free?',
          ans: 'Use plant milk and vegan butter; thicken cream with cornstarch.',
        },
        {
          ques: 'Make ahead?',
          ans: 'Bake shell and cook pastry cream a day earlier; assemble before baking apples.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 1/4 cups (160 g) flour', type: 'main' },
        { name: '1/3 cup (40 g) powdered sugar', type: 'main' },
        { name: '1/2 cup (115 g) cold butter', type: 'main' },
        { name: '1 egg yolk + 1–2 tsp water', type: 'main' },
        { name: '1 1/4 cups (300 ml) milk', type: 'main' },
        { name: '3 egg yolks', type: 'main' },
        { name: '1/4 cup (50 g) sugar', type: 'main' },
        { name: '2 tbsp cornstarch', type: 'main' },
        { name: '1 tsp vanilla', type: 'main' },
        { name: '3 medium apples, thinly sliced', type: 'main' },
        { name: '1/3 cup apricot jam (for glaze)', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Pâte Sucrée' },
            {
              type: 'text',
              value:
                'Rub butter into flour and sugar; bind with yolk and water. Chill 30 min. Roll, line a 9-in tart tin, chill, dock, and blind-bake at 375°F/190°C for 18–20 min; remove weights and bake 5 more.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Pastry Cream' },
            {
              type: 'text',
              value:
                'Heat milk and vanilla. Whisk yolks, sugar, cornstarch; temper with hot milk. Cook, whisking, to thick ribbons. Cool with plastic wrap touching surface.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Assemble & Bake' },
            {
              type: 'text',
              value:
                'Spread cream in shell. Fan apples on top. Bake 25–30 min at 350°F/175°C. Warm jam and brush over tart.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '320', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Total Fat', amount: '15', unit: 'g' },
      { name: 'Saturated Fat', amount: '9', unit: 'g' },
      { name: 'Carbohydrates', amount: '42', unit: 'g' },
      { name: 'Sugar', amount: '20', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
      { name: 'Sodium', amount: '120', unit: 'mg' },
      { name: 'Calcium', amount: '120', unit: 'mg' },
      { name: 'Iron', amount: '1.4', unit: 'mg' },
      { name: 'Potassium', amount: '210', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_067_honey_lemon_tart',
    basicInfo: {
      recipeName: 'Honey and lemon tart',
      duration: { label: '1 Hour 20 Minutes', value: '80' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '10', value: '10' },
      tags: [
        { label: 'Tart', value: 'Tart' },
        { label: 'Citrus', value: 'Citrus' },
        { label: 'Honey', value: 'Honey' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Baking', value: 'Baking' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Pies', value: 'Pies' },
        { label: 'Pastries', value: 'Pastries' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'Silky Lemon Curd Tart Sweetened with Honey' },
        {
          type: 'text',
          value:
            'Bright, tangy lemon curd mellowed with floral honey, nestled in a crisp tart shell. Honey adds body and a rounded sweetness that lets the citrus sing without harshness. Cook the curd low and slow, whisking constantly, until it coats the back of a spoon. Strain for silkiness, pour into the baked shell, and chill until softly set. Serve with crème fraîche or berries. A dusting of powdered sugar right before serving keeps the surface pristine.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Use mild honey; strong varieties can overpower the lemon.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=kf9J2e4tYAk' },
      ],
      faqs: [
        {
          ques: 'Too runny?',
          ans: 'Cook to 170–175°F/77–80°C and chill at least 3 hours.',
        },
        {
          ques: 'Overly tart?',
          ans: 'Increase honey by 1–2 tbsp or add a pinch of salt.',
        },
        {
          ques: 'Make ahead?',
          ans: 'Shell and curd can be prepared a day in advance; assemble same day.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 sweet tart shell (9 in), baked', type: 'main' },
        { name: '3 large eggs + 2 yolks', type: 'main' },
        { name: '1/2 cup (170 g) honey', type: 'main' },
        { name: '2/3 cup (160 ml) lemon juice', type: 'main' },
        { name: '2 tsp lemon zest', type: 'main' },
        { name: '6 tbsp (85 g) butter', type: 'main' },
        { name: 'Pinch salt', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Cook Curd' },
            {
              type: 'text',
              value:
                'Whisk eggs, yolks, honey, juice, zest, and salt in a saucepan. Cook over low heat, whisking, until thickened. Off heat, whisk in butter; strain.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Fill & Chill' },
            {
              type: 'text',
              value:
                'Pour into shell; smooth. Chill 3 hours until set. Garnish and slice.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '285', unit: 'kcal' },
      { name: 'Protein', amount: '5', unit: 'g' },
      { name: 'Total Fat', amount: '14', unit: 'g' },
      { name: 'Saturated Fat', amount: '8', unit: 'g' },
      { name: 'Carbohydrates', amount: '36', unit: 'g' },
      { name: 'Sugar', amount: '28', unit: 'g' },
      { name: 'Fiber', amount: '1', unit: 'g' },
      { name: 'Sodium', amount: '120', unit: 'mg' },
      { name: 'Vitamin C', amount: '22', unit: '%' },
      { name: 'Calcium', amount: '40', unit: 'mg' },
      { name: 'Iron', amount: '0.7', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_068_quick_easy_flaky_pastry_breakfast',
    basicInfo: {
      recipeName: 'Quick and easy flaky pastry for tasty breakfast',
      duration: { label: '45 Minutes', value: '45' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '8', value: '8' },
      tags: [
        { label: 'Pastry', value: 'Pastry' },
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Quick', value: 'Quick' },
        { label: 'Buttery', value: 'Buttery' },
        { label: 'Make Ahead', value: 'Make Ahead' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Pastries', value: 'Pastries' },
        { label: 'Snacks', value: 'Snacks' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1542444592-1e98d19fb0b4?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'Rough-Puff Style Pastry in Under an Hour' },
        {
          type: 'text',
          value:
            'This streamlined rough-puff pastry gives buttery, flaky layers without the long laminating process. Grate cold butter into flour, toss with cold water, then perform a few quick folds with brief chills between. The visible butter shards puff in the oven, yielding crisp layers perfect for breakfast turnovers or jam-filled pinwheels. Keep everything cold, dust lightly with flour, and handle the dough gently. Bake from chilled for best rise and definition.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1516826435551-36eca61a26f2?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Work fast and keep butter chunky; that’s where flake comes from.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=FkqX08C3XXg' },
      ],
      faqs: [
        {
          ques: 'Can I freeze the dough?',
          ans: 'Yes, wrap tightly up to 2 months; thaw in the fridge overnight.',
        },
        {
          ques: 'Salted or unsalted butter?',
          ans: 'Unsalted for control; add 1/2 tsp salt to flour.',
        },
        {
          ques: 'Sweet vs savory?',
          ans: 'Add 1 tbsp sugar for sweet pastries; keep plain for savory.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 cups (250 g) all-purpose flour', type: 'main' },
        {
          name: '1 cup (225 g) very cold unsalted butter, grated',
          type: 'main',
        },
        { name: '1/2 tsp fine salt', type: 'main' },
        { name: '2/3 cup (160 ml) ice water, plus as needed', type: 'main' },
        { name: '1 egg, beaten (egg wash)', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Bring Dough Together' },
            {
              type: 'text',
              value:
                'Toss flour and salt with grated butter. Drizzle in ice water until shaggy clumps form. Press into a rectangle; chill 10 min.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Quick Folds' },
            {
              type: 'text',
              value:
                'Roll to 8×16 in, fold in thirds. Rotate 90°, repeat roll-and-fold twice more, chilling 10 min if butter softens.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Shape & Bake' },
            {
              type: 'text',
              value:
                'Roll 1/8 in thick, cut shapes, brush egg wash. Bake at 400°F/205°C for 18–22 min until puffed and deeply golden.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '295', unit: 'kcal' },
      { name: 'Protein', amount: '4', unit: 'g' },
      { name: 'Total Fat', amount: '19', unit: 'g' },
      { name: 'Saturated Fat', amount: '12', unit: 'g' },
      { name: 'Carbohydrates', amount: '28', unit: 'g' },
      { name: 'Sugar', amount: '1', unit: 'g' },
      { name: 'Fiber', amount: '1', unit: 'g' },
      { name: 'Sodium', amount: '180', unit: 'mg' },
      { name: 'Calcium', amount: '18', unit: 'mg' },
      { name: 'Iron', amount: '1.6', unit: 'mg' },
    ],
  },

  {
    _id: 'recp_069_spicy_avocado_hummus_toast',
    basicInfo: {
      recipeName: 'Spicy Avocado on Toast with Hummus',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Quick', value: 'Quick' },
        { label: 'Spicy', value: 'Spicy' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Snacks', value: 'Snacks' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Fiery Avocado Toast with Creamy Hummus and Crunch',
        },
        {
          type: 'text',
          value:
            'A quick, energizing breakfast that blends the nutty smoothness of hummus with creamy avocado and a touch of chili heat. Fresh lemon juice and olive oil keep the spread bright while toasted sourdough adds crunch. Each bite delivers healthy fats, fiber, and plant-based protein, making it ideal for busy mornings or post-workout refuels. Layer hummus first to anchor toppings, then avocado slices, chili flakes, and a sprinkle of seeds for texture. Pair with iced coffee or green tea for a wholesome start.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1580933869279-4afc84c65df7?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Use chili oil drizzle for extra heat and presentation flair.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=AjrA7xE2aM8',
        },
      ],
      faqs: [
        {
          ques: 'What bread works best?',
          ans: 'Thick-cut sourdough or multigrain slices hold up to toppings.',
        },
        {
          ques: 'Can I make it gluten-free?',
          ans: 'Yes—use gluten-free bread or crisp rice cakes.',
        },
        {
          ques: 'Storage tip?',
          ans: 'Keep avocado uncut until serving to avoid browning.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 slices sourdough bread, toasted', type: 'main' },
        { name: '1 ripe avocado', type: 'main' },
        { name: '4 tbsp hummus', type: 'main' },
        { name: '1 tsp lemon juice', type: 'dressing' },
        { name: '1 tsp olive oil', type: 'dressing' },
        { name: '1/4 tsp chili flakes', type: 'dressing' },
        { name: '1 tsp mixed seeds', type: 'dressing' },
        { name: 'Salt & pepper to taste', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Toast & Spread' },
            {
              type: 'text',
              value:
                'Toast bread until golden. Spread 2 tbsp hummus per slice.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Avocado & Season' },
            {
              type: 'text',
              value:
                'Mash or slice avocado; layer over hummus. Sprinkle chili flakes, salt, pepper, lemon juice, and olive oil.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Garnish' },
            {
              type: 'text',
              value: 'Top with mixed seeds or microgreens. Serve immediately.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '330', unit: 'kcal' },
      { name: 'Protein', amount: '9', unit: 'g' },
      { name: 'Total Fat', amount: '24', unit: 'g' },
      { name: 'Saturated Fat', amount: '3', unit: 'g' },
      { name: 'Carbohydrates', amount: '22', unit: 'g' },
      { name: 'Fiber', amount: '7', unit: 'g' },
      { name: 'Sugar', amount: '2', unit: 'g' },
      { name: 'Sodium', amount: '320', unit: 'mg' },
      { name: 'Potassium', amount: '520', unit: 'mg' },
      { name: 'Vitamin C', amount: '12', unit: '%' },
      { name: 'Iron', amount: '1.8', unit: 'mg' },
      { name: 'Calcium', amount: '35', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_070_lemon_cream_tart_orange_raspberry',
    basicInfo: {
      recipeName: 'Lemon Cream Tart with Oranges and Raspberries',
      duration: { label: '1 Hour 15 Minutes', value: '75' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '8', value: '8' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Citrus', value: 'Citrus' },
        { label: 'Tart', value: 'Tart' },
        { label: 'Fruit', value: 'Fruit' },
        { label: 'Baking', value: 'Baking' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Pies', value: 'Pies' },
        { label: 'Pastries', value: 'Pastries' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1514511542415-6c2a3b66f1d9?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Velvety Lemon Cream Tart Crowned with Citrus and Berries',
        },
        {
          type: 'text',
          value:
            'A sunny tart combining silky lemon cream with the freshness of sliced oranges and bright raspberries. The base is a crisp pâte sucrée shell filled with a luscious blend of lemon curd and lightly whipped cream, creating an airy yet rich filling. Layer thin orange rounds and scatter fresh raspberries before glazing for shine. Perfect for spring gatherings or Sunday desserts, it’s balanced between sweet and tart with a subtle vanilla aroma.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Use seedless oranges for clean slices and less bitterness.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=G0K9jJ0W6No',
        },
      ],
      faqs: [
        {
          ques: 'How to keep crust crisp?',
          ans: 'Brush with melted white chocolate or egg wash before filling.',
        },
        {
          ques: 'Substitute raspberries?',
          ans: 'Try strawberries or blueberries for a milder sweetness.',
        },
        {
          ques: 'Serving tip?',
          ans: 'Chill 2 hours before slicing for clean edges.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 sweet tart shell (9 in)', type: 'main' },
        { name: '3 large eggs + 2 yolks', type: 'main' },
        { name: '2/3 cup sugar', type: 'main' },
        { name: '2/3 cup lemon juice', type: 'main' },
        { name: '1 tsp lemon zest', type: 'main' },
        { name: '6 tbsp butter', type: 'main' },
        { name: '1/2 cup whipped cream', type: 'main' },
        { name: '1 orange thinly sliced', type: 'topping' },
        { name: '1/2 cup fresh raspberries', type: 'topping' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Cook Lemon Cream' },
            {
              type: 'text',
              value:
                'Whisk eggs, sugar, lemon juice, and zest in saucepan. Cook gently until thickened; whisk in butter, cool completely, fold whipped cream.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Assemble Tart' },
            {
              type: 'text',
              value:
                'Spread lemon cream in shell, arrange orange slices and raspberries on top. Chill 2 hours.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '310', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Total Fat', amount: '17', unit: 'g' },
      { name: 'Saturated Fat', amount: '9', unit: 'g' },
      { name: 'Carbohydrates', amount: '35', unit: 'g' },
      { name: 'Sugar', amount: '25', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Sodium', amount: '115', unit: 'mg' },
      { name: 'Vitamin C', amount: '28', unit: '%' },
      { name: 'Calcium', amount: '60', unit: 'mg' },
      { name: 'Iron', amount: '1.1', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_071_lemon_honey_tart_salted_crust',
    basicInfo: {
      recipeName: 'Lemon-Honey Tart with Salted Crust',
      duration: { label: '1 Hour 10 Minutes', value: '70' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '8', value: '8' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Honey', value: 'Honey' },
        { label: 'Lemon', value: 'Lemon' },
        { label: 'Tart', value: 'Tart' },
        { label: 'Baking', value: 'Baking' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Pies', value: 'Pies' },
        { label: 'Pastries', value: 'Pastries' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1505253216365-6b2f98d0b9a5?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Sweet-Tart Lemon Honey Filling in Buttery Salted Crust',
        },
        {
          type: 'text',
          value:
            'A refined twist on classic lemon tart where natural honey sweetens the curd and a pinch of sea salt sharpens the crust’s flavor. The contrast between silky filling and crisp salted pastry creates balance. Slow cooking and constant whisking prevent curdling. Chill well before slicing to achieve clean, glossy cuts. The tart keeps beautifully for two days and tastes even better slightly cold with a spoon of whipped cream.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Use flaky sea salt; avoid iodized salt which dulls the flavor.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=6nD00zQAiPg',
        },
      ],
      faqs: [
        {
          ques: 'Can I use lime instead of lemon?',
          ans: 'Yes—replace juice 1:1 for a tropical note.',
        },
        {
          ques: 'Why salt the crust?',
          ans: 'It balances the honey and enhances overall flavor.',
        },
        {
          ques: 'Shelf life?',
          ans: 'Chill up to 3 days; serve at room temp.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 salted tart crust (9 in)', type: 'main' },
        { name: '4 large eggs', type: 'main' },
        { name: '1/2 cup honey', type: 'main' },
        { name: '1/2 cup lemon juice', type: 'main' },
        { name: '1 tsp lemon zest', type: 'main' },
        { name: '6 tbsp butter', type: 'main' },
        { name: 'Pinch sea salt', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Cook Filling' },
            {
              type: 'text',
              value:
                'Whisk eggs, honey, juice, zest in saucepan. Cook low heat until thickened. Add butter and salt, whisk smooth.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Fill & Chill' },
            {
              type: 'text',
              value: 'Pour into baked crust. Chill 3 hours before slicing.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '295', unit: 'kcal' },
      { name: 'Protein', amount: '5', unit: 'g' },
      { name: 'Total Fat', amount: '15', unit: 'g' },
      { name: 'Saturated Fat', amount: '9', unit: 'g' },
      { name: 'Carbohydrates', amount: '34', unit: 'g' },
      { name: 'Sugar', amount: '26', unit: 'g' },
      { name: 'Fiber', amount: '1', unit: 'g' },
      { name: 'Sodium', amount: '160', unit: 'mg' },
      { name: 'Vitamin C', amount: '20', unit: '%' },
      { name: 'Iron', amount: '0.8', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_072_raspberry_layered_cake_cocoa',
    basicInfo: {
      recipeName: 'Raspberry Creamy Layered Cake with Cocoa',
      duration: { label: '1 Hour 45 Minutes', value: '105' },
      level: { label: 'Hard', value: 'Hard' },
      serving: { label: '10', value: '10' },
      tags: [
        { label: 'Cake', value: 'Cake' },
        { label: 'Raspberry', value: 'Raspberry' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Layered', value: 'Layered' },
        { label: 'Cream', value: 'Cream' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1625938145283-84eebc3a6fb5?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Rich Cocoa Sponge with Raspberry Cream Layers',
        },
        {
          type: 'text',
          value:
            'This show-stopping cake layers moist cocoa sponge with whipped raspberry cream and tangy coulis. Each bite balances dark chocolate depth with fruity brightness. The sponge uses oil for tenderness, while the cream incorporates mascarpone for stability. Fresh raspberries on top add elegance. Ideal for celebrations or afternoon indulgence, it’s best made a day ahead for flavors to meld.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Dust with cocoa powder or drizzle with melted dark chocolate before serving.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=WdP3sX_yW60',
        },
      ],
      faqs: [
        {
          ques: 'Can I use frozen raspberries?',
          ans: 'Yes—thaw and drain before folding into cream.',
        },
        {
          ques: 'Filling too soft?',
          ans: 'Chill cream 10 min; add 1 tbsp powdered sugar to stabilize.',
        },
        {
          ques: 'Shelf life?',
          ans: 'Keeps refrigerated up to 3 days.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 1/2 cups flour', type: 'main' },
        { name: '1/2 cup cocoa powder', type: 'main' },
        { name: '1 cup sugar', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '3/4 cup milk', type: 'main' },
        { name: '1/4 cup oil', type: 'main' },
        { name: '1 tsp baking powder', type: 'main' },
        { name: '1/2 cup raspberry puree', type: 'main' },
        { name: '1/2 cup mascarpone', type: 'main' },
        { name: '1/2 cup whipped cream', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Bake Cocoa Sponge' },
            {
              type: 'text',
              value:
                'Mix dry ingredients; whisk wet separately. Combine, pour into pans, bake at 350°F/175°C for 30–35 min. Cool completely.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Make Raspberry Cream' },
            {
              type: 'text',
              value:
                'Whip mascarpone and cream, fold in raspberry puree until smooth and fluffy.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Assemble' },
            {
              type: 'text',
              value:
                'Layer sponge and cream alternately. Chill 4 hours before serving.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '390', unit: 'kcal' },
      { name: 'Protein', amount: '7', unit: 'g' },
      { name: 'Total Fat', amount: '22', unit: 'g' },
      { name: 'Saturated Fat', amount: '10', unit: 'g' },
      { name: 'Carbohydrates', amount: '42', unit: 'g' },
      { name: 'Sugar', amount: '27', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
      { name: 'Sodium', amount: '120', unit: 'mg' },
      { name: 'Calcium', amount: '80', unit: 'mg' },
      { name: 'Iron', amount: '2.5', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_073_macarons_cheese_filling',
    basicInfo: {
      recipeName: 'Macarons with Cheese Filling',
      duration: { label: '1 Hour 30 Minutes', value: '90' },
      level: { label: 'Hard', value: 'Hard' },
      serving: { label: '12', value: '12' },
      tags: [
        { label: 'Macarons', value: 'Macarons' },
        { label: 'French', value: 'French' },
        { label: 'Cheese', value: 'Cheese' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Baking', value: 'Baking' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Pastries', value: 'Pastries' },
        { label: 'French', value: 'French' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1627843563090-2849dbbb00b1?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Savory-Sweet Macarons with Cream Cheese Filling',
        },
        {
          type: 'text',
          value:
            'A daring take on the classic French macaron, filled with lightly sweetened cream cheese frosting. The almond shells stay delicate and crisp with chewy centers, balancing tangy richness. Perfect for brunch platters or elegant events. Pipe the batter consistently, rest before baking for smooth tops, and sandwich gently once cool. The result: pastel perfection with a hint of savory depth.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1606490199114-d3a1a5c1f70e?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Tint shells with natural beet or matcha powder for color variety.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=8P3vfwxY1fY',
        },
      ],
      faqs: [
        {
          ques: 'How to prevent cracked tops?',
          ans: 'Tap tray to release air bubbles and rest 30 minutes before baking.',
        },
        {
          ques: 'Can I use mascarpone?',
          ans: 'Yes—it makes a smoother, milder filling.',
        },
        {
          ques: 'Shelf life?',
          ans: 'Refrigerate up to 4 days; best after 24 hours of aging.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup almond flour', type: 'main' },
        { name: '1 1/2 cups powdered sugar', type: 'main' },
        { name: '3 egg whites', type: 'main' },
        { name: '1/4 cup granulated sugar', type: 'main' },
        { name: 'Food coloring (optional)', type: 'dressing' },
        { name: '1/2 cup cream cheese', type: 'main' },
        { name: '2 tbsp butter', type: 'main' },
        { name: '1/4 cup powdered sugar (filling)', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Step 1 – Make Shells' },
            {
              type: 'text',
              value:
                'Whisk almond flour and sugar. Beat egg whites to soft peaks, add granulated sugar, whip to stiff peaks. Fold in dry mix. Pipe 1-in circles, rest 30 min, bake 15 min at 300°F/150°C.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 2 – Prepare Filling' },
            {
              type: 'text',
              value:
                'Beat cream cheese, butter, and sugar until smooth. Chill 10 min before piping.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Step 3 – Assemble' },
            {
              type: 'text',
              value:
                'Pair shells, pipe filling, sandwich gently. Store chilled overnight for texture to mature.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '180', unit: 'kcal' },
      { name: 'Protein', amount: '4', unit: 'g' },
      { name: 'Total Fat', amount: '9', unit: 'g' },
      { name: 'Saturated Fat', amount: '4', unit: 'g' },
      { name: 'Carbohydrates', amount: '22', unit: 'g' },
      { name: 'Sugar', amount: '18', unit: 'g' },
      { name: 'Fiber', amount: '1', unit: 'g' },
      { name: 'Sodium', amount: '45', unit: 'mg' },
      { name: 'Calcium', amount: '28', unit: 'mg' },
      { name: 'Iron', amount: '0.6', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_074_mixed_berry_pie_fresh_fruits',
    basicInfo: {
      recipeName: 'Mixed Berry Pie with Fresh Fruits',
      duration: { label: '1 Hour 20 Minutes', value: '80' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '8', value: '8' },
      tags: [
        { label: 'Pie', value: 'Pie' },
        { label: 'Berries', value: 'Berries' },
        { label: 'Summer', value: 'Summer' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Homemade', value: 'Homemade' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Pies', value: 'Pies' },
        { label: 'Fruits', value: 'Fruits' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1627308595183-d26207b8d945?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Classic Mixed Berry Pie Bursting with Freshness',
        },
        {
          type: 'text',
          value:
            'A flaky double-crust pie packed with juicy strawberries, blueberries, and raspberries. The filling thickens naturally with cornstarch, producing a vibrant syrup that holds together without being runny. A touch of lemon juice balances sweetness and makes every bite taste like summer. This pie is perfect for gatherings and can be served warm with a scoop of vanilla ice cream or chilled for a firmer slice. The golden crust stays crisp thanks to an egg wash and a sprinkle of raw sugar before baking.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'To prevent sogginess, pre-bake the bottom crust for 10 minutes.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=KJdEKyc2Uq4',
        },
      ],
      faqs: [
        {
          ques: 'Can I use frozen berries?',
          ans: 'Yes, just thaw and drain before mixing with sugar.',
        },
        {
          ques: 'Best crust type?',
          ans: 'All-butter crust for flavor; shortening mix for extra flake.',
        },
        {
          ques: 'Storage?',
          ans: 'Keeps 3 days refrigerated or 2 months frozen.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 pie crusts (top and bottom)', type: 'main' },
        { name: '4 cups mixed fresh berries', type: 'main' },
        { name: '3/4 cup sugar', type: 'main' },
        { name: '3 tbsp cornstarch', type: 'main' },
        { name: '1 tbsp lemon juice', type: 'dressing' },
        { name: '1 tbsp butter (dots on filling)', type: 'dressing' },
        { name: '1 egg for wash', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Prepare Filling' },
            {
              type: 'text',
              value:
                'Mix berries, sugar, cornstarch, and lemon juice; let stand 15 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Assemble Pie' },
            {
              type: 'text',
              value:
                'Pour filling into crust, dot with butter, cover with top crust, crimp edges, brush with egg wash, sprinkle sugar.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Bake' },
            {
              type: 'text',
              value:
                'Bake 45–50 minutes at 375 °F (190 °C) until golden and bubbling.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '320', unit: 'kcal' },
      { name: 'Protein', amount: '4', unit: 'g' },
      { name: 'Total Fat', amount: '14', unit: 'g' },
      { name: 'Saturated Fat', amount: '8', unit: 'g' },
      { name: 'Carbohydrates', amount: '45', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
      { name: 'Sugar', amount: '25', unit: 'g' },
      { name: 'Vitamin C', amount: '18', unit: '%' },
      { name: 'Iron', amount: '1.2', unit: 'mg' },
      { name: 'Potassium', amount: '220', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_075_perfect_cookie_filling',
    basicInfo: {
      recipeName: 'Perfect Filling for Cookies',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2 cups', value: '2' },
      tags: [
        { label: 'Cookies', value: 'Cookies' },
        { label: 'Filling', value: 'Filling' },
        { label: 'Buttercream', value: 'Buttercream' },
        { label: 'Dessert', value: 'Dessert' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Basics', value: 'Basics' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1618219741679-d0375e4d6b3d?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'Silky Buttercream Filling for Any Cookie' },
        {
          type: 'text',
          value:
            'This versatile buttercream works for sandwich cookies, whoopies, or macarons. Balanced sweetness with a hint of salt keeps it indulgent yet not cloying. Customize with extracts like vanilla, lemon, or espresso. The secret is beating butter long enough for airiness, then alternating sugar and cream additions. Holds shape perfectly for piping and stays soft at room temperature for hours.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1618219566012-5c4db6b2ef3d?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Add a spoon of peanut butter for a nutty twist.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=1xP_t8Rk3Ww' },
      ],
      faqs: [
        {
          ques: 'How long can it sit out?',
          ans: 'Up to 2 days at room temp or 1 week refrigerated.',
        },
        {
          ques: 'Can I freeze it?',
          ans: 'Yes, freeze 1 month; thaw in fridge before whipping.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup unsalted butter (softened)', type: 'main' },
        { name: '3 cups powdered sugar', type: 'main' },
        { name: '2 tbsp heavy cream', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'dressing' },
        { name: 'Pinch salt', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Beat Butter' },
            {
              type: 'text',
              value: 'Whip butter 5 minutes until pale and fluffy.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Add Sugar' },
            {
              type: 'text',
              value:
                'Gradually beat in sugar; alternate with cream for consistency.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Flavor & Use' },
            {
              type: 'text',
              value: 'Add vanilla and salt; pipe or spread between cookies.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '140', unit: 'kcal' },
      { name: 'Fat', amount: '10', unit: 'g' },
      { name: 'Saturated Fat', amount: '6', unit: 'g' },
      { name: 'Carbohydrates', amount: '13', unit: 'g' },
      { name: 'Sugar', amount: '12', unit: 'g' },
      { name: 'Sodium', amount: '20', unit: 'mg' },
      { name: 'Calcium', amount: '8', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_076_smoked_beef_burger_cheddar_onion',
    basicInfo: {
      recipeName: 'Smoked Beef Burgers with Old Cheddar and Onions',
      duration: { label: '40 Minutes', value: '40' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Beef', value: 'Beef' },
        { label: 'Burgers', value: 'Burgers' },
        { label: 'Grilled', value: 'Grilled' },
        { label: 'Cheddar', value: 'Cheddar' },
        { label: 'Savory', value: 'Savory' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Grill', value: 'Grill' },
        { label: 'Sandwiches', value: 'Sandwiches' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1606756790138-70f6d6d37926?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Juicy Smoked Burgers with Sharp Cheddar & Caramelized Onions',
        },
        {
          type: 'text',
          value:
            'These burgers are smoked over hickory for deep flavor, layered with aged cheddar and slow-cooked onions. The beef stays moist with 20 % fat content, and a touch of Worcestershire enhances umami. Serve on toasted brioche with Dijon and crisp lettuce. Perfect for cookouts or weeknight indulgence.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=bbdjhP7z7bU' },
      ],
      faqs: [
        {
          ques: 'Can I skip the smoker?',
          ans: 'Yes, grill or pan-sear and add liquid smoke to patties.',
        },
        {
          ques: 'Best cheese alternative?',
          ans: 'Aged gouda or Swiss melt well too.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 lb ground beef (80/20)', type: 'main' },
        { name: '4 slices old cheddar', type: 'main' },
        { name: '1 large onion, sliced', type: 'main' },
        { name: '1 tbsp butter', type: 'dressing' },
        { name: '1 tsp Worcestershire sauce', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
        { name: '4 brioche buns', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Caramelize Onions' },
            {
              type: 'text',
              value:
                'Cook onions in butter 15 min low heat until golden; season.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Form & Smoke' },
            {
              type: 'text',
              value:
                'Shape 4 patties, season, smoke or grill 4–5 min per side.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Assemble' },
            {
              type: 'text',
              value: 'Top with cheddar, onions, serve on toasted buns.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '540', unit: 'kcal' },
      { name: 'Protein', amount: '32', unit: 'g' },
      { name: 'Fat', amount: '34', unit: 'g' },
      { name: 'Saturated Fat', amount: '14', unit: 'g' },
      { name: 'Carbohydrates', amount: '28', unit: 'g' },
      { name: 'Sugar', amount: '5', unit: 'g' },
      { name: 'Sodium', amount: '560', unit: 'mg' },
      { name: 'Iron', amount: '3.8', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_077_cheese_fruit_platter',
    basicInfo: {
      recipeName: 'Arrange Elegant Cheese and Fruit Platter Recipe',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '6', value: '6' },
      tags: [
        { label: 'Cheese', value: 'Cheese' },
        { label: 'Fruit', value: 'Fruit' },
        { label: 'Appetizer', value: 'Appetizer' },
        { label: 'Platter', value: 'Platter' },
      ],
      categories: [
        { label: 'Appetizers', value: 'Appetizers' },
        { label: 'Entertaining', value: 'Entertaining' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'A Sophisticated Cheese and Fruit Arrangement',
        },
        {
          type: 'text',
          value:
            'A visually stunning platter combining creamy brie, aged cheddar, grapes, figs, and berries. Add honeycomb, nuts, and artisan crackers for texture. Arrange from center outwards alternating color and height. A drizzle of honey and sprigs of rosemary give a professional finish. Perfect for wine nights and gatherings.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=fJpmZZMpd7w' },
      ],
      faqs: [
        {
          ques: 'How early can I prep?',
          ans: 'Up to 2 hours ahead; cover loosely and chill.',
        },
        {
          ques: 'Cheese substitutes?',
          ans: 'Try camembert, gouda, or vegan nut cheese.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: 'Assorted cheeses (200 g each)', type: 'main' },
        { name: 'Fresh fruits (grapes, figs, berries)', type: 'main' },
        { name: 'Honeycomb or honey', type: 'dressing' },
        { name: 'Assorted nuts and crackers', type: 'main' },
        { name: 'Fresh rosemary sprigs', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Assemble Platter' },
            {
              type: 'text',
              value:
                'Arrange cheeses, then fruits, fill gaps with nuts and crackers.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Finish' },
            {
              type: 'text',
              value: 'Drizzle honey, garnish rosemary, serve slightly chilled.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '420', unit: 'kcal' },
      { name: 'Protein', amount: '17', unit: 'g' },
      { name: 'Fat', amount: '32', unit: 'g' },
      { name: 'Carbohydrates', amount: '18', unit: 'g' },
      { name: 'Sugar', amount: '10', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
      { name: 'Calcium', amount: '310', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_078_banana_bread_mascarpone_blueberry',
    basicInfo: {
      recipeName: 'Banana Bread with Mascarpone and Blueberry Jelly',
      duration: { label: '1 Hour 10 Minutes', value: '70' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '10', value: '10' },
      tags: [
        { label: 'Banana Bread', value: 'Banana Bread' },
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Baking', value: 'Baking' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Breads', value: 'Breads' },
        { label: 'Breakfast', value: 'Breakfast' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1599785209707-28c38f5c6e8d?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Moist Banana Bread with Mascarpone and Blueberry Jelly Swirl',
        },
        {
          type: 'text',
          value:
            'A decadent twist on the classic banana bread—soft crumb infused with mashed bananas, layered with creamy mascarpone and a swirl of tangy blueberry jelly. Perfect for breakfast or dessert, each slice delivers a blend of fruity sweetness and velvety richness. Serve slightly warm with a dusting of powdered sugar or a drizzle of honey.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1587241321921-91e63e8d2b33?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=dTrdFHz2CBc' },
      ],
      faqs: [
        {
          ques: 'Can I substitute mascarpone?',
          ans: 'Yes, use cream cheese or Greek yogurt.',
        },
        {
          ques: 'Shelf life?',
          ans: 'Keeps 4 days airtight or 1 week refrigerated.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '3 ripe bananas', type: 'main' },
        { name: '2 cups flour', type: 'main' },
        { name: '1/2 cup sugar', type: 'main' },
        { name: '1/2 cup melted butter', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '1 tsp baking soda', type: 'main' },
        { name: '1/2 cup mascarpone', type: 'main' },
        { name: '1/3 cup blueberry jelly', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Mix Batter' },
            {
              type: 'text',
              value:
                'Mash bananas, whisk with butter, eggs, sugar; add flour and baking soda.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Add Layers' },
            {
              type: 'text',
              value:
                'Pour half batter into pan, dollop mascarpone and jelly, swirl gently, top with remaining batter.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Bake' },
            {
              type: 'text',
              value: 'Bake 55–60 minutes at 350°F (175°C). Cool and slice.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '280', unit: 'kcal' },
      { name: 'Protein', amount: '5', unit: 'g' },
      { name: 'Fat', amount: '10', unit: 'g' },
      { name: 'Saturated Fat', amount: '6', unit: 'g' },
      { name: 'Carbohydrates', amount: '42', unit: 'g' },
      { name: 'Sugar', amount: '22', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Potassium', amount: '310', unit: 'mg' },
      { name: 'Calcium', amount: '28', unit: 'mg' },
      { name: 'Iron', amount: '1.1', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_079_best_fudgy_chocolate_cake',
    basicInfo: {
      recipeName: 'Best Fudgy Chocolate Cake',
      duration: { label: '1 Hour', value: '60' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '10', value: '10' },
      tags: [
        { label: 'Cake', value: 'Cake' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Baking', value: 'Baking' },
        { label: 'Fudgy', value: 'Fudgy' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Baking', value: 'Baking' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1601972599720-bd403aa2c9e5?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'The Ultimate Fudgy Chocolate Cake for Pure Indulgence',
        },
        {
          type: 'text',
          value:
            'Rich, dense, and intensely chocolaty—this cake combines melted dark chocolate, cocoa, and a splash of coffee for depth of flavor. Moist but not heavy, its glossy ganache topping locks in every bit of goodness. The secret lies in whisking the batter just enough and baking low and slow. Serve it warm with whipped cream or a scoop of vanilla ice cream for the ultimate comfort dessert.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1627308595208-4c0b3f1a2a8e?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Dust with cocoa powder before serving for a refined look.',
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=2RzJ9c3b6X0',
        },
      ],
      faqs: [
        {
          ques: 'Can I use milk chocolate?',
          ans: 'Yes, but reduce sugar by ¼ cup to balance sweetness.',
        },
        {
          ques: 'Storage?',
          ans: 'Keeps up to 5 days covered at room temperature or 1 week refrigerated.',
        },
        {
          ques: 'Freezer friendly?',
          ans: 'Freeze slices up to 2 months wrapped airtight.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 ¾ cups all-purpose flour', type: 'main' },
        { name: '¾ cup unsweetened cocoa powder', type: 'main' },
        { name: '1 cup sugar', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '½ cup melted dark chocolate', type: 'main' },
        { name: '¾ cup buttermilk', type: 'main' },
        { name: '½ cup coffee (warm)', type: 'dressing' },
        { name: '1 tsp baking soda', type: 'main' },
        { name: '½ tsp salt', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Mix Dry Ingredients' },
            {
              type: 'text',
              value: 'Sift flour, cocoa, baking soda, and salt into a bowl.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Whisk Wet Ingredients' },
            {
              type: 'text',
              value:
                'Beat eggs, sugar, buttermilk, and melted chocolate until smooth; stir in coffee.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Combine and Bake' },
            {
              type: 'text',
              value:
                'Fold dry into wet mix. Bake at 350°F (175°C) for 35–40 minutes. Cool and top with ganache.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '380', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Total Fat', amount: '18', unit: 'g' },
      { name: 'Saturated Fat', amount: '8', unit: 'g' },
      { name: 'Carbohydrates', amount: '49', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
      { name: 'Sugar', amount: '28', unit: 'g' },
      { name: 'Iron', amount: '2.1', unit: 'mg' },
      { name: 'Calcium', amount: '35', unit: 'mg' },
      { name: 'Potassium', amount: '280', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_080_biscuit_cake_chocolate',
    basicInfo: {
      recipeName: 'Biscuit Cake with Chocolate',
      duration: { label: '45 Minutes', value: '45' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '8', value: '8' },
      tags: [
        { label: 'No Bake', value: 'No Bake' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Cake', value: 'Cake' },
        { label: 'Quick Dessert', value: 'Quick Dessert' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Cakes', value: 'Cakes' },
        { label: 'No Bake', value: 'No Bake' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1558021211-6d1403321394?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'The Simplest Chocolate Biscuit Cake Ever',
        },
        {
          type: 'text',
          value:
            'Made from crushed biscuits and melted chocolate, this no-bake cake is rich, crunchy, and nostalgic. Perfect for beginners or kids, it sets beautifully in the fridge and slices cleanly. A drizzle of chocolate ganache adds a glossy finish. Add chopped nuts, coconut flakes, or dried fruit for texture and flavor variety. Serve chilled in neat squares or wedges for afternoon tea.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1605196564962-4e2d3de5a018?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=zUCluD5P4lA',
        },
      ],
      faqs: [
        {
          ques: 'Best biscuits to use?',
          ans: 'Digestive or Marie biscuits hold structure and absorb chocolate well.',
        },
        {
          ques: 'Can I freeze it?',
          ans: 'Yes, store in freezer up to 1 month wrapped tight.',
        },
        {
          ques: 'Vegan option?',
          ans: 'Use dairy-free chocolate and vegan butter substitute.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '300 g digestive biscuits', type: 'main' },
        { name: '200 g dark chocolate', type: 'main' },
        { name: '100 g butter', type: 'main' },
        { name: '3 tbsp honey', type: 'dressing' },
        { name: '1/2 cup crushed nuts', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Melt Chocolate' },
            {
              type: 'text',
              value: 'Melt chocolate, butter, and honey together until smooth.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Mix & Set' },
            {
              type: 'text',
              value:
                'Add crushed biscuits and nuts; stir to coat. Press into tin and chill 3 hours.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '310', unit: 'kcal' },
      { name: 'Protein', amount: '5', unit: 'g' },
      { name: 'Fat', amount: '18', unit: 'g' },
      { name: 'Saturated Fat', amount: '9', unit: 'g' },
      { name: 'Carbohydrates', amount: '36', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Sugar', amount: '22', unit: 'g' },
      { name: 'Iron', amount: '1.3', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_081_berry_watermelon_salad',
    basicInfo: {
      recipeName: 'Berry Watermelon Fruit Salad for the End of Summer',
      duration: { label: '15 Minutes', value: '15' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '6', value: '6' },
      tags: [
        { label: 'Salad', value: 'Salad' },
        { label: 'Fruit', value: 'Fruit' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Summer', value: 'Summer' },
      ],
      categories: [
        { label: 'Snacks', value: 'Snacks' },
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Refreshing Watermelon & Berry Medley',
        },
        {
          type: 'text',
          value:
            'A refreshing mix of watermelon cubes, strawberries, blueberries, and mint that screams summer. A light lime-honey dressing enhances natural sweetness while adding zesty brightness. Serve chilled for picnics or barbecues, or as a palate cleanser after rich meals. The contrast of colors and textures makes it both visually stunning and incredibly hydrating.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1590080875831-d9199b9db858?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=0-dMcu07Okg',
        },
      ],
      faqs: [
        {
          ques: 'Can I prep ahead?',
          ans: 'Yes, mix fruits but add dressing right before serving.',
        },
        {
          ques: 'Other fruit options?',
          ans: 'Add kiwi, mango, or peaches for variation.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '4 cups watermelon cubes', type: 'main' },
        { name: '1 cup strawberries', type: 'main' },
        { name: '½ cup blueberries', type: 'main' },
        { name: '2 tbsp honey', type: 'dressing' },
        { name: '1 tbsp lime juice', type: 'dressing' },
        { name: '1 tbsp chopped mint', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Prepare Dressing' },
            { type: 'text', value: 'Whisk honey and lime juice together.' },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Toss Salad' },
            {
              type: 'text',
              value:
                'Combine fruits, drizzle dressing, sprinkle mint, and chill before serving.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '120', unit: 'kcal' },
      { name: 'Protein', amount: '2', unit: 'g' },
      { name: 'Total Fat', amount: '0.5', unit: 'g' },
      { name: 'Carbohydrates', amount: '30', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
      { name: 'Sugar', amount: '26', unit: 'g' },
      { name: 'Vitamin C', amount: '40', unit: '%' },
      { name: 'Potassium', amount: '290', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_082_oatmeal_choco_chip_pancakes',
    basicInfo: {
      recipeName: 'Delicious Oatmeal Chocolate Chip Pancakes',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Pancakes', value: 'Pancakes' },
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Healthy', value: 'Healthy' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Snacks', value: 'Snacks' },
        { label: 'Desserts', value: 'Desserts' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Fluffy Oatmeal Pancakes with Chocolate Chips',
        },
        {
          type: 'text',
          value:
            'These hearty pancakes use oat flour and mashed bananas for natural sweetness and fiber. The chocolate chips melt slightly into the batter, creating gooey bites in every forkful. Top with maple syrup, sliced banana, or a dollop of Greek yogurt for a nutritious breakfast treat. They’re gluten-friendly and ready in minutes—perfect for weekends.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1575855398812-f6cdbf1c0f9e?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=8Ptv9oRB3uM' },
      ],
      faqs: [
        {
          ques: 'Can I make it vegan?',
          ans: 'Yes, use flax eggs and plant-based milk.',
        },
        {
          ques: 'Storage?',
          ans: 'Refrigerate 3 days; reheat in toaster or skillet.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup oat flour', type: 'main' },
        { name: '1 mashed banana', type: 'main' },
        { name: '1 egg', type: 'main' },
        { name: '¾ cup milk', type: 'main' },
        { name: '2 tbsp chocolate chips', type: 'main' },
        { name: '1 tsp baking powder', type: 'main' },
        { name: 'Pinch salt', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Make Batter' },
            {
              type: 'text',
              value:
                'Whisk banana, egg, and milk. Add oat flour, baking powder, and salt; fold in chips.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Cook' },
            {
              type: 'text',
              value:
                'Pour onto hot greased pan, cook 2–3 min each side until golden.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '210', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Total Fat', amount: '6', unit: 'g' },
      { name: 'Saturated Fat', amount: '2', unit: 'g' },
      { name: 'Carbohydrates', amount: '33', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
      { name: 'Sugar', amount: '10', unit: 'g' },
      { name: 'Potassium', amount: '250', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_083_egg_salad_avocado_watercress',
    basicInfo: {
      recipeName: 'Egg Salad Sandwich with Avocado and Watercress',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Egg', value: 'Egg' },
        { label: 'Sandwich', value: 'Sandwich' },
        { label: 'Avocado', value: 'Avocado' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Lunch', value: 'Lunch' },
      ],
      categories: [
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Sandwiches', value: 'Sandwiches' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1606755962773-8dc5d437b11a?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Creamy Egg Salad with Avocado and Peppery Watercress',
        },
        {
          type: 'text',
          value:
            'This twist on the classic egg salad sandwich adds ripe avocado for richness and watercress for freshness. Greek yogurt replaces half the mayo for a lighter texture. Layer between whole grain bread slices for a satisfying, protein-packed lunch. Perfect as a picnic sandwich or light meal that fuels you through the day.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=Qqg6W8P3zyA' },
      ],
      faqs: [
        {
          ques: 'Can I skip mayo?',
          ans: 'Yes, replace with more yogurt or mashed avocado.',
        },
        { ques: 'Storage?', ans: 'Best fresh, but can chill up to 12 hours.' },
      ],
    },
    directions: {
      ingredients: [
        { name: '4 boiled eggs', type: 'main' },
        { name: '1/2 ripe avocado', type: 'main' },
        { name: '1 tbsp mayonnaise', type: 'main' },
        { name: '1 tbsp Greek yogurt', type: 'main' },
        { name: '1 tsp lemon juice', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
        { name: 'Handful of watercress', type: 'main' },
        { name: '4 slices whole grain bread', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Make Salad' },
            {
              type: 'text',
              value:
                'Mash eggs and avocado, mix with mayo, yogurt, lemon, and seasonings.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Assemble Sandwich' },
            {
              type: 'text',
              value: 'Spread filling on bread, top with watercress, and serve.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '290', unit: 'kcal' },
      { name: 'Protein', amount: '14', unit: 'g' },
      { name: 'Fat', amount: '16', unit: 'g' },
      { name: 'Saturated Fat', amount: '4', unit: 'g' },
      { name: 'Carbohydrates', amount: '22', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
      { name: 'Potassium', amount: '320', unit: 'mg' },
      { name: 'Iron', amount: '1.5', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_084_black_bean_rice_burritos',
    basicInfo: {
      recipeName: 'Black Bean, Rice and Vegetable Burritos Recipe',
      duration: { label: '40 Minutes', value: '40' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Burritos', value: 'Burritos' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Mexican', value: 'Mexican' },
      ],
      categories: [
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1598514982578-08c5d6a6b7b4?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Wholesome Burritos Packed with Beans, Rice, and Veggies',
        },
        {
          type: 'text',
          value:
            'These hearty burritos feature spiced black beans, brown rice, and colorful vegetables wrapped in a warm tortilla. Perfectly seasoned with cumin, paprika, and garlic, each bite bursts with balanced flavor and texture. They’re freezer-friendly and easily customizable with cheese, avocado, or salsa. Great for meal prep or a quick, nourishing dinner that satisfies everyone at the table.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1625944959474-b55863d5cf97?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=wmlk2ZT1pBk' },
      ],
      faqs: [
        {
          ques: 'Can I use canned beans?',
          ans: 'Yes, rinse and drain them first to reduce sodium.',
        },
        {
          ques: 'Freezer tip?',
          ans: 'Wrap tightly in foil; reheat in oven or microwave.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 cups cooked brown rice', type: 'main' },
        { name: '1 can black beans', type: 'main' },
        { name: '1 red bell pepper, diced', type: 'main' },
        { name: '1 cup corn kernels', type: 'main' },
        { name: '1 tsp cumin', type: 'dressing' },
        { name: '1 tsp paprika', type: 'dressing' },
        { name: '4 large tortillas', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Prepare Filling' },
            {
              type: 'text',
              value: 'Sauté pepper and corn, stir in beans, rice, and spices.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Assemble Burritos' },
            {
              type: 'text',
              value:
                'Spoon mixture onto tortillas, roll tightly, and toast 2 min per side.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '410', unit: 'kcal' },
      { name: 'Protein', amount: '14', unit: 'g' },
      { name: 'Fat', amount: '9', unit: 'g' },
      { name: 'Carbohydrates', amount: '68', unit: 'g' },
      { name: 'Fiber', amount: '9', unit: 'g' },
      { name: 'Iron', amount: '2.8', unit: 'mg' },
      { name: 'Potassium', amount: '560', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_085_greek_yogurt_breakfast_bowls',
    basicInfo: {
      recipeName: 'Greek Yogurt Breakfast Bowls with Toppings',
      duration: { label: '10 Minutes', value: '10' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'High Protein', value: 'High Protein' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Snacks', value: 'Snacks' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1618815971328-4a2b3e9023e1?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Customizable Greek Yogurt Bowls for a Power Breakfast',
        },
        {
          type: 'text',
          value:
            'Start your morning with creamy Greek yogurt topped with seasonal fruits, nuts, and seeds. These bowls are nutrient-dense, rich in probiotics, and endlessly adaptable. Add honey for sweetness, granola for crunch, or chia seeds for extra fiber. Quick to prepare, they deliver lasting energy and are perfect for post-workout recovery.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=lTV1Hn8O4N4' },
      ],
      faqs: [
        { ques: 'Dairy-free option?', ans: 'Use coconut or almond yogurt.' },
        {
          ques: 'Sweeteners?',
          ans: 'Try maple syrup, agave, or stevia instead of honey.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup Greek yogurt', type: 'main' },
        { name: '½ cup mixed berries', type: 'main' },
        { name: '2 tbsp granola', type: 'main' },
        { name: '1 tsp honey', type: 'dressing' },
        { name: '1 tsp chia or flax seeds', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Assemble Bowl' },
            {
              type: 'text',
              value:
                'Spoon yogurt into bowls, arrange toppings, drizzle honey, and serve.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '250', unit: 'kcal' },
      { name: 'Protein', amount: '16', unit: 'g' },
      { name: 'Fat', amount: '8', unit: 'g' },
      { name: 'Carbohydrates', amount: '28', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
      { name: 'Calcium', amount: '180', unit: 'mg' },
      { name: 'Potassium', amount: '330', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_086_authentic_margherita_pizza',
    basicInfo: {
      recipeName: 'Make Authentic Italian Margherita Pizza at Home',
      duration: { label: '1 Hour 30 Minutes', value: '90' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Pizza', value: 'Pizza' },
        { label: 'Italian', value: 'Italian' },
        { label: 'Homemade', value: 'Homemade' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Italian', value: 'Italian' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1548365328-8b8490ee58e9?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'Classic Neapolitan-Style Margherita Pizza' },
        {
          type: 'text',
          value:
            'This timeless Italian favorite features a thin, crisp crust topped with San Marzano tomato sauce, fresh mozzarella, and fragrant basil. The dough ferments for at least 8 hours, producing an airy, chewy texture. A drizzle of extra-virgin olive oil after baking brings out its authentic flavor. Cooked at high heat, it delivers blistered edges and soft interiors—restaurant quality from your own kitchen.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1594007654729-407eedc4be42?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=7RMQksXpQSk' },
      ],
      faqs: [
        {
          ques: 'Can I use store dough?',
          ans: 'Yes, but homemade yields superior flavor.',
        },
        {
          ques: 'Baking tip?',
          ans: 'Use a preheated pizza stone for even heat.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 cups flour', type: 'main' },
        { name: '1 tsp yeast', type: 'main' },
        { name: '¾ cup warm water', type: 'main' },
        { name: '1 cup crushed San Marzano tomatoes', type: 'main' },
        { name: '120 g fresh mozzarella', type: 'main' },
        { name: 'Fresh basil leaves', type: 'dressing' },
        { name: '1 tbsp olive oil', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Make Dough' },
            {
              type: 'text',
              value:
                'Combine flour, yeast, and water; knead 8 min, rise 8 hours.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Assemble Pizza' },
            {
              type: 'text',
              value: 'Stretch dough, add sauce, mozzarella, and basil.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Bake' },
            {
              type: 'text',
              value:
                'Bake at 500 °F / 260 °C for 7–8 min until bubbly and golden.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '480', unit: 'kcal' },
      { name: 'Protein', amount: '19', unit: 'g' },
      { name: 'Fat', amount: '18', unit: 'g' },
      { name: 'Carbohydrates', amount: '58', unit: 'g' },
      { name: 'Calcium', amount: '220', unit: 'mg' },
      { name: 'Iron', amount: '2.3', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_087_baked_chicken_legs_dijon',
    basicInfo: {
      recipeName: 'Baked Chicken Legs with Garlic and Dijon',
      duration: { label: '55 Minutes', value: '55' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Chicken', value: 'Chicken' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Baked', value: 'Baked' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Poultry', value: 'Poultry' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1594065891078-0e0d12f2a8f0?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Crispy Oven-Baked Chicken Legs with Garlic-Dijon Glaze',
        },
        {
          type: 'text',
          value:
            'Juicy chicken legs coated in a tangy Dijon-garlic marinade and baked to golden perfection. The mustard tenderizes the meat while olive oil keeps the skin crisp. Serve with roasted vegetables or mashed potatoes for an easy weeknight dinner bursting with flavor.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1601050690597-cb9c1aaf9c60?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=E8eF8EUMbC0' },
      ],
      faqs: [
        {
          ques: 'Can I use chicken thighs?',
          ans: 'Yes, adjust cooking time to 40 minutes.',
        },
        {
          ques: 'Storage?',
          ans: 'Refrigerate leftovers 3 days, reheat at 350 °F.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '4 chicken legs', type: 'main' },
        { name: '2 tbsp Dijon mustard', type: 'main' },
        { name: '2 cloves garlic, minced', type: 'main' },
        { name: '2 tbsp olive oil', type: 'dressing' },
        { name: '1 tsp paprika', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Marinate' },
            {
              type: 'text',
              value:
                'Mix mustard, garlic, oil, and spices; coat chicken, rest 15 min.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Bake' },
            {
              type: 'text',
              value:
                'Bake 45–50 min at 400 °F / 200 °C until golden and cooked through.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '350', unit: 'kcal' },
      { name: 'Protein', amount: '32', unit: 'g' },
      { name: 'Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '2', unit: 'g' },
      { name: 'Iron', amount: '1.9', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_088_chicken_legs_tomatoes',
    basicInfo: {
      recipeName: 'Tender and Crisp Chicken Legs with Tomatoes',
      duration: { label: '1 Hour', value: '60' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Chicken', value: 'Chicken' },
        { label: 'Tomatoes', value: 'Tomatoes' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Mediterranean', value: 'Mediterranean' },
        { label: 'One Pan', value: 'One Pan' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Poultry', value: 'Poultry' },
        { label: 'Mediterranean', value: 'Mediterranean' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1617196036484-fd83e370fef4?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Golden-Brown Chicken Legs Braised with Tomatoes and Herbs',
        },
        {
          type: 'text',
          value:
            'Juicy chicken legs are seared to perfection before being gently braised with ripe tomatoes, garlic, and herbs. This Mediterranean-inspired dish combines crispy skin with a luscious, slow-simmered sauce infused with thyme, basil, and olive oil. The natural sweetness of the tomatoes complements the savory chicken, making this an elegant yet easy one-pan meal ideal for family dinners or weekend gatherings.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1601050690597-cb9c1aaf9c60?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/watch?v=dM7xH3LLfDA',
        },
        {
          type: 'text',
          value:
            'Serve hot with steamed rice or crusty bread to soak up the flavorful tomato sauce.',
        },
      ],
      faqs: [
        {
          ques: 'Can I use chicken thighs instead of legs?',
          ans: 'Yes, just reduce cooking time to about 40 minutes to prevent overcooking.',
        },
        {
          ques: 'What can I serve this with?',
          ans: 'It pairs beautifully with couscous, mashed potatoes, or a simple green salad.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '4 chicken legs', type: 'main' },
        { name: '2 cups cherry tomatoes, halved', type: 'main' },
        { name: '3 cloves garlic, minced', type: 'main' },
        { name: '1 tbsp olive oil', type: 'dressing' },
        { name: '1 tsp dried thyme', type: 'dressing' },
        { name: '1 tsp basil', type: 'dressing' },
        { name: 'Salt and black pepper to taste', type: 'dressing' },
        { name: '½ cup chicken broth', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Sear Chicken' },
            {
              type: 'text',
              value:
                'Heat olive oil in a skillet, season chicken, and sear until golden brown on both sides. Remove and set aside.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Prepare Tomato Sauce' },
            {
              type: 'text',
              value:
                'Sauté garlic in remaining oil, add cherry tomatoes, thyme, and basil. Cook until tomatoes soften.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Simmer' },
            {
              type: 'text',
              value:
                'Return chicken to pan, add broth, cover, and simmer 30–35 minutes until tender and sauce thickens.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Serve' },
            {
              type: 'text',
              value: 'Garnish with fresh herbs and serve with bread or rice.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '395', unit: 'kcal' },
      { name: 'Protein', amount: '34', unit: 'g' },
      { name: 'Total Fat', amount: '22', unit: 'g' },
      { name: 'Saturated Fat', amount: '5', unit: 'g' },
      { name: 'Carbohydrates', amount: '8', unit: 'g' },
      { name: 'Sugar', amount: '4', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Potassium', amount: '460', unit: 'mg' },
      { name: 'Sodium', amount: '430', unit: 'mg' },
      { name: 'Iron', amount: '1.7', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_089_kugelhopf_cardamom',
    basicInfo: {
      recipeName: 'Kugelhopf with Cardamom',
      duration: { label: '60+ Minutes', value: '90' },
      level: { label: 'Hard', value: 'Hard' },
      serving: { label: '10', value: '10' },
      tags: [
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Bake', value: 'bake' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Autumn', value: 'Autumn' },
      ],
      categories: [
        { label: 'Cakes', value: 'Cakes' },
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Breakfast', value: 'Breakfast' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1541782814450-a6d2a2c30f58?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Buttery Alsatian Kugelhopf Perfumed with Cardamom',
        },
        {
          type: 'text',
          value:
            'Kugelhopf is a festive, yeasted cake baked in a tall fluted mold. This version leans aromatic with freshly ground cardamom, orange zest, and golden raisins soaked in warm milk. The dough is rich with eggs and butter yet bakes up light thanks to a proper first rise and a patient second proof in the mold. Toasted almonds line the pan to create a crisp halo around the crumb. Brush with syrup while warm to lock in moisture, dust with sugar, and slice thick. It’s wonderful for breakfast with coffee or as a simple dessert after supper.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'For extra lift, keep dough slightly tacky; resist adding too much flour.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=5r3qfS1cR8Q' },
      ],
      faqs: [
        {
          ques: 'No Kugelhopf mold?',
          ans: 'Use a Bundt pan; reduce bake time by 5 minutes.',
        },
        {
          ques: 'Raisin substitute?',
          ans: 'Try chopped dried apricots or cranberries.',
        },
        {
          ques: 'Make ahead?',
          ans: 'Yes—freeze slices up to 1 month; rewarm before serving.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '3 cups bread flour', type: 'main' },
        { name: '2 1/4 tsp instant yeast', type: 'main' },
        { name: '1/2 cup warm milk', type: 'main' },
        { name: '3 large eggs', type: 'main' },
        { name: '1/2 cup sugar', type: 'main' },
        { name: '1 tsp fine salt', type: 'dressing' },
        { name: '1 1/2 tsp ground cardamom', type: 'dressing' },
        { name: '1 tbsp orange zest', type: 'dressing' },
        { name: '10 tbsp unsalted butter, softened', type: 'main' },
        { name: '3/4 cup golden raisins', type: 'main' },
        { name: '1/2 cup sliced almonds, toasted', type: 'main' },
        { name: '2 tbsp apricot jam + 1 tbsp water (glaze)', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Make Dough' },
            {
              type: 'text',
              value:
                'Whisk flour, yeast, sugar, salt, and cardamom. Add warm milk, eggs, and zest; mix until shaggy. Beat in butter a tablespoon at a time until smooth and elastic, 6–8 minutes. Fold in raisins.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'First Rise' },
            {
              type: 'text',
              value:
                'Cover and rise in a warm spot until doubled, 60–75 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Pan & Proof' },
            {
              type: 'text',
              value:
                'Butter the mold, scatter almonds inside. Scrape in dough, smoothing top. Proof until dough crowns slightly above the rim, 45–60 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Bake & Glaze' },
            {
              type: 'text',
              value:
                'Bake at 350°F/175°C for 35–40 minutes until deep golden. Unmold, brush with warm apricot glaze, cool, and dust with powdered sugar.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '340', unit: 'kcal' },
      { name: 'Protein', amount: '7', unit: 'g' },
      { name: 'Total Fat', amount: '13', unit: 'g' },
      { name: 'Saturated Fat', amount: '7', unit: 'g' },
      { name: 'Carbohydrates', amount: '50', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Sugar', amount: '18', unit: 'g' },
      { name: 'Sodium', amount: '220', unit: 'mg' },
      { name: 'Calcium', amount: '60', unit: 'mg' },
      { name: 'Iron', amount: '2.3', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_090_poached_eggs_basil_lemony_avocado_toast',
    basicInfo: {
      recipeName: 'Poached Eggs with Basil over Lemony Avocado Toast',
      duration: { label: '15 Minutes', value: '15' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '1', value: '1' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Easy', value: 'Easy' },
        { label: 'Vegetables', value: 'Vegetables' },
        { label: 'Protein', value: 'Protein' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Snacks', value: 'Snacks' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Silky Poached Eggs on Bright, Lemony Avocado Toast',
        },
        {
          type: 'text',
          value:
            'This café-style toast layers lemony smashed avocado with peppery basil and perfectly poached eggs. A touch of olive oil and flaky salt highlights the richness while citrus cuts through for balance. Use a wide pot for poaching so eggs don’t crowd, and add a splash of vinegar to help whites set cleanly. Toast hearty sourdough for crunch, rub with garlic if you like, and finish with chili flakes for heat. It’s a quick, satisfying breakfast that delivers protein, fiber, and healthy fats in every bite.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1516684669134-de6f26b9f175?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Poach eggs 3 minutes for runny yolks, 4–5 for medium.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=JxQ0dGv7i_k' },
      ],
      faqs: [
        {
          ques: 'No basil?',
          ans: 'Use baby arugula or chives for a peppery note.',
        },
        {
          ques: 'Gluten-free option?',
          ans: 'Serve over toasted gluten-free bread or sweet potato planks.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 slice sourdough, toasted', type: 'main' },
        { name: '1/2 ripe avocado', type: 'main' },
        { name: '1 tsp lemon juice', type: 'dressing' },
        { name: '1 tsp olive oil', type: 'dressing' },
        { name: '2 eggs', type: 'main' },
        { name: '6–8 basil leaves, torn', type: 'main' },
        { name: 'Salt, pepper, chili flakes', type: 'dressing' },
        { name: '1 tsp white vinegar (poaching)', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Poach Eggs' },
            {
              type: 'text',
              value:
                'Simmer water with vinegar. Crack eggs into cups; slide into water; poach 3–4 minutes. Drain on paper towels.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Mash Avocado' },
            {
              type: 'text',
              value:
                'Mash avocado with lemon juice, olive oil, salt, and pepper. Spread on toast.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Assemble' },
            {
              type: 'text',
              value:
                'Top toast with poached eggs, basil, and chili flakes. Serve immediately.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '420', unit: 'kcal' },
      { name: 'Protein', amount: '20', unit: 'g' },
      { name: 'Total Fat', amount: '27', unit: 'g' },
      { name: 'Saturated Fat', amount: '6', unit: 'g' },
      { name: 'Carbohydrates', amount: '28', unit: 'g' },
      { name: 'Fiber', amount: '7', unit: 'g' },
      { name: 'Sugar', amount: '3', unit: 'g' },
      { name: 'Sodium', amount: '420', unit: 'mg' },
      { name: 'Vitamin C', amount: '20', unit: '%' },
      { name: 'Potassium', amount: '650', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_091_golden_gouda_mushroom_soup',
    basicInfo: {
      recipeName: 'Easy and Quick Golden Gouda Mushroom Soup',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '5', value: '5' },
      tags: [
        { label: 'Soup', value: 'Soup' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Dairy-free', value: 'Dairy-free' },
        { label: 'Vegetables', value: 'Vegetables' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Snacks', value: 'Snacks' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1547766847-5040d5c7813b?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Velvety Mushroom Soup with Smoked Gouda Richness',
        },
        {
          type: 'text',
          value:
            'This golden, velvety soup layers umami from cremini and shiitake mushrooms with the gentle smokiness of Gouda. A quick sauté in butter builds flavor, deglazing with a splash of stock to capture every browned bit. Blending half the pot creates body while leaving bites of mushroom for texture. Finish with grated cheese and a hint of nutmeg. It’s weeknight-fast yet restaurant-luxurious, perfect with toasted bread or a simple salad.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        { type: 'text', value: 'Swap in aged Gouda for deeper caramel notes.' },
        { type: 'video', value: 'https://www.youtube.com/watch?v=i5bF6iB2GfM' },
      ],
      faqs: [
        {
          ques: 'No blender?',
          ans: 'Use a potato masher for a rustic texture.',
        },
        {
          ques: 'Make it vegetarian?',
          ans: 'Use vegetable stock instead of chicken stock.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 tbsp butter or olive oil', type: 'dressing' },
        { name: '12 oz mixed mushrooms, sliced', type: 'main' },
        { name: '1 small onion, diced', type: 'main' },
        { name: '2 cloves garlic, minced', type: 'main' },
        { name: '3 cups stock (veg or chicken)', type: 'main' },
        { name: '1/2 cup cream or milk', type: 'main' },
        { name: '3 oz smoked Gouda, grated', type: 'main' },
        { name: '1/4 tsp nutmeg', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Sauté & Deglaze' },
            {
              type: 'text',
              value:
                'Cook mushrooms and onion in butter until browned; add garlic 30 seconds. Deglaze with a splash of stock.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Simmer & Blend' },
            {
              type: 'text',
              value:
                'Add remaining stock; simmer 10 minutes. Blend half and return to pot.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Finish' },
            {
              type: 'text',
              value: 'Stir in cream, Gouda, nutmeg; season and serve hot.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '230', unit: 'kcal' },
      { name: 'Protein', amount: '10', unit: 'g' },
      { name: 'Total Fat', amount: '15', unit: 'g' },
      { name: 'Saturated Fat', amount: '8', unit: 'g' },
      { name: 'Carbohydrates', amount: '14', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Sodium', amount: '520', unit: 'mg' },
      { name: 'Calcium', amount: '210', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_092_falafels_fried_eggs_salad',
    basicInfo: {
      recipeName: 'Falafels and Fried Eggs with Salad',
      duration: { label: '45 Minutes', value: '45' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '5', value: '5' },
      tags: [
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Protein', value: 'Protein' },
        { label: 'Vegetables', value: 'Vegetables' },
        { label: 'Gluten-Free', value: 'Gluten-Free' },
      ],
      categories: [
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Dinner', value: 'Dinner' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1617093727343-a5f4f2f2d8a9?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Crisp Falafels with Sunny Eggs and Herby Salad',
        },
        {
          type: 'text',
          value:
            'Crisp, herb-packed falafels meet lacy fried eggs and a lemony chopped salad for a protein-forward plate. Use soaked (not canned) chickpeas for authentic texture. A quick blitz with parsley, cilantro, garlic, and spices forms a scoopable mix that fries up golden. The runny yolk becomes a rich ‘sauce’ that mingles with tahini and the bright crunch of cucumbers and tomatoes. Serve family-style with warm pita or on greens for a lighter bowl.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Air-fry at 375°F/190°C for 12–14 minutes as a lighter alternative.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=8g6rB0q3KjA' },
      ],
      faqs: [
        {
          ques: 'Can I use canned chickpeas?',
          ans: 'Texture suffers; if you must, add 1–2 tbsp flour to bind.',
        },
        {
          ques: 'Make-ahead?',
          ans: 'Refrigerate formed balls up to 24 hours; fry to order.',
        },
      ],
    },
    directions: {
      ingredients: [
        {
          name: '1 1/2 cups dried chickpeas, soaked overnight and drained',
          type: 'main',
        },
        { name: '1 small onion, chopped', type: 'main' },
        { name: '3 cloves garlic', type: 'main' },
        { name: '1 cup parsley + cilantro', type: 'main' },
        { name: '1 tsp cumin, 1/2 tsp coriander', type: 'dressing' },
        { name: '1 tsp salt, pepper to taste', type: 'dressing' },
        { name: '1/2 tsp baking powder', type: 'dressing' },
        { name: 'Oil for frying', type: 'dressing' },
        { name: '4 cups chopped cucumber, tomato, red onion', type: 'main' },
        { name: '2 tbsp lemon juice + 2 tbsp olive oil', type: 'dressing' },
        { name: '5 eggs', type: 'main' },
        { name: '1/3 cup tahini sauce', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Make Falafel Mix' },
            {
              type: 'text',
              value:
                'Pulse chickpeas, onion, garlic, herbs, spices, baking powder, and salt until coarse and clumpy. Chill 20 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Fry Falafels' },
            {
              type: 'text',
              value:
                'Form golf-ball scoops; fry at 350°F/175°C until deep golden, 3–4 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Salad & Eggs' },
            {
              type: 'text',
              value:
                'Toss veg with lemon and oil; season. Fry eggs to desired doneness.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Serve' },
            {
              type: 'text',
              value: 'Plate salad, top with falafels and eggs; drizzle tahini.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '520', unit: 'kcal' },
      { name: 'Protein', amount: '24', unit: 'g' },
      { name: 'Total Fat', amount: '27', unit: 'g' },
      { name: 'Carbohydrates', amount: '48', unit: 'g' },
      { name: 'Fiber', amount: '11', unit: 'g' },
      { name: 'Iron', amount: '5.2', unit: 'mg' },
      { name: 'Calcium', amount: '150', unit: 'mg' },
      { name: 'Sodium', amount: '540', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_093_garlic_butter_mushroom_pasta',
    basicInfo: {
      recipeName: 'Garlic Butter Mushroom Pasta',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '5', value: '5' },
      tags: [
        { label: 'Pasta', value: 'Pasta' },
        { label: 'Italian cuisine', value: 'Italian cuisine' },
        { label: 'Vegetables', value: 'Vegetables' },
        { label: 'Dinner', value: 'Dinner' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Fast To Make', value: 'Fast To Make' },
        { label: 'Pasta', value: 'Pasta' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8bbf?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Silky Garlic-Butter Pasta Loaded with Seared Mushrooms',
        },
        {
          type: 'text',
          value:
            'A weeknight hero: al dente pasta tossed in a glossy garlic-butter sauce with caramelized mushrooms and a splash of pasta water for emulsion. A handful of parsley and grated parmesan rounds it out. Sear mushrooms in batches to keep them browned, not steamed; add garlic off the heat to prevent bitterness. Finish with lemon zest for brightness and crushed red pepper for a gentle kick. It’s simple, comforting, and reliably delicious.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Reserve at least 1 cup of starchy pasta water for perfect gloss.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=7oYV1x1gqY8' },
      ],
      faqs: [
        {
          ques: 'Which mushrooms?',
          ans: 'Cremini and shiitake give great savory depth; add oyster for texture.',
        },
        {
          ques: 'Butter substitute?',
          ans: 'Olive oil works; finish with a knob of butter for flavor.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '12 oz spaghetti or linguine', type: 'main' },
        { name: '2 tbsp butter', type: 'main' },
        { name: '2 tbsp olive oil', type: 'dressing' },
        { name: '14 oz mixed mushrooms, sliced', type: 'main' },
        { name: '3 cloves garlic, thinly sliced', type: 'main' },
        { name: '1 tsp lemon zest', type: 'dressing' },
        { name: '1/2 cup grated parmesan', type: 'main' },
        { name: 'Salt, pepper, pinch chili flakes', type: 'dressing' },
        { name: '1/2 cup chopped parsley', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Cook Pasta' },
            {
              type: 'text',
              value:
                'Boil in salted water until al dente. Reserve pasta water; drain.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Sear Mushrooms' },
            {
              type: 'text',
              value:
                'Heat oil and 1 tbsp butter; cook mushrooms in batches until browned. Season.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Emulsify & Toss' },
            {
              type: 'text',
              value:
                'Add garlic 30 sec, pasta, remaining butter, splash pasta water, lemon zest, parmesan; toss to glossy. Finish with parsley and chili.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '460', unit: 'kcal' },
      { name: 'Protein', amount: '17', unit: 'g' },
      { name: 'Total Fat', amount: '18', unit: 'g' },
      { name: 'Carbohydrates', amount: '61', unit: 'g' },
      { name: 'Fiber', amount: '5', unit: 'g' },
      { name: 'Sodium', amount: '520', unit: 'mg' },
      { name: 'Calcium', amount: '260', unit: 'mg' },
      { name: 'Iron', amount: '3.1', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_094_avocado_toast_basil_cherry_tomatoes',
    basicInfo: {
      recipeName: 'Avocado Toast with Fresh Basil and Cherry Tomatoes',
      duration: { label: '15 Minutes', value: '15' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Vegetables', value: 'Vegetables' },
        { label: 'Easy', value: 'Easy' },
        { label: 'Summer', value: 'Summer' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Snacks', value: 'Snacks' },
        { label: 'Greens', value: 'Greens' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1543339310-6b3f7c8d2a2b?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Bright, Herby Avocado Toast with Juicy Cherry Tomatoes',
        },
        {
          type: 'text',
          value:
            'This café-style avocado toast balances creamy avocado with sweet cherry tomatoes and fragrant basil. A squeeze of lemon wakes up the flavors, while extra-virgin olive oil adds roundness and a glossy finish. Use sturdy sourdough or country bread and toast it well so it stands up to the toppings. Lightly mashing the avocado with salt elevates its natural savoriness without turning it into guacamole. For extra crunch, rub the toast with a cut garlic clove; for extra protein, top with shaved parmesan or a soft-boiled egg. Serve immediately so the bread stays crisp and the herbs stay vibrant.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Salt tomatoes 5 minutes in advance to draw out juices and intensify flavor.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=5o2kM7l1b9A' },
      ],
      faqs: [
        {
          ques: 'Bread swap?',
          ans: 'Try whole-grain or gluten-free boule; toast longer for structure.',
        },
        {
          ques: 'Make-ahead?',
          ans: 'Prep tomatoes and basil; mash avocado just before serving to prevent browning.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 thick slices sourdough, toasted', type: 'main' },
        { name: '1 large ripe avocado', type: 'main' },
        { name: '1 cup cherry tomatoes, halved', type: 'main' },
        { name: '8–10 basil leaves, torn', type: 'main' },
        { name: '1 tbsp lemon juice', type: 'dressing' },
        { name: '1 tbsp extra-virgin olive oil', type: 'dressing' },
        {
          name: '1 small garlic clove (optional, to rub toast)',
          type: 'dressing',
        },
        { name: 'Salt & black pepper', type: 'dressing' },
        { name: 'Pinch chili flakes (optional)', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Season Tomatoes' },
            {
              type: 'text',
              value:
                'Toss tomatoes with a pinch of salt and pepper; set aside 5 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Mash Avocado' },
            {
              type: 'text',
              value:
                'Scoop avocado into a bowl; mash with lemon juice, salt, and pepper until slightly chunky.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Assemble & Serve' },
            {
              type: 'text',
              value:
                'Rub toast with garlic (optional). Spread avocado, top with tomatoes and basil. Drizzle oil; finish with chili flakes.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '360', unit: 'kcal' },
      { name: 'Protein', amount: '7', unit: 'g' },
      { name: 'Total Fat', amount: '23', unit: 'g' },
      { name: 'Saturated Fat', amount: '3', unit: 'g' },
      { name: 'Carbohydrates', amount: '32', unit: 'g' },
      { name: 'Fiber', amount: '9', unit: 'g' },
      { name: 'Sugar', amount: '5', unit: 'g' },
      { name: 'Sodium', amount: '410', unit: 'mg' },
      { name: 'Potassium', amount: '710', unit: 'mg' },
      { name: 'Vitamin C', amount: '25', unit: '%' },
    ],
  },
  {
    _id: 'recp_095_great_pizza_dough_calzones_stromboli',
    basicInfo: {
      recipeName: 'Great Pizza Dough that Makes Calzones & Stromboli',
      duration: { label: '60+ Minutes', value: '120' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Pizza', value: 'Pizza' },
        { label: 'Italian cuisine', value: 'Italian cuisine' },
        { label: 'Bake', value: 'bake' },
        { label: 'Dinner', value: 'Dinner' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Grains', value: 'Grains' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'One Dough, Three Wins: Pizza, Calzones, and Stromboli',
        },
        {
          type: 'text',
          value:
            'This flexible, slow-fermented dough yields blistered pizza, pillowy calzones, and crisp stromboli. A higher hydration (65%) and a touch of olive oil deliver chew and tenderness, while an overnight rise in the fridge develops deep flavor. Knead until smooth and slightly tacky, then let time do the work. For pizza, stretch gently and bake on a preheated stone. For calzones, fill and crimp well; for stromboli, roll like a jelly roll and vent to prevent steam pockets. Bake hot and fast for maximum oven spring and a lacquered crust.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1514511547117-f9c2a0b0bdcc?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Cold-proof 12–24 hours for superior flavor; rest dough 1 hour at room temp before shaping.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=Zav3Uj2v3Y0' },
      ],
      faqs: [
        {
          ques: 'No stand mixer?',
          ans: 'Use a stretch-and-fold method every 30 minutes for 2 hours.',
        },
        {
          ques: 'Flour swap?',
          ans: '00 flour gives tenderness; bread flour yields more chew.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '3 1/4 cups (400 g) flour (00 or bread)', type: 'main' },
        { name: '1 1/4 cups (280 g) water, lukewarm', type: 'main' },
        { name: '2 tsp olive oil', type: 'dressing' },
        { name: '1 1/4 tsp fine salt', type: 'dressing' },
        { name: '1 tsp instant yeast', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Mix & Knead' },
            {
              type: 'text',
              value:
                'Combine water, yeast, oil; add flour and salt. Knead 8–10 min until smooth.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Bulk Ferment' },
            {
              type: 'text',
              value:
                'Cover; rise 60–90 min at room temp. Refrigerate 12–24 hours.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Shape Variations' },
            {
              type: 'text',
              value:
                'Pizza: stretch to 12 in, top lightly. Calzone: fill, fold, crimp. Stromboli: layer fillings, roll, vent slits.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Bake Hot' },
            {
              type: 'text',
              value:
                'Bake on stone/steel at 500–550°F (260–290°C): pizza 7–8 min; calzone/stromboli 12–16 min.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '290', unit: 'kcal' },
      { name: 'Protein', amount: '9', unit: 'g' },
      { name: 'Total Fat', amount: '4', unit: 'g' },
      { name: 'Carbohydrates', amount: '55', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Sodium', amount: '420', unit: 'mg' },
      { name: 'Iron', amount: '3.0', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_096_beef_salad_dijon_balsamic',
    basicInfo: {
      recipeName: 'Beef Salad with Dijon Balsamic Dressing',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Protein', value: 'Protein' },
        { label: 'Salad', value: 'Salad' },
        { label: 'Gluten-Free', value: 'Gluten-Free' },
      ],
      categories: [
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Greens', value: 'Greens' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Seared Steak Salad with Sharp-Sweet Dijon Balsamic',
        },
        {
          type: 'text',
          value:
            'This hearty salad pairs medium-rare steak with peppery arugula, cherry tomatoes, and shaved parmesan, all tied together by a tangy Dijon-balsamic vinaigrette. Rest the steak well so juices redistribute before slicing thinly across the grain. The dressing emulsifies quickly by whisking Dijon with vinegar before streaming in olive oil; a touch of honey balances the acidity. Crunchy toasted almonds add texture. Serve as an elevated lunch or a light yet satisfying dinner.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1544025162-8e1ff0a3f0f9?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Swap arugula for mixed greens; add roasted peppers for sweetness.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=JrY0X9A1v6g' },
      ],
      faqs: [
        {
          ques: 'Best cut of beef?',
          ans: 'Flank, skirt, or sirloin work well; cook to medium-rare for tenderness.',
        },
        {
          ques: 'Make-ahead?',
          ans: 'Whisk dressing and chill; slice steak just before serving.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 lb flank or sirloin steak', type: 'main' },
        { name: '5 oz arugula', type: 'main' },
        { name: '1 cup cherry tomatoes, halved', type: 'main' },
        { name: '1/4 cup shaved parmesan', type: 'main' },
        { name: '1/4 cup sliced almonds, toasted', type: 'main' },
        { name: '2 tbsp balsamic vinegar', type: 'dressing' },
        { name: '1 tsp Dijon mustard', type: 'dressing' },
        { name: '1 tsp honey', type: 'dressing' },
        { name: '3 tbsp olive oil', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Sear Steak' },
            {
              type: 'text',
              value:
                'Pat steak dry; season. Sear in a hot pan 3–4 min per side (medium-rare). Rest 8 minutes; slice thinly.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Make Dressing' },
            {
              type: 'text',
              value:
                'Whisk balsamic, Dijon, and honey; stream in oil; season to taste.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Assemble' },
            {
              type: 'text',
              value:
                'Toss arugula with tomatoes, almonds, and half the dressing. Top with steak and parmesan; drizzle remaining dressing.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '420', unit: 'kcal' },
      { name: 'Protein', amount: '29', unit: 'g' },
      { name: 'Total Fat', amount: '28', unit: 'g' },
      { name: 'Saturated Fat', amount: '8', unit: 'g' },
      { name: 'Carbohydrates', amount: '10', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Sodium', amount: '420', unit: 'mg' },
      { name: 'Iron', amount: '3.7', unit: 'mg' },
      { name: 'Potassium', amount: '620', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_097_best_black_bean_burgers',
    basicInfo: {
      recipeName: "The Best Black Bean Burgers I've Ever Had",
      duration: { label: '35 Minutes', value: '35' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Burgers', value: 'Burgers' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Protein', value: 'Protein' },
        { label: 'Dinner', value: 'Dinner' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Snacks', value: 'Snacks' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Crisp-Edged, Tender Black Bean Burgers That Don’t Fall Apart',
        },
        {
          type: 'text',
          value:
            'These black bean burgers strike the ideal balance of hearty and moist. Baking the beans briefly dries them out, concentrating flavor and helping the patties hold together. Smoked paprika, cumin, and garlic add depth, while grated carrot and chopped cilantro keep things fresh. A beaten egg and quick oats bind the mixture without making it stodgy. Sear in a hot pan for a savory crust, then stack on toasted buns with avocado, pickled onions, and chipotle mayo. They’re weeknight-fast, freezer-friendly, and satisfying even for meat lovers.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1617692855027-c8d1c1b16c8f?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'For vegan burgers, swap egg with a flax egg (1 tbsp flax + 3 tbsp water).',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=3H1p7Hj5a7w' },
      ],
      faqs: [
        {
          ques: 'How to prevent mushiness?',
          ans: 'Dry beans in the oven 10 minutes; avoid over-pulsing mixture.',
        },
        {
          ques: 'Can I grill them?',
          ans: 'Yes—chill patties 30 minutes first and oil grates well.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 cans black beans, rinsed', type: 'main' },
        { name: '1/2 cup quick oats', type: 'main' },
        { name: '1 egg (or flax egg)', type: 'main' },
        { name: '1 small carrot, grated', type: 'main' },
        { name: '2 tbsp cilantro, chopped', type: 'main' },
        { name: '1 tsp cumin', type: 'dressing' },
        { name: '1 tsp smoked paprika', type: 'dressing' },
        { name: '2 cloves garlic, minced', type: 'main' },
        { name: '1/2 tsp salt, pepper', type: 'dressing' },
        { name: 'Oil for searing', type: 'dressing' },
        {
          name: '4 burger buns + toppings (avocado, pickled onion, chipotle mayo)',
          type: 'main',
        },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Dry Beans' },
            {
              type: 'text',
              value:
                'Spread beans on a tray; bake at 300°F/150°C for 10 minutes until slightly dry.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Make Mix' },
            {
              type: 'text',
              value:
                'Mash half the beans; fold in remaining beans, oats, egg, carrot, spices, garlic, and cilantro. Season.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Shape & Cook' },
            {
              type: 'text',
              value:
                'Form 4 patties. Sear in oiled pan 4–5 min per side until crisp and heated through.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '420', unit: 'kcal' },
      { name: 'Protein', amount: '18', unit: 'g' },
      { name: 'Total Fat', amount: '12', unit: 'g' },
      { name: 'Carbohydrates', amount: '62', unit: 'g' },
      { name: 'Fiber', amount: '14', unit: 'g' },
      { name: 'Sodium', amount: '620', unit: 'mg' },
      { name: 'Iron', amount: '4.9', unit: 'mg' },
      { name: 'Potassium', amount: '820', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_098_7_easy_bruschetta_recipes',
    basicInfo: {
      recipeName: '7 Easy Bruschetta Recipes that Look Fancy',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '14', value: '14' },
      tags: [
        { label: 'Appetizer', value: 'appetizer' },
        { label: 'Italian cuisine', value: 'Italian cuisine' },
        { label: 'Party', value: 'One bowl' },
        { label: 'Vegetables', value: 'Vegetables' },
      ],
      categories: [
        { label: 'Appetizers', value: 'Appetizers' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Fast To Make', value: 'Fast To Make' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'The Entertainer’s Bruschetta Board (7 Ways)' },
        {
          type: 'text',
          value:
            'Make a show-stopping bruschetta spread with seven toppings: classic tomato-basil; whipped ricotta with honey and thyme; roasted mushrooms with garlic; olive tapenade with lemon zest; smoked salmon with crème fraîche and dill; prosciutto with fig jam and arugula; and strawberry-balsamic with black pepper. Toast slices of rustic bread, rub lightly with garlic, and drizzle with olive oil. Build just before serving so the bread stays crunchy. Mix textures and colors across the board and label each topping for easy grazing. Perfect for parties, date night, or snacky dinners.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1544025162-8b76d2f01937?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Use day-old bread; it toasts evenly and stays crunchy longer.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=2JrXJ1i2k7Q' },
      ],
      faqs: [
        {
          ques: 'Keep bread crisp?',
          ans: 'Brush lightly with oil and toast at 425°F/220°C; top right before serving.',
        },
        {
          ques: 'Make ahead?',
          ans: 'Prep toppings; store separately and assemble at the table.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 baguette or rustic loaf, sliced 1/2 in', type: 'main' },
        { name: '3 tbsp extra-virgin olive oil', type: 'dressing' },
        { name: '1 garlic clove, halved (to rub)', type: 'dressing' },
        { name: 'Tomato-basil: diced tomatoes, basil, salt', type: 'main' },
        { name: 'Ricotta-honey: whipped ricotta, honey, thyme', type: 'main' },
        { name: 'Garlic mushrooms: roasted mushrooms, parsley', type: 'main' },
        { name: 'Tapenade: black olives, capers, lemon zest', type: 'main' },
        {
          name: 'Salmon-dill: smoked salmon, crème fraîche, dill',
          type: 'main',
        },
        { name: 'Prosciutto-fig: prosciutto, fig jam, arugula', type: 'main' },
        {
          name: 'Strawberry-balsamic: strawberries, balsamic, black pepper',
          type: 'main',
        },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Toast Bread' },
            {
              type: 'text',
              value:
                'Brush slices with oil; bake at 425°F/220°C for 6–8 minutes until golden; rub with garlic.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Top 7 Ways' },
            {
              type: 'text',
              value:
                'Arrange toppings in bowls. Spoon onto toasts just before serving; finish with herbs or pepper.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '140', unit: 'kcal' },
      { name: 'Protein', amount: '4', unit: 'g' },
      { name: 'Total Fat', amount: '5', unit: 'g' },
      { name: 'Carbohydrates', amount: '19', unit: 'g' },
      { name: 'Fiber', amount: '1', unit: 'g' },
      { name: 'Sodium', amount: '170', unit: 'mg' },
    ],
  },

  {
    _id: 'recp_099_banana_mango_smoothie',
    basicInfo: {
      recipeName: 'The Best Banana–Mango Smoothie Recipe',
      duration: { label: '10 Minutes', value: '10' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '2', value: '2' },
      tags: [
        { label: 'Smoothie', value: 'Smoothie' },
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Summer', value: 'Summer' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Snacks', value: 'Snacks' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Tropical Banana–Mango Smoothie with a Hint of Lime',
        },
        {
          type: 'text',
          value:
            'This creamy tropical smoothie blends ripe banana, juicy mango, and a squeeze of lime for brightness. The natural sweetness of fruit makes added sugar unnecessary, while Greek yogurt or almond milk adds creaminess and protein. Freeze the fruit beforehand for a thicker, frosty texture. A handful of spinach or a spoon of chia seeds can boost nutrients without altering flavor. It’s the perfect grab-and-go breakfast or refreshing post-workout fuel that captures sunshine in a glass.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1582719478181-d3b44f1c0d18?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Freeze peeled mango chunks for 2 hours for ultra-smooth blending.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=1mFZZM6CQtc' },
      ],
      faqs: [
        {
          ques: 'Dairy-free option?',
          ans: 'Use almond, oat, or coconut milk instead of yogurt.',
        },
        {
          ques: 'Extra protein?',
          ans: 'Blend in a scoop of vanilla whey or plant protein powder.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 ripe banana, frozen', type: 'main' },
        { name: '1 cup mango chunks, frozen', type: 'main' },
        { name: '1/2 cup Greek yogurt or almond milk', type: 'main' },
        { name: '1/2 cup orange juice', type: 'main' },
        { name: '1 tsp honey (optional)', type: 'dressing' },
        { name: '1 tsp lime juice', type: 'dressing' },
        { name: 'Ice cubes (optional)', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Blend Smoothie' },
            {
              type: 'text',
              value:
                'Combine all ingredients in a blender; blend until smooth and creamy. Adjust thickness with more milk or ice.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Serve' },
            {
              type: 'text',
              value:
                'Pour into chilled glasses; garnish with mint or a slice of mango.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '210', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Total Fat', amount: '3', unit: 'g' },
      { name: 'Carbohydrates', amount: '44', unit: 'g' },
      { name: 'Fiber', amount: '5', unit: 'g' },
      { name: 'Vitamin C', amount: '90', unit: '%' },
      { name: 'Potassium', amount: '560', unit: 'mg' },
      { name: 'Calcium', amount: '80', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_100_maggy_food_waste_tips',
    basicInfo: {
      recipeName: 'Maggy’s Tips to Avoid Food Waste',
      duration: { label: 'N/A', value: '0' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: 'N/A', value: 'N/A' },
      tags: [
        { label: 'Tips and Tricks', value: 'Tips and Tricks' },
        { label: 'Sustainability', value: 'Sustainability' },
        { label: 'Zero-waste', value: 'Zero-waste' },
      ],
      categories: [
        { label: 'Tips', value: 'Tips' },
        { label: 'Guides', value: 'Guides' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1600891963934-5b8e0e6c1e7f?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'Simple Kitchen Habits to Cut Food Waste' },
        {
          type: 'text',
          value:
            'Maggy’s guide helps you make the most of every ingredient. Learn to repurpose leftovers into soups, smoothies, or stir-fries. Store herbs in jars of water, freeze ripe fruit for later, and turn vegetable scraps into homemade broth. Practice FIFO—first in, first out—by rotating older ingredients to the front of your pantry. Track perishables weekly to plan recipes around what’s available. Small, consistent actions save money, reduce landfill methane, and make cooking more intentional and rewarding.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1590080875831-0e96dbd49f58?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Compost peels and stems instead of tossing them—your garden will thank you.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=bO8w1y2bVgY' },
      ],
      faqs: [
        {
          ques: 'How to store greens?',
          ans: 'Wrap in damp towel and store in a vented container in the fridge.',
        },
        {
          ques: 'Can I freeze cooked rice?',
          ans: 'Yes—spread flat, cool completely, and freeze in portions up to 1 month.',
        },
      ],
    },
    directions: {
      ingredients: [],
      methods: [
        {
          step: [
            { type: 'title', value: 'Plan Smart' },
            {
              type: 'text',
              value:
                'Keep a weekly inventory list of your fridge and pantry items.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Store Properly' },
            {
              type: 'text',
              value:
                'Learn correct storage for produce, dairy, and grains to extend freshness.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Repurpose Creatively' },
            {
              type: 'text',
              value:
                'Turn leftover veggies into soups, smoothies, or frittatas.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [],
  },
  {
    _id: 'recp_101_homemade_waffles',
    basicInfo: {
      recipeName: 'Perfect Homemade Waffles',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Easy', value: 'Easy' },
        { label: 'Bake', value: 'Bake' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Desserts', value: 'Desserts' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1575855397271-64a75c0d3a35?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'Crisp on the Outside, Fluffy Inside Waffles' },
        {
          type: 'text',
          value:
            'Crispy golden waffles made from scratch are easier than you think. The secret lies in separating eggs—beating whites until fluffy gives lift without heaviness. Melted butter and a touch of sugar add crispness, while vanilla enhances the aroma. Resting the batter for a few minutes allows the flour to hydrate, yielding consistent texture. Serve with maple syrup, berries, or whipped cream for an indulgent breakfast everyone will love.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1607344645866-009c50c4c247?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'For crispier waffles, keep them warm in a 200°F oven directly on the rack.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=Vn7A8rYpBR8' },
      ],
      faqs: [
        {
          ques: 'No waffle maker?',
          ans: 'Use a grill pan; cook each side until golden and crisp.',
        },
        {
          ques: 'Can I freeze waffles?',
          ans: 'Yes—cool, wrap individually, and toast from frozen.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 cups all-purpose flour', type: 'main' },
        { name: '2 tbsp sugar', type: 'dressing' },
        { name: '2 tsp baking powder', type: 'main' },
        { name: '1/2 tsp salt', type: 'dressing' },
        { name: '2 eggs, separated', type: 'main' },
        { name: '1 3/4 cups milk', type: 'main' },
        { name: '1/3 cup melted butter', type: 'main' },
        { name: '1 tsp vanilla extract', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Mix Batter' },
            {
              type: 'text',
              value:
                'Whisk dry ingredients. In another bowl, mix yolks, milk, butter, vanilla. Combine, then fold in beaten egg whites.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Cook Waffles' },
            {
              type: 'text',
              value:
                'Preheat iron; pour 1/2 cup batter, cook until steam slows and waffles are golden brown.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '320', unit: 'kcal' },
      { name: 'Protein', amount: '8', unit: 'g' },
      { name: 'Total Fat', amount: '13', unit: 'g' },
      { name: 'Carbohydrates', amount: '42', unit: 'g' },
      { name: 'Sugar', amount: '9', unit: 'g' },
      { name: 'Sodium', amount: '330', unit: 'mg' },
      { name: 'Calcium', amount: '110', unit: 'mg' },
      { name: 'Iron', amount: '1.9', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_102_muesli_recipe',
    basicInfo: {
      recipeName: 'Grain-Free, Gluten-Free Muesli Recipe',
      duration: { label: '15 Minutes', value: '15' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '5', value: '5' },
      tags: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Gluten-Free', value: 'Gluten-Free' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Snacks', value: 'Snacks' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1565958011705-2f9b3e98d6d8?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Wholesome, Crunchy Muesli—No Grains, No Gluten',
        },
        {
          type: 'text',
          value:
            'This naturally gluten-free muesli skips oats for a crunchy blend of nuts, seeds, and coconut flakes lightly toasted with cinnamon and honey. It’s nutrient-dense, rich in healthy fats, and customizable—add dried fruit, chocolate nibs, or spices to your liking. Enjoy with yogurt, almond milk, or straight from the jar for an energizing snack. Toasting enhances flavor while locking in satisfying crunch.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1617114569874-f839d18039e2?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Stir halfway through baking to ensure even toasting.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=1PjwhpI2fDU' },
      ],
      faqs: [
        {
          ques: 'Sweetener alternative?',
          ans: 'Use maple syrup or agave instead of honey.',
        },
        {
          ques: 'Storage life?',
          ans: 'Keeps 3 weeks in airtight jar at room temperature.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup chopped almonds', type: 'main' },
        { name: '1 cup sunflower seeds', type: 'main' },
        { name: '1/2 cup pumpkin seeds', type: 'main' },
        { name: '1 cup unsweetened coconut flakes', type: 'main' },
        { name: '2 tbsp honey', type: 'dressing' },
        { name: '1 tbsp coconut oil', type: 'dressing' },
        { name: '1 tsp cinnamon', type: 'dressing' },
        { name: 'Pinch salt', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Mix Ingredients' },
            {
              type: 'text',
              value:
                'Toss nuts, seeds, and coconut with honey, oil, cinnamon, and salt.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Toast' },
            {
              type: 'text',
              value:
                'Spread on tray; bake at 325°F/160°C for 15 minutes, stirring once.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '320', unit: 'kcal' },
      { name: 'Protein', amount: '9', unit: 'g' },
      { name: 'Total Fat', amount: '27', unit: 'g' },
      { name: 'Carbohydrates', amount: '14', unit: 'g' },
      { name: 'Fiber', amount: '5', unit: 'g' },
      { name: 'Sugar', amount: '6', unit: 'g' },
      { name: 'Magnesium', amount: '65', unit: 'mg' },
      { name: 'Iron', amount: '2.1', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_103_vanilla_chia_pudding_blueberries',
    basicInfo: {
      recipeName: 'Simple Vanilla Chia Pudding with Blueberries',
      duration: { label: '10 Minutes (plus chilling)', value: '10' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Breakfast', value: 'Breakfast' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1590080875831-0e96dbd49f58?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Creamy Vanilla Chia Pudding Topped with Fresh Blueberries',
        },
        {
          type: 'text',
          value:
            'Chia pudding is a no-cook favorite: nutrient-rich, creamy, and endlessly customizable. Vanilla extract enhances its subtle flavor, while plant-based milk keeps it light. Stir well, chill for a few hours, and the chia seeds bloom into a luscious texture. Blueberries add natural sweetness and antioxidants. Great as a breakfast prep or light dessert, this recipe takes five minutes of effort for a rewarding spoonful anytime.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1600524892222-298b32a8f653?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'For extra creaminess, blend half the mixture before chilling.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=dHdcW1xYRCM' },
      ],
      faqs: [
        {
          ques: 'Make ahead?',
          ans: 'Yes—store up to 4 days in the fridge; stir before serving.',
        },
        {
          ques: 'Milk alternative?',
          ans: 'Almond, oat, coconut, or soy milk all work well.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1/4 cup chia seeds', type: 'main' },
        { name: '1 cup almond milk', type: 'main' },
        { name: '1/2 tsp vanilla extract', type: 'dressing' },
        { name: '1 tbsp maple syrup', type: 'dressing' },
        { name: '1/2 cup blueberries', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Mix Ingredients' },
            {
              type: 'text',
              value:
                'Combine milk, vanilla, and syrup; whisk in chia seeds. Stir after 10 minutes to prevent clumping.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Chill & Serve' },
            {
              type: 'text',
              value:
                'Refrigerate 4 hours or overnight; top with blueberries before serving.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '250', unit: 'kcal' },
      { name: 'Protein', amount: '8', unit: 'g' },
      { name: 'Total Fat', amount: '12', unit: 'g' },
      { name: 'Omega-3', amount: '4.5', unit: 'g' },
      { name: 'Fiber', amount: '10', unit: 'g' },
      { name: 'Calcium', amount: '150', unit: 'mg' },
      { name: 'Iron', amount: '1.5', unit: 'mg' },
      { name: 'Vitamin C', amount: '15', unit: '%' },
    ],
  },
  {
    _id: 'recp_104_whole_wheat_bread_taylor',
    basicInfo: {
      recipeName: 'Taylor’s Whole Grains 100% Whole Wheat Bread',
      duration: { label: '2 Hours', value: '120' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '12', value: '12' },
      tags: [
        { label: 'Bread', value: 'Bread' },
        { label: 'Whole Grains', value: 'Whole Grains' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Bake', value: 'Bake' },
      ],
      categories: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Grains', value: 'Grains' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1575891029877-1ce2d6558b5d?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'Nutty, Hearty, and Soft Whole Wheat Bread' },
        {
          type: 'text',
          value:
            'Taylor’s whole wheat bread balances nutty flavor with a soft crumb and crisp crust. Honey gives mild sweetness, while olive oil adds tenderness. A mix of warm water and yeast ensures a strong rise. The secret is kneading long enough to build gluten, then allowing the dough to rest for a slow, flavorful proof. Great for toast or sandwiches, this loaf stays moist for days and slices beautifully once cooled.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1604908177225-6e9846e1b814?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Brush the loaf with milk before baking for a golden, tender crust.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=X7fR1oO3TqA' },
      ],
      faqs: [
        {
          ques: 'Can I add seeds?',
          ans: 'Yes—sunflower, flax, or sesame seeds add great texture.',
        },
        {
          ques: 'Storage tip?',
          ans: 'Wrap in cloth; keeps 3–4 days at room temperature.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '3 cups whole wheat flour', type: 'main' },
        { name: '1 1/4 cups warm water', type: 'main' },
        { name: '2 tbsp olive oil', type: 'dressing' },
        { name: '2 tbsp honey', type: 'dressing' },
        { name: '2 1/4 tsp instant yeast', type: 'main' },
        { name: '1 tsp salt', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Activate Yeast' },
            {
              type: 'text',
              value:
                'Combine warm water, honey, and yeast; rest 10 minutes until foamy.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Mix & Knead' },
            {
              type: 'text',
              value:
                'Add flour, salt, and oil; knead 10 minutes until smooth and elastic.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Proof & Bake' },
            {
              type: 'text',
              value:
                'Rise 1 hour; shape, rise again 30 minutes. Bake at 375°F/190°C for 30–35 minutes.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '180', unit: 'kcal' },
      { name: 'Protein', amount: '6', unit: 'g' },
      { name: 'Total Fat', amount: '4', unit: 'g' },
      { name: 'Carbohydrates', amount: '32', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
      { name: 'Iron', amount: '1.7', unit: 'mg' },
      { name: 'Magnesium', amount: '50', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_105_mozzarella_basil_sundried_tomatoes',
    basicInfo: {
      recipeName: 'Mozzarella with Basil and Sun-Dried Tomatoes',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Appetizer', value: 'Appetizer' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Italian cuisine', value: 'Italian cuisine' },
        { label: 'Summer', value: 'Summer' },
      ],
      categories: [
        { label: 'Appetizers', value: 'Appetizers' },
        { label: 'Lunch', value: 'Lunch' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Fresh Mozzarella with Basil and Sun-Dried Tomato Drizzle',
        },
        {
          type: 'text',
          value:
            'A quick yet elegant dish of creamy mozzarella layered with sun-dried tomatoes, basil, and a drizzle of balsamic glaze. The contrasting flavors—sweet, salty, tangy, and herbaceous—come together beautifully. Use high-quality mozzarella di bufala and oil-packed tomatoes for best results. Serve it as an antipasto or light lunch with toasted bread or crisp greens.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1609724878410-97582a1d5e2f?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'For a twist, add roasted red peppers or olives.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=hrx6pdz6YzM' },
      ],
      faqs: [
        {
          ques: 'Cheese alternative?',
          ans: 'Burrata or bocconcini work perfectly.',
        },
        {
          ques: 'Make ahead?',
          ans: 'Layer just before serving to prevent sogginess.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '8 oz fresh mozzarella, sliced', type: 'main' },
        { name: '1/4 cup sun-dried tomatoes in oil, sliced', type: 'main' },
        { name: '10 basil leaves', type: 'main' },
        { name: '1 tbsp balsamic glaze', type: 'dressing' },
        { name: '1 tbsp olive oil', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Assemble Salad' },
            {
              type: 'text',
              value:
                'Layer mozzarella and sun-dried tomatoes; scatter basil leaves. Drizzle with oil and balsamic glaze. Season and serve chilled.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '260', unit: 'kcal' },
      { name: 'Protein', amount: '14', unit: 'g' },
      { name: 'Total Fat', amount: '21', unit: 'g' },
      { name: 'Carbohydrates', amount: '5', unit: 'g' },
      { name: 'Calcium', amount: '280', unit: 'mg' },
      { name: 'Sodium', amount: '360', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_106_creamy_mediterranean_chicken_pasta',
    basicInfo: {
      recipeName: 'One-Pot Creamy Mediterranean Chicken Pasta',
      duration: { label: '35 Minutes', value: '35' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '5', value: '5' },
      tags: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Pasta', value: 'Pasta' },
        { label: 'Mediterranean', value: 'Mediterranean' },
        { label: 'Protein', value: 'Protein' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Pasta', value: 'Pasta' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Creamy Mediterranean Chicken Pasta with Sun-Dried Tomatoes',
        },
        {
          type: 'text',
          value:
            'A rich, tangy pasta with seared chicken, sun-dried tomatoes, and spinach enveloped in a velvety cream sauce. Everything cooks in one pot for fewer dishes. Garlic, herbs, and a splash of broth deepen flavor, while parmesan brings everything together. Perfect for weeknights when you crave something indulgent yet balanced with veggies and lean protein.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Stir continuously after adding cream to prevent curdling.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=f5eBvf6v4e8' },
      ],
      faqs: [
        {
          ques: 'Lighter version?',
          ans: 'Use half-and-half or evaporated milk instead of cream.',
        },
        {
          ques: 'Vegetarian option?',
          ans: 'Skip chicken; add artichokes and extra spinach.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '10 oz penne pasta', type: 'main' },
        { name: '1 lb chicken breast, sliced', type: 'main' },
        { name: '2 tbsp olive oil', type: 'dressing' },
        { name: '3 cloves garlic, minced', type: 'main' },
        { name: '1/3 cup sun-dried tomatoes', type: 'main' },
        { name: '2 cups spinach', type: 'main' },
        { name: '1 cup cream', type: 'main' },
        { name: '1/2 cup grated parmesan', type: 'main' },
        { name: '1 cup chicken broth', type: 'main' },
        { name: 'Salt, pepper, oregano', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Sear Chicken' },
            {
              type: 'text',
              value: 'Cook chicken in oil until golden; remove.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Build Sauce' },
            {
              type: 'text',
              value:
                'Add garlic, sun-dried tomatoes, and broth; simmer. Add cream and parmesan; stir until smooth.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Combine' },
            {
              type: 'text',
              value:
                'Return chicken, add spinach and pasta; toss and cook 2 minutes until creamy.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '540', unit: 'kcal' },
      { name: 'Protein', amount: '35', unit: 'g' },
      { name: 'Total Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '46', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
      { name: 'Calcium', amount: '280', unit: 'mg' },
      { name: 'Iron', amount: '2.8', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_107_french_onion_soup_veggie_stock',
    basicInfo: {
      recipeName: 'French Onion Soup with Veggie Stock',
      duration: { label: '60 Minutes', value: '60' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Soup', value: 'Soup' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Comfort Food', value: 'Comfort Food' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Soups', value: 'Soups' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1617196034796-73e5e6c16849?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'Classic French Onion Soup, Now Vegetarian' },
        {
          type: 'text',
          value:
            'This vegetarian twist on the French classic captures all the richness of traditional onion soup without beef broth. Slowly caramelized onions build deep sweetness, balanced by dry white wine and umami-packed veggie stock. Toasted baguette slices and a thick layer of Gruyère melt to golden perfection. It’s soul-warming, aromatic, and perfect for cold evenings. The key is patience—let the onions cook low and slow until jammy and golden before adding the liquids.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1578687673601-1a6bffb21cb2?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Deglaze the pan with a splash of wine or vinegar to lift browned bits for flavor.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=1pX9Q7y5w0E' },
      ],
      faqs: [
        {
          ques: 'No Gruyère?',
          ans: 'Use Swiss or provolone cheese as substitutes.',
        },
        {
          ques: 'Can I freeze it?',
          ans: 'Yes—store without bread and cheese topping; reheat and broil before serving.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '5 large yellow onions, sliced', type: 'main' },
        { name: '3 tbsp butter', type: 'main' },
        { name: '2 tbsp olive oil', type: 'dressing' },
        { name: '1/2 cup dry white wine', type: 'dressing' },
        { name: '6 cups vegetable stock', type: 'main' },
        { name: '1 tsp thyme leaves', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
        { name: 'Baguette slices, toasted', type: 'main' },
        { name: '1 cup grated Gruyère', type: 'main' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Caramelize Onions' },
            {
              type: 'text',
              value:
                'Cook onions with butter and oil over low heat, stirring, for 30–40 minutes until golden brown.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Deglaze & Simmer' },
            {
              type: 'text',
              value:
                'Add wine; simmer 2 minutes. Stir in stock, thyme, salt, and pepper. Simmer 15 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Broil' },
            {
              type: 'text',
              value:
                'Ladle soup into bowls, top with bread and cheese; broil until bubbly and golden.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '390', unit: 'kcal' },
      { name: 'Protein', amount: '14', unit: 'g' },
      { name: 'Total Fat', amount: '20', unit: 'g' },
      { name: 'Carbohydrates', amount: '38', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
      { name: 'Calcium', amount: '290', unit: 'mg' },
      { name: 'Iron', amount: '1.9', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_108_pasta_arugula_parmesan',
    basicInfo: {
      recipeName: 'Pasta with Arugula and Shaved Parmesan',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Pasta', value: 'Pasta' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Italian cuisine', value: 'Italian cuisine' },
        { label: 'Quick Meals', value: 'Quick Meals' },
      ],
      categories: [
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Dinner', value: 'Dinner' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1627308595231-8890d3e12a29?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Fresh Pasta Tossed with Peppery Arugula and Parmesan',
        },
        {
          type: 'text',
          value:
            'A light and fresh pasta dish ready in under half an hour. Peppery arugula, nutty parmesan, and olive oil combine with al dente noodles for effortless elegance. The residual heat from the pasta gently wilts the greens, making them tender yet lively. Add lemon zest for brightness or toasted pine nuts for crunch. It’s as simple as it is sophisticated—ideal for busy weeknights or casual gatherings.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Finish with a drizzle of extra-virgin olive oil before serving for shine.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=5A98RYcBF_w' },
      ],
      faqs: [
        { ques: 'Add protein?', ans: 'Top with grilled chicken or shrimp.' },
        {
          ques: 'Vegan option?',
          ans: 'Skip cheese and use nutritional yeast.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '8 oz spaghetti or tagliatelle', type: 'main' },
        { name: '2 cups arugula', type: 'main' },
        { name: '1/3 cup shaved parmesan', type: 'main' },
        { name: '2 tbsp olive oil', type: 'dressing' },
        { name: '1 tsp lemon zest', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Cook Pasta' },
            {
              type: 'text',
              value:
                'Boil pasta in salted water until al dente. Reserve 1/2 cup cooking water; drain.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Toss' },
            {
              type: 'text',
              value:
                'Combine pasta, olive oil, lemon zest, arugula, and cheese. Toss with a splash of pasta water until creamy.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '380', unit: 'kcal' },
      { name: 'Protein', amount: '13', unit: 'g' },
      { name: 'Total Fat', amount: '15', unit: 'g' },
      { name: 'Carbohydrates', amount: '48', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
      { name: 'Calcium', amount: '180', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_109_crispy_burger_blue_cheese_bacon',
    basicInfo: {
      recipeName: 'Crispy Burger with Blue Cheese and Bacon',
      duration: { label: '40 Minutes', value: '40' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Burgers', value: 'Burgers' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Meat', value: 'Meat' },
        { label: 'Grill', value: 'Grill' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Lunch', value: 'Lunch' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Juicy Burgers Layered with Crisp Bacon and Tangy Blue Cheese',
        },
        {
          type: 'text',
          value:
            'A bold twist on the classic burger—juicy beef patties topped with sharp blue cheese, crispy bacon, and caramelized onions. The combination of smoky, creamy, and tangy flavors delivers a gourmet experience at home. Toasted brioche buns hold everything together, while a touch of Dijon adds brightness. Perfect for weekend barbecues or indulgent dinners.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1576866209830-5cb2b79f1c31?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'For extra crispiness, cook bacon in the oven instead of a skillet.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=2mMHS0ZEnTE' },
      ],
      faqs: [
        {
          ques: 'No grill?',
          ans: 'Use a cast-iron skillet over high heat for similar results.',
        },
        {
          ques: 'Cheese alternative?',
          ans: 'Use feta or sharp cheddar for milder flavor.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 lb ground beef (80/20 blend)', type: 'main' },
        { name: '4 brioche buns', type: 'main' },
        { name: '4 slices bacon', type: 'main' },
        { name: '1/2 cup blue cheese crumbles', type: 'main' },
        { name: '1 onion, sliced', type: 'main' },
        { name: '1 tbsp olive oil', type: 'dressing' },
        { name: '1 tsp Dijon mustard', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Cook Bacon' },
            {
              type: 'text',
              value: 'Bake or fry bacon until crisp; drain on paper towels.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Caramelize Onions' },
            {
              type: 'text',
              value:
                'Cook onions in oil over medium-low heat until soft and golden, 10–15 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Grill Burgers' },
            {
              type: 'text',
              value:
                'Form patties, season, and grill 4–5 minutes per side. Top with cheese and let melt.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Assemble' },
            {
              type: 'text',
              value: 'Spread Dijon on buns; layer burger, bacon, and onions.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '620', unit: 'kcal' },
      { name: 'Protein', amount: '34', unit: 'g' },
      { name: 'Total Fat', amount: '40', unit: 'g' },
      { name: 'Carbohydrates', amount: '28', unit: 'g' },
      { name: 'Fiber', amount: '2', unit: 'g' },
      { name: 'Sodium', amount: '710', unit: 'mg' },
      { name: 'Iron', amount: '3.5', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_110_pumpkin_soup_cheese_cinnamon',
    basicInfo: {
      recipeName: 'Pumpkin Soup with Cheese and Cinnamon',
      duration: { label: '45 Minutes', value: '45' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Soup', value: 'Soup' },
        { label: 'Comfort Food', value: 'Comfort Food' },
        { label: 'Autumn', value: 'Autumn' },
        { label: 'Vegetarian', value: 'Vegetarian' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Soups', value: 'Soups' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1601050690597-9a3b5cbdeb9e?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Warm, Creamy Pumpkin Soup with a Hint of Cinnamon',
        },
        {
          type: 'text',
          value:
            'This rich, comforting soup blends roasted pumpkin, cream, and a touch of cinnamon for warmth. Melted cheese adds velvety texture and depth. It’s easy to prepare yet feels gourmet—perfect for chilly evenings or festive gatherings. The secret is roasting the pumpkin first to bring out caramelized sweetness before blending into a smooth, luxurious base. Serve with toasted bread or croutons for a cozy meal.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1609518321260-4a9c3a7e3cb9?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Garnish with grated cheese and a sprinkle of cinnamon just before serving.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=Z7p9e-6CCaY' },
      ],
      faqs: [
        {
          ques: 'Can I use canned pumpkin?',
          ans: 'Yes—just skip roasting and add directly to the pot.',
        },
        {
          ques: 'Cheese alternatives?',
          ans: 'Try cheddar, gouda, or cream cheese for different textures.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '4 cups roasted pumpkin', type: 'main' },
        { name: '2 cups vegetable stock', type: 'main' },
        { name: '1 cup cream', type: 'main' },
        { name: '1/2 cup shredded cheddar cheese', type: 'main' },
        { name: '1 tbsp butter', type: 'dressing' },
        { name: '1/2 tsp cinnamon', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Roast Pumpkin' },
            {
              type: 'text',
              value:
                'Bake pumpkin chunks at 400°F/200°C for 30 minutes until tender and caramelized.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Blend' },
            {
              type: 'text',
              value:
                'Puree pumpkin with stock until smooth; heat in pot with cream, cheese, butter, and cinnamon.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Serve' },
            {
              type: 'text',
              value:
                'Season to taste; ladle into bowls and garnish with extra cheese and cinnamon.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '320', unit: 'kcal' },
      { name: 'Protein', amount: '10', unit: 'g' },
      { name: 'Total Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '22', unit: 'g' },
      { name: 'Fiber', amount: '4', unit: 'g' },
      { name: 'Vitamin A', amount: '250', unit: '%' },
      { name: 'Calcium', amount: '190', unit: 'mg' },
      { name: 'Iron', amount: '1.6', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_111_easy_3_ingredient_tomato_soup',
    basicInfo: {
      recipeName: 'Easy 3-Ingredient Tomato Soup',
      duration: { label: '20 Minutes', value: '20' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Soup', value: 'Soup' },
        { label: 'Quick Meals', value: 'Quick Meals' },
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Budget-friendly', value: 'Budget-friendly' },
      ],
      categories: [
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Dinner', value: 'Dinner' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1579710759110-0d6fd8e46b64?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'Minimal Ingredients, Maximum Flavor' },
        {
          type: 'text',
          value:
            'This simple tomato soup proves that less is more. With just ripe tomatoes, butter, and onions, it achieves deep, rich flavor without added stock or cream. Slow simmering brings out natural sweetness, while blending creates a silky texture. It’s the ultimate comfort soup that pairs perfectly with a grilled cheese sandwich.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1589307000258-90fdd75a8bcd?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Use ripe, in-season tomatoes for the best flavor.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=kQJBBcW5b6k' },
      ],
      faqs: [
        {
          ques: 'Canned tomatoes?',
          ans: 'Yes—use 28 oz canned whole or crushed tomatoes.',
        },
        {
          ques: 'Make creamy?',
          ans: 'Blend with 1/4 cup cream or coconut milk.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '2 lbs ripe tomatoes, chopped', type: 'main' },
        { name: '1 onion, quartered', type: 'main' },
        { name: '3 tbsp butter', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Simmer' },
            {
              type: 'text',
              value:
                'Combine tomatoes, onion, and butter; simmer 20 minutes until tomatoes break down.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Blend & Season' },
            {
              type: 'text',
              value:
                'Blend until smooth; strain if desired. Season with salt and pepper.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '180', unit: 'kcal' },
      { name: 'Protein', amount: '3', unit: 'g' },
      { name: 'Total Fat', amount: '11', unit: 'g' },
      { name: 'Carbohydrates', amount: '18', unit: 'g' },
      { name: 'Vitamin C', amount: '90', unit: '%' },
      { name: 'Potassium', amount: '550', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_112_spaghetti_bolognese_mushrooms_peppers',
    basicInfo: {
      recipeName: 'Healthy Spaghetti Bolognese with Mushrooms and Peppers',
      duration: { label: '40 Minutes', value: '40' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '5', value: '5' },
      tags: [
        { label: 'Pasta', value: 'Pasta' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Italian cuisine', value: 'Italian cuisine' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1612874742197-2b593b1e10d9?auto=format&fit=crop&w=1200&q=80',
      about: [
        { type: 'title', value: 'A Lighter, Veggie-Loaded Bolognese Sauce' },
        {
          type: 'text',
          value:
            'This nourishing take on spaghetti bolognese swaps half the meat for mushrooms and bell peppers, cutting calories and boosting fiber. Slow simmering melds the flavors beautifully—each bite is hearty yet balanced. Using whole-grain pasta adds extra nutrition, while herbs and garlic make the sauce rich and aromatic. It’s a guilt-free comfort meal that tastes even better the next day.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1606755962773-9d3e0bb88c64?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Simmer sauce at least 20 minutes to deepen the flavor.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=1uO5K2P3cmY' },
      ],
      faqs: [
        {
          ques: 'Vegetarian option?',
          ans: 'Use lentils or tofu instead of beef.',
        },
        {
          ques: 'How to store?',
          ans: 'Refrigerate up to 4 days or freeze up to 2 months.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '10 oz whole-grain spaghetti', type: 'main' },
        { name: '1/2 lb lean ground beef', type: 'main' },
        { name: '1 cup chopped mushrooms', type: 'main' },
        { name: '1 red bell pepper, diced', type: 'main' },
        { name: '1 onion, chopped', type: 'main' },
        { name: '3 garlic cloves, minced', type: 'main' },
        { name: '2 cups tomato sauce', type: 'main' },
        { name: '1 tsp oregano', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
        { name: '1 tbsp olive oil', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Sauté Base' },
            {
              type: 'text',
              value:
                'Cook onion, garlic, and pepper in oil. Add beef; brown well.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Add Veggies & Sauce' },
            {
              type: 'text',
              value:
                'Stir in mushrooms, tomato sauce, and herbs; simmer 20 minutes.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Combine' },
            {
              type: 'text',
              value: 'Toss with cooked spaghetti and serve hot.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '490', unit: 'kcal' },
      { name: 'Protein', amount: '29', unit: 'g' },
      { name: 'Total Fat', amount: '15', unit: 'g' },
      { name: 'Carbohydrates', amount: '60', unit: 'g' },
      { name: 'Fiber', amount: '8', unit: 'g' },
      { name: 'Iron', amount: '3', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_113_california_quinoa_salad_ricotta',
    basicInfo: {
      recipeName: 'Whole Food’s California Quinoa Salad with Ricotta',
      duration: { label: '30 Minutes', value: '30' },
      level: { label: 'Easy', value: 'Easy' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Salad', value: 'Salad' },
        { label: 'Healthy', value: 'Healthy' },
        { label: 'Vegetarian', value: 'Vegetarian' },
        { label: 'Protein', value: 'Protein' },
      ],
      categories: [
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Vibrant California Quinoa Salad with Creamy Ricotta',
        },
        {
          type: 'text',
          value:
            'A bright and refreshing salad packed with quinoa, crisp vegetables, creamy ricotta, and a lemon-herb dressing. This wholesome bowl delivers a balance of textures and flavors—nutty quinoa pairs perfectly with crunchy cucumber, cherry tomatoes, and a drizzle of olive oil. It’s rich in protein and fiber, making it a satisfying light lunch or a colorful side dish.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1619566636858-4ce63b95b0a7?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value: 'Add sliced avocado for extra creaminess and healthy fats.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=VKh_1Vd8YcE' },
      ],
      faqs: [
        {
          ques: 'Make ahead?',
          ans: 'Yes—prepare quinoa and veggies in advance; dress before serving.',
        },
        {
          ques: 'Ricotta substitute?',
          ans: 'Try feta or cottage cheese for a tangier flavor.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 cup quinoa, cooked', type: 'main' },
        { name: '1/2 cup ricotta cheese', type: 'main' },
        { name: '1 cup cherry tomatoes, halved', type: 'main' },
        { name: '1 cucumber, diced', type: 'main' },
        { name: '1/4 cup red onion, minced', type: 'main' },
        { name: '2 tbsp olive oil', type: 'dressing' },
        { name: '1 tbsp lemon juice', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Combine Ingredients' },
            {
              type: 'text',
              value:
                'Toss quinoa, vegetables, and ricotta in a bowl. Drizzle with lemon juice and olive oil; season.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '310', unit: 'kcal' },
      { name: 'Protein', amount: '14', unit: 'g' },
      { name: 'Total Fat', amount: '14', unit: 'g' },
      { name: 'Carbohydrates', amount: '32', unit: 'g' },
      { name: 'Fiber', amount: '5', unit: 'g' },
      { name: 'Calcium', amount: '120', unit: 'mg' },
      { name: 'Iron', amount: '2.3', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_114_cupcakes_pistachio_frosting',
    basicInfo: {
      recipeName: 'Cupcakes with Pistachio Frosting',
      duration: { label: '50 Minutes', value: '50' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '12', value: '12' },
      tags: [
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Baking', value: 'Baking' },
        { label: 'Nuts', value: 'Nuts' },
        { label: 'Sweet', value: 'Sweet' },
      ],
      categories: [
        { label: 'Desserts', value: 'Desserts' },
        { label: 'Sweets', value: 'Sweets' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1605719120005-10baf107a50b?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Soft Cupcakes with Creamy Pistachio Frosting',
        },
        {
          type: 'text',
          value:
            'Moist vanilla cupcakes crowned with a luscious pistachio buttercream. The frosting’s nutty richness and light green hue make these cupcakes as beautiful as they are delicious. Toasted pistachios enhance flavor, while a splash of almond extract deepens the aroma. Perfect for birthdays or afternoon tea, they strike the perfect balance between sweet and subtle.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1583337130417-3346a1af7e8d?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Pipe the frosting with a star nozzle for a professional look.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=ZzjsB6LRT2Y' },
      ],
      faqs: [
        {
          ques: 'Frosting alternative?',
          ans: 'Use whipped cream or cream cheese frosting with crushed pistachios.',
        },
        {
          ques: 'Storage?',
          ans: 'Keep refrigerated up to 3 days; bring to room temperature before serving.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 1/2 cups flour', type: 'main' },
        { name: '1 tsp baking powder', type: 'main' },
        { name: '1/2 cup butter', type: 'main' },
        { name: '3/4 cup sugar', type: 'main' },
        { name: '2 eggs', type: 'main' },
        { name: '1/2 cup milk', type: 'main' },
        { name: '1/4 tsp almond extract', type: 'dressing' },
        { name: '3/4 cup pistachios, toasted and crushed', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Make Batter' },
            {
              type: 'text',
              value:
                'Cream butter and sugar, add eggs and almond extract. Fold in dry ingredients with milk until smooth.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Bake' },
            {
              type: 'text',
              value:
                'Pour into liners; bake at 350°F/175°C for 18–20 minutes. Cool completely.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Frost' },
            {
              type: 'text',
              value:
                'Spread or pipe pistachio frosting; sprinkle extra nuts on top.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '290', unit: 'kcal' },
      { name: 'Protein', amount: '5', unit: 'g' },
      { name: 'Total Fat', amount: '14', unit: 'g' },
      { name: 'Carbohydrates', amount: '36', unit: 'g' },
      { name: 'Sugar', amount: '21', unit: 'g' },
      { name: 'Sodium', amount: '140', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_115_smoked_tofu_salad_spicy_peanut_sauce',
    basicInfo: {
      recipeName: 'Smoked Tofu Salad with Spicy Peanut Sauce',
      duration: { label: '25 Minutes', value: '25' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '3', value: '3' },
      tags: [
        { label: 'Salad', value: 'Salad' },
        { label: 'Vegan', value: 'Vegan' },
        { label: 'Protein', value: 'Protein' },
        { label: 'Asian-inspired', value: 'Asian-inspired' },
      ],
      categories: [
        { label: 'Lunch', value: 'Lunch' },
        { label: 'Healthy', value: 'Healthy' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1577308856960-d92d2c88ca41?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Crunchy Smoked Tofu Salad with Creamy Peanut Dressing',
        },
        {
          type: 'text',
          value:
            'This vibrant salad combines crispy smoked tofu, fresh vegetables, and a bold spicy peanut sauce. Carrots, cabbage, and cucumber add crunch, while lime and soy bring brightness. The creamy peanut dressing ties everything together, delivering a perfect balance of salty, sweet, and spicy. A high-protein vegan meal that’s light yet satisfying.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1575916766328-1f27f1afae68?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Chill tofu after pan-frying for extra firmness and flavor absorption.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=6u3UL9RkA9c' },
      ],
      faqs: [
        {
          ques: 'Substitute for peanut butter?',
          ans: 'Use almond or sunflower seed butter.',
        },
        {
          ques: 'Make it spicy?',
          ans: 'Add chili flakes or sriracha to the sauce.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '1 block smoked tofu, cubed', type: 'main' },
        { name: '1 cup shredded carrots', type: 'main' },
        { name: '1 cup cabbage, sliced', type: 'main' },
        { name: '1/2 cucumber, julienned', type: 'main' },
        { name: '1 tbsp soy sauce', type: 'dressing' },
        { name: '2 tbsp peanut butter', type: 'dressing' },
        { name: '1 tsp chili flakes', type: 'dressing' },
        { name: '1 tbsp lime juice', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Prepare Tofu' },
            {
              type: 'text',
              value: 'Pan-fry tofu until crisp on edges; set aside to cool.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Mix Sauce' },
            {
              type: 'text',
              value:
                'Whisk peanut butter, soy sauce, lime, and chili flakes until smooth.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Assemble Salad' },
            {
              type: 'text',
              value:
                'Combine vegetables and tofu in a bowl; toss with sauce before serving.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '350', unit: 'kcal' },
      { name: 'Protein', amount: '20', unit: 'g' },
      { name: 'Total Fat', amount: '22', unit: 'g' },
      { name: 'Carbohydrates', amount: '20', unit: 'g' },
      { name: 'Fiber', amount: '5', unit: 'g' },
      { name: 'Iron', amount: '3.1', unit: 'mg' },
      { name: 'Calcium', amount: '190', unit: 'mg' },
    ],
  },
  {
    _id: 'recp_116_creamy_garlic_parmesan_chicken_pasta',
    basicInfo: {
      recipeName: 'Creamy Garlic Parmesan Chicken Pasta',
      duration: { label: '35 Minutes', value: '35' },
      level: { label: 'Medium', value: 'Medium' },
      serving: { label: '4', value: '4' },
      tags: [
        { label: 'Pasta', value: 'Pasta' },
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Comfort Food', value: 'Comfort Food' },
        { label: 'Italian cuisine', value: 'Italian cuisine' },
      ],
      categories: [
        { label: 'Dinner', value: 'Dinner' },
        { label: 'Pasta', value: 'Pasta' },
      ],
    },
    details: {
      thumbnail:
        'https://images.unsplash.com/photo-1604909053300-6e268b94e1c7?auto=format&fit=crop&w=1200&q=80',
      about: [
        {
          type: 'title',
          value: 'Decadent Creamy Garlic Parmesan Chicken Pasta',
        },
        {
          type: 'text',
          value:
            'Tender chicken breast simmered in a creamy garlic parmesan sauce, tossed with al dente fettuccine for a restaurant-worthy dinner. The sauce combines butter, cream, garlic, and cheese for rich flavor. Balanced with parsley and a hint of lemon, it’s comforting yet fresh. Perfect for a quick family meal or date-night indulgence.',
        },
        {
          type: 'image',
          value:
            'https://images.unsplash.com/photo-1612874742197-2b593b1e10d9?auto=format&fit=crop&w=1200&q=80',
          isUnsplash: true,
        },
        {
          type: 'text',
          value:
            'Add a splash of pasta water to keep the sauce silky and smooth.',
        },
        { type: 'video', value: 'https://www.youtube.com/watch?v=SWuWxqMQ4X0' },
      ],
      faqs: [
        {
          ques: 'Can I make it lighter?',
          ans: 'Substitute milk for cream or use light cream cheese.',
        },
        {
          ques: 'Storage?',
          ans: 'Refrigerate up to 3 days; reheat gently with a splash of milk.',
        },
      ],
    },
    directions: {
      ingredients: [
        { name: '10 oz fettuccine', type: 'main' },
        { name: '1 lb chicken breast, sliced', type: 'main' },
        { name: '2 tbsp butter', type: 'main' },
        { name: '3 garlic cloves, minced', type: 'main' },
        { name: '1 cup heavy cream', type: 'main' },
        { name: '1/2 cup grated parmesan', type: 'main' },
        { name: '1 tbsp chopped parsley', type: 'dressing' },
        { name: 'Salt & pepper', type: 'dressing' },
      ],
      methods: [
        {
          step: [
            { type: 'title', value: 'Cook Chicken' },
            {
              type: 'text',
              value:
                'Sear chicken in butter until golden; remove and set aside.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Make Sauce' },
            {
              type: 'text',
              value:
                'In the same pan, sauté garlic; add cream and cheese; simmer until thickened.',
            },
          ],
        },
        {
          step: [
            { type: 'title', value: 'Combine' },
            {
              type: 'text',
              value:
                'Add pasta and chicken back; toss well; garnish with parsley.',
            },
          ],
        },
      ],
    },
    nutritionalFacts: [
      { name: 'Calories', amount: '580', unit: 'kcal' },
      { name: 'Protein', amount: '36', unit: 'g' },
      { name: 'Total Fat', amount: '28', unit: 'g' },
      { name: 'Carbohydrates', amount: '48', unit: 'g' },
      { name: 'Fiber', amount: '3', unit: 'g' },
      { name: 'Calcium', amount: '250', unit: 'mg' },
      { name: 'Iron', amount: '2.4', unit: 'mg' },
    ],
  },
];
