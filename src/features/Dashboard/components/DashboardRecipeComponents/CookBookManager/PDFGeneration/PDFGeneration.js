import React, { useRef } from 'react';
import styles from './PDFGeneration.module.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useEffect } from 'react';


// Function to convert image to Base64
const getBase64Image = async (imageUrl) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const PdfGeneration = () => {
  const { recipe, author, frontCover } = data;
  const pdfRef = useRef();
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const generatePdf = async () => {
    if (!rendered) {
      return;
    }
    const bookWidth = 216; // in mm
    const bookHeight = 279; // in mm
    const pdf = new jsPDF('l', 'mm', [bookWidth, bookHeight]);
    let yOffset = 10;

    // Add front cover
    const frontCoverImage = await getBase64Image(frontCover.image);
    const frontCoverHtml = `
      <div>
        <h1>${frontCover.bookTitle}</h1>
        <p>${frontCover.description}</p>
        <img src="${frontCoverImage}" alt="Front Cover" />
        <p>By: ${frontCover.firstName} ${frontCover.lastName}</p>
      </div>
    `;

    // Render front cover HTML content into pdfRef
    pdfRef.current.innerHTML = frontCoverHtml;

    // Use html2canvas to render the HTML content to a canvas
    html2canvas(pdfRef.current, { scale: 1 }).then(canvas => {
      
      // Convert the canvas to an image and add it to the PDF
      const imgData = canvas.toDataURL('image/jpeg');
      pdf.addImage(imgData, 'JPEG', 0, 0, bookWidth, bookHeight);

      // Add recipe content
      recipe.forEach((section, index) => {
        // Add a new page for each section
        pdf.addPage();

        // Generate HTML for the section
        const sectionHtml = `
          <div>
            <h2>${section.basicInfo.recipeName}</h2>
            <p>Recipe Duration: ${section.basicInfo.duration.label}</p>
            <!-- Add more recipe information as needed -->
            <p>Ingredients:</p>
            <ul>
              ${section.directions.ingredients.map(ingredient => `
                <li>${ingredient.name}</li>
              `).join('')}
            </ul>
          </div>
        `;

        // Render HTML content into pdfRef
        pdfRef.current.innerHTML = sectionHtml;

        // Use html2canvas to render the HTML content to a canvas
        html2canvas(pdfRef.current, { scale: 1 }).then(canvas => {
          // Convert the canvas to an image and add it to the PDF
          const imgData = canvas.toDataURL('image/jpeg');
          pdf.addImage(imgData, 'JPEG', 0, 0, bookWidth, bookHeight);
          
          // If it's the last section, add author information and save PDF
          if (index === recipe.length - 1) {
            pdf.addPage();
            pdf.text('About the Author', 20, 20);
            pdf.text(`Name: ${author.firstName} ${author.lastName}`, 20, 30);
            // Add more author information as needed
            pdf.save(`${frontCover.bookTitle}.pdf`);
          }
        });
      });
    });
  };

  return (
    <div className={styles.PdfGeneration}>
      <button onClick={generatePdf}>Generate PDF</button>
      <div ref={pdfRef}></div>
    </div>
  );
};

export default PdfGeneration;




const data = {
  recipe: [
    {
      basicInfo: {
        duration: {
          value: '30 Minutes',
          label: '30 Minutes',
        },
        level: {
          value: 'Medium',
          label: 'Medium',
        },
        serving: {
          value: '10+',
          label: '10+',
        },
        recipeName: 'Grilled Sweet Potatoes',
        tags: [
          {
            value: '15 minutes or less',
            label: '15 minutes or less',
            _id: '664e404cb4513dfa42a75d9a',
          },
        ],
        categories: [
          {
            value: 'Dinner',
            label: 'Dinner',
            _id: '664e404cb4513dfa42a75d9b',
          },
          {
            value: 'Desserts',
            label: 'Desserts',
            _id: '664e404cb4513dfa42a75d9c',
          },
        ],
      },
      details: {
        thumbnail:'https://images.unsplash.com/photo-1517666005606-69dea9b54865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHx0b21hdG8lMjBwdXJlZXxlbnwwfHx8fDE3MTU4MDk5NTd8MA&ixlib=rb-4.0.3&q=80&w=400',
        about: [
          {
            type: 'text',
            value:
              "<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
            _id: '664e404cb4513dfa42a75d9d',
          },
          {
            type: 'image',
            value: [
              'https://images.unsplash.com/photo-1517666005606-69dea9b54865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHx0b21hdG8lMjBwdXJlZXxlbnwwfHx8fDE3MTU4MDk5NTd8MA&ixlib=rb-4.0.3&q=80&w=400',
              'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw0fHxyZWNpcGV8ZW58MHx8fHwxNzE1NzkzOTgyfDA&ixlib=rb-4.0.3&q=80&w=400',
            ],
            isUnsplash: true,
            isMultiple: true,
            _id: '664e404cb4513dfa42a75d9e',
          },
          {
            type: 'text',
            value:
              "<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
            _id: '664e404cb4513dfa42a75d9f',
          },
        ],
        faqs: [
          {
            ques: 'ssdfs',
            ans: 'rrfgfgfgf',
            _id: '664e404cb4513dfa42a75da0',
          },
        ],
      },
      directions: {
        methods: [
          {
            step: [
              {
                type: 'title',
                value: 'Preparations',
                _id: '664e404cb4513dfa42a75daa',
              },
              {
                type: 'text',
                value:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                _id: '664e404cb4513dfa42a75dab',
              },
              {
                type: 'image',
                value: [
                  'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw0fHxyZWNpcGV8ZW58MHx8fHwxNzE1NzkzOTgyfDA&ixlib=rb-4.0.3&q=80&w=400',
                  'https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHxyZWNpcGV8ZW58MHx8fHwxNzE1NzkzOTgyfDA&ixlib=rb-4.0.3&q=80&w=400',
                ],
                isUnsplash: true,
                isMultiple: true,
                _id: '664e404cb4513dfa42a75dac',
              },
            ],
            _id: '664e404cb4513dfa42a75da9',
          },
          {
            step: [
              {
                type: 'title',
                value: 'Boiling',
                _id: '664e404cb4513dfa42a75dae',
              },
              {
                type: 'text',
                value:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                _id: '664e404cb4513dfa42a75daf',
              },
            ],
            _id: '664e404cb4513dfa42a75dad',
          },
        ],
        ingredients: [
          {
            name: '2 pisces',
            type: 'main',
            _id: '664e404cb4513dfa42a75db0',
          },
          {
            name: '1 ½ cups peeled and chopped golden potato or sweet potato (large bite-size pieces)',
            type: 'main',
            _id: '664e404cb4513dfa42a75db1',
          },
          {
            name: '4 Eggs batches flax eggs* (2 flax eggs = 2 Tbsp flaxseed meal / 14 g + 5 Tbsp / 75 ml water)',
            type: 'main',
            _id: '664e404cb4513dfa42a75db2',
          },
          {
            name: '0.17 cup chopped walnuts or pecans (or sub other nut or seed of choice)',
            type: 'main',
            _id: '664e404cb4513dfa42a75db3',
          },
          {
            name: 'fresh herbs, such as chopped parsley and/or cilantro',
            type: 'dressing',
            _id: '664e404cb4513dfa42a75db4',
          },
          {
            name: '2 cups blueberries, washed and picked over for stems',
            type: 'main',
            _id: '664e404cb4513dfa42a75db5',
          },
          {
            name: '300 g Mayonaise',
            type: 'dressing',
            _id: '664e404cb4513dfa42a75db6',
          },
          {
            name: '1 tablespoon honey (light brown sugar or maple syrup also works)',
            type: 'main',
            _id: '664e404cb4513dfa42a75db7',
          },
        ],
      },
      _id: '664e404cb4513dfa42a75d99',
      nutritionalFacts: [
        {
          name: 'calories',
          amount: '44',
          unit: 'g',
          _id: '664e404cb4513dfa42a75da1',
        },
        {
          name: 'satFat',
          amount: '44',
          unit: 'g',
          _id: '664e404cb4513dfa42a75da2',
        },
        {
          name: 'carbs',
          amount: '44',
          unit: 'g',
          _id: '664e404cb4513dfa42a75da3',
        },
        {
          name: 'protein',
          amount: '44',
          unit: 'g',
          _id: '664e404cb4513dfa42a75da4',
        },
        {
          name: 'cholesterol',
          amount: '44',
          unit: 'mg',
          _id: '664e404cb4513dfa42a75da5',
        },
        {
          name: 'sodium',
          amount: '4444',
          unit: 'mg',
          _id: '664e404cb4513dfa42a75da6',
        },
        {
          name: 'sugar',
          amount: '44',
          unit: 'g',
          _id: '664e404cb4513dfa42a75da7',
        },
        {
          name: 'fibers',
          amount: '4444',
          unit: 'g',
          _id: '664e404cb4513dfa42a75da8',
        },
      ],
      author: {
        _id: '612296fc86231100a0631b22',
        firstName: 'Test',
        lastName: 'Tester',
        aboutMe: [
          {
            type: 'text',
            value:
              '<div class="author-description">\n<p>Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n<p>&nbsp;</p>\n<h5><strong>My Resources:</strong></h5>\n<p>Purus viverra accumsan in nisl. Quis blandit turpis cursus in hac habitasse platea fuss-free udin tempor id eu nisl nunc mi ipsum imperdiet massa, Aliquam Ultrices Sagittis, orci a scelerisque purus semper. Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n</div>\n<p>Leo in vitae turpis massa sed elementum tempus egestas sed:</p>\n<ul class="resourses-items">\n<li class="resourses-item">Dolor sed viverra ipsum nunc alique</li>\n<li class="resourses-item">Nec tincidunt semper Neque Ornare, aenean euismod</li>\n<li class="resourses-item">Pellentesque massa placerat</li>\n</ul>\n<div class="my-recipes">\n<div class="my-recipe-heading">&nbsp;</div>\n</div>',
          },
        ],
        avatar:
          'https://images.unsplash.com/photo-1628191013647-5640e14ded54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw3M3x8Y29va2luZyUyMHdpdGglMjBtb258ZW58MHx8fHwxNzE2NTgxNDAzfDA&ixlib=rb-4.0.3&q=80&w=400',
        slogan: 'awesome taste',
      },
    }
  ],
  author: {
    _id: '612296fc86231100a0631b22',
    firstName: 'Test',
    lastName: 'Tester',
    aboutMe: [
      {
        type: 'text',
        value:
          '<div class="author-description">\n<p>Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n<p>&nbsp;</p>\n<h5><strong>My Resources:</strong></h5>\n<p>Purus viverra accumsan in nisl. Quis blandit turpis cursus in hac habitasse platea fuss-free udin tempor id eu nisl nunc mi ipsum imperdiet massa, Aliquam Ultrices Sagittis, orci a scelerisque purus semper. Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n</div>\n<p>Leo in vitae turpis massa sed elementum tempus egestas sed:</p>\n<ul class="resourses-items">\n<li class="resourses-item">Dolor sed viverra ipsum nunc alique</li>\n<li class="resourses-item">Nec tincidunt semper Neque Ornare, aenean euismod</li>\n<li class="resourses-item">Pellentesque massa placerat</li>\n</ul>\n<div class="my-recipes">\n<div class="my-recipe-heading">&nbsp;</div>\n</div>',
      },
    ],
    avatar:
      'https://images.unsplash.com/photo-1628191013647-5640e14ded54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw3M3x8Y29va2luZyUyMHdpdGglMjBtb258ZW58MHx8fHwxNzE2NTgxNDAzfDA&ixlib=rb-4.0.3&q=80&w=400',
    slogan: 'awesome taste',
  },
  frontCover: {
    firstName: 'Test',
    lastName: 'Tester',
    bookTitle: 'Testing Recipe Book Generation',
    image:'https://images.unsplash.com/photo-1517666005606-69dea9b54865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHx0b21hdG8lMjBwdXJlZXxlbnwwfHx8fDE3MTU4MDk5NTd8MA&ixlib=rb-4.0.3&q=80&w=400',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.",
  },
};