import React, { useState } from 'react';
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import styles from './CookBookPreview.module.css';
import ProgressiveStepper from './ProgressiveStepper';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CookBookPreview = ({ pdfUrl, handleDownload, loading, error }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className={styles.CookBookPreview}>
      <Container maxWidth='lg'>
        <Card>
          <CardContent sx={{ background: '#cecece' }}>
            <Typography gutterBottom variant='h5' component='div'>
              Cook Book Preview
            </Typography>
            <Box
              sx={{
                display: pdfUrl ? 'flex' : 'none',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {numPages && (
                <Typography>
                  Page {pageNumber} of {numPages}
                </Typography>
              )}
              <Box sx={{ flexGrow: 1 }}>
                <ProgressiveStepper
                  currentPage={pageNumber}
                  totalPage={numPages}
                  setPageNumber={setPageNumber}
                />
              </Box>
              <Button onClick={handleDownload}>Download</Button>
            </Box>
            <Box sx={{width: '100%', overflowX: 'auto'}}>
              <Box
                sx={{
                  background: 'white',
                  height: { xs: pdfUrl ? 'initial' : '89vh', md: '59vh' },
                  width: { xs: pdfUrl ? '180vw' : 'initial', md: 'initial' },
                  overflowY: 'auto',
                }}
              >
                {pdfUrl ? (
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
                ) : (
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: { xs: '89vh', md: '59vh' },
                    }}
                  >
                    <Box color='text.secondary'>
                      {loading ? (
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}
                        >
                          <CircularProgress />
                          <Typography
                            gutterBottom
                            variant='body1'
                            component='div'
                            color='text.secondary'
                            sx={{mt: 1}}
                          >
                            Generating Book...
                          </Typography>
                        </Box>
                      ) : error ? (
                        <Typography
                            gutterBottom
                            variant='body1'
                            component='div'
                            color='error'
                          >
                            {error}
                          </Typography>
                      ) : (
                        <Typography
                          gutterBottom
                          variant='body1'
                          component='div'
                          color='text.secondary'
                        >
                          No pdf to preview
                        </Typography>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default CookBookPreview;
