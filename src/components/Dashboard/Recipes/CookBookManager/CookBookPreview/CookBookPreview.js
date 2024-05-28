import React, { useState } from 'react';
import { Container, Box, Card, CardContent, Typography, Button } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import styles from './CookBookPreview.module.css';
import ProgressiveStepper from './ProgressiveStepper';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CookBookPreview = ({ pdfUrl, handleDownload }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className={styles.CookBookPreview}>
      <Container maxWidth='lg'>
        <Card
          sx={{
            height: { xs: 'initial', lg: '70vh' },
            overflowY: 'auto',
          }}
        >
          <CardContent sx={{ background: '#cecece' }}>
            <Typography gutterBottom variant='h5' component='div'>
              PDF Preview
            </Typography>
            <Button onClick={handleDownload}>Download</Button>
            {numPages && (
              <p>
                Page {pageNumber} of {numPages}
              </p>
            )}
            <Box sx={{ background: 'white' }}>
              {pdfUrl && (
                <Document
                  file={pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className={styles.pdfContainer}
                >
                  <Page
                    pageNumber={pageNumber}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                </Document>
              )}
            </Box>
          </CardContent>
        </Card>
        <Box>
          <ProgressiveStepper
            currentPage={pageNumber}
            totalPage={numPages}
            setPageNumber={setPageNumber}
          />
        </Box>
      </Container>
    </div>
  );
};

export default CookBookPreview;
