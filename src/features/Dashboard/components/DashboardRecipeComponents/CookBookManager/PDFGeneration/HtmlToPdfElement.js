import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import parse, { domToReact } from 'html-react-parser';

const styles = {
  authorDescription: {
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  listItem: {
    marginBottom: 5,
  },
};

const convertHtmlToPdfElements = (data) => {
    const htmlString = String(data)
    if (typeof htmlString !== 'string') {
      throw new Error('First argument must be a string');
    }
    console.log(htmlString)
  
    return parse(htmlString, {
      replace: (domNode) => {
        if (domNode.type === 'tag') {
          switch (domNode.name) {
            case 'div':
              return (
                <View style={styles.authorDescription} key={domNode.name}>
                  {domToReact(domNode.children, { replace: convertHtmlToPdfElements })}
                </View>
              );
            case 'p':
              return (
                <Text style={styles.paragraph} key={domNode.name}>
                  {domToReact(domNode.children, { replace: convertHtmlToPdfElements })}
                </Text>
              );
            case 'h5':
              return (
                <Text style={styles.heading} key={domNode.name}>
                  {domToReact(domNode.children, { replace: convertHtmlToPdfElements })}
                </Text>
              );
            case 'ul':
              return (
                <View key={domNode.name}>
                  {domToReact(domNode.children, { replace: convertHtmlToPdfElements })}
                </View>
              );
            case 'li':
              return (
                <Text style={styles.listItem} key={domNode.name}>
                  {domToReact(domNode.children, { replace: convertHtmlToPdfElements })}
                </Text>
              );
            default:
              return <Text style={styles.listItem} key={domNode.name}>
                {domToReact(domNode.children, { replace: convertHtmlToPdfElements })}
              </Text>;
          }
        } else if (domNode.type === 'text') {
          return domNode.data;
        }
      },
    });
  };
  
  

export default convertHtmlToPdfElements;
