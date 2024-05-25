import React from 'react';
import styles from './CookBookPreview.module.css';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { useState } from 'react';
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const CookBookPreview = ({ pdf }) => {
  const handleError = (error) => {
    console.error('Error loading PDF:', error);
  };
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState();
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={styles.CookBookPreview}>
      <Container maxWidth='lg'>
        <Card
          sx={{
            height: { xs: 'initial', lg: '70vh' },
            overflowY: 'auto',
          }}
        >
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              PDF Preview
            </Typography>
            {numPages && (
              <p>
                Page {pageNumber} of {numPages}
              </p>
            )}
            {pdf && (
              <Document
                file={pdf}
                onLoadError={handleError}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false}/>
              </Document>
            )}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default CookBookPreview;
