import React, { useState } from 'react';
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFViewer,
} from '@react-pdf/renderer';
import convertHtmlToPdfElements from './HtmlToPdfElement';
import parse from 'html-react-parser';
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

const data = {
  recipes: [
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
        thumbnail:
          'https://images.unsplash.com/photo-1517666005606-69dea9b54865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHx0b21hdG8lMjBwdXJlZXxlbnwwfHx8fDE3MTU4MDk5NTd8MA&ixlib=rb-4.0.3&q=80&w=400',
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
              '<View class="author-description">\n<p>Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n<p>&nbsp;</p>\n<h5><strong>My Resources:</strong></h5>\n<p>Purus viverra accumsan in nisl. Quis blandit turpis cursus in hac habitasse platea fuss-free udin tempor id eu nisl nunc mi ipsum imperdiet massa, Aliquam Ultrices Sagittis, orci a scelerisque purus semper. Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n</View>\n<p>Leo in vitae turpis massa sed elementum tempus egestas sed:</p>\n<ul class="resourses-items">\n<li class="resourses-item">Dolor sed viverra ipsum nunc alique</li>\n<li class="resourses-item">Nec tincidunt semper Neque Ornare, aenean euismod</li>\n<li class="resourses-item">Pellentesque massa placerat</li>\n</ul>\n<View class="my-recipes">\n<View class="my-recipe-heading">&nbsp;</View>\n</View>',
          },
        ],
        avatar:
          'https://images.unsplash.com/photo-1628191013647-5640e14ded54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHw3M3x8Y29va2luZyUyMHdpdGglMjBtb258ZW58MHx8fHwxNzE2NTgxNDAzfDA&ixlib=rb-4.0.3&q=80&w=400',
        slogan: 'awesome taste',
      },
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
          '<View class="author-description">\n<p>Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n<p>&nbsp;</p>\n<h5><strong>My Resources:</strong></h5>\n<p>Purus viverra accumsan in nisl. Quis blandit turpis cursus in hac habitasse platea fuss-free udin tempor id eu nisl nunc mi ipsum imperdiet massa, Aliquam Ultrices Sagittis, orci a scelerisque purus semper. Et leo duis ut diam quam nulla porttitor massa id. Vitae auctor eu augue ut lectus arcu. Neque vitae tempus quam pellentesque nec. Volutpat consequat mauris nunc congue nisi.t Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet consectetur adipiscing elit duis. Eget sit amet tellus cras adipiscing honcus mat voluptatem accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n</View>\n<p>Leo in vitae turpis massa sed elementum tempus egestas sed:</p>\n<ul class="resourses-items">\n<li class="resourses-item">Dolor sed viverra ipsum nunc alique</li>\n<li class="resourses-item">Nec tincidunt semper Neque Ornare, aenean euismod</li>\n<li class="resourses-item">Pellentesque massa placerat</li>\n</ul>\n<View class="my-recipes">\n<View class="my-recipe-heading">&nbsp;</View>\n</View>',
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
    image:
      'https://images.unsplash.com/photo-1517666005606-69dea9b54865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODIwNDd8MHwxfHNlYXJjaHwyfHx0b21hdG8lMjBwdXJlZXxlbnwwfHx8fDE3MTU4MDk5NTd8MA&ixlib=rb-4.0.3&q=80&w=400',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.",
  },
};

const DynamicPDF = ({setPdfDataURL}) => {
  const [pdfData, setPdfData] = useState(null);
  const [preview, setPreview] = useState(false);
  // const [pdfDataURL, setPdfDataURL] = useState(null);

  const generatePDF = async () => {
    const { recipes, author, frontCover } = data;

    const frontCoverImage = await getBase64Image(frontCover.image);
    const authorAvatar = await getBase64Image(author.avatar);

    const pdfPages = [];

    // Front Page
    const frontPage = (
      <Page size='A4' orientation='landscape' key='frontPage'>
        <View style={styles.root}>
          <View style={styles.container}>
            <View style={styles.frontPageContainer}>
              <Image src={frontCoverImage} style={styles.image} />
              <View style={styles.overlayContainer}>
                <View style={styles.frontPageDescription}>
                  <Text style={styles.frontPageTitle}>
                    {frontCover.bookTitle}
                  </Text>
                  <Text style={styles.frontPageIntro}>
                    {frontCover.description}
                  </Text>
                </View>
                <View>
                  <Text style={styles.authorName}>
                    By: {author.firstName} {author.lastName}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    );

    pdfPages.push(frontPage);

    // AboutMe Page
    const aboutMePage = (
      <Page size='A4' orientation='landscape'>
        <View style={styles.root}>
          <View style={styles.aboutMeContainer}>
            <Text style={styles.aboutMeTitle}>About Me</Text>
            <View style={styles.nameContainer}>
              <View style={styles.imageContainer}>
                <Image src={authorAvatar} style={styles.authorImage} />
              </View>
              <View style={styles.authorContainer}>
                <Text style={styles.authorTitleText}>
                  {author.firstName} {author.lastName}
                </Text>
                <Text style={styles.authorSlogan}>{author.slogan}</Text>
              </View>
            </View>
            <View>
              {author.aboutMe.map((el, index) => (
                <View key={index} style={styles.aboutAuthorContainer}>
                  {el.type === 'text' && <Text>{el.value}</Text>}
                  {el.type === 'image' && (
                    <Image src={el.value} style={styles.aboutMeImage} />
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    );

    pdfPages.push(aboutMePage);

    // Recipe Pages
    const recipePagesPromises = recipes.map(async (recipe) => {
      const { basicInfo, details, directions, nutritionalFacts } = recipe;
      const thumbnail = await getBase64Image(details.thumbnail);

      // Handle images in details.about
      const aboutContentPromises = details.about.map(async (el) => {
        if (el.type === 'image') {
          const images = await Promise.all(
            el.value.map(async (img) => {
              const base64Image = await getBase64Image(img);
              return (
                <Image
                  key={img}
                  src={base64Image}
                  style={{ height: 70, width: 70 }}
                />
              );
            })
          );
          return (
            <View key={el.value} style={styles.aboutAuthorContainer}>
              {images}
            </View>
          );
        } else {
          return <Text key={el.value}>{el.value}</Text>;
        }
      });

      const aboutContent = await Promise.all(aboutContentPromises);

      // Handle directions
      const directionsContent = directions.methods.map((method, index) => (
        <View key={index}>
          {method.step.map((step, stepIndex) => (
            <View key={stepIndex}>
              {step.type === 'title' && (
                <Text style={styles.stepTitle}>
                  {' '}
                  STEP {index + 1} : {step.value}
                </Text>
              )}
              {step.type === 'text' && (
                <Text style={styles.stepText}>{step.value}</Text>
              )}
              {step.type === 'image' &&
                step.value.map((img, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={img}
                    style={{ height: 70, width: 70, marginBottom: 10 }}
                  />
                ))}
            </View>
          ))}
        </View>
      ));

      return (
        <Page size='A4' orientation='landscape' key={basicInfo.recipeName}>
          <View style={styles.root}>
            <View style={styles.nameContainer}>
              <View style={styles.authorContainer}>
                <Text style={styles.authorTitleText}>
                  {basicInfo.recipeName}
                </Text>
                <View style={styles.recipeInfoData}>
                  <View>
                    <Text>Time:</Text>
                    <Text> {basicInfo.duration.value}</Text>
                  </View>
                  <View>
                    <Text>Level:</Text>
                    <Text>{basicInfo.level.value}</Text>
                  </View>
                  <View>
                    <Text>Serving:</Text>
                    <Text>{basicInfo.serving.value}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.imageContainer}>
                <Image src={thumbnail} style={styles.authorImage} />
              </View>
            </View>
            <View>{aboutContent}</View>

            {/* ingredients */}
            <View>
              <Text>Ingredients</Text>
              <View
                class='container text-center pt-4 pb-4 ingredientContainer'
                style={{
                  background: '#e7e7e7',
                  paddingTop: 24,
                  paddingBottom: 24,
                  textAlign: 'center',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      flexFlow: 1,
                    }}
                  >
                    <Text
                      style={{
                        marginBottom: 20,
                      }}
                    >
                      Main Ingredients
                    </Text>
                    <View class='list-group list-group-flush'>
                      {directions.ingredients.map(
                        (el) =>
                          el.type === 'main' && (
                            <Text
                            key={el.name}
                              class='list-group-item text-start'
                              style={{
                                padding: 10,
                                border: '1px solid #cecece',
                              }}
                            >
                              {el.name}
                            </Text>
                          )
                      )}
                    </View>
                  </View>
                  <View
                    style={{
                      flexFlow: 1,
                    }}
                  >
                    <Text
                      style={{
                        marginBottom: 20,
                      }}
                    >
                      Dressing
                    </Text>
                    <View class='list-group list-group-flush'>
                      {directions.ingredients.map(
                        (el) =>
                          el.type === 'dressing' && (
                            <Text
                            key={el.name}
                              class='list-group-item text-start'
                              style={{
                                padding: 10,
                                border: '1px solid #cecece',
                              }}
                            >
                              {el.name}
                            </Text>
                          )
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* Directions */}
            <View>
              <Text>Directions</Text>
              <View>{directionsContent}</View>
            </View>

            {/* Nutrition Table */}
            <View
              class='mt-5 mb-5'
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <View>
                <View
                  class='nutrition'
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <View
                    class='nutritionHeader'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '80%',
                      margin: 'auto',
                      padding: '32px',
                      background: '#fee86d',
                    }}
                  >
                    <Text
                      class='text-center'
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      Nutritional Information
                    </Text>
                  </View>
                  <View
                    class='nutritionContainer'
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      background: '#f8f6e6',
                      width: '90%',
                      margin: 'auto',
                    }}
                  >
                    {nutritionalFacts.map((el, index) => {
                      return (
                        <View
                        key={el.name}
                          class='nutritionList'
                          style={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            marginRight: '15px',
                          }}
                        >
                          <Text>
                            {el.amount}
                            {el.unit}
                          </Text>
                          <Text
                            style={{ marginTop: '-2px' }}
                            class='nutrientName'
                          >
                            {el.name}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      );
    });

    // Wait for all recipe pages to be resolved
    const resolvedRecipePages = await Promise.all(recipePagesPromises);

    // Add recipe pages to the pdfPages
    pdfPages.push(...resolvedRecipePages);

    // Set PDF data
    const pdf = <Document>{pdfPages}</Document>;
    setPdfData(pdf);
    
    


    // Convert PDF to blob
    const blob = new Blob([pdf], { type: 'application/pdf' });

    // Convert blob to data URL
    const url = URL.createObjectURL(blob);
    setPdfDataURL(url);

    console.log(url)
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
      {pdfData && (
        <>
          <button onClick={() => setPreview(!preview)}>
            {preview ? 'Hide Preview' : 'Show Preview'}
          </button>
          <PDFDownloadLink document={pdfData} fileName="dynamic_pdf.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download PDF'
            }
          </PDFDownloadLink>
          {/* {preview && (
            <div style={{ width: '100%', height: '500px', marginTop: '20px' }}>
              <PDFViewer style={{ width: '100%', height: '100%' }}>
                <iframe
                  title="preview"
                  src={pdfDataURL} // Use the data URL here
                  style={{ width: '100%', height: '100%' }}
                />
              </PDFViewer>
            </div>
          )} */}
        </>
      )}
    </div>




  );
};

const styles = StyleSheet.create({
  rootPage: {
    padding: 20,
  },
  container: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  frontPageContainer: {
    position: 'relative',
    width: '100%',
    margin: 'auto',
  },
  overlayContainer: {
    padding: 20,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
  frontPageDescription: {
    border: '1px solid white',
    height: '98vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  frontPageTitle: {
    color: 'white',
    fontSize: 24,
  },
  frontPageIntro: {
    width: 500,
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
  },
  authorName: {
    textAlign: 'end',
    fontWeight: 'bolder',
    fontSize: 18,
    color: 'white',
  },

  // About Me Page Styles
  aboutMeContainer: {
    marginTop: 30,
    padding: 5,
  },
  aboutMeTitle: {
    fontSize: 30,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  imageContainer: {
    width: 500,
    height: 350,
    marginRight: 10,
  },
  authorImage: {
    width: '100%',
    height: '100%',
  },
  authorContainer: {
    height: 350,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authorTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  authorSlogan: {
    marginTop: 20,
    maxWidth: 450,
    color: '#666',
    fontSize: 14,
  },
  aboutAuthorContainer: {
    width: '100%',
    marginTop: 16,
  },
  aboutMeText: {
    fontSize: 14,
  },
  aboutMeImage: {
    width: '100%',
    height: 'auto',
  },
});

export default DynamicPDF;
