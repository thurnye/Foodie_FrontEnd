import React, { useState, useRef, useEffect } from "react";
import { Box, Paper, Typography, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { usePDF } from "react-to-pdf";

type PageLayout = "A3-portrait" | "A3-landscape" | "A4-portrait" | "A4-landscape" | "letter-portrait" | "letter-landscape";

// Page dimensions in pixels (at 96 DPI)
const PAGE_DIMENSIONS: Record<PageLayout, { width: number; height: number; maxContentHeight: number }> = {
  "A3-portrait": { width: 1123, height: 1587, maxContentHeight: 1487 },
  "A3-landscape": { width: 1587, height: 1123, maxContentHeight: 1023 },
  "A4-portrait": { width: 794, height: 1123, maxContentHeight: 1050 },
  "A4-landscape": { width: 1123, height: 794, maxContentHeight: 720 },
  "letter-portrait": { width: 816, height: 1056, maxContentHeight: 980 },
  "letter-landscape": { width: 1056, height: 816, maxContentHeight: 740 },
};

export default function NewRustic() {
  const [pages, setPages] = useState<string[]>([""]);
  const [pageLayout, setPageLayout] = useState<PageLayout>("A4-portrait");
  const fullTextRef = useRef<string>(""); // store full text without triggering re-render
  const measureRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const caretPositionRef = useRef<number>(0); // store caret position
  const isUpdatingRef = useRef<boolean>(false); // prevent loops

  const currentDimensions = PAGE_DIMENSIONS[pageLayout];
  const pdfFormat = pageLayout.split("-")[0].toUpperCase() as "A3" | "A4" | "LETTER";
  const pdfOrientation = pageLayout.split("-")[1] as "portrait" | "landscape";

  const { toPDF, targetRef } = usePDF({
    filename: `document-${pageLayout}.pdf`,
    page: { format: pdfFormat, orientation: pdfOrientation },
  });

  // Save caret position relative to the full text
  const saveCaretPosition = () => {
    const selection = window.getSelection();
    if (!selection || !editorRef.current) return;

    try {
      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(editorRef.current);
      preCaretRange.setEnd(range.endContainer, range.endOffset);

      // Calculate position in full text
      const previousPagesText = pages.slice(0, -1).join(" ");
      const offsetFromPreviousPages = previousPagesText ? previousPagesText.length + 1 : 0;
      const caretInLastPage = preCaretRange.toString().length;
      caretPositionRef.current = offsetFromPreviousPages + caretInLastPage;
    } catch (e) {
      // Ignore errors
    }
  };

  // Restore caret position
  const restoreCaretPosition = () => {
    if (!editorRef.current) return;

    const selection = window.getSelection();
    if (!selection) return;

    try {
      // Calculate where caret should be in the last page
      const previousPagesText = pages.slice(0, -1).join(" ");
      const offsetFromPreviousPages = previousPagesText ? previousPagesText.length + 1 : 0;
      let targetPosition = Math.max(0, caretPositionRef.current - offsetFromPreviousPages);

      // Clamp to last page length
      const lastPageText = pages[pages.length - 1] || "";
      targetPosition = Math.min(targetPosition, lastPageText.length);

      // If editor is empty or has no text nodes, we can't restore
      if (!editorRef.current.firstChild) {
        return;
      }

      // Find the text node and offset
      let charCount = 0;
      const findPosition = (node: Node): { node: Node; offset: number } | null => {
        if (node.nodeType === Node.TEXT_NODE) {
          const textLength = node.textContent?.length || 0;
          if (charCount + textLength >= targetPosition) {
            return { node, offset: Math.min(targetPosition - charCount, textLength) };
          }
          charCount += textLength;
        } else {
          for (let i = 0; i < node.childNodes.length; i++) {
            const result = findPosition(node.childNodes[i]);
            if (result) return result;
          }
        }
        return null;
      };

      const position = findPosition(editorRef.current);
      if (position) {
        const range = document.createRange();
        range.setStart(position.node, position.offset);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        // Fallback: place cursor at the end
        const lastChild = editorRef.current.lastChild;
        if (lastChild && lastChild.nodeType === Node.TEXT_NODE) {
          const range = document.createRange();
          const textLength = lastChild.textContent?.length || 0;
          range.setStart(lastChild, Math.min(targetPosition, textLength));
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    } catch (e) {
      console.error("Error restoring caret position:", e);
    }
  };

  const paginate = (text: string) => {
    if (!measureRef.current) return;
    const words = text.split(" ");
    const chunks: string[] = [];
    let current = "";
    const measureDiv = measureRef.current;
    measureDiv.innerHTML = "";

    words.forEach((word) => {
      measureDiv.innerText = current + " " + word;
      if (measureDiv.scrollHeight > currentDimensions.maxContentHeight) {
        chunks.push(current.trim());
        current = word;
        measureDiv.innerText = word;
      } else {
        current += " " + word;
      }
    });

    if (current.trim()) chunks.push(current.trim());
    if (chunks.length === 0) chunks.push("");
    setPages(chunks);
  };

  const handleInput = () => {
    if (!editorRef.current || isUpdatingRef.current) return;

    // Save caret position immediately when user types
    saveCaretPosition();

    // Combine all previous pages' content with current editable content
    const previousPagesText = pages.slice(0, -1).join(" ");
    const currentEditableText = editorRef.current.innerText;
    const fullText = previousPagesText ? previousPagesText + " " + currentEditableText : currentEditableText;

    fullTextRef.current = fullText;
    paginate(fullText);
  };

  // ensure a first blank page
  useEffect(() => {
    paginate("");
  }, []);

  // Re-paginate when page layout changes
  useEffect(() => {
    if (fullTextRef.current) {
      saveCaretPosition();
      paginate(fullTextRef.current);
    }
  }, [pageLayout]);

  // Restore caret position after pages update
  useEffect(() => {
    if (!editorRef.current) return;

    const lastPageContent = pages[pages.length - 1] || "";
    const currentContent = editorRef.current.innerText;

    // Only update content if it actually differs (trim to handle whitespace)
    const contentDiffers = currentContent.trim() !== lastPageContent.trim();

    if (contentDiffers) {
      // Content has changed due to pagination - update it
      isUpdatingRef.current = true;
      editorRef.current.innerText = lastPageContent;

      // Restore caret after content update
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          restoreCaretPosition();
          isUpdatingRef.current = false;
        });
      });
    } else {
      // Content is the same - just restore caret without updating DOM
      isUpdatingRef.current = false;
    }
  }, [pages]);

  return (
    <Box sx={{ p: 4, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Word-Like Editor (Smooth Typing + Pagination)
      </Typography>

      {/* Page Layout Selector */}
      <Box sx={{ maxWidth: "300px", mx: "auto", mb: 3 }}>
        <FormControl fullWidth>
          <InputLabel>Page Layout</InputLabel>
          <Select
            value={pageLayout}
            label="Page Layout"
            onChange={(e) => setPageLayout(e.target.value as PageLayout)}
          >
            <MenuItem value="A4-portrait">A4 - Portrait</MenuItem>
            <MenuItem value="A4-landscape">A4 - Landscape</MenuItem>
            <MenuItem value="A3-portrait">A3 - Portrait</MenuItem>
            <MenuItem value="A3-landscape">A3 - Landscape</MenuItem>
            <MenuItem value="letter-portrait">US Letter - Portrait</MenuItem>
            <MenuItem value="letter-landscape">US Letter - Landscape</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Hidden measurement element */}
      <div
        ref={measureRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          width: `${currentDimensions.width}px`,
          padding: "32px",
          whiteSpace: "pre-wrap",
          lineHeight: 1.5,
        }}
      />

      <Box ref={targetRef}>
        {pages.map((content, i) => (
          <Paper
            key={i}
            sx={{
              width: `${currentDimensions.width}px`,
              height: `${currentDimensions.height}px`,
              mx: "auto",
              mb: 4,
              p: 4,
              bgcolor: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
            elevation={3}
          >
            {/* Editable only on the last visible page */}
            {i === pages.length - 1 ? (
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                onInput={handleInput}
                style={{
                  outline: "none",
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.6,
                  minHeight: "100%",
                  width: "100%",
                  overflowWrap: "break-word",
                }}
              />

            ) : (
              <Box
                // variant="body1"
                sx={{
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.6,
                  userSelect: "none",
                }}
              >
                {content}
              </Box>
            )}
            <Typography
              variant="caption"
              sx={{
                position: "absolute",
                bottom: 8,
                right: 16,
                color: "gray",
              }}
            >
              Page {i + 1}
            </Typography>
          </Paper>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button variant="contained" onClick={() => toPDF()}>
          Download {pdfFormat} PDF ({pdfOrientation})
        </Button>
      </Box>
    </Box>
  );
}
